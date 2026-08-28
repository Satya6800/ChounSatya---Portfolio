<template>
  <!-- Page Entry Overlay -->
  <div class="transition-overlay" :class="{ 'is-hidden': isLoaded }">
    <div class="overlay-layer layer-1"></div>
    <div class="overlay-layer layer-2"></div>
    <div class="overlay-layer layer-3">
      <h2 class="overlay-text">CHOUN SATYA</h2>
    </div>
  </div>

  <!-- ===== HERO SECTION ===== -->
  <section class="hero" id="hero-section" aria-label="Hero section">
    <!-- Ambient background glow -->
    <div class="hero-glow" aria-hidden="true"></div>
    <div class="hero-grid" aria-hidden="true"></div>

    <!-- Floating background orbs -->
    <div class="orb orb-1" aria-hidden="true"></div>
    <div class="orb orb-2" aria-hidden="true"></div>

    <div class="hero-container">

      <!-- ── TOP HERO ROW (Left: Text & Actions | Right: Big Visual Photo Card) ── -->
      <div class="hero-main-row">

        <!-- ── Left Column: Content & Actions ── -->
        <div class="hero-left-content">
          <!-- Status Badge -->
          <div class="status-badge" data-aos="fade-down" data-aos-delay="60">
            <span class="status-dot" aria-hidden="true"></span>
             Available for new opportunities
          </div>

          <!-- Main Heading -->
          <h1 class="hero-heading" data-aos="fade-up" data-aos-delay="120">
            Hi, I'm
            <span class="hero-name">Choun Satya</span>
          </h1>

          <!-- Role Subtitle -->
          <p class="hero-role" data-aos="fade-up" data-aos-delay="180">
            Full Stack Developer
          </p>

          <!-- Value Proposition -->
          <p class="hero-desc" data-aos="fade-up" data-aos-delay="240">
            Building modern, scalable web applications with clean UI, seamless UX, and robust backend systems.
            Specialized in Vue 3, Node.js, REST APIs, and Flutter.
          </p>

          <!-- Contact / CTA Bar -->
          <div class="hero-cta-bar" data-aos="fade-up" data-aos-delay="300">
            <div class="cta-input-pill">
              <svg class="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <input
                type="email"
                class="cta-input"
                placeholder="Enter your email…"
                aria-label="Enter your email to get in touch"
              />
            </div>
            <a
              href="#contact"
              class="cta-btn"
              @click.prevent="scrollToSection('contact')"
            >
              Get in touch
              <svg class="cta-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          <!-- Social Links + Resume Download -->
          <div class="hero-socials" data-aos="fade-up" data-aos-delay="360">
            <a href="https://github.com/Satya6800" target="_blank" rel="noopener noreferrer" class="social-link" title="GitHub" aria-label="GitHub profile">
              <svg viewBox="0 0 1024 1024" fill="currentColor">
                <path d="M512 76C281.6 76 96 261.6 96 492c0 176.4 114.4 325.8 273.2 378.8 20 3.6 27.4-8.6 27.4-19.2 0-9.4-.4-40.8-.6-74-111.2 24.2-134.6-53.6-134.6-53.6-18.2-46.2-44.4-58.6-44.4-58.6-36.4-24.8 2.8-24.2 2.8-24.2 40.2 2.8 61.4 41.2 61.4 41.2 35.8 61.2 93.8 43.6 116.6 33.4 3.6-25.8 14-43.6 25.4-53.6-88.8-10.1-182-44.4-182-197.4 0-43.6 15.6-79.2 41.2-107.2-4.2-10.1-17.8-50.8 3.8-105.8 0 0 33.6-10.8 110 40.8 31.8-8.8 65.8-13.2 99.6-13.4 33.8.2 67.8 4.6 99.6 13.4 76.4-51.6 110-40.8 110-40.8 21.6 55 8 95.6 3.8 105.8 25.6 28 41.2 63.6 41.2 107.2 0 153.6-93.4 187.2-182 197.2 14.4 12.4 27.4 36.8 27.4 74.2 0 53.6-.4 96.8-.4 110 0 10.6 7.2 23 27.6 19.2C813.6 817.8 928 668.4 928 492 928 261.6 742.4 76 512 76Z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/choun-satya-68587534a" target="_blank" rel="noopener noreferrer" class="social-link" title="LinkedIn" aria-label="LinkedIn profile">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1 4.98 2.12 4.98 3.5zM0 24h5V8H0v16zm7.5-16h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.1 3.4 6.1 7.8V24h-5V14.8c0-2.2 0-5-3-5s-3.4 2.3-3.4 4.8V24h-5V8z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/share/16kTkSWDKK/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" class="social-link" title="Facebook" aria-label="Facebook profile">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12.07c0-5.51-4.48-9.99-9.99-9.99S2.02 6.56 2.02 12.07c0 4.99 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.79c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.75l-.44 2.89h-2.31v6.99c4.78-.75 8.44-4.89 8.44-9.88Z"/>
              </svg>
            </a>
            <a href="https://t.me/satyachoun" target="_blank" rel="noopener noreferrer" class="social-link" title="Telegram" aria-label="Telegram">
              <svg viewBox="0 0 256 256" fill="currentColor">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51 0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152 35.56-14.786 42.94-17.354 47.76-17.441 1.06-.017 3.42.245 4.96 1.49 1.28 1.05 1.64 2.47 1.82 3.467.16.996.38 3.266.2 5.038-1.92 20.24-10.26 69.356-14.5 92.026-1.78 9.592-5.32 12.808-8.74 13.122-7.44.684-13.08-4.912-20.28-9.63-11.26-7.386-17.62-11.982-28.56-19.188-12.64-8.328-4.44-12.906 2.76-20.386 1.88-1.958 34.64-31.748 35.26-34.45.08-.338.16-1.598-.6-2.262-.74-.666-1.84-.438-2.64-.258-1.14.256-19.12 12.152-54 35.686-5.1 3.508-9.72 5.218-13.88 5.128-4.56-.098-13.36-2.584-19.9-4.708-8-2.606-14.38-3.984-13.82-8.41.28-2.304 3.46-4.662 9.52-7.072Z"/>
              </svg>
            </a>
            <div class="social-divider" aria-hidden="true"></div>
            <a href="/Choun Satya CV.pdf" download class="resume-btn" aria-label="Download CV">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
          </div>

          <!-- Tech Badge Row -->
          <div class="hero-tech-badges" data-aos="fade-up" data-aos-delay="420">
            <span class="tech-badge">Vue 3</span>
            <span class="tech-badge">Node.js</span>
            <span class="tech-badge">React</span>
            <span class="tech-badge">Flutter</span>
            <span class="tech-badge">MySQL</span>
            <span class="tech-badge">REST API</span>
          </div>
        </div>

        <!-- ── Right Column: Big Stunner Image Card ── -->
        <div class="hero-right-visual" data-aos="fade-left" data-aos-delay="200">
          <div class="hero-image-card">
            <!-- Glowing ambient backdrops -->
            <div class="img-glow-orb" aria-hidden="true"></div>
            <div class="img-ring-outer" aria-hidden="true"></div>
            <div class="img-ring-inner" aria-hidden="true"></div>

            <!-- Main High-Res Photo Container -->
            <div class="img-frame">
              <img :src="profileImg" alt="Choun Satya - Full Stack Developer" class="hero-profile-photo" />
              <div class="img-gradient-overlay"></div>
            </div>

            <!-- Floating Glassmorphic Badges -->
            <!-- 1. Top Right Chip -->
            <div class="float-badge badge-top-right" aria-hidden="true">
              <div class="fb-icon-wrap fb-icon--cyan">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <div class="fb-text">
                <div class="fb-title">Vue 3 & Node.js</div>
                <div class="fb-sub">Full Stack Specialist</div>
              </div>
            </div>

            <!-- 2. Bottom Left Chip -->
            <div class="float-badge badge-bottom-left" aria-hidden="true">
              <div class="fb-status-pulse">
                <span class="fb-pulse-ring"></span>
                <span class="fb-pulse-dot"></span>
              </div>
              <div class="fb-text">
                <div class="fb-title">Available for Hire</div>
                <div class="fb-sub">Full-time / Freelance</div>
              </div>
            </div>

            <!-- 3. Bottom Right Chip -->
            <div class="float-badge badge-bottom-right" aria-hidden="true">
              <div class="fb-icon-wrap fb-icon--purple">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <div class="fb-text">
                <div class="fb-title">1+ Yrs Experience</div>
                <div class="fb-sub">7+ Shipped Projects</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- ── Bottom Section: Interactive Dashboard Preview (Full Width) ── -->
      <div class="dashboard-section" data-aos="fade-up" data-aos-delay="480">
        <DashboardPreview />
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DashboardPreview from '../components/DashboardPreview.vue';
import profileImg from '@/assets/image/Syamal.png';

