<template>
  <div class="dashboard-wrapper" aria-label="Interactive portfolio dashboard preview">
    <!-- Window Chrome Bar -->
    <div class="window-chrome">
      <div class="window-controls">
        <span class="wc-btn wc-red"></span>
        <span class="wc-btn wc-yellow"></span>
        <span class="wc-btn wc-green"></span>
      </div>
      <div class="window-breadcrumb">
        <span class="bc-seg">~/portfolio</span>
        <span class="bc-sep">/</span>
        <span class="bc-seg bc-active">{{ activeTab === 'projects' ? 'projects' : activeTab === 'experience' ? 'experience' : 'tech-stack' }}</span>
      </div>
      <div class="window-toolbar">
        <div class="search-pill">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            v-model="searchQuery"
            class="search-input"
            placeholder="Search…"
            aria-label="Search projects"
          />
        </div>
        <button class="toolbar-btn" title="Add new" aria-label="Add item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
        <button class="toolbar-btn" title="Open live" aria-label="External link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </button>
      </div>
    </div>

    <!-- Main Panel -->
    <div class="dashboard-body">
      <!-- Sidebar -->
      <aside class="sidebar">
        <nav class="sidebar-nav" aria-label="Dashboard tabs">
          <button
            class="sidebar-item"
            :class="{ active: activeTab === 'projects' }"
            @click="activeTab = 'projects'"
          >
            <svg class="si-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            <span>Projects</span>
          </button>
          <button
            class="sidebar-item"
            :class="{ active: activeTab === 'experience' }"
            @click="activeTab = 'experience'"
          >
            <svg class="si-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
            </svg>
            <span>Work & Education</span>
          </button>
          <button
            class="sidebar-item"
            :class="{ active: activeTab === 'techstack' }"
            @click="activeTab = 'techstack'"
          >
            <svg class="si-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
            </svg>
            <span>Tech Stack</span>
          </button>
        </nav>

        <!-- Sidebar footer stats -->
        <div class="sidebar-stats">
          <div class="ss-item">
            <span class="ss-val">{{ projects.length }}</span>
            <span class="ss-label">Projects</span>
          </div>
          <div class="ss-divider"></div>
          <div class="ss-item">
            <span class="ss-val">1+</span>
            <span class="ss-label">Years Exp</span>
          </div>
        </div>
      </aside>

      <!-- Main Content Area -->
      <main class="dash-content">
        <!-- PROJECTS KANBAN VIEW -->
        <Transition name="tab-fade" mode="out-in">
          <div v-if="activeTab === 'projects'" key="projects" class="kanban-board">
            <!-- Column: Backlog -->
            <div class="kanban-col">
              <div class="col-header col-header--todo">
                <span class="col-dot"></span>
                <span class="col-title">Backlog</span>
                <span class="col-count">{{ filteredBacklog.length }}</span>
              </div>
              <div class="col-cards">
                <TransitionGroup name="card-list">
                  <div
                    v-for="p in filteredBacklog"
                    :key="p.id"
                    class="kanban-card"
                  >
                    <div v-if="p.image" class="kc-image-wrap">
                      <img :src="p.image" :alt="p.title" class="kc-img" loading="lazy" />
                    </div>
                    <div class="kc-top">
                      <span class="kc-priority kc-priority--low"></span>
                      <span class="kc-category">{{ p.category }}</span>
                    </div>
                    <h4 class="kc-title">{{ p.title }}</h4>
                    <p class="kc-desc">{{ p.description }}</p>
                    <div class="kc-tags">
                      <span class="kc-tag" v-for="t in p.technologies.slice(0, 3)" :key="t">{{ t }}</span>
                    </div>
                    <div class="kc-actions">
                      <a v-if="p.link" :href="p.link" target="_blank" rel="noopener" class="kc-btn kc-btn--demo">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        Demo
                      </a>
                      <a v-if="p.github" :href="p.github" target="_blank" rel="noopener" class="kc-btn kc-btn--github" title="GitHub">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                      </a>
                    </div>
                  </div>
                </TransitionGroup>
                <div v-if="filteredBacklog.length === 0" class="col-empty">No matches</div>
              </div>
            </div>

            <!-- Column: In Progress -->
            <div class="kanban-col">
              <div class="col-header col-header--inprogress">
                <span class="col-dot"></span>
                <span class="col-title">In Progress</span>
                <span class="col-count">{{ filteredInProgress.length }}</span>
              </div>
              <div class="col-cards">
                <TransitionGroup name="card-list">
                  <div
                    v-for="p in filteredInProgress"
                    :key="p.id"
                    class="kanban-card kanban-card--active"
                  >
                    <div v-if="p.image" class="kc-image-wrap">
                      <img :src="p.image" :alt="p.title" class="kc-img" loading="lazy" />
                    </div>
                    <div class="kc-top">
                      <span class="kc-priority kc-priority--high"></span>
                      <span class="kc-category">{{ p.category }}</span>
                    </div>
                    <h4 class="kc-title">{{ p.title }}</h4>
                    <p class="kc-desc">{{ p.description }}</p>
                    <div class="kc-tags">
                      <span class="kc-tag" v-for="t in p.technologies.slice(0, 3)" :key="t">{{ t }}</span>
                    </div>
                    <div class="kc-actions">
                      <a v-if="p.link" :href="p.link" target="_blank" rel="noopener" class="kc-btn kc-btn--demo">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        Demo
                      </a>
                      <a v-if="p.github" :href="p.github" target="_blank" rel="noopener" class="kc-btn kc-btn--github" title="GitHub">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                      </a>
                    </div>
                  </div>
                </TransitionGroup>
                <div v-if="filteredInProgress.length === 0" class="col-empty">No matches</div>
              </div>
            </div>

            <!-- Column: Completed -->
            <div class="kanban-col">
              <div class="col-header col-header--done">
                <span class="col-dot"></span>
                <span class="col-title">Completed</span>
                <span class="col-count">{{ filteredDone.length }}</span>
              </div>
              <div class="col-cards">
                <TransitionGroup name="card-list">
                  <div
                    v-for="p in filteredDone"
                    :key="p.id"
                    class="kanban-card"
                  >
                    <div v-if="p.image" class="kc-image-wrap">
                      <img :src="p.image" :alt="p.title" class="kc-img" loading="lazy" />
                    </div>
                    <div class="kc-top">
                      <span class="kc-priority kc-priority--done"></span>
                      <span class="kc-category">{{ p.category }}</span>
                    </div>
                    <h4 class="kc-title">{{ p.title }}</h4>
                    <p class="kc-desc">{{ p.description }}</p>
                    <div class="kc-tags">
                      <span class="kc-tag" v-for="t in p.technologies.slice(0, 3)" :key="t">{{ t }}</span>
                    </div>
                    <div class="kc-actions">
                      <a v-if="p.link" :href="p.link" target="_blank" rel="noopener" class="kc-btn kc-btn--demo">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        Demo
                      </a>
                      <a v-if="p.github" :href="p.github" target="_blank" rel="noopener" class="kc-btn kc-btn--github" title="GitHub">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                      </a>
                    </div>
                  </div>
                </TransitionGroup>
                <div v-if="filteredDone.length === 0" class="col-empty">No matches</div>
              </div>
            </div>
          </div>

          <!-- WORK & EDUCATION VIEW -->
          <div v-else-if="activeTab === 'experience'" key="experience" class="exp-view">
            <div class="exp-section">
              <h3 class="exp-section-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Training
              </h3>
              <div class="exp-card exp-card--training">
                <div class="exp-logos-3-col">
                  <div class="exp-logo-card"><img src="../assets/image/ANT.png" alt="ANT Technology" /></div>
                  <div class="exp-logo-card"><img src="../assets/image/MPTC.png" alt="MPTC" /></div>
                  <div class="exp-logo-card"><img src="../assets/image/CBRD_Fund.png" alt="CBRD Fund" /></div>
                </div>
                <div class="exp-body">
                  <div class="exp-header">
                    <h4>Web Development Training</h4>
                    <span class="exp-badge exp-badge--scholarship">100% Scholarship</span>
                  </div>
                  <p class="exp-org">ANT Technology Training Center</p>
                  <p class="exp-period">2025 – 2026</p>
                  <p class="exp-desc">Sponsored by the Ministry of Posts and Telecommunications (MPTC) and the CBRD Fund</p>
                </div>
              </div>
            </div>

            <div class="exp-section">
              <h3 class="exp-section-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                Education
              </h3>
              <div class="exp-card">
                <div class="exp-logos">
                  <img src="../assets/image/rupp.png" alt="RUPP" class="exp-logo" />
                </div>
                <div class="exp-body">
                  <div class="exp-header">
                    <h4>Bachelor of Computer Science</h4>
                    <span class="exp-badge exp-badge--edu">GPA 3.12</span>
                  </div>
                  <p class="exp-org">Royal University of Phnom Penh (RUPP)</p>
                  <p class="exp-period">2025 – 2026 (Expected Graduation)</p>
                </div>
              </div>
            </div>

            <!-- Stats row -->
            <div class="exp-stats">
              <div class="es-item"><span class="es-val">1+</span><span class="es-label">Years Exp</span></div>
              <div class="es-item"><span class="es-val">7+</span><span class="es-label">Projects</span></div>
              <div class="es-item"><span class="es-val">18+</span><span class="es-label">Clients</span></div>
              <div class="es-item"><span class="es-val">100%</span><span class="es-label">Dedication</span></div>
            </div>
          </div>

          <!-- TECH STACK VIEW -->
          <div v-else-if="activeTab === 'techstack'" key="techstack" class="tech-view">
            <div v-for="group in techGroups" :key="group.category" class="tech-group">
              <h3 class="tech-group-title">{{ group.category }}</h3>
              <div class="tech-pills">
                <span class="tech-pill" v-for="tech in group.items" :key="tech.name">
                  <span class="tp-dot" :style="{ background: tech.color }"></span>
                  {{ tech.name }}
                </span>
              </div>
            </div>
          </div>
        </Transition>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import khmerOcrImage from '@/assets/image/khmer_ocr.png';
