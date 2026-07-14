<template>
  <section class="portfolio-section">
    <!-- Background Effects -->
    <div class="bubbles">
      <div class="bubble" v-for="n in 12" :key="n"></div>
    </div>

    <!-- Grid Pattern Overlay -->
    <div class="grid-overlay"></div>

    <!-- Glow Orbs -->
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>

    <!-- Water Ripple -->
    <div class="ripple-wrap">
      <div class="ripple"></div>
      <div class="ripple"></div>
    </div>

    <div class="container">
      <!-- Header -->
      <div class="portfolio-header">
        <h1 class="portfolio-title">
          My <span class="highlight">Portfolio</span>
        </h1>
        <p class="portfolio-subtitle">
          Explore my recent projects and creative work
        </p>
      </div>

      <!-- Filter Tags -->
      <div class="filter-tags">
        <button
          @click="selectedFilter = 'all'"
          :class="{ active: selectedFilter === 'all' }"
          class="filter-tag"
        >
          All Projects
        </button>
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedFilter = category"
          :class="{ active: selectedFilter === category }"
          class="filter-tag"
        >
          {{ category }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        <transition-group name="fade" tag="div" class="grid-wrapper">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.id"
            :project="project"
            class="project-item"
          />
        </transition-group>
      </div>

      <!-- Empty State -->
      <div v-if="filteredProjects.length === 0" class="empty-state">
        <div class="empty-icon">📁</div>
        <h3>No Projects Found</h3>
        <p>Try selecting a different category</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';
import workSyncImage from '@/assets/image/worksync.png';
import phunkTopicImage from '@/assets/image/phunk.png'
import futureTechImage from '@/assets/image/futuretech.png'
import motulImage from '@/assets/image/motul.png'
import amadoImage from '@/assets/image/amado.png'
import tosReamImage from '@/assets/image/tosrean.png'

const selectedFilter = ref('all');

const projects = ref([
  {
    id: 1,
    title: 'Work Sync',
    description: 'Dynamic Frontend project solution with premium features, Api integration, and real-time inventory management.',
    image: workSyncImage,
    category: 'Web Development',
    technologies: ['Vue.js', 'JavaScript', 'Bootstrap', 'API'],
    stats: {
      'Users': '10k+',
      'Performance': 'A+',
      'Uptime': '99.9%'
    },
    link: 'https://worksync-eta.vercel.app/',
    github: 'https://github.com/Satya6800/WorkSync.git'
  },
  {
    id: 2,
    title: 'Phunk Topic',
    description: 'Static Frountend Web Development with Article Music topic.',
    image: phunkTopicImage,
    category: 'Web Development',
    technologies: ['HTML', 'CSS', 'JavaScript','BootStrap'],
    stats: {
      'Features': '25+',
      'Downloads': '50k+',
      'Rating': '4.8★'
    },
    link: 'https://phunk-topic-v2.vercel.app/',
    github: 'https://github.com/Satya6800/PhunkTopicV2.git'
  },
  
  {
    id: 3,
    title: 'Future Tech',
    description: 'Static web development project for managing multiple social media accounts with scheduling, analytics, and team collaboration.',
    image: futureTechImage,
    category: 'Web Development',
    technologies: ['HTML', 'CSS', 'BOOTSTRAP','JAVASCRIPT'],
    stats: {
      'Platforms': '8',
      'Scheduling': '500+/mo',
      'Analytics': 'Real-time'
    },
    link: 'https://future-tech-pro.vercel.app/',
    github: 'https://github.com/reachBorinhun/Future-Tech-Pro.git'
  },
  {
    id: 4,
    title: 'Motul Ecommerce',
    description: 'Static Web Frontend project with ecommerce store.',
    image: motulImage,
     category: 'Web Development',
    technologies: ['html', 'css', 'bootstrap'],
    stats: {
      'Accuracy': '94%',
      'Speed': '0.2s',
      'Users': '5k+'
    },
    link: 'https://motul.vercel.app/',
    github: 'https://github.com/Satya6800/Motul.git'
  },
  {
    id: 5,
    title: 'Amado Advanture',
    description: 'Advanced data visualization and business intelligence platform with custom chart types and real-time data sync.',
    image: amadoImage,
    category: 'Web Development',
    technologies: ['html', 'css', 'bootstrap'],
    stats: {
      'Charts': '20+',
      'Data Points': '1M+',
      'Refresh': 'Real-time'
    },
    link: 'https://amado-cp.vercel.app/',
    github: 'https://github.com/Satya6800/amado.git'
  },
  {
    id: 6,
    title: 'Tos Rean App',
    description: 'Static Mobile App Development Project with Education app platfrom Elearning',
    image: tosReamImage,
    category: 'Mobile Development',
    technologies: ['Flutter', 'Dart'],
    stats: {
      'Workouts': '100+',
      'Monthly Users': '20k+',
      'Rating': '4.9★'
    },
    link: '',
    github: 'https://github.com/Satya6800/tos-rean-app.git'
  }
]);

const categories = computed(() => {
  const cats = new Set(projects.value.map(p => p.category));
  return Array.from(cats).sort();
});

const filteredProjects = computed(() => {
  if (selectedFilter.value === 'all') {
    return projects.value;
  }
  return projects.value.filter(p => p.category === selectedFilter.value);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700&display=swap');

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
  background: var(--bg-bubble);
  border: 1px solid var(--bubble-border);
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
  border: 1px solid var(--border-color);
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
    linear-gradient(var(--grid-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
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

.orb-1 { width:400px; height:400px; top:-80px; right:-60px;  background: var(--orb-1-color); }
.orb-2 { width:300px; height:300px; bottom:-50px; left:-80px; background: var(--orb-2-color); }

/* ===== MAIN SECTION ===== */
.portfolio-section {
  position: relative;
  min-height: 100vh;
  background: var(--hero-bg);
  overflow: hidden;
  font-family: 'Syne', sans-serif;
  display: flex;
  align-items: center;
  padding: 120px 20px 60px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Header */
.portfolio-header {
  text-align: center;
  margin-bottom: 70px;
  animation: headerReveal 0.8s ease-out;
}

@keyframes headerReveal {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.portfolio-title {
  font-size: 54px;
  font-weight: 900;
  margin: 0 0 16px 0;
  color: var(--text-primary);
  letter-spacing: -2px;
  line-height: 1.2;
}

.highlight {
  background: var(--brand-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.highlight::before {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, #64a0ff, transparent);
  border-radius: 50%;
  filter: blur(2px);
}

.portfolio-subtitle {
  font-size: 18px;
  color: var(--text-secondary);
  margin: 0;
  font-weight: 400;
  letter-spacing: 0.5px;
}

/* Filter Tags */
.filter-tags {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 50px;
  flex-wrap: wrap;
  animation: tagsSlideIn 0.6s ease-out 0.2s both;
}

@keyframes tagsSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.filter-tag {
  padding: 10px 22px;
  background: var(--filter-bg);
  border: 1.5px solid var(--filter-border);
  border-radius: 30px;
  color: var(--filter-color);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
  text-transform: capitalize;
  letter-spacing: 0.3px;
}

.filter-tag::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(100, 160, 255, 0.15);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.4s ease, height 0.4s ease;
  z-index: -1;
}

.filter-tag:hover::before {
  width: 300px;
  height: 300px;
}

.filter-tag:hover {
  background: var(--filter-active-bg);
  border-color: var(--filter-active-border);
  color: var(--filter-active-color);
  transform: translateY(-4px);
}

.filter-tag.active {
  background: var(--filter-active-bg);
  border-color: var(--filter-active-border);
  color: #fff;
  box-shadow: 0 0 30px rgba(100, 160, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transform: scale(1.05);
}

/* Projects Grid */
.projects-grid {
  position: relative;
}

.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 28px;
  width: 100%;
}

.project-item {
  animation: cardEntry 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.project-item:nth-child(1) { animation-delay: 0s; }
.project-item:nth-child(2) { animation-delay: 0.1s; }
.project-item:nth-child(3) { animation-delay: 0.2s; }
.project-item:nth-child(4) { animation-delay: 0.3s; }
.project-item:nth-child(5) { animation-delay: 0.4s; }
.project-item:nth-child(6) { animation-delay: 0.5s; }

@keyframes cardEntry {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 80px 20px;
  color: var(--text-muted);
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.empty-icon {
  font-size: 80px;
  margin-bottom: 24px;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.empty-state h3 {
  font-size: 28px;
  color: var(--text-primary);
  margin: 0 0 12px 0;
  font-weight: 700;
}

.empty-state p {
  margin: 0;
  font-size: 16px;
}

/* Responsive */
@media (max-width: 768px) {
  .portfolio-section {
    padding: 100px 15px 40px;
  }

  .portfolio-title {
    font-size: 36px;
  }

  .portfolio-subtitle {
    font-size: 16px;
  }

  .grid-wrapper {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
  }

  .bubble {
    opacity: 0.3;
  }
}

@media (max-width: 480px) {
  .portfolio-section {
    padding: 80px 12px 30px;
  }

  .portfolio-title {
    font-size: 28px;
  }

  .portfolio-subtitle {
    font-size: 14px;
  }

  .grid-wrapper {
    grid-template-columns: 1fr;
  }

  .filter-tags {
    gap: 8px;
  }

  .filter-tag {
    padding: 6px 14px;
    font-size: 12px;
  }
}
</style>


