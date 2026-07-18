<template>
  <section class="about">
    <div class="container">
      <!-- About Header -->
      <div class="section-header" data-aos="fade-up">
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
        <div class="bio-card" data-aos="fade-right" data-aos-delay="100">
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
        <div class="photo-card" data-aos="fade-left" data-aos-delay="200">
          <div class="photo-container">
            <div class="photo-glow"></div>
            <div class="photo-ring"></div>
            <img src="../assets/image/Syamal.png" alt="Profile Photo" class="profile-photo">
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="skills-section">
        <h3 class="section-title" data-aos="fade-up">Core Skills</h3>
        <div class="skills-grid">
          <!-- Skill Card 1 -->
          <div class="skill-card" data-aos="zoom-in" data-aos-delay="100">
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
          <div class="skill-card" data-aos="zoom-in" data-aos-delay="200">
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
          <div class="skill-card" data-aos="zoom-in" data-aos-delay="300">
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
          <div class="skill-card" data-aos="zoom-in" data-aos-delay="400">
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
        <h3 class="section-title" data-aos="fade-up">Training</h3>
        <div class="timeline">


          <!-- Timeline Item 2 -->
          <div class="timeline-item" data-aos="fade-right" data-aos-delay="100">
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
        <h3 class="section-title" data-aos="fade-up">Education</h3>
        <div class="timeline">
          <!-- Timeline Item 1 -->
          <div class="timeline-item" data-aos="fade-right" data-aos-delay="100">
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
              <p class="description">
                GPA: 3.12
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="stats-section">
        <div class="stat-box" data-aos="zoom-in" data-aos-delay="100">
          <div class="stat-number">1<span>+</span></div>
          <div class="stat-name">Years Experience</div>
        </div>
        <div class="stat-box" data-aos="zoom-in" data-aos-delay="200">
          <div class="stat-number">7<span>+</span></div>
          <div class="stat-name">Projects Completed</div>
        </div>
        <div class="stat-box" data-aos="zoom-in" data-aos-delay="300">
          <div class="stat-number">18<span>+</span></div>
          <div class="stat-name">Happy Clients</div>
        </div>
        <div class="stat-box" data-aos="zoom-in" data-aos-delay="400">
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


/* ===== BASE ===== */
.about {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  font-family: 'Syne', sans-serif;
  padding: 140px 0 80px;
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
  background: var(--orb-1-color);
}

.orb-2 {
  width: 300px;
  height: 300px;
  bottom: -50px;
  left: -80px;
  background: var(--orb-2-color);
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
  background: var(--badge-bg);
  border: 1px solid var(--badge-border);
  color: var(--badge-color);
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
  background: var(--text-accent);
  box-shadow: 0 0 6px var(--text-accent);
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
  background: var(--brand-gradient);
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
  color: var(--text-secondary);
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
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
}

.bio-card:hover {
  border-color: var(--border-active);
  background: var(--bg-card-hover);
  box-shadow: var(--shadow-md);
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
  color: var(--text-primary);
  margin: 0;
}

.accent-line {
  width: 60px;
  height: 3px;
  background: var(--accent-line);
  border-radius: 2px;
}

.bio-text {
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.cta-link {
  margin-top: 24px;
}

.link-accent {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-accent);
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
  background: var(--accent-line);
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
  background: radial-gradient(ellipse at center, var(--orb-1-color), transparent 70%);
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
  border: 2px solid var(--border-color);
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
  border: 1px solid var(--border-active);
}

/* ===== SKILLS SECTION ===== */
.skills-section {
  margin-bottom: 100px;
  animation: fadeInUp 0.9s ease 0.3s both;
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
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
  background: var(--accent-line);
  border-radius: 2px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.skill-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(8px);
}

.skill-card:hover {
  border-color: var(--border-active);
  background: var(--bg-card-hover);
  transform: translateY(-8px);
  box-shadow: var(--shadow-md);
}

.skill-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 16px;
  background: var(--badge-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-accent);
  transition: all 0.3s ease;
}

.skill-card:hover .skill-icon {
  background: var(--bg-card-hover);
  color: var(--brand-purple);
  box-shadow: var(--shadow-glow);
}

.skill-icon svg {
  width: 28px;
  height: 28px;
}

.skill-card h4 {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.skill-card p {
  font-size: 13px;
  color: var(--text-muted);
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
  left: 29px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--border-active), transparent);
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
  background: var(--brand-gradient);
  box-shadow: var(--shadow-glow);
  transition: all 0.3s ease;
}

.timeline-item:hover .marker-dot {
  width: 20px;
  height: 20px;
  box-shadow: var(--shadow-glow);
}

.timeline-content {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 24px;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-content {
  border-color: var(--border-active);
  background: var(--bg-card-hover);
  box-shadow: var(--shadow-md);
  transform: translateX(8px);
}

.company-thumbnail {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  margin-bottom: 16px;
  overflow: hidden;
  border: 2px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.timeline-item:hover .company-thumbnail {
  border-color: var(--border-active);
  box-shadow: var(--shadow-md);
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
  width: 100%;
  max-width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  background: white;
  padding: 8px 16px;
  box-sizing: border-box;
}

.company-thumbnail.logos-3 img {
  width: auto;
  height: auto;
  max-height: 48px;
  padding: 0;
  object-fit: contain;
  max-width: 100%;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 8px;
  gap: 8px 16px;
}

.timeline-content h4 {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.timeline-date {
  font-size: 12px;
  color: var(--text-accent);
  font-weight: 600;
  white-space: nowrap;
}

.company {
  font-size: 13px;
  color: var(--text-accent);
  font-weight: 600;
  margin: 0 0 8px 0;
}

.description {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0;
}

/* ===== STATS SECTION ===== */
.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  padding: 60px 40px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
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
  background: var(--brand-gradient);
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
  color: var(--text-muted);
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
    left: 19px;
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

  .company-thumbnail.logos-3 {
    gap: 8px;
    padding: 8px;
  }

  .company-thumbnail.logos-3 img {
    max-height: 28px;
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