import workSyncImage from '@/assets/image/worksync.png';
import phunkTopicImage from '@/assets/image/phunk.png';
import futureTechImage from '@/assets/image/futuretech.png';
import motulImage from '@/assets/image/motul.png';
import amadoImage from '@/assets/image/amado.png';
import tosReamImage from '@/assets/image/tosrean.png';
import jubPetImage from '@/assets/image/jubpet.png';

// ── Active sidebar tab ──────────────────────────────────────────
const activeTab = ref('projects');
const searchQuery = ref('');

// ── Project data (sourced from Portfolio.vue) ───────────────────
const projects = ref([
  {
    id: 1,
    title: 'Khmer OCR',
    description: 'Convert photos, scanned docs, and live speech into editable Khmer Unicode text. 100% private, on-device AI.',
    category: 'Web Dev',
    image: khmerOcrImage,
    technologies: ['React JS', 'Tailwind CSS', 'AI OCR', 'Speech API'],
    link: 'https://khmer-ocr-nine.vercel.app/',
    github: 'https://github.com/Satya6800/KhmerOCR.git',
    status: 'done',
  },
  {
    id: 2,
    title: 'Work Sync',
    description: 'SaaS-grade Vue.js platform with API integrations and real-time inventory management. MPTC Scholarship project.',
    category: 'Web Dev',
    image: workSyncImage,
    technologies: ['Vue.js', 'JavaScript', 'Bootstrap', 'REST API'],
    link: 'https://worksync-eta.vercel.app/',
    github: 'https://github.com/Satya6800/WorkSync.git',
    status: 'inprogress',
  },
  {
    id: 3,
    title: 'Jub Pet',
    description: 'Full-stack clinic management system with JWT auth and a complete REST API. MPTC Scholarship project.',
    category: 'Web Dev',
    image: jubPetImage,
    technologies: ['Vue 3', 'Node.js', 'Express', 'MySQL'],
    link: 'https://jubpet-frontend.g2.ant.com.kh/doctors',
    github: 'https://github.com/Satya6800/JubPet-Frontend',
    status: 'done',
  },
  {
    id: 4,
    title: 'Future Tech',
    description: 'Responsive multi-section landing page for a tech company with smooth animations.',
    category: 'Web Dev',
    image: futureTechImage,
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    link: 'https://future-tech-pro.vercel.app/',
    github: 'https://github.com/reachBorinhun/Future-Tech-Pro.git',
    status: 'backlog',
  },
  {
    id: 5,
    title: 'Motul Ecommerce',
    description: 'Static frontend e-commerce storefront for automotive products.',
    category: 'Web Dev',
    image: motulImage,
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    link: 'https://motul.vercel.app/',
    github: 'https://github.com/Satya6800/Motul.git',
    status: 'backlog',
  },
  {
    id: 6,
    title: 'Amado Adventure',
    description: 'Data visualization and adventure travel platform with interactive gallery.',
    category: 'Web Dev',
    image: amadoImage,
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    link: 'https://amado-cp.vercel.app/',
    github: 'https://github.com/Satya6800/amado.git',
    status: 'backlog',
  },
  {
    id: 7,
    title: 'Tos Rean App',
    description: 'Mobile e-learning platform built with Flutter — static prototype showcasing the UI/UX design.',
    category: 'Mobile Dev',
    image: tosReamImage,
    technologies: ['Flutter', 'Dart'],
    link: '',
    github: 'https://github.com/Satya6800/tos-rean-app.git',
    status: 'done',
  },
  {
    id: 8,
    title: 'Phunk Topic',
    description: 'Music blog & article platform with category filters and responsive layout.',
    category: 'Web Dev',
    image: phunkTopicImage,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: 'https://phunk-topic-v2.vercel.app/',
    github: 'https://github.com/Satya6800/PhunkTopicV2.git',
    status: 'backlog',
  },
]);

