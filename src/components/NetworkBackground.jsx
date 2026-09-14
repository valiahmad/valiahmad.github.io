import { useEffect, useRef } from "react";

export default function NetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrame;
    let nodes = [];

    const mouse = {
      x: null,
      y: null,
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createNodes();
    };

    const createNodes = () => {
      const area = window.innerWidth * window.innerHeight;

      const count = Math.max(
        28,
        Math.min(75, Math.floor(area / 18000))
      );

      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,

        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,

        radius: Math.random() * 1.5 + 0.5,
      }));
    };

    const drawGrid = () => {
      const spacing = 70;

      ctx.beginPath();

      for (let x = 0; x < window.innerWidth; x += spacing) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, window.innerHeight);
      }

      for (let y = 0; y < window.innerHeight; y += spacing) {
        ctx.moveTo(0, y);
        ctx.lineTo(window.innerWidth, y);
      }

      ctx.strokeStyle = "rgba(255, 255, 255, 0.025)";
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const drawNodes = () => {
      const connectionDistance = 150;

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < -20 || node.x > window.innerWidth + 20) {
          node.vx *= -1;
        }

        if (node.y < -20 || node.y > window.innerHeight + 20) {
          node.vy *= -1;
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);

        ctx.fillStyle = "rgba(90, 200, 250, 0.45)";
        ctx.fill();

        nodes.forEach((other) => {
          if (node === other) return;

          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity =
              (1 - distance / connectionDistance) * 0.13;

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);

            ctx.strokeStyle = `rgba(90, 200, 250, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
    };

    const drawMouseInteraction = () => {
      if (mouse.x === null || mouse.y === null) return;

      nodes.forEach((node) => {
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 180) {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);

          const opacity = (1 - distance / 180) * 0.2;

          ctx.strokeStyle = `rgba(90, 200, 250, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
    };

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );

      drawGrid();
      drawNodes();
      drawMouseInteraction();

      animationFrame = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    resize();
    animate();

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="network-background"
      aria-hidden="true"
    />
  );
}