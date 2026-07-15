<template>
  <div class="transition-overlay" :class="{ 'is-hidden': isLoaded }">
    <div class="overlay-layer layer-1"></div>
    <div class="overlay-layer layer-2"></div>
    <div class="overlay-layer layer-3">
      <h2 class="overlay-text">CHOUN SATYA</h2>
    </div>
  </div>
  <section class="hero">
    <div class="orb orb-1"></div>

    <div class="container">
      <div class="row">

        <!-- Left Content -->
        <div class="left">
          <div class="badge" data-aos="fade-down" data-aos-delay="100">Available for Work</div>

          <h1>Hi, I'm </h1>
          <h1><span class="name">Choun Satya</span></h1>
          <p class="subtitle">Full Stack Developer</p>
          <p class="desc">
            I build modern, scalable web applications with clean UI and powerful backend systems.
          </p>

          <div class="btns">
            <a href="#portfolio" class="btn btn-primary" @click.prevent="scrollToSection('portfolio')">
              <svg class="icon" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-.293.707L13 10.414V17a1 1 0 01-1.447.894l-4-2A1 1 0 017 15v-4.586L3.293 6.707A1 1 0 013 6V4z"/>
              </svg>
              View Projects
            </a>
            <a href="/Choun Satya CV.pdf" download class="btn btn-outline">
              <svg class="icon" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 3a1 1 0 011 1v7.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 11.586V4a1 1 0 011-1z"/>
                <path d="M4 15a1 1 0 011 1h10a1 1 0 110 2H5a1 1 0 01-1-1v-1a1 1 0 011-1z" fill="none"/>
                <rect x="3" y="16" width="14" height="2" rx="1"/>
              </svg>
              Download CV
            </a>
            <a href="#contact" class="btn btn-outline" @click.prevent="scrollToSection('contact')">Hire Me →</a>
          </div>

          <div class="social">
            <a href="https://github.com/Satya6800" target="_blank" rel="noopener noreferrer" class="social-link" title="GitHub">
              <svg viewBox="0 0 1024 1024" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M512 76C281.6 76 96 261.6 96 492c0 176.4 114.4 325.8 273.2 378.8 20 3.6 27.4-8.6 27.4-19.2 0-9.4-.4-40.8-.6-74-111.2 24.2-134.6-53.6-134.6-53.6-18.2-46.2-44.4-58.6-44.4-58.6-36.4-24.8 2.8-24.2 2.8-24.2 40.2 2.8 61.4 41.2 61.4 41.2 35.8 61.2 93.8 43.6 116.6 33.4 3.6-25.8 14-43.6 25.4-53.6-88.8-10.1-182-44.4-182-197.4 0-43.6 15.6-79.2 41.2-107.2-4.2-10.1-17.8-50.8 3.8-105.8 0 0 33.6-10.8 110 40.8 31.8-8.8 65.8-13.2 99.6-13.4 33.8.2 67.8 4.6 99.6 13.4 76.4-51.6 110-40.8 110-40.8 21.6 55 8 95.6 3.8 105.8 25.6 28 41.2 63.6 41.2 107.2 0 153.6-93.4 187.2-182 197.2 14.4 12.4 27.4 36.8 27.4 74.2 0 53.6-.4 96.8-.4 110 0 10.6 7.2 23 27.6 19.2C813.6 817.8 928 668.4 928 492 928 261.6 742.4 76 512 76Z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/choun-satya-68587534a" target="_blank" rel="noopener noreferrer" class="social-link" title="LinkedIn">
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1 4.98 2.12 4.98 3.5zM0 24h5V8H0v16zm7.5-16h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.1 3.4 6.1 7.8V24h-5V14.8c0-2.2 0-5-3-5s-3.4 2.3-3.4 4.8V24h-5V8z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/share/16kTkSWDKK/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" class="social-link" title="Facebook">
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12.07c0-5.51-4.48-9.99-9.99-9.99S2.02 6.56 2.02 12.07c0 4.99 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.79c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.75l-.44 2.89h-2.31v6.99c4.78-.75 8.44-4.89 8.44-9.88Z"/>
              </svg>
            </a>
            <a href="https://t.me/satyachoun" target="_blank" rel="noopener noreferrer" class="social-link" title="Telegram">
              <svg class="icon" viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51 0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152 35.56-14.786 42.94-17.354 47.76-17.441 1.06-.017 3.42.245 4.96 1.49 1.28 1.05 1.64 2.47 1.82 3.467.16.996.38 3.266.2 5.038-1.92 20.24-10.26 69.356-14.5 92.026-1.78 9.592-5.32 12.808-8.74 13.122-7.44.684-13.08-4.912-20.28-9.63-11.26-7.386-17.62-11.982-28.56-19.188-12.64-8.328-4.44-12.906 2.76-20.386 1.88-1.958 34.64-31.748 35.26-34.45.08-.338.16-1.598-.6-2.262-.74-.666-1.84-.438-2.64-.258-1.14.256-19.12 12.152-54 35.686-5.1 3.508-9.72 5.218-13.88 5.128-4.56-.098-13.36-2.584-19.9-4.708-8-2.606-14.38-3.984-13.82-8.41.28-2.304 3.46-4.662 9.52-7.072Z"/>
              </svg>
            </a>
          </div>


        </div>

        <!-- Right Image -->
        <div class="right" data-aos="fade-left" data-aos-delay="300">
          <div class="img-wrap">
            <div class="img-ring-2"></div>
            <div class="img-ring"></div>
            <div class="img-glow"></div>
            <img src="../assets/image/Syamal.png" class="hero-img" alt="profile" />
            <div class="tag tag-1">Vue.js · Node.js</div>
            <div class="tag tag-2">Open to offers</div>
            <div class="tag tag-3">Fullstack Dev</div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isLoaded = ref(false);

