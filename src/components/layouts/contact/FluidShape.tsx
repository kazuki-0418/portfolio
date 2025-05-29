"use client";
import React, { useEffect, useRef, useState } from "react";

type FluidShapeProps = {
  random: number;
};

export const FluidShape: React.FC<FluidShapeProps> = ({ random }) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const shapeRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

  useEffect(() => {
    const fluidShape = canvasRef.current;
    if (!fluidShape) return;

    // コンテナを取得（親要素またはウィンドウ全体）
    const container = fluidShape.closest("[data-container]") || document.body;

    // 初期位置を設定
    const initializePosition = () => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      mouseRef.current = { x: centerX, y: centerY };
      shapeRef.current = { x: centerX, y: centerY };
      setPosition({ x: centerX, y: centerY });
    };

    // 少し遅延して初期化（DOMが完全に準備されるのを待つ）
    const initTimer = setTimeout(initializePosition, 100);

    const handleMouseMove = (e: MouseEvent) => {
      if (container === document.body) {
        // document.body の場合はウィンドウ座標をそのまま使用
        mouseRef.current.x = e.clientX;
        mouseRef.current.y = e.clientY;
      } else {
        // 特定のコンテナ内での相対座標
        const rect = container.getBoundingClientRect();
        mouseRef.current.x = e.clientX - rect.left;
        mouseRef.current.y = e.clientY - rect.top;
      }
    };

    // マウスイベントをdocumentに追加（より確実にキャッチ）
    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      const { x: mouseX, y: mouseY } = mouseRef.current;
      const { x: shapeX, y: shapeY } = shapeRef.current;

      // マウスに向かって移動（イージング）
      const distX = mouseX - shapeX;
      const distY = mouseY - shapeY;

      const easing = 0.8;
      shapeRef.current.x += distX * easing;
      shapeRef.current.y += distY * (random * 0.1 + 0.01); // randomの影響を調整

      // 時間ベースのゆらぎ
      timeRef.current += random * 0.02 + 0.01;
      const wobbleX = Math.sin(timeRef.current) * 15;
      const wobbleY = Math.cos(timeRef.current * 0.8) * 15;

      // 最終位置を設定
      setPosition({
        x: shapeRef.current.x + wobbleX,
        y: shapeRef.current.y + wobbleY,
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // アニメーション開始
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      clearTimeout(initTimer);
      document.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [random]);

  return (
    <div
      ref={canvasRef}
      className="absolute w-[360px] h-[360px] border opacity-80 border-black rounded-full bg-opacity-70 pointer-events-none z-20"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${
          1 + Math.sin(Date.now() * 0.003 + random * 10) * 0.1
        })`,
      }}
    />
  );
};
