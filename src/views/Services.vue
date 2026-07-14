<template>
  <section class="services-page">
    <div class="background-layer">
      <div class="bubbles">
        <div class="bubble" v-for="n in 10" :key="n"></div>
      </div>
      <div class="grid-overlay"></div>
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
    </div>

    <div class="page-content">
      <div class="section-head">
        <span class="eyebrow">Services</span>
        <h2>What I Deliver</h2>
        <p>From polished web apps to scalable backend systems, I provide modern solutions built for speed, usability,
          and growth.</p>
      </div>

      <div class="service-grid">
        <article class="service-card">
          <div class="service-icon icon-design">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
          </div>
          <h3>UI / UX Design</h3>
          <p>Crafting intuitive digital experiences with clean layouts, strong typography, and a user-first approach.
          </p>
        </article>

        <article class="service-card">
          <div class="service-icon icon-code">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </div>
          <h3>Web Development</h3>
          <p>Building responsive, fast websites using Vue, JavaScript, and modern frontend architectures.</p>
        </article>

        <article class="service-card">
          <div class="service-icon icon-api">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <h3>API & Backend</h3>
          <p>Designing secure RESTful APIs, database schemas, and server-side logic for reliable app performance.</p>
        </article>

        <article class="service-card">
          <div class="service-icon icon-speed">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="4"/></svg>
          </div>
          <h3>Performance Tuning</h3>
          <p>Optimizing load times, reducing bundle size, and improving the experience across desktop and mobile.</p>
        </article>
      </div>

      <div class="feature-row">
        <div class="feature-card">
          <span class="feature-badge">Strategy</span>
          <h4>Consultative Planning</h4>
          <p>Aligning your project goals with technology choices and growth-driven product features.</p>
        </div>
        <div class="feature-card">
          <span class="feature-badge">Delivery</span>
          <h4>Fast Iteration</h4>
          <p>Regular updates, clean code reviews, and production-ready releases for every milestone.</p>
        </div>
        <div class="feature-card">
          <span class="feature-badge">Support</span>
          <h4>Continued Growth</h4>
          <p>Post-launch maintenance, performance monitoring, and feature expansion guidance.</p>
        </div>
      </div>

      <section class="certificates-section">
        <div class="section-head small-head">
          <span class="eyebrow">Certifications</span>
          <h2>My Professional Certificates</h2>
          <p>Trusted credentials and training that reinforce the quality of the work I deliver across web development,
            design, and cloud platforms.</p>
        </div>

        <div class="certificate-carousel">
          <div class="certificate-track">
            <!-- First set of cards -->
            <article class="certificate-card" v-for="(cert, i) in certificates" :key="'a-' + i">
              <img class="cert-thumb" :src="cert.img" :alt="cert.title" />
              <div class="certificate-meta">
                <h4>{{ cert.title }}</h4>
                <p>{{ cert.desc }}</p>
              </div>
            </article>
            <!-- Duplicate set for seamless loop -->
            <article class="certificate-card" v-for="(cert, i) in certificates" :key="'b-' + i">
              <img class="cert-thumb" :src="cert.img" :alt="cert.title" />
              <div class="certificate-meta">
                <h4>{{ cert.title }}</h4>
                <p>{{ cert.desc }}</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import CCNA1 from '@/assets/image/CCNA1.png'
import AWS1 from '@/assets/image/AWS1.png'
import AWS2 from '@/assets/image/AWS2.png'
import AWS3 from '@/assets/image/AWS3.png'
import AWS4 from '@/assets/image/AWS4.png'
import CCNA2 from '@/assets/image/CCNA2.png'
import fortinet from '@/assets/image/fortinet.png'
import fortinet1 from '@/assets/image/fortinet1.png'