// ── Filtered project lists ──────────────────────────────────────
const filterProjects = (status) =>
  projects.value.filter(
    (p) =>
      p.status === status &&
      (searchQuery.value === '' ||
        p.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(searchQuery.value.toLowerCase())))
  );

const filteredBacklog = computed(() => filterProjects('backlog'));
const filteredInProgress = computed(() => filterProjects('inprogress'));
const filteredDone = computed(() => filterProjects('done'));

// ── Tech stack groups ────────────────────────────────────────────
const techGroups = [
  {
    category: 'Frontend',
    items: [
      { name: 'Vue 3', color: '#42d392' },
      { name: 'React', color: '#61dafb' },
      { name: 'JavaScript', color: '#f7df1e' },
      { name: 'TypeScript', color: '#3178c6' },
      { name: 'Bootstrap 5', color: '#7952b3' },
      { name: 'Tailwind CSS', color: '#38bdf8' },
      { name: 'Flutter', color: '#54c5f8' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', color: '#6cc24a' },
      { name: 'Express.js', color: '#94a3b8' },
      { name: 'REST API', color: '#fb923c' },
      { name: 'JWT Auth', color: '#f59e0b' },
    ],
  },
  {
    category: 'Database & Cloud',
    items: [
      { name: 'MySQL', color: '#4479a1' },
      { name: 'MongoDB', color: '#47a248' },
      { name: 'Vercel', color: '#ffffff' },
      { name: 'Git / GitHub', color: '#f05033' },
    ],
  },
  {
    category: 'Tools & Design',
    items: [
      { name: 'Figma', color: '#f24e1e' },
      { name: 'Vite', color: '#646cff' },
      { name: 'AOS', color: '#60a5fa' },
      { name: 'Dart', color: '#0175c2' },
    ],
  },
];
</script>

<style scoped>
/* ================================================================
   DASHBOARD PREVIEW WRAPPER
   ================================================================ */
.dashboard-wrapper {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--dash-chrome-border);
  background: var(--dash-bg);
  box-shadow:
    0 0 0 1px var(--dash-chrome-border),
    0 32px 80px rgba(0, 0, 0, 0.45),
    0 0 60px rgba(59, 130, 246, 0.06);
}

