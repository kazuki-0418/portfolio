"use client";

import React, { useEffect, useRef, useState } from "react";
import * as PIXI from "pixi.js";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";

// クライアントサイドでのみプラグイン登録
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

    const run = async () => {
      try {
        /* ---------- Pixi.js 初期化 ---------- */
        const app = new PIXI.Application();

        // v8の場合の初期化
        await app.init({
          canvas: canvasRef.current!,
          antialias: true,
          backgroundColor: 0x000000,
          backgroundAlpha: 0,
          resizeTo: window,
          resolution: window.devicePixelRatio || 1,
          autoDensity: true,
        });

        if (isDestroyed) return;
        appRef.current = app;

        /* ---------- 粒子化したいテキストをビットマップ化 ---------- */
        const TEXT = "Kazuki Jo".toUpperCase();
        const fontSize = Math.min(window.innerWidth * 0.12, 200);
        const gap = 4;

        // オフスクリーン Canvas に文字を描画
        const cvs = document.createElement("canvas");
        const ctx = cvs.getContext("2d")!;
        ctx.font = `bold ${fontSize}px "Helvetica Neue", Arial, sans-serif`;
        const textMetrics = ctx.measureText(TEXT);
        const textWidth = textMetrics.width;
        const textHeight = fontSize;

        cvs.width = textWidth;
        cvs.height = textHeight;

        // キャンバスサイズ変更後、再度フォント設定
        ctx.font = `bold ${fontSize}px "Helvetica Neue", Arial, sans-serif`;
        ctx.fillStyle = "#ffffff";
        ctx.textBaseline = "top";
        ctx.textAlign = "left";
        ctx.fillText(TEXT, 0, 0);

        // ピクセルデータ取得
        const pixels = ctx.getImageData(0, 0, cvs.width, cvs.height).data;
        const positions: { x: number; y: number }[] = [];

        for (let y = 0; y < cvs.height; y += gap) {
          for (let x = 0; x < cvs.width; x += gap) {
            const index = (y * cvs.width + x) * 4;
            if (pixels[index + 3] > 128) {
              positions.push({ x, y });
            }
          }
        }

        /* ---------- 粒子用テクスチャ作成 ---------- */
        // 白い円のグラフィックスを作成
        const graphics = new PIXI.Graphics();
        graphics.circle(gap / 2, gap / 2, gap / 3);
        graphics.fill(0xffffff);

        // RenderTextureを作成してグラフィックスを描画
        const renderTexture = PIXI.RenderTexture.create({
          width: gap,
          height: gap,
        });

        app.renderer.render({
          container: graphics,
          target: renderTexture,
        });

        /* ---------- 粒子スプライト生成 ---------- */
        const container = new PIXI.Container();
        app.stage.addChild(container);

        const centerX = (app.screen.width - textWidth) / 2;
        const centerY = (app.screen.height - textHeight) / 2;

        positions.forEach(({ x, y }, index) => {
          if (isDestroyed) return;

          const sprite = new PIXI.Sprite(renderTexture);

          // 目標位置
          const targetX = centerX + x;
          const targetY = centerY + y;

          // 初期位置（画面中央）
          const startX = app.screen.width / 2;
          const startY = app.screen.height / 2;

          sprite.position.set(startX, startY);
          sprite.alpha = 0;
          sprite.anchor.set(0.5);

          container.addChild(sprite);

          // 収束アニメーション
          const delay = Math.random() * 0.8;

          gsap.to(sprite, {
            duration: 1.5,
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
              duration: 1.5,
              x: 0.8 + Math.random() * 0.4,
              y: 0.8 + Math.random() * 0.4,
              ease: "back.out(1.7)",
              delay: delay,
            }
          );
        });

        // リサイズ対応
        const handleResize = () => {
          if (!isDestroyed && app) {
            app.renderer.resize(window.innerWidth, window.innerHeight);
          }
        };

        window.addEventListener("resize", handleResize);

        // クリーンアップ
        return () => {
          window.removeEventListener("resize", handleResize);
          if (!isDestroyed && app) {
            app.destroy(true, { children: true, texture: true });
          }
        };
      } catch (error) {
        console.error("PIXI.js initialization failed:", error);
      }
    };

    const timer = setTimeout(() => {
      run().catch(console.error);
    }, 100);

    return () => {
      isDestroyed = true;
      clearTimeout(timer);
      if (appRef.current) {
        appRef.current.destroy(true, { children: true, texture: true });
        appRef.current = null;
      }
    };
  }, [isClient]);

  // クライアントサイドでない場合のフォールバック
  if (!isClient) {
    return (
      <div className="relative flex flex-col justify-center items-center w-full h-screen bg-black overflow-hidden">
        <p className="text-2xl mb-2 text-gray-100 z-10 mb-64 ">
          Hello. My name is
        </p>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col justify-center items-center w-full h-screen overflow-hidden">
      <p className="text-2xl mb-2 text-gray-100 z-10 mb-64 ">
        Hello. My name is
      </p>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 m-auto pointer-events-none"
        style={{ zIndex: 5 }}
      />
    </div>
  );
};