onMounted(() => {
  // Trigger the slide-up animation shortly after mount
  setTimeout(() => {
    isLoaded.value = true;
  }, 1200);
});

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // Adjust for navbar height
      behavior: 'smooth'
    });
  }
};
</script>

<style scoped>
/* ===== TRANSITION OVERLAY ===== */
.transition-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: all;
  display: flex;
  align-items: center;
  justify-content: center;
}

.transition-overlay.is-hidden {
  pointer-events: none;
}

.overlay-layer {
  position: absolute;
  inset: 0;
  background: var(--overlay-bg);
  transform: translateY(0%);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transition: transform 1s cubic-bezier(0.7, 0, 0.3, 1), border-radius 1s cubic-bezier(0.7, 0, 0.3, 1);
}

.layer-1 {
  opacity: 0.35;
  z-index: 1;
}

.layer-2 {
  opacity: 0.7;
  z-index: 2;
}

.layer-3 {
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
}

.is-hidden .layer-1 {
  transform: translateY(-100%);
  border-bottom-left-radius: 50% 100px;
  border-bottom-right-radius: 50% 100px;
  transition-delay: 0.3s;
}

.is-hidden .layer-2 {
  transform: translateY(-100%);
  border-bottom-left-radius: 50% 100px;
  border-bottom-right-radius: 50% 100px;
  transition-delay: 0.15s;
}

.is-hidden .layer-3 {
  transform: translateY(-100%);
  border-bottom-left-radius: 50% 100px;
  border-bottom-right-radius: 50% 100px;
  transition-delay: 0s;
}

