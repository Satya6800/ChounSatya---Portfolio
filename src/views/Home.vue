<template>
  <section class="hero">
    <!-- Animated Bubbles -->
    <div class="bubbles">
      <div class="bubble" v-for="n in 12" :key="n"></div>
    </div>

    <!-- Water Ripple Rings -->
    <div class="ripple-wrap">
      <div class="ripple"></div>
      <div class="ripple"></div>
      <div class="ripple"></div>
    </div>

    <!-- Grid Pattern Overlay -->
    <div class="grid-overlay"></div>

    <!-- Glow Orbs -->
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>

    <div class="container">
      <div class="row">

        <!-- Left Content -->
        <div class="left">
          <div class="badge">Available for Work</div>

          <h1>Hi, I'm </h1>
          <h1><span class="name">Choun Satya</span></h1>
          <p class="subtitle">Full Stack Developer</p>
          <p class="desc">
            I build modern, scalable web applications with clean UI and powerful backend systems.
          </p>

          <div class="btns">
            <router-link to="/portfolio" class="btn btn-primary">
              <svg class="icon" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-.293.707L13 10.414V17a1 1 0 01-1.447.894l-4-2A1 1 0 017 15v-4.586L3.293 6.707A1 1 0 013 6V4z"/>
              </svg>
              View Projects
            </router-link>
            <a href="/Choun Satya CV.pdf" download class="btn btn-outline">
              <svg class="icon" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 3a1 1 0 011 1v7.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 11.586V4a1 1 0 011-1z"/>
                <path d="M4 15a1 1 0 011 1h10a1 1 0 110 2H5a1 1 0 01-1-1v-1a1 1 0 011-1z" fill="none"/>
                <rect x="3" y="16" width="14" height="2" rx="1"/>
              </svg>
              Download CV
            </a>
            <router-link to="/contact" class="btn btn-outline">Hire Me →</router-link>
          </div>

          <div class="social">
            <a href="https://github.com/Satya6800" target="_blank" rel="noopener noreferrer" class="social-link" title="GitHub">
              <svg viewBox="0 0 1024 1024" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#ffff"/></svg>
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
             <svg viewBox="0 0 256 256" preserveAspectRatio="xMidYMid"><defs><linearGradient id="telegram__a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#2AABEE"/><stop offset="100%" stop-color="#229ED9"/></linearGradient></defs><path fill="url(#telegram__a)" d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51 0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z"/><path fill="#FFF" d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152 35.56-14.786 42.94-17.354 47.76-17.441 1.06-.017 3.42.245 4.96 1.49 1.28 1.05 1.64 2.47 1.82 3.467.16.996.38 3.266.2 5.038-1.92 20.24-10.26 69.356-14.5 92.026-1.78 9.592-5.32 12.808-8.74 13.122-7.44.684-13.08-4.912-20.28-9.63-11.26-7.386-17.62-11.982-28.56-19.188-12.64-8.328-4.44-12.906 2.76-20.386 1.88-1.958 34.64-31.748 35.26-34.45.08-.338.16-1.598-.6-2.262-.74-.666-1.84-.438-2.64-.258-1.14.256-19.12 12.152-54 35.686-5.1 3.508-9.72 5.218-13.88 5.128-4.56-.098-13.36-2.584-19.9-4.708-8-2.606-14.38-3.984-13.82-8.41.28-2.304 3.46-4.662 9.52-7.072Z"/></svg>
            </a>
          </div>


        </div>

        <!-- Right Image -->
        <div class="right">
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

<script setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700&display=swap');

/* ===== BASE ===== */
.hero {
  position: relative;
  min-height: 120vh;
  background: linear-gradient(160deg, #0a0f2e 0%, #0d1f4a 40%, #0a2a3e 100%);
  overflow: hidden;
  display: flex;
  align-items: center;
  font-family: 'Syne', sans-serif;
  padding: 80px 0 40px;
}

/* ===== BUBBLES ===== */
.bubbles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
.bubble {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(120,200,255,0.18), rgba(60,120,220,0.05));
  border: 1px solid rgba(120,200,255,0.12);
  animation: floatBubble linear infinite;
}
@keyframes floatBubble {
  0%   { transform: translateY(0) scale(1); opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 0.6; }
  100% { transform: translateY(-110vh) scale(1.1); opacity: 0; }
}

