<template>
  <section class="contact-page">
    <div class="background-layer">
      <div class="bubbles">
        <div class="bubble" v-for="n in 10" :key="n"></div>
      </div>
      <div class="grid-overlay"></div>
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>

    <div class="page-content">
      <div class="section-head">
        <span class="eyebrow">Contact</span>
        <h2>Ready to build something great?</h2>
        <p>Send a message and let’s turn your idea into a polished product. I’m available for freelance work, collaborations, and full-cycle development.</p>
      </div>

      <div class="contact-grid">
        <div class="feature-panel">
          <p class="feature-text">I’m currently open to new opportunities — say hello.</p>

          <div class="email-row">
            <span>satyachoun169@gmail.com</span>
            <button type="button" class="btn-copy" @click="copyEmail">{{ copyText }}</button>
          </div>

          <div class="social-row">
            <a href="https://www.linkedin.com/in/choun-satya-68587534a" class="social-btn" title="LinkedIn"
              target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1 4.98 2.12 4.98 3.5zM0 24h5V8H0v16zm7.5-16h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.1 3.4 6.1 7.8V24h-5V14.8c0-2.2 0-5-3-5s-3.4 2.3-3.4 4.8V24h-5V8z" />
              </svg>
            </a>
            <a href="https://t.me/satyachoun" class="social-btn" title="Telegram" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51 0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152 35.56-14.786 42.94-17.354 47.76-17.441 1.06-.017 3.42.245 4.96 1.49 1.28 1.05 1.64 2.47 1.82 3.467.16.996.38 3.266.2 5.038-1.92 20.24-10.26 69.356-14.5 92.026-1.78 9.592-5.32 12.808-8.74 13.122-7.44.684-13.08-4.912-20.28-9.63-11.26-7.386-17.62-11.982-28.56-19.188-12.64-8.328-4.44-12.906 2.76-20.386 1.88-1.958 34.64-31.748 35.26-34.45.08-.338.16-1.598-.6-2.262-.74-.666-1.84-.438-2.64-.258-1.14.256-19.12 12.152-54 35.686-5.1 3.508-9.72 5.218-13.88 5.128-4.56-.098-13.36-2.584-19.9-4.708-8-2.606-14.38-3.984-13.82-8.41.28-2.304 3.46-4.662 9.52-7.072Z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/share/16kTkSWDKK/?mibextid=wwXIfr" class="social-btn" title="Facebook"
              target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22 12.07c0-5.51-4.48-9.99-9.99-9.99S2.02 6.56 2.02 12.07c0 4.99 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.79c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.75l-.44 2.89h-2.31v6.99c4.78-.75 8.44-4.89 8.44-9.88Z" />
              </svg>
            </a>
            <a href="https://github.com/Satya6800" class="social-btn" title="GitHub" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 1024 1024" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M512 76C281.6 76 96 261.6 96 492c0 176.4 114.4 325.8 273.2 378.8 20 3.6 27.4-8.6 27.4-19.2 0-9.4-.4-40.8-.6-74-111.2 24.2-134.6-53.6-134.6-53.6-18.2-46.2-44.4-58.6-44.4-58.6-36.4-24.8 2.8-24.2 2.8-24.2 40.2 2.8 61.4 41.2 61.4 41.2 35.8 61.2 93.8 43.6 116.6 33.4 3.6-25.8 14-43.6 25.4-53.6-88.8-10.1-182-44.4-182-197.4 0-43.6 15.6-79.2 41.2-107.2-4.2-10.1-17.8-50.8 3.8-105.8 0 0 33.6-10.8 110 40.8 31.8-8.8 65.8-13.2 99.6-13.4 33.8.2 67.8 4.6 99.6 13.4 76.4-51.6 110-40.8 110-40.8 21.6 55 8 95.6 3.8 105.8 25.6 28 41.2 63.6 41.2 107.2 0 153.6-93.4 187.2-182 197.2 14.4 12.4 27.4 36.8 27.4 74.2 0 53.6-.4 96.8-.4 110 0 10.6 7.2 23 27.6 19.2C813.6 817.8 928 668.4 928 492 928 261.6 742.4 76 512 76Z" />
              </svg>
            </a>
          </div>
        </div>

        <div class="contact-card contact-info">
          <h3>Let’s connect</h3>
          <p>Powerful solutions start with a clear conversation. Share your timeline, goals, and budget, and I’ll respond quickly.</p>

          <div class="info-list">
            <div>
              <span>Email</span>
              <p>satyachoun169@gmail.com</p>
            </div>
            <div>
              <span>Phone</span>
              <p>+855 962 676 441</p>
            </div>
            <div>
              <span>Location</span>
              <p>Phnom Penh, Cambodia</p>
            </div>
          </div>

          <div class="quick-features">
            <div class="pill">Fast reply</div>
            <div class="pill">Project planning</div>
            <div class="pill">Trusted partner</div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const copyText = ref('Copy');

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('satyachoun169@gmail.com');
    copyText.value = 'Copied!';
    setTimeout(() => {
      copyText.value = 'Copy';
    }, 2000);
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700&display=swap');