.overlay-text {
  font-size: clamp(1.8rem, 6vw, 3.5rem);
  font-weight: 700;
  color: #fff;
  letter-spacing: clamp(2px, 1vw, 4px);
  text-align: center;
  padding: 0 20px;
  text-transform: uppercase;
  z-index: 4;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.is-hidden .overlay-text {
  opacity: 0;
  transform: translateY(-20px);
}



/* ===== BASE ===== */
.hero {
  position: relative;
  min-height: 110vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  font-family: 'Syne', sans-serif;
  padding: 80px 0 40px;
}

/* ===== WATER RIPPLES ===== */
.ripple-wrap {
  position: absolute;
  bottom: -60px; left: 50%;
  transform: translateX(-50%);
  width: 700px; height: 200px;
  pointer-events: none;
  z-index: 0;
}
.ripple {
  position: absolute;
  bottom: 0; left: 50%;
  transform: translateX(-50%);
  border-radius: 25px;
  border: 1px solid var(--ripple-color);
  animation: rippleOut 6s ease-out infinite;
}
.ripple:nth-child(1) { width:200px; height:60px;  animation-delay:0s; }
.ripple:nth-child(2) { width:400px; height:100px; animation-delay:1.5s; }
.ripple:nth-child(3) { width:600px; height:140px; animation-delay:3s; }
@keyframes rippleOut {
  0%   { opacity: 0.6; transform: translateX(-50%) scaleY(1); }
  100% { opacity: 0;   transform: translateX(-50%) scaleY(1.3); border-width: 0; }
}

/* ===== GLOW ORBS ===== */
.orb {
  position: absolute;
  border-radius: 25px;
  filter: blur(80px);
  z-index: 0;
}
.orb-1 { width:400px; height:400px; top:-80px; right:-60px;  background: var(--orb-1-color); }
.orb-2 { width:300px; height:300px; bottom:-50px; left:-80px; background: var(--orb-2-color); }

/* ===== LAYOUT ===== */
.container {
  position: relative;
  z-index: 2;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
}
.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
}

/* ===== LEFT CONTENT ===== */
.left { animation: fadeInUp 0.9s ease both; }
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Status badge */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--badge-bg);
  border: 1px solid var(--badge-border);
  color: var(--badge-color);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 25px;
  margin-bottom: 24px;
  backdrop-filter: blur(8px);
}
.badge::before {
  content: '';
  width: 6px; height: 6px;
  border-radius: 25px;
  background: var(--text-accent);
  box-shadow: 0 0 6px var(--text-accent);
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.3;} }

h1 {
  font-weight: 700;
  font-size: clamp(38px, 5vw, 58px);
  line-height: 1.1;
  color: var(--text-primary);
  margin-bottom: 6px;
  letter-spacing: -0.02em;
}

/* Animated gradient name */
.name {
  background: var(--brand-gradient);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 4s linear infinite;
}
@keyframes shimmer { to { background-position: 200% center; } }

.subtitle {
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-accent);
  margin-bottom: 20px;
  opacity: 0.85;
}

.desc {
  font-size: 16px;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 420px;
  margin-bottom: 36px;
}

/* ===== BUTTONS ===== */
.btns { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 40px; }

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 28px;
  border-radius: 25px;
  font-family: 'Syne', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
  position: relative;
  overflow: hidden;
}
.btn::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0);
  transition: background 0.2s;
  border-radius: inherit;
}
.btn:hover::after { background: rgba(255,255,255,0.06); }

/* Primary */
.btn-primary {
  background: var(--brand-gradient);
  color: #fff;
  box-shadow: var(--shadow-btn);
}
.btn-primary:hover {
  box-shadow: var(--shadow-btn-hover);
  transform: translateY(-2px);
}
.btn-primary:active {
  box-shadow: var(--shadow-sm);
  transform: scale(0.97);
}

/* Outline */
.btn-outline {
  background: var(--bg-glass);
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
  backdrop-filter: blur(8px);
}
.btn-outline:hover {
  background: var(--bg-glass-hover);
  border-color: var(--border-active);
  transform: translateY(-2px);
  color: var(--text-accent);
}
.btn-outline:active {
  background: var(--bg-card-hover);
  transform: scale(0.97);
}

.icon { width:16px; height:16px; fill:currentColor; }

