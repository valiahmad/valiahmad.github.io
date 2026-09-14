import { useEffect, useRef } from 'react';

export default function NetworkBackground() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0, last = 0, nodes = [];
    const mouse = { x: null, y: null };
    function draw(time = 0) {
      const width = window.innerWidth, height = window.innerHeight;
      const step = motion.matches ? 0 : Math.min((time - last) / 16.67 || 1, 2);
      last = time;
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = 'rgba(255,255,255,.025)';
      ctx.beginPath();
      for (let x = 0; x < width; x += 70) { ctx.moveTo(x, 0); ctx.lineTo(x, height); }
      for (let y = 0; y < height; y += 70) { ctx.moveTo(0, y); ctx.lineTo(width, y); }
      ctx.stroke();
      nodes.forEach((node, index) => {
        node.x += node.vx * step; node.y += node.vy * step;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
        ctx.beginPath(); ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(90,200,250,.5)'; ctx.fill();
        for (let j = index + 1; j < nodes.length; j++) {
          const other = nodes[j], distance = Math.hypot(node.x - other.x, node.y - other.y);
          if (distance < 150) line(node, other, (1 - distance / 150) * .22);
        }
        if (mouse.x !== null && !motion.matches) {
          const distance = Math.hypot(node.x - mouse.x, node.y - mouse.y);
          if (distance < 180) line(node, mouse, (1 - distance / 180) * .25);
        }
      });
      if (!motion.matches && !document.hidden) frame = requestAnimationFrame(draw);
    }
    function line(a, b, opacity) {
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = `rgba(90,200,250,${opacity})`; ctx.stroke();
    }
    function restart() { cancelAnimationFrame(frame); last = 0; draw(); }
    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr; canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(20, Math.min(65, Math.floor(window.innerWidth * window.innerHeight / 18000)));
      nodes = Array.from({ length: count }, () => ({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, vx: (Math.random() - .5) * .18, vy: (Math.random() - .5) * .18, radius: Math.random() * 1.5 + .5 }));
      restart();
    }
    function move(e) { mouse.x = e.clientX; mouse.y = e.clientY; }
    function leave() { mouse.x = null; mouse.y = null; }
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', move);
    document.documentElement.addEventListener('mouseleave', leave);
    document.addEventListener('visibilitychange', restart);
    motion.addEventListener('change', restart);
    resize();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', move);
      document.documentElement.removeEventListener('mouseleave', leave);
      document.removeEventListener('visibilitychange', restart);
      motion.removeEventListener('change', restart);
    };
  }, []);
  return <canvas ref={canvasRef} className="network-background" aria-hidden="true" />;
}
