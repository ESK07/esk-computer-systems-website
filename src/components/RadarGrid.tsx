import { useEffect, useRef } from "react";

const RadarGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let angle = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
    };
    resize();
    window.addEventListener("resize", resize);

    const nodes = Array.from({ length: 20 }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      r: 2 + Math.random() * 3,
      pulse: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Grid
      ctx.strokeStyle = "rgba(59, 130, 246, 0.04)";
      ctx.lineWidth = 0.5;
      const gridSize = 60;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Radar sweep
      const cx = w / 2;
      const cy = h / 2;
      const maxR = Math.max(w, h);
      const gradient = ctx.createConicGradient(angle, cx, cy);
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.08)");
      gradient.addColorStop(0.1, "rgba(59, 130, 246, 0)");
      gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      // Nodes
      const time = Date.now() / 1000;
      nodes.forEach((node) => {
        const pulseScale = 1 + 0.3 * Math.sin(time * 2 + node.pulse);
        const sweepAngle = Math.atan2(node.y - cy, node.x - cx);
        let diff = ((angle - sweepAngle + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
        if (diff < 0) diff += Math.PI * 2;
        const brightness = diff < 0.5 ? 1 : 0.3;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r * pulseScale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${brightness * 0.6})`;
        ctx.fill();

        if (brightness > 0.5) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.r * pulseScale * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(59, 130, 246, ${brightness * 0.1})`;
          ctx.fill();
        }
      });

      angle += 0.008;
      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.7 }}
    />
  );
};

export default RadarGrid;