const isLoaded = ref(false);

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 1200);
});

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  }
};
</script>

<style scoped>
/* ===== PAGE ENTRY OVERLAY ===== */
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
  transition: transform 1s cubic-bezier(0.7, 0, 0.3, 1), border-radius 1s cubic-bezier(0.7, 0, 0.3, 1);
}

.layer-1 { opacity: 0.35; z-index: 1; }
.layer-2 { opacity: 0.7;  z-index: 2; }
.layer-3 { z-index: 3; display: flex; align-items: center; justify-content: center; }

.is-hidden .layer-1 { transform: translateY(-100%); border-bottom-left-radius: 50% 100px; border-bottom-right-radius: 50% 100px; transition-delay: 0.3s; }
.is-hidden .layer-2 { transform: translateY(-100%); border-bottom-left-radius: 50% 100px; border-bottom-right-radius: 50% 100px; transition-delay: 0.15s; }
.is-hidden .layer-3 { transform: translateY(-100%); border-bottom-left-radius: 50% 100px; border-bottom-right-radius: 50% 100px; transition-delay: 0s; }

.overlay-text {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.8rem, 6vw, 3.5rem);
  font-weight: 800;
  color: #fff;
  letter-spacing: clamp(4px, 2vw, 10px);
  text-align: center;
  padding: 0 20px;
  text-transform: uppercase;
  z-index: 4;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.is-hidden .overlay-text { opacity: 0; transform: translateY(-20px); }

