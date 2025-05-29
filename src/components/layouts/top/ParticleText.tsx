"use client";

import React, { useEffect, useRef, useState } from "react";
import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";

// GSAPプラグイン登録
if (typeof window !== "undefined") {
  gsap.registerPlugin(PixiPlugin);
  PixiPlugin.registerPIXI(PIXI);
}

export const TopPage = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const appRef = useRef<PIXI.Application | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !canvasRef.current) return;

    let isDestroyed = false;

    const initPixi = () => {
      try {
        /* ---------- Pixi.js 初期化 ---------- */
        const options = {
          view: canvasRef.current!,
          antialias: true,
          backgroundColor: 0x000000,
          backgroundAlpha: 0,
          resizeTo: window,
          resolution: window.devicePixelRatio || 1,
          autoDensity: true,
        };

        const app = new PIXI.Application(options);
        appRef.current = app;

        if (isDestroyed) return;

        /* ---------- 粒子化したいテキストをビットマップ化 ---------- */
        const TEXT = "Kazuki Jo".toUpperCase();
        const fontSize = Math.min(window.innerWidth * 0.12, 200); // レスポンシブ対応
        const gap = Math.max(4, Math.floor(fontSize * 0.03)); // 粒子間隔

        // オフスクリーン Canvas に文字を描画
        const cvs = document.createElement("canvas");
        const ctx = cvs.getContext("2d")!;
        ctx.font = `bold ${fontSize}px "Helvetica Neue", Arial, sans-serif`;
        const textMetrics = ctx.measureText(TEXT);
        const textWidth = textMetrics.width;
        const textHeight = fontSize;

        cvs.width = textWidth;
        cvs.height = textHeight;

        // 再度フォント設定（canvas サイズ変更後）
        ctx.font = `bold ${fontSize}px "Helvetica Neue", Arial, sans-serif`;
        ctx.fillStyle = "#ffffff";
        ctx.textBaseline = "top";
        ctx.textAlign = "left";
        ctx.fillText(TEXT, 0, 0);

        // 描いた文字のピクセルを走査して「文字部分だけ」座標を取得
        const pixels = ctx.getImageData(0, 0, cvs.width, cvs.height).data;
        const positions: { x: number; y: number }[] = [];

        for (let y = 0; y < cvs.height; y += gap) {
          for (let x = 0; x < cvs.width; x += gap) {
            const index = (y * cvs.width + x) * 4;
            if (pixels[index + 3] > 128) {
              // アルファ値が128以上
              positions.push({ x, y });
            }
          }
        }

        /* ---------- 粒子スプライト生成 ---------- */
        const container = new PIXI.Container();
        app.stage.addChild(container);

        // 1 粒子用に白丸テクスチャを作成（generateTexture の代替案）
        const createDotTexture = () => {
          const graphics = new PIXI.Graphics();

          try {
            // 方法2: RenderTextureを使用（フォールバック）
            const renderTexture = PIXI.RenderTexture.create({
              width: gap,
              height: gap,
            });

            graphics.position.set(gap / 2, gap / 2);
            app.renderer.render(graphics, { renderTexture });
            return renderTexture;
          } catch (error) {
            console.warn("RenderTexture fallback failed:", error);
          }

          // 方法3: 最終フォールバック - 小さな白い四角
          const fallbackGraphics = new PIXI.Graphics();

          const fallbackTexture = PIXI.RenderTexture.create({
            width: 2,
            height: 2,
          });
          fallbackGraphics.position.set(1, 1);
          app.renderer.render(fallbackGraphics, {
            renderTexture: fallbackTexture,
          });
          return fallbackTexture;
        };

        const dotTexture = createDotTexture();

        // 中央位置計算
        const centerX = (app.renderer.width - textWidth) / 2;
        const centerY = (app.renderer.height - textHeight) / 2;

        // 各粒子をアニメーション
        positions.forEach(({ x, y }, index) => {
          if (isDestroyed) return;

          const sprite = new PIXI.Sprite(dotTexture);

          // 目標位置
          const targetX = centerX + x;
          const targetY = centerY + y;

          // 開始位置（画面中央）
          const startX = app.renderer.width / 2;
          const startY = app.renderer.height / 2;

          sprite.position.set(startX, startY);
          sprite.alpha = 0;
          sprite.anchor.set(0.5);

          container.addChild(sprite);

          // 収束アニメーション
          const delay = Math.random() * 0.6;
          const duration = 1.5 + Math.random() * 0.5;

          gsap.to(sprite, {
            duration: duration,
            x: targetX,
            y: targetY,
            alpha: 0.8 + Math.random() * 0.2,
            ease: "power3.out",
            delay: delay,
          });

          // スケールアニメーション
          gsap.fromTo(
            sprite.scale,
            { x: 0, y: 0 },
            {
              duration: duration,
              x: 0.8 + Math.random() * 0.4,
              y: 0.8 + Math.random() * 0.4,
              ease: "power3.out",
              delay: delay,
            }
          );
        });

        // 四散アニメーション
        const scatter = () => {
          if (isDestroyed) return;

          container.children.forEach((sprite) => {
            const angle = Math.random() * Math.PI * 2;
            const distance = 300 + Math.random() * 500;
            const targetX = sprite.x + Math.cos(angle) * distance;
            const targetY = sprite.y + Math.sin(angle) * distance;

            gsap.to(sprite, {
              duration: 1.8,
              x: targetX,
              y: targetY,
              alpha: 0,
              ease: "power2.in",
              delay: Math.random() * 0.4,
            });

            gsap.to(sprite.scale, {
              duration: 1.8,
              x: 0,
              y: 0,
              ease: "power2.in",
              delay: Math.random() * 0.4,
            });
          });
        };

        const scatterTimer = setTimeout(scatter, 3500);

        // リサイズ対応
        const handleResize = () => {
          if (!isDestroyed && app && app.renderer) {
            app.renderer.resize(window.innerWidth, window.innerHeight);
          }
        };

        window.addEventListener("resize", handleResize);

        // クリーンアップ関数
        return () => {
          clearTimeout(scatterTimer);
          window.removeEventListener("resize", handleResize);
          if (!isDestroyed) {
            app.destroy(true, { children: true, texture: true });
          }
        };
      } catch (error) {
        console.error("PIXI initialization failed:", error);
      }
    };

    const timer = setTimeout(initPixi, 100);

    return () => {
      isDestroyed = true;
      clearTimeout(timer);
      if (appRef.current) {
        appRef.current.destroy(true, { children: true, texture: true });
        appRef.current = null;
      }
    };
  }, [isClient]);

  if (!isClient) {
    return (
      <div className="relative flex flex-col justify-center items-center w-full h-screen bg-black overflow-hidden">
        <p className="text-2xl mb-2 text-gray-100 z-10">Hello. My name is</p>
        <p className="text-[12vmin] font-bold text-gray-100 z-10">Kazuki Jo</p>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col justify-center items-center w-full h-screen bg-black overflow-hidden">
      <p className="text-2xl mb-2 text-gray-100 z-10">Hello. My name is</p>

      {/* 粒子文字を描画する Canvas。pointer-events 無効で UI を邪魔しない */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 m-auto pointer-events-none"
        style={{ zIndex: 5 }}
      />
    </div>
  );
};