/* Stagger each bubble */
.bubble:nth-child(1)  { width:14px;  height:14px;  left:6%;   bottom:-10%; animation-duration:9s;  animation-delay:0s; }
.bubble:nth-child(2)  { width:22px;  height:22px;  left:14%;  bottom:-10%; animation-duration:12s; animation-delay:1.5s; }
.bubble:nth-child(3)  { width:8px;   height:8px;   left:23%;  bottom:-10%; animation-duration:7s;  animation-delay:3s; }
.bubble:nth-child(4)  { width:30px;  height:30px;  left:35%;  bottom:-10%; animation-duration:14s; animation-delay:0.5s; }
.bubble:nth-child(5)  { width:16px;  height:16px;  left:50%;  bottom:-10%; animation-duration:10s; animation-delay:2s; }
.bubble:nth-child(6)  { width:10px;  height:10px;  left:62%;  bottom:-10%; animation-duration:8s;  animation-delay:4s; }
.bubble:nth-child(7)  { width:24px;  height:24px;  left:72%;  bottom:-10%; animation-duration:13s; animation-delay:1s; }
.bubble:nth-child(8)  { width:18px;  height:18px;  left:83%;  bottom:-10%; animation-duration:11s; animation-delay:2.5s; }
.bubble:nth-child(9)  { width:6px;   height:6px;   left:90%;  bottom:-10%; animation-duration:6s;  animation-delay:0.8s; }
.bubble:nth-child(10) { width:36px;  height:36px;  left:44%;  bottom:-10%; animation-duration:16s; animation-delay:3.5s; }
.bubble:nth-child(11) { width:12px;  height:12px;  left:18%;  bottom:-10%; animation-duration:9s;  animation-delay:5s; }
.bubble:nth-child(12) { width:20px;  height:20px;  left:78%;  bottom:-10%; animation-duration:11s; animation-delay:1.8s; }

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
  border-radius: 50%;
  border: 1px solid rgba(80,160,255,0.2);
  animation: rippleOut 6s ease-out infinite;
}
.ripple:nth-child(1) { width:200px; height:60px;  animation-delay:0s; }
.ripple:nth-child(2) { width:400px; height:100px; animation-delay:1.5s; }
.ripple:nth-child(3) { width:600px; height:140px; animation-delay:3s; }
@keyframes rippleOut {
  0%   { opacity: 0.6; transform: translateX(-50%) scaleY(1); }
  100% { opacity: 0;   transform: translateX(-50%) scaleY(1.3); border-width: 0; }
}

/* ===== GRID PATTERN ===== */
.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(80,160,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(80,160,255,0.04) 1px, transparent 1px);
  background-size: 48px 48px;
  z-index: 0;
}

/* ===== GLOW ORBS ===== */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 0;
}
.orb-1 { width:400px; height:400px; top:-80px; right:-60px;  background: rgba(30,100,220,0.18); }
.orb-2 { width:300px; height:300px; bottom:-50px; left:-80px; background: rgba(10,160,180,0.14); }

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
  background: rgba(40,120,255,0.12);
  border: 1px solid rgba(80,160,255,0.25);
  color: #00cffa;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 100px;
  margin-bottom: 24px;
  backdrop-filter: blur(8px);
}
.badge::before {
  content: '';
  width: 6px; height: 6px;
  border-radius: 50%;
  background: #4aa8ff;
  box-shadow: 0 0 6px #4aa8ff;
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.3;} }

h1 {
  font-weight: 700;
  font-size: clamp(38px, 5vw, 58px);
  line-height: 1.1;
  color: #e8f0ff;
  margin-bottom: 6px;
  letter-spacing: -0.02em;
}

