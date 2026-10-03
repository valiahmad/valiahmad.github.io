import { useEffect, useRef } from 'react';

// Decorative only. Motion follows the visitor's preference and pauses in hidden tabs.
export default function NetworkBackground({ paused, theme }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let frame, points = [], last = 0;
    function draw(now = 0) {
      const width = innerWidth, height = innerHeight;
      const step = paused || reduced.matches ? 0 : Math.min((now-last)/16.67 || 1,2);
      last = now;
      ctx.clearRect(0,0,width,height);
      const color = theme === 'dark' ? '121,173,255' : '36,101,207';
      for (let i=0;i<points.length;i++) {
        const p=points[i]; p.x+=p.dx*step;p.y+=p.dy*step;
        if(p.x<0||p.x>width)p.dx*=-1;if(p.y<0||p.y>height)p.dy*=-1;
        ctx.fillStyle=`rgba(${color},.20)`;ctx.beginPath();ctx.arc(p.x,p.y,1.4,0,Math.PI*2);ctx.fill();
        for(let j=i+1;j<points.length;j++) {
          const q=points[j],dist=Math.hypot(p.x-q.x,p.y-q.y);
          if(dist<180){ctx.strokeStyle=`rgba(${color},${.055*(1-dist/180)})`;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke();}
        }
      }
      if(!paused&&!reduced.matches&&!document.hidden)frame=requestAnimationFrame(draw);
    }
    function restart(){cancelAnimationFrame(frame);last=0;draw();}
    function resize(){const dpr=Math.min(devicePixelRatio||1,2);canvas.width=innerWidth*dpr;canvas.height=innerHeight*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);points=Array.from({length:Math.min(45,Math.max(15,Math.floor(innerWidth*innerHeight/27000)))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,dx:(Math.random()-.5)*.13,dy:(Math.random()-.5)*.13}));restart();}
    resize();window.addEventListener('resize',resize);document.addEventListener('visibilitychange',restart);reduced.addEventListener('change',restart);
    return()=>{cancelAnimationFrame(frame);window.removeEventListener('resize',resize);document.removeEventListener('visibilitychange',restart);reduced.removeEventListener('change',restart);};
  },[paused,theme]);
  return <canvas ref={canvasRef} className="network-background" aria-hidden="true" />;
}
