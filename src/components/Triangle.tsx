import { useMemo } from "react";
import "./styles/Triangle.css";

const TOTAL = 200;
const TIME = 10;

const COLORS = [
  "#7f40ff",
  "#aa42ff",
  "#a87cff",
  "#c481ff",
  "#d29bff",
  "#e6c3ff",
  "#fb8dff",
  "#5400ff",
  "#8b5cf6",
  "#a78bfa",
];

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickColor() {
  return COLORS[random(0, COLORS.length - 1)];
}

const Triangle = () => {
  const { triangles, keyframes } = useMemo(() => {
    const triangles = Array.from({ length: TOTAL }, (_, i) => {
      const size = random(1, 50);
      const color = pickColor();
      const delay = -(i * (TIME / TOTAL));
      const opacity = Math.random() * 0.15 + 0.05;

      return {
        id: i,
        style: {
          height: 0,
          width: 0,
          position: "absolute" as const,
          top: "50%",
          left: "50%",
          borderTop: `${size}px solid ${color}`,
          borderRight: `${size}px solid transparent`,
          borderLeft: `${size}px solid transparent`,
          marginLeft: `-${size / 2}px`,
          marginTop: `-${size / 2}px`,
          opacity,
          animation: `triangle-fly${i} ${TIME}s infinite linear`,
          animationDelay: `${delay}s`,
        } as React.CSSProperties,
      };
    });

    const keyframes = Array.from({ length: TOTAL }, (_, i) => {
      const rotate = random(0, 359);
      const animX = random(0, 1000);
      const animY = random(0, 1000);
      const color = pickColor();
      return `@keyframes triangle-fly${i} {
        0% {
          border-top-color: ${color};
          transform: rotate(${rotate}deg) translate3d(0, 0, -1500px) scale(0);
        }
        100% {
          border-top-color: ${color};
          transform: rotate(${rotate * 1.5}deg) translate3d(${animX}px, ${animY}px, 1000px) scale(1);
        }
      }`;
    }).join("\n");

    return { triangles, keyframes };
  }, []);

  return (
    <div className="triangle-wrap">
      <style>{keyframes}</style>
      {triangles.map((t) => (
        <div key={t.id} className="tri" style={t.style} />
      ))}
    </div>
  );
};

export default Triangle;
