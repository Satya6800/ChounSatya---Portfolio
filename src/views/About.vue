<template>
  <section class="about">
    <!-- Animated Bubbles -->
    <div class="bubbles">
      <div class="bubble" v-for="n in 12" :key="n"></div>
    </div>

    <!-- Grid Pattern -->
    <div class="grid-overlay"></div>

    <!-- Glowing Orbs -->
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>

    <div class="container">
      <!-- About Header -->
      <div class="section-header">
        <div class="badge">About Me</div>
        <h2>Who Am I?</h2>
        <p class="intro-text">
          I'm a passionate Full Stack Developer with expertise in building scalable web applications.
          Combining creative design thinking with technical excellence to solve real-world problems.
        </p>
      </div>

      <!-- About Grid -->
      <div class="about-grid">
        <!-- Left: Bio Card -->
        <div class="bio-card">
          <div class="card-header">
            <h3>My Story</h3>
            <div class="accent-line"></div>
          </div>
          <p class="bio-text">
            I started my journey in web development with a passion for creating beautiful, functional digital
            experiences.
            Over the years, I've worked with startups and established companies, developing full-stack solutions that
            scale and perform brilliantly.
          </p>
          <p class="bio-text">
            I believe great code is not just about functionality—it's about craftsmanship, clean architecture, and
            continuously learning new technologies to stay ahead in this ever-evolving field.
          </p>
          <div class="cta-link">
            <a href="#" class="link-accent">Read Full Story →</a>
          </div>
        </div>

        <!-- Right: Photo Thumbnail -->
        <div class="photo-card">
          <div class="photo-container">
            <div class="photo-glow"></div>
            <div class="photo-ring"></div>
            <img src="../assets/image/Syamal.png" alt="Profile Photo" class="profile-photo">
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="skills-section">
        <h3 class="section-title">Core Skills</h3>
        <div class="skills-grid">
          <!-- Skill Card 1 -->
          <div class="skill-card">
            <div class="skill-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline>
                <line x1="12" y1="12" x2="20" y2="7.5"></line>
                <line x1="12" y1="12" x2="12" y2="21"></line>
                <line x1="12" y1="12" x2="4" y2="7.5"></line>
              </svg>
            </div>
            <h4>Frontend Development</h4>
            <p>Vue.js, React, Tailwind CSS, Modern JavaScript, Responsive Design</p>
          </div>

          <!-- Skill Card 2 -->
          <div class="skill-card">
            <div class="skill-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="1"></circle>
                <path d="M12 1v6m0 6v6"></path>
                <path d="M4.22 4.22l4.24 4.24m2.12 2.12l4.24 4.24"></path>
                <path d="M1 12h6m6 0h6"></path>
                <path d="M4.22 19.78l4.24-4.24m2.12-2.12l4.24-4.24"></path>
              </svg>
            </div>
            <h4>Backend Development</h4>
            <p>Node.js, Express, MongoDB, REST APIs, Database Design</p>
          </div>

          <!-- Skill Card 3 -->
          <div class="skill-card">
            <div class="skill-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
                </path>
              </svg>
            </div>
            <h4>UI/UX Design</h4>
            <p>Figma, Wireframing, Prototyping, User Research, Design Systems</p>
          </div>

          <!-- Skill Card 4 -->
          <div class="skill-card">
            <div class="skill-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
                <path d="M12 6v6l4 2"></path>
              </svg>
            </div>
            <h4>Project Management</h4>
            <p>Agile, Git, Team Collaboration, Problem Solving, Performance Optimization</p>
          </div>
        </div>
      </div>

      <!-- Training Timeline -->
      <div class="experience-section">
        <h3 class="section-title">Training</h3>
        <div class="timeline">


          <!-- Timeline Item 2 -->
          <div class="timeline-item">
            <div class="timeline-marker">
              <div class="marker-dot"></div>
            </div>
            <div class="timeline-content">
              <div class="company-thumbnail logos-3">
                <img src="../assets/image/ANT.png" alt="ANT Technology Training Center">
                <img src="../assets/image/MPTC.png" alt="MPTC">
                <img src="../assets/image/CBRD_Fund.png" alt="CBRD Fund">
              </div>
              <div class="timeline-header">
                <h4>Web Development Training (100% Scholarship)</h4>
                <span class="timeline-date">2025 - 2026</span>
              </div>
              <p class="company">ANT Technology Training Center</p>
              <p class="description">
                Sponsored by the Ministry of Posts and Telecommunications (MPTC) and the CBRD Fund
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Education Timeline -->
      <div class="experience-section">
        <h3 class="section-title">Education</h3>
        <div class="timeline">
          <!-- Timeline Item 1 -->
          <div class="timeline-item">
            <div class="timeline-marker">
              <div class="marker-dot"></div>
            </div>
            <div class="timeline-content">
              <div class="company-thumbnail">
                <img src="../assets/image/rupp.png" alt="Royal University of Phnom Penh (RUPP)">
              </div>
              <div class="timeline-header">
                <h4>Bachelor of Computer Science</h4>
                <span class="timeline-date">2025 - 2026</span>
              </div>
              <p class="company">Royal University of Phnom Penh (RUPP)</p>
              <p class="description">
                Expected Graduation: 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="stats-section">
        <div class="stat-box">
          <div class="stat-number">1<span>+</span></div>
          <div class="stat-name">Years Experience</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">7<span>+</span></div>
          <div class="stat-name">Projects Completed</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">18<span>+</span></div>
          <div class="stat-name">Happy Clients</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">100<span>%</span></div>
          <div class="stat-name">Dedication</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700&display=swap');