/* ===== SOCIAL ICONS ===== */
.social { display: flex; gap: 14px; }
.social-link {
  width: 42px; height: 42px;
  border-radius: 25px;
  background: var(--social-bg);
  border: 1px solid var(--social-border);
  display: flex; align-items: center; justify-content: center;
  color: var(--social-color);
  text-decoration: none;
  font-size: 16px;
  transition: background 0.3s, border-color 0.3s, transform 0.2s, box-shadow 0.2s, color 0.3s;
}
.social-link svg {
  width: 20px;
  height: 20px;
}
.social-link:hover {
  background: var(--social-hover-bg);
  border-color: var(--social-hover-border);
  transform: translateY(-3px);
  box-shadow: var(--shadow-glow);
  color: var(--social-hover-color);
}
.social-link:active {
  transform: scale(0.93);
}

/* ===== STATS ===== */
.stats {
  display: flex;
  gap: 28px;
  margin-top: 40px;
  padding-top: 28px;
  border-top: 1px solid var(--border-subtle);
  animation: fadeInUp 0.9s ease 0.35s both;
}
.stat-val {
  font-size: 26px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1;
  margin-bottom: 4px;
}
.stat-val span { color: var(--text-accent); }
.stat-label {
  font-size: 12px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.stat-divider { width: 1px; background: var(--border-subtle); }

/* ===== RIGHT IMAGE ===== */
.right {
  display: flex; justify-content: center; align-items: center;
  animation: fadeInUp 0.9s ease 0.2s both;
}
.img-wrap {
  position: relative;
  width: 300px; height: 340px;
}

/* Spinning orbit ring */
.img-ring {
  position: absolute;
  inset: -18px;
  border-radius: 25px;
  border: 1px solid var(--border-color);
  animation: spinRing 20s linear infinite;
}
.img-ring::before {
  content: '';
  position: absolute;
  top: -3px; left: 50%;
  width: 6px; height: 6px;
  background: var(--text-accent);
  border-radius: 25px;
  box-shadow: 0 0 8px var(--text-accent);
  transform: translateX(-50%);
}
@keyframes spinRing { to { transform: rotate(360deg); } }

.img-ring-2 {
  position: absolute;
  inset: -36px;
  border-radius: 25px;
  border: 1px solid var(--border-subtle);
  animation: spinRing 30s linear infinite reverse;
}

/* Pulsing glow */
.img-glow {
  position: absolute;
  inset: -20px;
  border-radius: 25px;
  background: radial-gradient(circle, var(--orb-1-color), transparent 70%);
  animation: glowPulse 3s ease-in-out infinite;
}
@keyframes glowPulse { 0%,100%{opacity:0.6;} 50%{opacity:1;} }

.hero-img {
  width: 100%; height: 100%;
  object-fit: cover;
  border-radius: 25px;
  border: 3px solid var(--border-color);
  position: relative;
  z-index: 1;
  display: block;
  box-shadow: var(--shadow-md);
}

/* Floating tech tags */
.tag {
  position: absolute;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  backdrop-filter: blur(12px);
  border-radius: 25px;
  padding: 8px 14px;
  font-size: 12px;
  color: var(--skill-tag-color);
  font-weight: 500;
  white-space: nowrap;
  z-index: 3;
  animation: tagFloat 3s ease-in-out infinite;
  box-shadow: var(--shadow-sm);
}
.tag::before {
  content: '';
  display: inline-block;
  width: 6px; height: 6px;
  border-radius: 25px;
  margin-right: 6px;
  background: currentColor;
}
.tag-1 { top: 8%;    right: -30px; animation-delay: 0s; }
.tag-2 { bottom: 18%; left: -40px; animation-delay: 1.2s; color: var(--brand-purple); border-color: var(--border-color); }
.tag-3 { bottom: 5%;  right: -20px; animation-delay: 2s;  color: #10B981; border-color: rgba(16,185,129,0.3); }

@keyframes tagFloat { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-6px);} }

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .hero { align-items: flex-start; padding-top: 120px; margin-top: 40px; min-height: 100vh; }
  .row { grid-template-columns: 1fr; gap: 40px; }
  .img-wrap { width: 220px; height: 250px; margin: 0 auto; }
  .tag-1, .tag-2, .tag-3 { display: none; }
  .stats { gap: 16px; }
}
</style>
