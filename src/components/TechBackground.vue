<template>
  <div class="tech-bg">
    <canvas ref="canvasEl"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useTheme } from '../composables/useTheme';

const { isDark } = useTheme();
const canvasEl = ref(null);
let ctx = null;
let animationFrameId = null;

let particles = [];
const particleCount = 60; // Optimal density for performance
const maxDistance = 140; // Max distance to form a polygon connection

// Theme-aware colors
const getThemeColors = () => {
  return isDark.value
    ? {
        particle: 'rgba(0, 212, 255, 0.6)',
        line: 'rgba(0, 212, 255, 0.1)',
        polygon: 'rgba(0, 212, 255, 0.05)'
      }
    : {
        particle: 'rgba(37, 99, 235, 0.6)',
        line: 'rgba(37, 99, 235, 0.1)',
        polygon: 'rgba(37, 99, 235, 0.05)'
      };
};

let colors = getThemeColors();

watch(isDark, () => {
  colors = getThemeColors();
});

class Particle {
  constructor(w, h) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * 1.2;
    this.vy = (Math.random() - 0.5) * 1.2;
    this.radius = Math.random() * 1.5 + 1;
  }
  update(w, h) {
    this.x += this.vx;
    this.y += this.vy;
    
    // Bounce off edges smoothly
    if (this.x < 0 || this.x > w) this.vx *= -1;
    if (this.y < 0 || this.y > h) this.vy *= -1;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = colors.particle;
    ctx.fill();
  }
}

const resizeCanvas = () => {
  if (canvasEl.value) {
    canvasEl.value.width = window.innerWidth;
    canvasEl.value.height = window.innerHeight;
  }
};

const animate = () => {
  if (!canvasEl.value || !ctx) return;
  const w = canvasEl.value.width;
  const h = canvasEl.value.height;
  
  ctx.clearRect(0, 0, w, h);
  
  // Update particles
  particles.forEach(p => p.update(w, h));
  
  // Draw polygons and lines
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < maxDistance) {
        // Calculate opacity based on distance
        const opacity = 1 - (dist / maxDistance);
        
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = colors.line.replace('0.1)', `${0.1 * opacity})`);
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }
  
  // Draw points on top of lines
  particles.forEach(p => p.draw(ctx));
  
  animationFrameId = requestAnimationFrame(animate);
};

onMounted(() => {
  ctx = canvasEl.value.getContext('2d');
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  const w = canvasEl.value.width;
  const h = canvasEl.value.height;
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle(w, h));
  }
  
  animate();
});

onUnmounted(() => {
  window.removeEventListener('resize', resizeCanvas);
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
});
</script>

<style scoped>
.tech-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