.contact-page {
  position: relative;
  min-height: 100vh;
  padding: 110px 0 80px;
  color: var(--contact-page-color);
  background: var(--contact-bg);
  overflow: hidden;
  font-family: 'Syne', sans-serif;
}

.background-layer {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.bubbles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.bubble {
  position: absolute;
  border-radius: 50%;
  background: var(--bg-bubble);
  border: 1px solid var(--bubble-border);
  animation: floatBubble linear infinite;
}

@keyframes floatBubble {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  90% {
    opacity: 0.55;
  }

  100% {
    transform: translateY(-110vh) scale(1.05);
    opacity: 0;
  }
}

.bubble:nth-child(1) {
  width: 14px;
  height: 14px;
  left: 5%;
  bottom: -11%;
  animation-duration: 9s;
  animation-delay: 0s;
}

.bubble:nth-child(2) {
  width: 22px;
  height: 22px;
  left: 15%;
  bottom: -10%;
  animation-duration: 12s;
  animation-delay: 1.5s;
}

.bubble:nth-child(3) {
  width: 10px;
  height: 10px;
  left: 24%;
  bottom: -8%;
  animation-duration: 8s;
  animation-delay: 2.1s;
}

.bubble:nth-child(4) {
  width: 28px;
  height: 28px;
  left: 37%;
  bottom: -12%;
  animation-duration: 14s;
  animation-delay: 0.7s;
}

.bubble:nth-child(5) {
  width: 18px;
  height: 18px;
  left: 50%;
  bottom: -9%;
  animation-duration: 9s;
  animation-delay: 1.7s;
}

.bubble:nth-child(6) {
  width: 12px;
  height: 12px;
  left: 64%;
  bottom: -10%;
  animation-duration: 11s;
  animation-delay: 2.9s;
}

.bubble:nth-child(7) {
  width: 24px;
  height: 24px;
  left: 73%;
  bottom: -11%;
  animation-duration: 13s;
  animation-delay: 0.9s;
}

.bubble:nth-child(8) {
  width: 16px;
  height: 16px;
  left: 84%;
  bottom: -12%;
  animation-duration: 10s;
  animation-delay: 2.4s;
}

.bubble:nth-child(9) {
  width: 8px;
  height: 8px;
  left: 92%;
  bottom: -8%;
  animation-duration: 7s;
  animation-delay: 1.2s;
}

.bubble:nth-child(10) {
  width: 34px;
  height: 34px;
  left: 44%;
  bottom: -13%;
  animation-duration: 16s;
  animation-delay: 4.1s;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(var(--grid-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
  background-size: 42px 42px;
  opacity: 0.22;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.7;
}

.orb-1 {
  width: 180px;
  height: 180px;
  top: 4%;
  right: 10%;
  background: var(--orb-contact-1);
}

.orb-2 {
  width: 220px;
  height: 220px;
  bottom: 8%;
  left: 8%;
  background: var(--orb-contact-2);
}

.orb-3 {
  width: 120px;
  height: 120px;
  bottom: 28%;
  right: 18%;
  background: var(--orb-3-color);
}

.page-content {
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-head {
  max-width: 660px;
  margin-bottom: 42px;
}

.eyebrow {
  display: inline-flex;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  background: var(--eyebrow-bg);
  color: var(--eyebrow-color);
  letter-spacing: 0.16em;
  font-size: 0.75rem;
  text-transform: uppercase;
}

.section-head h2 {
  font-size: clamp(2rem, 3vw, 3.2rem);
  margin: 1rem 0 1rem;
}

.section-head p {
  color: var(--text-secondary);
  line-height: 1.85;
}

.contact-grid {
  display: grid;
  grid-template-columns: minmax(360px, 1.2fr) minmax(360px, 0.8fr);
  gap: 32px;
  align-items: stretch;
}

.contact-card,
.contact-form {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 30px;
  backdrop-filter: blur(18px);
  padding: 32px;
}

.contact-card h3,
.contact-form h3 {
  margin-top: 0;
  margin-bottom: 18px;
  font-size: 1.5rem;
}

.contact-card p {
  color: var(--text-secondary);
  line-height: 1.85;
}

.info-list {
  margin-top: 28px;
  display: grid;
  gap: 18px;
}

.info-list span {
  display: block;
  font-size: 0.88rem;
  color: var(--info-label);
  margin-bottom: 0.35rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.info-list p {
  margin: 0;
  color: var(--contact-page-color);
  line-height: 1.7;
}

.quick-features {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.feature-panel {
  margin-bottom: 0;
  padding: 36px 36px 40px;
  background: var(--bg-card-hover);
  border: 1px solid var(--border-card);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.feature-text {
  max-width: 720px;
  color: var(--contact-page-color);
  font-size: 1.05rem;
  line-height: 1.75;
}

.email-row {
  width: 100%;
  max-width: 760px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 14px;
  align-items: center;
  padding: 0.8rem 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border-input);
  border-radius: 16px;
}

.email-row span {
  color: var(--contact-page-color);
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.btn-copy {
  border: none;
  border-radius: 14px;
  padding: 0.92rem 1.3rem;
  background: var(--copy-btn-bg);
  color: var(--contact-page-color);
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.25s ease, background 0.25s ease;
}

.btn-copy:hover {
  background: var(--copy-btn-hover-bg);
  transform: translateY(-1px);
}

.social-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
}

.social-btn {
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background: var(--social-bg);
  border: 1px solid var(--social-border);
  color: var(--social-color);
  transition: background 0.3s, border-color 0.3s, transform 0.2s, box-shadow 0.2s, color 0.3s;
}

.social-btn:hover {
  background: var(--social-hover-bg);
  border-color: var(--social-hover-border);
  transform: translateY(-3px);
  color: var(--social-hover-color);
  box-shadow: 0 6px 16px rgba(0,0,0,0.2);
}

.social-btn svg {
  width: 20px;
  height: 20px;
}

.pill {
  display: inline-flex;
  padding: 0.65rem 1rem;
  border-radius: 999px;
  background: var(--bg-card-hover);
  color: var(--pill-color);
  font-size: 0.88rem;
}

.contact-form {
  display: grid;
  gap: 20px;
}

.input-group {
  display: grid;
  gap: 0.6rem;
}

.input-group label {
  color: var(--text-label);
  font-size: 0.9rem;
}

.input-group input,
.input-group textarea {
  width: 100%;
  border: 1px solid var(--border-input);
  background: var(--bg-input);
  color: var(--contact-page-color);
  border-radius: 16px;
  padding: 0.95rem 1rem;
  outline: none;
  transition: border-color 0.25s ease, background 0.25s ease;
}

.input-group input:focus,
.input-group textarea:focus {
  border-color: rgba(0, 212, 255, 0.35);
  background: var(--bg-card-hover);
}

.contact-form button {
  border: none;
  cursor: pointer;
  border-radius: 18px;
  padding: 1rem 1.4rem;
  font-weight: 700;
  color: #081125;
  background: var(--brand-gradient);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.contact-form button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-btn-hover);
}

@media (max-width: 980px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .feature-panel {
    padding: 28px 22px;
  }

  .email-row {
    grid-template-columns: 1fr;
  }

  .email-row button {
    width: 100%;
    justify-self: stretch;
  }
}

@media (max-width: 680px) {
  .contact-page {
    padding-top: 90px;
  }
}
</style>
