"use client";
import React, { useEffect, useRef, useState } from "react";

type FluidShapeProps = {
  random: number;
};

export const FluidShape: React.FC<FluidShapeProps> = ({ random }) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const fluidShape = canvasRef.current;
    const container = fluidShape?.parentElement;
    if (!fluidShape || !container) return;

    let mouseX = container.offsetWidth / 2;
    let mouseY = container.offsetHeight / 2;
    let shapeX = mouseX;
    let shapeY = mouseY;
    let time = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    container.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      let distX = mouseX - shapeX;
      let distY = mouseY - shapeY;

      shapeX += distX * 0.05;
      shapeY += distY * random;

      time += random;
      let wobbleX = Math.sin(time) * 20;
      let wobbleY = Math.cos(time * 0.8) * 20;

      setPosition({ x: shapeX + wobbleX, y: shapeY + wobbleY });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={canvasRef}
      className="absolute w-[360px] h-[360px] border opacity-80 border-black rounded-full bg-opacity-70 pointer-events-none z-20"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${
          1 + Math.sin(Date.now() * 0.003) * 0.2
        })`,
      }}
    />
  );
};