/* ===== HERO BASE ===== */
.hero {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 130px 24px 80px;
  font-family: 'Poppins', sans-serif;
}

/* Ambient radial glow */
.hero-glow {
  position: absolute;
  inset: 0;
  background: var(--bg-hero-glow);
  pointer-events: none;
  z-index: 0;
}

/* Subtle dot-grid */
.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle, var(--border-subtle) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
  z-index: 0;
  opacity: 0.5;
}

/* Glow orbs */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
}
.orb-1 { width: 550px; height: 550px; top: -120px; left: -120px; background: var(--orb-1-color); }
.orb-2 { width: 450px; height: 450px; top: 150px; right: -100px; background: var(--orb-2-color); }

/* ===== HERO CONTAINER ===== */
.hero-container {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ===== HERO MAIN ROW (2-Column Desktop Split) ===== */
.hero-main-row {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 56px;
  align-items: center;
  width: 100%;
  margin-bottom: 72px;
}

/* ===== LEFT CONTENT COLUMN ===== */
.hero-left-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

/* ===== STATUS BADGE ===== */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--badge-bg);
  border: 1px solid var(--badge-border);
  color: var(--badge-color);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.01em;
  padding: 7px 16px;
  border-radius: 9999px;
  margin-bottom: 20px;
  backdrop-filter: blur(10px);
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 8px #22c55e;
  animation: pulse 2s ease-in-out infinite;
  display: block;
}

@keyframes pulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 8px #22c55e; }
  50% { opacity: 0.5; box-shadow: 0 0 3px #22c55e; }
}

/* ===== HEADINGS ===== */
.hero-heading {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(38px, 4.8vw, 62px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  margin: 0 0 6px;
}

.hero-name {
  display: inline-block;
  background: var(--brand-gradient);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 5s linear infinite;
}

@keyframes shimmer { to { background-position: 200% center; } }

.hero-role {
  font-size: clamp(14px, 1.8vw, 16px);
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-accent);
  margin: 4px 0 16px;
  opacity: 0.9;
}

.hero-desc {
  font-size: clamp(15px, 1.6vw, 16.5px);
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 520px;
  margin: 0 0 28px;
}

/* ===== CTA BAR ===== */
.hero-cta-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--bg-glass);
  border: 1px solid var(--border-color);
  border-radius: 9999px;
  padding: 6px 6px 6px 16px;
  backdrop-filter: blur(16px);
  max-width: 460px;
  width: 100%;
  margin-bottom: 24px;
  box-shadow: var(--shadow-sm);
}

.cta-input-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.cta-icon {
  width: 16px;
  height: 16px;
  color: var(--text-muted);
  flex-shrink: 0;
}