/* Animated gradient name */
.name {
  background: linear-gradient(120deg, #5ab4ff, #a78bfa, #5ab4ff);
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
  color: #4aa8ff;
  margin-bottom: 20px;
  opacity: 0.85;
}

.desc {
  font-size: 16px;
  line-height: 1.7;
  color: rgba(180,210,255,0.7);
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
  border-radius: 100px;
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
  background: linear-gradient(135deg, #2d7fe8, #5b5af0);
  color: #fff;
  box-shadow: 0 4px 20px rgba(60,100,240,0.4);
}
.btn-primary:hover {
  box-shadow: 0 6px 28px rgba(60,100,240,0.6);
  transform: translateY(-2px);
}
.btn-primary:active,
.btn-primary.router-link-active {
  box-shadow: 0 2px 10px rgba(60,100,240,0.6);
  transform: scale(0.97);
}

/* Outline */
.btn-outline {
  background: rgba(255,255,255,0.04);
  color: #c0d8ff;
  border: 1px solid rgba(100,160,255,0.25);
  backdrop-filter: blur(8px);
}
.btn-outline:hover {
  background: rgba(60,120,255,0.1);
  border-color: rgba(100,160,255,0.5);
  transform: translateY(-2px);
  color: #00cffa;
}
.btn-outline:active,
.btn-outline.router-link-active {
  background: rgba(60,120,255,0.15);
  transform: scale(0.97);
}

.icon { width:16px; height:16px; fill:currentColor; }

/* ===== SOCIAL ICONS ===== */
.social { display: flex; gap: 14px; }
.social-link {
  width: 42px; height: 42px;
  border-radius: 50%;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(100,160,255,0.18);
  display: flex; align-items: center; justify-content: center;
  color: #7eb8ff;
  text-decoration: none;
  font-size: 16px;
  transition: background 0.2s, border-color 0.2s, transform 0.2s, box-shadow 0.2s;
}
.social-link svg {
  width: 20px;
  height: 20px;
}
.social-link:hover {
  background: rgba(60,120,255,0.15);
  border-color: rgba(100,160,255,0.45);
  transform: translateY(-3px);
  box-shadow: 0 6px 18px rgba(60,120,255,0.3);
  color: #afd5ff;
}
.social-link:active {
  transform: scale(0.93);
  box-shadow: 0 0 0 3px rgba(80,160,255,0.3);
}

/* ===== STATS ===== */
.stats {
  display: flex;
  gap: 28px;
  margin-top: 40px;
  padding-top: 28px;
  border-top: 1px solid rgba(80,160,255,0.1);
  animation: fadeInUp 0.9s ease 0.35s both;
}
.stat-val {
  font-size: 26px;
  font-weight: 700;
  color: #e8f0ff;
  line-height: 1;
  margin-bottom: 4px;
}
.stat-val span { color: #4aa8ff; }
.stat-label {
  font-size: 12px;
  color: rgba(140,180,255,0.5);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.stat-divider { width: 1px; background: rgba(80,160,255,0.15); }

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
  border-radius: 50%;
  border: 1px solid rgba(80,160,255,0.15);
  animation: spinRing 20s linear infinite;
}
.img-ring::before {
  content: '';
  position: absolute;
  top: -3px; left: 50%;
  width: 6px; height: 6px;
  background: #4aa8ff;
  border-radius: 50%;
  box-shadow: 0 0 8px #4aa8ff;
  transform: translateX(-50%);
}
@keyframes spinRing { to { transform: rotate(360deg); } }

.img-ring-2 {
  position: absolute;
  inset: -36px;
  border-radius: 50%;
  border: 1px solid rgba(80,160,255,0.08);
  animation: spinRing 30s linear infinite reverse;
}

/* Pulsing glow */
.img-glow {
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(40,100,220,0.15), transparent 70%);
  animation: glowPulse 3s ease-in-out infinite;
}
@keyframes glowPulse { 0%,100%{opacity:0.6;} 50%{opacity:1;} }

.hero-img {
  width: 100%; height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid rgba(80,160,255,0.25);
  position: relative;
  z-index: 1;
  display: block;
}

/* Floating tech tags */
.tag {
  position: absolute;
  background: rgba(10,20,50,0.75);
  border: 1px solid rgba(80,160,255,0.25);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  padding: 8px 14px;
  font-size: 12px;
  color: #7eb8ff;
  font-weight: 500;
  white-space: nowrap;
  z-index: 3;
  animation: tagFloat 3s ease-in-out infinite;
}
.tag::before {
  content: '';
  display: inline-block;
  width: 6px; height: 6px;
  border-radius: 50%;
  margin-right: 6px;
  background: currentColor;
}
.tag-1 { top: 8%;    right: -30px; animation-delay: 0s; }
.tag-2 { bottom: 18%; left: -40px; animation-delay: 1.2s; color: #a78bfa; border-color: rgba(167,139,250,0.3); }
.tag-3 { bottom: 5%;  right: -20px; animation-delay: 2s;  color: #5ccfb8; border-color: rgba(80,200,180,0.3); }

@keyframes tagFloat { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-6px);} }

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .row { grid-template-columns: 1fr; gap: 40px; }
  .right { order: -1; }
  .img-wrap { width: 220px; height: 250px; }
  .tag-1, .tag-2, .tag-3 { display: none; }
  .stats { gap: 16px; }
}
</style>