/* ================================================================
   WINDOW CHROME / TOP BAR
   ================================================================ */
.window-chrome {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.65rem 1rem;
  background: var(--dash-chrome);
  border-bottom: 1px solid var(--dash-chrome-border);
  min-height: 46px;
}

.window-controls {
  display: flex;
  gap: 6px;
  align-items: center;
  flex-shrink: 0;
}

.wc-btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
}
.wc-red    { background: var(--dash-window-btn-red);    }
.wc-yellow { background: var(--dash-window-btn-yellow); }
.wc-green  { background: var(--dash-window-btn-green);  }

.window-breadcrumb {
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Poppins', monospace;
  font-size: 12px;
  color: var(--text-muted);
  flex: 1;
}

.bc-seg        { color: var(--text-muted); }
.bc-sep        { color: var(--border-color); margin: 0 2px; }
.bc-active     { color: var(--text-primary); font-weight: 600; }

.window-toolbar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
}

.search-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--dash-search-bg);
  border: 1px solid var(--dash-search-border);
  border-radius: 9999px;
  padding: 0.3rem 0.75rem;
}

.search-icon {
  width: 13px;
  height: 13px;
  color: var(--text-muted);
  flex-shrink: 0;
}

.search-input {
  background: none;
  border: none;
  outline: none;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: var(--text-primary);
  width: 120px;
}
.search-input::placeholder { color: var(--text-muted); }