.cta-input {
  flex: 1;
  background: none;
  border: none;
  outline: none;
  font-family: 'Poppins', sans-serif;
  font-size: 13.5px;
  color: var(--text-primary);
  min-width: 0;
}
.cta-input::placeholder { color: var(--text-muted); }

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0.6rem 1.15rem;
  background: var(--brand-gradient);
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 700;
  border-radius: 9999px;
  text-decoration: none;
  white-space: nowrap;
  transition: box-shadow 0.25s ease, transform 0.2s ease;
  box-shadow: var(--shadow-btn);
  flex-shrink: 0;
}
.cta-btn:hover { box-shadow: var(--shadow-btn-hover); transform: translateY(-1px); color: #fff; }
.cta-btn-icon { width: 13px; height: 13px; transition: transform 0.2s ease; }
.cta-btn:hover .cta-btn-icon { transform: translateX(3px); }

/* ===== SOCIAL LINKS ===== */
.hero-socials {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 22px;
}

.social-link {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: var(--social-bg);
  border: 1px solid var(--social-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--social-color);
  text-decoration: none;
  transition: all 0.25s ease;
}
.social-link svg { width: 17px; height: 17px; }
.social-link:hover {
  background: var(--social-hover-bg);
  border-color: var(--social-hover-border);
  color: var(--social-hover-color);
  transform: translateY(-3px);
  box-shadow: var(--shadow-glow);
}

.social-divider {
  width: 1px;
  height: 24px;
  background: var(--border-subtle);
}

.resume-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0.45rem 0.9rem;
  background: var(--toggle-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  font-family: 'Poppins', sans-serif;
  font-size: 12.5px;
  font-weight: 600;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.25s ease;
}
.resume-btn svg { width: 13px; height: 13px; }
.resume-btn:hover {
  background: var(--toggle-hover-bg);
  border-color: var(--border-active);
  color: var(--text-primary);
  transform: translateY(-2px);
}

/* ===== TECH BADGE ROW ===== */
.hero-tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.tech-badge {
  font-family: 'Poppins', sans-serif;
  font-size: 11.5px;
  font-weight: 600;
  padding: 4px 11px;
  border-radius: 9999px;
  background: var(--badge-bg);
  color: var(--badge-color);
  border: 1px solid var(--badge-border);
  letter-spacing: 0.02em;
  transition: all 0.2s ease;
}
.tech-badge:hover {
  background: var(--brand-gradient);
  color: #fff;
  border-color: transparent;
  transform: translateY(-2px);
}

/* ================================================================
   RIGHT COLUMN: BIG STUNNING IMAGE PRESENTATION CARD
   ================================================================ */
.hero-right-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.hero-image-card {
  position: relative;
  width: 100%;
  max-width: 380px;
  height: 460px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Glowing ambient orb behind photo */
.img-glow-orb {
  position: absolute;
  inset: -30px;
  border-radius: 36px;
  background: radial-gradient(circle, var(--brand-blue) 0%, rgba(129, 140, 248, 0.2) 50%, transparent 75%);
  filter: blur(40px);
  opacity: 0.75;
  animation: glowPulse 4s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.6; transform: scale(0.96); }
  50% { opacity: 0.9; transform: scale(1.05); }
}

/* Outer orbital animated decorative ring */
.img-ring-outer {
  position: absolute;
  inset: -14px;
  border-radius: 32px;
  border: 1.5px dashed var(--border-active);
  animation: spinSlow 40s linear infinite;
  pointer-events: none;
  z-index: 1;
}

@keyframes spinSlow {
  to { transform: rotate(360deg); }
}

.img-ring-inner {
  position: absolute;
  inset: -6px;
  border-radius: 30px;
  border: 1px solid var(--border-color);
  pointer-events: none;
  z-index: 1;
}

/* Main Photo Container Frame */
.img-frame {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 26px;
  overflow: hidden;
  background: var(--bg-card);
  border: 2px solid rgba(255, 255, 255, 0.12);
  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.45),
    0 0 32px rgba(59, 130, 246, 0.2);
  z-index: 2;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.hero-image-card:hover .img-frame {
  transform: translateY(-6px) scale(1.02);
  border-color: var(--brand-blue);
  box-shadow:
    0 32px 70px rgba(0, 0, 0, 0.55),
    0 0 44px rgba(59, 130, 246, 0.4);
}

.hero-profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.hero-image-card:hover .hero-profile-photo {
  transform: scale(1.05);
}

.img-gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 65%, rgba(9, 13, 22, 0.65) 100%);
  pointer-events: none;
}

