// Fondo de partículas
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3,
    speedY: Math.random() + 0.5
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = "#00aaff";
    ctx.fill();
    p.y += p.speedY;
    if (p.y > canvas.height) p.y = 0;
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// Destello al hacer clic
function destello(element) {
  element.style.boxShadow = "0 0 20px #00aaff";
  setTimeout(() => {
    element.style.boxShadow = "none";
  }, 500);
}