.toolbar-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid var(--dash-chrome-border);
  border-radius: 8px;
  background: var(--dash-search-bg);
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.2s ease;
}
.toolbar-btn:hover {
  background: var(--toggle-hover-bg);
  color: var(--text-primary);
  border-color: var(--border-active);
}
.toolbar-btn svg { width: 14px; height: 14px; }

/* ================================================================
   DASHBOARD BODY (sidebar + content)
   ================================================================ */
.dashboard-body {
  display: flex;
  height: 560px;
  overflow: hidden;
}

/* ================================================================
   SIDEBAR
   ================================================================ */
.sidebar {
  width: 168px;
  flex-shrink: 0;
  background: var(--dash-sidebar-bg);
  border-right: 1px solid var(--dash-sidebar-border);
  display: flex;
  flex-direction: column;
  padding: 0.75rem 0;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0 0.6rem;
  flex: 1;
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.55rem 0.75rem;
  border-radius: 10px;
  border: none;
  background: transparent;
  color: var(--text-muted);
  font-family: 'Poppins', sans-serif;
  font-size: 12.5px;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
  width: 100%;
}

.sidebar-item:hover {
  background: var(--dash-sidebar-item-hover);
  color: var(--text-primary);
}

.sidebar-item.active {
  background: var(--dash-sidebar-item-active-bg);
  color: var(--dash-sidebar-item-active-color);
  font-weight: 600;
}