/* ===== BASE ===== */
.about {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(160deg, #0a0f2e 0%, #0d1f4a 40%, #0a2a3e 100%);
  overflow: hidden;
  font-family: 'Syne', sans-serif;
  padding: 140px 0 80px;
}

/* ===== ANIMATION LAYERS ===== */
.bubbles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.bubble {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(120, 200, 255, 0.18), rgba(60, 120, 220, 0.05));
  border: 1px solid rgba(120, 200, 255, 0.12);
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
    opacity: 0.6;
  }

  100% {
    transform: translateY(-110vh) scale(1.1);
    opacity: 0;
  }
}

.bubble:nth-child(1) {
  width: 14px;
  height: 14px;
  left: 6%;
  bottom: -10%;
  animation-duration: 9s;
  animation-delay: 0s;
}

.bubble:nth-child(2) {
  width: 22px;
  height: 22px;
  left: 14%;
  bottom: -10%;
  animation-duration: 12s;
  animation-delay: 1.5s;
}

.bubble:nth-child(3) {
  width: 8px;
  height: 8px;
  left: 23%;
  bottom: -10%;
  animation-duration: 7s;
  animation-delay: 3s;
}

.bubble:nth-child(4) {
  width: 30px;
  height: 30px;
  left: 35%;
  bottom: -10%;
  animation-duration: 14s;
  animation-delay: 0.5s;
}

.bubble:nth-child(5) {
  width: 16px;
  height: 16px;
  left: 50%;
  bottom: -10%;
  animation-duration: 10s;
  animation-delay: 2s;
}

.bubble:nth-child(6) {
  width: 10px;
  height: 10px;
  left: 62%;
  bottom: -10%;
  animation-duration: 8s;
  animation-delay: 4s;
}

.bubble:nth-child(7) {
  width: 24px;
  height: 24px;
  left: 72%;
  bottom: -10%;
  animation-duration: 13s;
  animation-delay: 1s;
}

.bubble:nth-child(8) {
  width: 18px;
  height: 18px;
  left: 83%;
  bottom: -10%;
  animation-duration: 11s;
  animation-delay: 2.5s;
}

.bubble:nth-child(9) {
  width: 6px;
  height: 6px;
  left: 90%;
  bottom: -10%;
  animation-duration: 6s;
  animation-delay: 0.8s;
}

.bubble:nth-child(10) {
  width: 36px;
  height: 36px;
  left: 44%;
  bottom: -10%;
  animation-duration: 16s;
  animation-delay: 3.5s;
}

.bubble:nth-child(11) {
  width: 12px;
  height: 12px;
  left: 18%;
  bottom: -10%;
  animation-duration: 9s;
  animation-delay: 5s;
}

.bubble:nth-child(12) {
  width: 20px;
  height: 20px;
  left: 78%;
  bottom: -10%;
  animation-duration: 11s;
  animation-delay: 1.8s;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(80, 160, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(80, 160, 255, 0.04) 1px, transparent 1px);
  background-size: 48px 48px;
  z-index: 0;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 0;
}

.orb-1 {
  width: 400px;
  height: 400px;
  top: -80px;
  right: -60px;
  background: rgba(30, 100, 220, 0.18);
}

.orb-2 {
  width: 300px;
  height: 300px;
  bottom: -50px;
  left: -80px;
  background: rgba(10, 160, 180, 0.14);
}