const certificates = [
  { img: CCNA1, title: 'Cisco Network', desc: 'CCNA: Switching, Routing, and Wireless Essentials.' },
  { img: CCNA2, title: 'Cisco Network', desc: 'CCNAv7: Introduction to Networks.' },
  { img: AWS1, title: 'AWS Academy', desc: 'AWS Academy Graduate - AWS Academy Cloud Architecting.' },
  { img: AWS2, title: 'AWS Academy', desc: 'AWS Academy Graduate - AWS Academy Cloud Foundations.' },
  { img: AWS3, title: 'AWS Academy', desc: 'AWS Academy Graduate - AWS Academy Data Engineering.' },
  { img: AWS4, title: 'AWS Academy', desc: 'AWS Academy Graduate - AWS Academy Machine Learning Foundations.' },
  { img: fortinet, title: 'Fortinet Training', desc: 'Fortinet Certified Associate in Cybersecurity.' },
  { img: fortinet1, title: 'Fortinet Training', desc: 'Fortinet Certified Fundamentals in Cybersecurity.' },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700&display=swap');

.services-page {
  position: relative;
  min-height: 100vh;
  padding: 110px 0 80px;
  background: var(--hero-bg);
  color: var(--text-primary);
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
  background: radial-gradient(circle at 30% 30%, rgba(120, 200, 255, 0.16), rgba(60, 120, 220, 0.05));
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
  left: 8%;
  bottom: -12%;
  animation-duration: 10s;
  animation-delay: 0s;
}

.bubble:nth-child(2) {
  width: 22px;
  height: 22px;
  left: 18%;
  bottom: -10%;
  animation-duration: 12s;
  animation-delay: 1.5s;
}

.bubble:nth-child(3) {
  width: 10px;
  height: 10px;
  left: 26%;
  bottom: -8%;
  animation-duration: 8s;
  animation-delay: 2.8s;
}

.bubble:nth-child(4) {
  width: 28px;
  height: 28px;
  left: 39%;
  bottom: -12%;
  animation-duration: 14s;
  animation-delay: 0.8s;
}

.bubble:nth-child(5) {
  width: 18px;
  height: 18px;
  left: 52%;
  bottom: -9%;
  animation-duration: 9s;
  animation-delay: 1.2s;
}

.bubble:nth-child(6) {
  width: 12px;
  height: 12px;
  left: 68%;
  bottom: -10%;
  animation-duration: 11s;
  animation-delay: 3s;
}

.bubble:nth-child(7) {
  width: 24px;
  height: 24px;
  left: 75%;
  bottom: -11%;
  animation-duration: 13s;
  animation-delay: 0.6s;
}

.bubble:nth-child(8) {
  width: 16px;
  height: 16px;
  left: 85%;
  bottom: -12%;
  animation-duration: 10s;
  animation-delay: 2.2s;
}

.bubble:nth-child(9) {
  width: 8px;
  height: 8px;
  left: 92%;
  bottom: -8%;
  animation-duration: 7s;
  animation-delay: 1.1s;
}

.bubble:nth-child(10) {
  width: 34px;
  height: 34px;
  left: 45%;
  bottom: -13%;
  animation-duration: 16s;
  animation-delay: 4s;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(var(--grid-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
  background-size: 42px 42px;
  opacity: 1; /* Opacity should be 1 since the variable has alpha */
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(110px);
  opacity: 0.75;
}

.orb-1 {
  width: 160px;
  height: 160px;
  top: 10%;
  right: 10%;
  background: var(--copy-btn-bg);
}

.orb-2 {
  width: 220px;
  height: 220px;
  bottom: 12%;
  left: 6%;
  background: rgba(139, 92, 246, 0.15);
}

.page-content {
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-head {
  max-width: 680px;
  margin-bottom: 48px;
}

.eyebrow {
  display: inline-block;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  background: var(--eyebrow-bg);
  color: var(--eyebrow-color);
  letter-spacing: 0.15em;
  font-size: 0.75rem;
  text-transform: uppercase;
}

.section-head h2 {
  font-size: clamp(2rem, 3vw, 3.2rem);
  margin: 1rem 0 1rem;
  line-height: 1.05;
}

.section-head p {
  color: var(--text-secondary);
  line-height: 1.85;
  max-width: 620px;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  margin-bottom: 42px;
}

.service-card {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 28px;
  padding: 28px;
  backdrop-filter: blur(18px);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.service-card:hover {
  transform: translateY(-6px);
  border-color: var(--border-active);
  background: var(--bg-card-hover);
  box-shadow: var(--shadow-sm);
}

.service-icon {
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  border-radius: 18px;
  margin-bottom: 18px;
  color: var(--text-primary);
  background: var(--copy-btn-bg);
}

.service-icon svg {
  width: 26px;
  height: 26px;
  stroke: currentColor;
}

.icon-design {
  background: linear-gradient(135deg, rgba(248, 113, 113, 0.16), rgba(251, 191, 36, 0.16));
}

.icon-code {
  background: linear-gradient(135deg, rgba(79, 70, 229, 0.18), rgba(99, 102, 241, 0.14));
}

.icon-api {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.18), rgba(16, 185, 129, 0.14));
}

.icon-speed {
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.18), rgba(59, 130, 246, 0.14));
}

.service-card h3 {
  margin: 0 0 0.75rem;
  font-size: 1.25rem;
}

.service-card p {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.8;
}

.feature-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.feature-card {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 26px;
  padding: 26px;
  backdrop-filter: blur(16px);
}

.feature-badge {
  display: inline-flex;
  padding: 0.5rem 0.85rem;
  border-radius: 999px;
  background: var(--bg-card-hover);
  color: var(--text-accent);
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.feature-card h4 {
  margin: 1rem 0 0.75rem;
}

.feature-card p {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.8;
}

.certificates-section {
  margin-top: 60px;
}

.small-head {
  max-width: 840px;
  margin-bottom: 32px;
}

.certificate-carousel {
  overflow: hidden;
  position: relative;
  margin: 0 -1.5rem;
  padding: 10px 0 0;
}

.certificate-track {
  display: flex;
  gap: 22px;
  padding-left: 1.5rem;
  animation: scrollCertificates 40s linear infinite;
  width: max-content;
}

.certificate-track:hover {
  animation-play-state: paused;
}

.certificate-card {
  flex: 0 0 320px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 2px;
  overflow: hidden;
  backdrop-filter: blur(16px);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.certificate-card:hover {
  transform: translateY(-5px);
  border-color: var(--border-active);
  background: var(--bg-card-hover);
}

.cert-thumb {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
}

.certificate-meta {
  padding: 20px;
}

.certificate-meta h4 {
  margin: 0 0 0.5rem;
  font-size: 1.05rem;
}

.certificate-meta p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.65;
}

@keyframes scrollCertificates {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

@media (max-width: 1180px) {
  .certificate-track {
    gap: 18px;
  }

  .certificate-card {
    flex: 0 0 290px;
    min-width: 290px;
  }
}

@media (max-width: 900px) {

  .service-grid,
  .feature-row {
    grid-template-columns: 1fr;
  }

  .certificate-card {
    flex: 0 0 260px;
    min-width: 260px;
  }

  .certificate-meta {
    padding: 16px;
  }

  .certificate-meta h4 {
    font-size: 0.95rem;
  }

  .certificate-meta p {
    font-size: 0.85rem;
    line-height: 1.55;
  }

  .certificate-track {
    gap: 16px;
    animation-duration: 35s;
  }
}

@media (max-width: 640px) {
  .services-page {
    padding-top: 90px;
  }

  .section-head h2 {
    font-size: 2.2rem;
  }

  .certificate-card {
    flex: 0 0 calc(100vw - 3rem);
    min-width: calc(100vw - 3rem);
    border-radius: 2px;
  }

  .certificate-carousel {
    margin: 0 -1.5rem;
  }

  .certificate-track {
    gap: 14px;
    padding-left: 1.5rem;
    animation-duration: 50s;
  }

  .certificate-meta {
    padding: 14px;
  }

  .certificate-meta h4 {
    font-size: 0.9rem;
  }

  .certificate-meta p {
    font-size: 0.82rem;
    line-height: 1.5;
  }
}
</style>