.si-icon {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

.sidebar-stats {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.75rem;
  border-top: 1px solid var(--dash-sidebar-border);
  margin-top: auto;
}

.ss-item { text-align: center; }
.ss-val {
  display: block;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: var(--text-primary);
}
.ss-label {
  font-size: 10px;
  color: var(--text-muted);
  font-weight: 500;
}
.ss-divider {
  width: 1px;
  height: 28px;
  background: var(--dash-sidebar-border);
}

/* ================================================================
   MAIN CONTENT
   ================================================================ */
.dash-content {
  flex: 1;
  overflow: hidden;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

/* ================================================================
   KANBAN BOARD
   ================================================================ */
.kanban-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  height: 100%;
  overflow: hidden;
}

/* COLUMN */
.kanban-col {
  background: var(--dash-column-bg);
  border: 1px solid var(--dash-column-border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.col-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.65rem 0.85rem;
  border-bottom: 1px solid var(--dash-column-border);
  flex-shrink: 0;
}
.col-header--todo       { background: var(--dash-column-header-todo); }
.col-header--inprogress { background: var(--dash-column-header-inprogress); }
.col-header--done       { background: var(--dash-column-header-done); }

.col-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.col-header--todo       .col-dot { background: var(--dash-column-dot-todo); }
.col-header--inprogress .col-dot { background: var(--dash-column-dot-inprogress); box-shadow: 0 0 6px var(--dash-column-dot-inprogress); }
.col-header--done       .col-dot { background: var(--dash-column-dot-done); }

.col-title {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
  flex: 1;
}

.col-count {
  font-size: 11px;
  font-weight: 600;
  color: var(--text-muted);
  background: var(--toggle-bg);
  border-radius: 9999px;
  padding: 1px 7px;
}

.col-cards {
  flex: 1;
  overflow-y: auto;
  padding: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  scrollbar-width: thin;
  scrollbar-color: var(--border-active) transparent;
}

.col-empty {
  text-align: center;
  font-size: 12px;
  color: var(--text-muted);
  padding: 1.5rem 0;
}

/* KANBAN CARD */
.kanban-card {
  background: var(--dash-card-bg);
  border: 1px solid var(--dash-card-border);
  border-radius: 10px;
  padding: 0.75rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  cursor: default;
  box-shadow: var(--dash-card-shadow);
}

.kanban-card:hover {
  border-color: var(--dash-card-hover-border);
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.12);
  transform: translateY(-2px);
}

.kanban-card--active {
  border-color: rgba(59, 130, 246, 0.2);
}

.kc-image-wrap {
  width: 100%;
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 9px;
  background: var(--bg-secondary);
  border: 1px solid var(--dash-card-border);
  position: relative;
}

.kc-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  display: block;
}

.kanban-card:hover .kc-img {
  transform: scale(1.06);
}

.kc-top {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
}

.kc-priority {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}
.kc-priority--low  { background: var(--dash-column-dot-todo); }
.kc-priority--high { background: var(--dash-column-dot-inprogress); box-shadow: 0 0 5px var(--dash-column-dot-inprogress); }
.kc-priority--done { background: var(--dash-column-dot-done); }

.kc-category {
  font-size: 10px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-left: auto;
}

.kc-title {
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 4px;
  line-height: 1.3;
}

.kc-desc {
  font-size: 11.5px;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0 0 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.kc-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 8px;
}

.kc-tag {
  font-size: 10px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 9999px;
  background: var(--dash-pill-bg);
  color: var(--dash-pill-color);
  border: 1px solid var(--dash-pill-border);
}

.kc-actions {
  display: flex;
  gap: 5px;
}

.kc-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: 'Poppins', sans-serif;
  font-size: 10.5px;
  font-weight: 600;
  padding: 4px 9px;
  border-radius: 7px;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
}

.kc-btn svg { width: 11px; height: 11px; }

.kc-btn--demo {
  background: var(--badge-bg);
  border: 1px solid var(--badge-border);
  color: var(--badge-color);
  flex: 1;
  justify-content: center;
}
.kc-btn--demo:hover {
  background: var(--brand-gradient);
  border-color: transparent;
  color: #fff;
}

.kc-btn--github {
  background: var(--toggle-bg);
  border: 1px solid var(--border-color);
  color: var(--text-muted);
  width: 30px;
  justify-content: center;
  padding: 4px;
}
.kc-btn--github:hover {
  color: var(--text-primary);
  border-color: var(--border-active);
}

/* ================================================================
   EXPERIENCE VIEW
   ================================================================ */
.exp-view {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  padding-right: 4px;
}