/* ===== FLOATING GLASSMORPHIC BADGES ===== */
.float-badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 8px 14px;
  box-shadow:
    0 10px 28px rgba(0, 0, 0, 0.35),
    0 0 16px rgba(59, 130, 246, 0.15);
  z-index: 4;
  pointer-events: auto;
  transition: all 0.3s ease;
}

.float-badge:hover {
  transform: translateY(-3px) scale(1.04);
  border-color: var(--border-active);
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.45);
}

.fb-icon-wrap {
  width: 32px;
  height: 32px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.fb-icon-wrap svg { width: 16px; height: 16px; }

.fb-icon--cyan {
  background: rgba(56, 189, 248, 0.15);
  color: var(--brand-cyan);
  border: 1px solid rgba(56, 189, 248, 0.3);
}

.fb-icon--purple {
  background: rgba(129, 140, 248, 0.15);
  color: var(--brand-purple);
  border: 1px solid rgba(129, 140, 248, 0.3);
}

.fb-text {
  text-align: left;
}

.fb-title {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
  white-space: nowrap;
}

.fb-sub {
  font-size: 10.5px;
  color: var(--text-muted);
  font-weight: 500;
  white-space: nowrap;
}

/* Badge 1: Top Right */
.badge-top-right {
  top: 24px;
  right: -32px;
  animation: floatTopRight 4.5s ease-in-out infinite;
}

@keyframes floatTopRight {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

/* Badge 2: Bottom Left */
.badge-bottom-left {
  bottom: 32px;
  left: -36px;
  animation: floatBottomLeft 5s ease-in-out 1s infinite;
}

@keyframes floatBottomLeft {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}

.fb-status-pulse {
  position: relative;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.fb-pulse-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 8px #22c55e;
}

.fb-pulse-ring {
  position: absolute;
  inset: -2px;
  border-radius: 50%;
  background: rgba(34, 197, 94, 0.4);
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

/* Badge 3: Bottom Right */
.badge-bottom-right {
  bottom: -16px;
  right: 12px;
  animation: floatBottomRight 4s ease-in-out 2s infinite;
}

@keyframes floatBottomRight {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

/* ===== DASHBOARD SECTION (Full Width Centered) ===== */
.dashboard-section {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
}

/* ================================================================
   RESPONSIVE LAYOUT BREAKPOINTS
   ================================================================ */
@media (max-width: 1024px) {
  .hero-main-row {
    grid-template-columns: 1fr 1fr;
    gap: 36px;
  }
  .hero-image-card {
    max-width: 320px;
    height: 400px;
  }
  .badge-top-right { right: -16px; }
  .badge-bottom-left { left: -16px; }
}

@media (max-width: 860px) {
  .hero {
    padding: 110px 16px 60px;
  }

  .hero-main-row {
    grid-template-columns: 1fr;
    gap: 48px;
    margin-bottom: 56px;
  }

  .hero-left-content {
    align-items: center;
    text-align: center;
  }

  .hero-desc {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-cta-bar {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-socials {
    justify-content: center;
  }

  .hero-tech-badges {
    justify-content: center;
  }

  .hero-image-card {
    max-width: 300px;
    height: 380px;
    margin: 0 auto;
  }

  .badge-top-right { right: -10px; }
  .badge-bottom-left { left: -10px; }
}

@media (max-width: 768px) {
  .dashboard-section {
    display: none;
  }

  .hero-main-row {
    margin-bottom: 0;
  }
}

@media (max-width: 480px) {
  .hero-image-card {
    max-width: 260px;
    height: 330px;
  }

  .badge-top-right,
  .badge-bottom-right {
    display: none; /* Hide outer floating badges on narrow mobile to avoid horizontal scrolling */
  }

  .badge-bottom-left {
    left: 50%;
    transform: translateX(-50%) !important;
    bottom: -18px;
    animation: none;
  }

  .hero-cta-bar {
    flex-direction: column;
    border-radius: 16px;
    padding: 12px;
    gap: 10px;
  }

  .cta-input-pill {
    width: 100%;
  }

  .cta-btn {
    width: 100%;
    justify-content: center;
    border-radius: 12px;
  }
}
</style>
