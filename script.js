const canvas = document.querySelector("#signalCanvas");
const ctx = canvas.getContext("2d");

const resizeCanvas = () => {
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.floor(rect.width * ratio));
  canvas.height = Math.max(1, Math.floor(rect.height * ratio));
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
};

const nodes = [
  { x: 0.2, y: 0.26, r: 7, color: "#0e9f91" },
  { x: 0.42, y: 0.18, r: 10, color: "#ff6b57" },
  { x: 0.66, y: 0.28, r: 8, color: "#f3c74f" },
  { x: 0.32, y: 0.52, r: 11, color: "#142022" },
  { x: 0.58, y: 0.58, r: 7, color: "#0e9f91" },
  { x: 0.76, y: 0.48, r: 9, color: "#b9de59" },
  { x: 0.47, y: 0.78, r: 8, color: "#ff6b57" },
];

const connections = [
  [0, 1],
  [1, 2],
  [0, 3],
  [1, 3],
  [2, 5],
  [3, 4],
  [4, 5],
  [3, 6],
  [4, 6],
];

let frame = 0;

const draw = () => {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const size = Math.min(width, height);
  const centerX = width / 2;
  const centerY = height / 2;

  ctx.clearRect(0, 0, width, height);

  const halo = ctx.createRadialGradient(centerX, centerY, size * 0.05, centerX, centerY, size * 0.48);
  halo.addColorStop(0, "rgba(14, 159, 145, 0.25)");
  halo.addColorStop(0.58, "rgba(243, 199, 79, 0.12)");
  halo.addColorStop(1, "rgba(255, 255, 255, 0)");
  ctx.fillStyle = halo;
  ctx.beginPath();
  ctx.arc(centerX, centerY, size * 0.48, 0, Math.PI * 2);
  ctx.fill();

  const plotted = nodes.map((node, index) => {
    const pulse = Math.sin(frame * 0.018 + index * 1.2);
    return {
      ...node,
      px: centerX + (node.x - 0.5) * size * 0.95 + pulse * 8,
      py: centerY + (node.y - 0.5) * size * 0.95 + Math.cos(frame * 0.014 + index) * 7,
    };
  });

  ctx.lineWidth = 2;
  connections.forEach(([from, to], index) => {
    const a = plotted[from];
    const b = plotted[to];
    const dash = (Math.sin(frame * 0.03 + index) + 1) / 2;
    ctx.strokeStyle = `rgba(20, 32, 34, ${0.16 + dash * 0.28})`;
    ctx.beginPath();
    ctx.moveTo(a.px, a.py);
    ctx.bezierCurveTo(
      (a.px + b.px) / 2,
      a.py - size * 0.08,
      (a.px + b.px) / 2,
      b.py + size * 0.08,
      b.px,
      b.py,
    );
    ctx.stroke();
  });

  plotted.forEach((node, index) => {
    const pulse = (Math.sin(frame * 0.04 + index) + 1) / 2;
    ctx.fillStyle = "rgba(255, 255, 255, 0.86)";
    ctx.beginPath();
    ctx.arc(node.px, node.py, node.r * (3.6 + pulse), 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = node.color;
    ctx.beginPath();
    ctx.arc(node.px, node.py, node.r + pulse * 2, 0, Math.PI * 2);
    ctx.fill();
  });

  frame += 1;
  requestAnimationFrame(draw);
};

resizeCanvas();
draw();
window.addEventListener("resize", resizeCanvas);