/* ===== CONTAINER ===== */
.container {
  position: relative;
  z-index: 2;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
}

/* ===== SECTION HEADER ===== */
.section-header {
  text-align: center;
  margin-bottom: 80px;
  animation: fadeInUp 0.9s ease both;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(40, 120, 255, 0.12);
  border: 1px solid rgba(80, 160, 255, 0.25);
  color: #00cffa;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 100px;
  margin-bottom: 20px;
  backdrop-filter: blur(8px);
}

.badge::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #4aa8ff;
  box-shadow: 0 0 6px #4aa8ff;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.3;
  }
}

.section-header h2 {
  font-size: clamp(36px, 4vw, 52px);
  font-weight: 700;
  background: linear-gradient(120deg, #5ab4ff, #a78bfa, #5ab4ff);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
  animation: shimmer 4s linear infinite;
}

@keyframes shimmer {
  to {
    background-position: 200% center;
  }
}

.intro-text {
  font-size: 16px;
  line-height: 1.7;
  color: rgba(180, 210, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;
}

/* ===== ABOUT GRID ===== */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 100px;
  animation: fadeInUp 0.9s ease 0.2s both;
}

/* ===== BIO CARD ===== */
.bio-card {
  background: rgba(20, 40, 100, 0.25);
  border: 1px solid rgba(80, 160, 255, 0.2);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
}

.bio-card:hover {
  border-color: rgba(80, 160, 255, 0.4);
  background: rgba(20, 40, 100, 0.35);
  transform: translateY(-4px);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.card-header h3 {
  font-size: 22px;
  font-weight: 700;
  color: #e8f0ff;
  margin: 0;
}

.accent-line {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #5ab4ff, #a78bfa);
  border-radius: 2px;
}

.bio-text {
  font-size: 15px;
  line-height: 1.8;
  color: rgba(180, 210, 255, 0.75);
  margin-bottom: 16px;
}

.cta-link {
  margin-top: 24px;
}

.link-accent {
  font-size: 14px;
  font-weight: 600;
  color: #5ab4ff;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.3s ease;
  position: relative;
}

.link-accent::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #5ab4ff, #a78bfa);
  transition: width 0.3s ease;
}

.link-accent:hover::after {
  width: 100%;
}

/* ===== PHOTO CARD ===== */
.photo-card {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeInRight 0.9s ease 0.2s both;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(32px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.photo-container {
  position: relative;
  width: 300px;
  height: 400px;
}

.photo-glow {
  position: absolute;
  inset: -40px;
  border-radius: 20px;
  background: radial-gradient(ellipse at center, rgba(90, 180, 255, 0.3), transparent 70%);
  filter: blur(20px);
  animation: glowPulse 3s ease-in-out infinite;
}

@keyframes glowPulse {

  0%,
  100% {
    opacity: 0.6;
  }

  50% {
    opacity: 1;
  }
}

.photo-ring {
  position: absolute;
  inset: 0;
  border: 2px solid rgba(90, 180, 255, 0.3);
  border-radius: 20px;
  animation: rotateRing 20s linear infinite;
}

@keyframes rotateRing {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.profile-photo {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
  border: 1px solid rgba(90, 180, 255, 0.4);
}

/* ===== SKILLS SECTION ===== */
.skills-section {
  margin-bottom: 100px;
  animation: fadeInUp 0.9s ease 0.3s both;
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  color: #e8f0ff;
  margin-bottom: 40px;
  text-align: center;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #5ab4ff, #a78bfa);
  border-radius: 2px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.skill-card {
  background: rgba(20, 40, 100, 0.2);
  border: 1px solid rgba(80, 160, 255, 0.2);
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(8px);
}

.skill-card:hover {
  border-color: rgba(90, 180, 255, 0.5);
  background: rgba(30, 80, 160, 0.3);
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(90, 180, 255, 0.15);
}

.skill-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 16px;
  background: linear-gradient(135deg, rgba(90, 180, 255, 0.2), rgba(167, 139, 250, 0.2));
  border: 1px solid rgba(90, 180, 255, 0.3);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5ab4ff;
  transition: all 0.3s ease;
}

.skill-card:hover .skill-icon {
  background: linear-gradient(135deg, rgba(90, 180, 255, 0.4), rgba(167, 139, 250, 0.4));
  color: #a78bfa;
  box-shadow: 0 0 20px rgba(90, 180, 255, 0.3);
}

.skill-icon svg {
  width: 28px;
  height: 28px;
}

.skill-card h4 {
  font-size: 16px;
  font-weight: 700;
  color: #e8f0ff;
  margin-bottom: 8px;
}

.skill-card p {
  font-size: 13px;
  color: rgba(180, 210, 255, 0.65);
  line-height: 1.5;
  margin: 0;
}

/* ===== EXPERIENCE SECTION ===== */
.experience-section {
  margin-bottom: 100px;
  animation: fadeInUp 0.9s ease 0.4s both;
}

.experience-section .section-title {
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
}

.timeline {
  position: relative;
  padding: 20px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, rgba(90, 180, 255, 0.5), transparent);
}

.timeline-item {
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 30px;
  margin-bottom: 40px;
  animation: fadeInUp 0.6s ease backwards;
}

.timeline-item:nth-child(1) {
  animation-delay: 0.5s;
}

.timeline-item:nth-child(2) {
  animation-delay: 0.6s;
}

.timeline-item:nth-child(3) {
  animation-delay: 0.7s;
}

.timeline-marker {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.marker-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(135deg, #5ab4ff, #a78bfa);
  box-shadow: 0 0 20px rgba(90, 180, 255, 0.6);
  transition: all 0.3s ease;
}

.timeline-item:hover .marker-dot {
  width: 20px;
  height: 20px;
  box-shadow: 0 0 30px rgba(90, 180, 255, 0.8);
}

.timeline-content {
  background: rgba(20, 40, 100, 0.2);
  border: 1px solid rgba(80, 160, 255, 0.2);
  border-radius: 12px;
  padding: 24px;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-content {
  border-color: rgba(90, 180, 255, 0.4);
  background: rgba(30, 80, 160, 0.3);
  transform: translateX(8px);
}

.company-thumbnail {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  margin-bottom: 16px;
  overflow: hidden;
  border: 2px solid rgba(90, 180, 255, 0.3);
  box-shadow: 0 8px 24px rgba(90, 180, 255, 0.15);
  transition: all 0.3s ease;
}

.timeline-item:hover .company-thumbnail {
  border-color: rgba(90, 180, 255, 0.6);
  box-shadow: 0 12px 32px rgba(90, 180, 255, 0.25);
  transform: scale(1.05);
}

.company-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: white;
  padding: 4px;
}

.company-thumbnail.logos-3 {
  width: auto;
  display: inline-flex;
  gap: 8px;
  background: white;
  padding: 4px 12px;
}

.company-thumbnail.logos-3 img {
  width: auto;
  padding: 0;
  max-width: 80px;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 8px;
  gap: 16px;
}

.timeline-content h4 {
  font-size: 16px;
  font-weight: 700;
  color: #e8f0ff;
  margin: 0;
}

.timeline-date {
  font-size: 12px;
  color: #5ab4ff;
  font-weight: 600;
  white-space: nowrap;
}

.company {
  font-size: 13px;
  color: #a78bfa;
  font-weight: 600;
  margin: 0 0 8px 0;
}

.description {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(180, 210, 255, 0.7);
  margin: 0;
}

/* ===== STATS SECTION ===== */
.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  padding: 60px 40px;
  background: rgba(20, 40, 100, 0.15);
  border: 1px solid rgba(80, 160, 255, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(8px);
  animation: fadeInUp 0.9s ease 0.5s both;
}

.stat-box {
  text-align: center;
  transition: all 0.3s ease;
}

.stat-box:hover {
  transform: translateY(-4px);
}

.stat-number {
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 700;
  background: linear-gradient(120deg, #5ab4ff, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
  display: block;
}

.stat-number span {
  font-size: 0.6em;
}

.stat-name {
  font-size: 14px;
  color: rgba(180, 210, 255, 0.75);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* ===== ANIMATIONS ===== */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(32px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .container {
    padding: 0 24px;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .photo-container {
    width: 240px;
    height: 320px;
  }

  .timeline::before {
    left: 8px;
  }

  .timeline-item {
    grid-template-columns: 40px 1fr;
    gap: 20px;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .stats-section {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding: 40px 24px;
  }

  .section-header {
    margin-bottom: 60px;
  }

  .about-grid,
  .skills-section,
  .experience-section {
    margin-bottom: 60px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 16px;
  }

  .section-header h2 {
    font-size: 28px;
  }

  .stats-section {
    grid-template-columns: 1fr;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .accent-line {
    width: 100%;
    height: 2px;
  }
}
</style>