.exp-section-title {
  display: flex;
  align-items: center;
  gap: 7px;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin-bottom: 0.5rem;
}
.exp-section-title svg { width: 13px; height: 13px; }

.exp-card {
  display: flex;
  gap: 1rem;
  background: var(--dash-card-bg);
  border: 1px solid var(--dash-card-border);
  border-radius: 12px;
  padding: 0.9rem;
}

.exp-card--training {
  flex-direction: column;
  gap: 0.75rem;
}

.exp-logos-3-col {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  width: 100%;
}

.exp-logo-card {
  background: #ffffff;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 6px 10px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  overflow: hidden;
}

.exp-logo-card:hover {
  border-color: var(--border-active);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
}

.exp-logo-card img {
  max-width: 100%;
  max-height: 34px;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
}

.exp-logos {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-shrink: 0;
}

.exp-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background: white;
  padding: 4px;
}

.exp-body { flex: 1; }

.exp-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
}

.exp-header h4 {
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
  line-height: 1.3;
}

.exp-badge {
  font-size: 10px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 9999px;
  white-space: nowrap;
  flex-shrink: 0;
}

.exp-badge--scholarship {
  background: rgba(59, 130, 246, 0.12);
  color: var(--brand-blue);
  border: 1px solid rgba(59, 130, 246, 0.25);
}

.exp-badge--edu {
  background: rgba(34, 197, 94, 0.1);
  color: var(--dash-column-dot-done);
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.exp-org {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-accent);
  margin: 0 0 2px;
}

.exp-period {
  font-size: 11px;
  color: var(--text-muted);
  margin: 0 0 4px;
}

.exp-desc {
  font-size: 11.5px;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0;
}

.exp-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  background: var(--dash-card-bg);
  border: 1px solid var(--dash-card-border);
  border-radius: 12px;
  padding: 0.9rem;
}

.es-item { text-align: center; }
.es-val {
  display: block;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 800;
  background: var(--brand-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.es-label {
  font-size: 10px;
  color: var(--text-muted);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* ================================================================
   TECH STACK VIEW
   ================================================================ */
.tech-view {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  overflow-y: auto;
  align-content: start;
}

.tech-group {
  background: var(--dash-card-bg);
  border: 1px solid var(--dash-card-border);
  border-radius: 12px;
  padding: 0.85rem;
}

.tech-group-title {
  font-family: 'Poppins', sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin: 0 0 0.6rem;
}

.tech-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.tech-pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: 'Poppins', sans-serif;
  font-size: 11.5px;
  font-weight: 500;
  color: var(--text-secondary);
  background: var(--dash-column-bg);
  border: 1px solid var(--dash-column-border);
  border-radius: 9999px;
  padding: 3px 9px;
  transition: all 0.2s ease;
}
.tech-pill:hover {
  border-color: var(--border-active);
  color: var(--text-primary);
}

.tp-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* ================================================================
   TAB TRANSITIONS
   ================================================================ */
.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.tab-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.tab-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.card-list-enter-active,
.card-list-leave-active {
  transition: all 0.3s ease;
}
.card-list-enter-from,
.card-list-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* ================================================================
   RESPONSIVE
   ================================================================ */
@media (max-width: 900px) {
  .search-input { width: 80px; }
}

@media (max-width: 768px) {
  .dashboard-body { height: auto; flex-direction: column; }
  .sidebar {
    width: 100%;
    flex-direction: row;
    border-right: none;
    border-bottom: 1px solid var(--dash-sidebar-border);
    padding: 0.5rem;
  }
  .sidebar-nav { flex-direction: row; overflow-x: auto; }
  .sidebar-stats { display: none; }
  .kanban-board { grid-template-columns: 1fr; height: auto; }
  .kanban-col { min-height: 200px; }
  .tech-view { grid-template-columns: 1fr; }
  .exp-stats { grid-template-columns: repeat(2, 1fr); }
  .window-breadcrumb { display: none; }
  .search-input { width: 60px; }
}
</style>
