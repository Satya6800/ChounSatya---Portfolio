<template>
  <div class="project-card">
    <!-- Glow Effect -->
    <div class="card-glow"></div>

    <!-- Thumbnail -->
    <div class="project-thumbnail">
      <img :src="project.image" :alt="project.title" class="project-image" />
      <div class="overlay">
        <div class="tag-group">
          <span class="tag" v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="project-content">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description">{{ project.description }}</p>

      <!-- Stats -->
      <div class="project-stats" v-if="project.stats">
        <div class="stat-item" v-for="(value, key) in project.stats" :key="key">
          <span class="stat-label">{{ key }}:</span>
          <span class="stat-value">{{ value }}</span>
        </div>
      </div>

      <!-- Actions -->
      <div class="project-footer">
        <a :href="project.link" target="_blank" class="btn-view">
          View Project
          <svg class="icon" viewBox="0 0 24 24">
            <path d="M7 7h10v10M7 17L17 7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a 
          v-if="project.github" 
          :href="project.github" 
          target="_blank" 
          class="btn-github"
          title="View Source"
        >
          <svg class="icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  }
});
</script>

<style scoped>
.project-card {
  position: relative;
  background: linear-gradient(135deg, rgba(10, 20, 60, 0.4), rgba(30, 60, 120, 0.2));
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(100, 160, 255, 0.25);
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.card-glow {
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(100, 160, 255, 0.2), transparent);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease;
  animation: glow-pulse 3s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% { opacity: 0; }
  50% { opacity: 0.3; }
}

.project-card:hover {
  border-color: rgba(100, 160, 255, 0.6);
  transform: translateY(-12px) rotateX(5deg);
  box-shadow: 0 30px 60px rgba(100, 160, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  background: linear-gradient(135deg, rgba(20, 40, 100, 0.5), rgba(40, 80, 140, 0.3));
}

.project-card:hover .card-glow {
  opacity: 1;
  animation: none;
}

.project-card:hover .project-image {
  transform: scale(1.12) rotate(1deg);
}

/* Thumbnail */
.project-thumbnail {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(100, 160, 255, 0.15), rgba(100, 160, 255, 0.08));
  border-bottom: 2px solid rgba(100, 160, 255, 0.1);
}

.project-thumbnail::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s ease;
  z-index: 1;
}

.project-card:hover .project-thumbnail::before {
  left: 100%;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  filter: brightness(1);
}

.project-card:hover .project-image {
  filter: brightness(1.1);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: flex-end;
  padding: 14px;
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
}

.project-card:hover .overlay {
  opacity: 1;
}

.tag-group {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  animation: slideUp 0.5s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tag {
  display: inline-block;
  padding: 6px 12px;
  background: linear-gradient(135deg, rgba(100, 160, 255, 0.25), rgba(100, 160, 255, 0.1));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 160, 255, 0.4);
  border-radius: 8px;
  font-size: 11px;
  font-weight: 600;
  color: #e0f0ff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.tag:hover {
  background: linear-gradient(135deg, rgba(100, 160, 255, 0.4), rgba(100, 160, 255, 0.2));
  border-color: rgba(100, 160, 255, 0.6);
  transform: translateY(-2px);
}

/* Content */
.project-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 22px;
  background: linear-gradient(180deg, transparent, rgba(100, 160, 255, 0.02));
}

.project-title {
  font-size: 19px;
  font-weight: 800;
  color: #fff;
  margin: 0 0 10px 0;
  background: linear-gradient(135deg, #f0f8ff, #a0d8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
  line-height: 1.3;
}

.project-description {
  font-size: 13.5px;
  color: rgba(255, 255, 255, 0.75);
  margin: 0 0 14px 0;
  line-height: 1.6;
  flex: 1;
  font-weight: 400;
}

/* Stats */
.project-stats {
  display: flex;
  gap: 14px;
  margin-bottom: 18px;
  padding: 12px;
  background: rgba(100, 160, 255, 0.08);
  border: 1px solid rgba(100, 160, 255, 0.15);
  border-radius: 12px;
  flex-wrap: wrap;
}

.stat-item {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  gap: 4px;
}

.stat-label {
  color: rgba(100, 160, 255, 0.85);
  font-weight: 600;
}

.stat-value {
  background: linear-gradient(135deg, #64a0ff, #a0d8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}

/* Footer */
.project-footer {
  display: flex;
  gap: 10px;
}

.btn-view,
.btn-github {
  flex: 1;
  padding: 11px 14px;
  border: none;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  position: relative;
  overflow: hidden;
}

.btn-view::before,
.btn-github::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transition: left 0.4s ease;
  z-index: -1;
}

.btn-view:hover::before,
.btn-github:hover::before {
  left: 100%;
}

.btn-view {
  background: linear-gradient(135deg, rgba(100, 160, 255, 0.35), rgba(100, 160, 255, 0.2));
  border: 1.5px solid rgba(100, 160, 255, 0.5);
  color: #fff;
  box-shadow: 0 4px 15px rgba(100, 160, 255, 0.15);
}

.btn-view:hover {
  background: linear-gradient(135deg, rgba(100, 160, 255, 0.5), rgba(100, 160, 255, 0.35));
  border-color: rgba(100, 160, 255, 0.7);
  transform: translateX(6px) translateY(-2px);
  box-shadow: 0 8px 25px rgba(100, 160, 255, 0.25);
}

.btn-github {
  flex: 0.4;
  background: rgba(100, 160, 255, 0.12);
  border: 1.5px solid rgba(100, 160, 255, 0.25);
  color: #a0d8ff;
}

.btn-github:hover {
  background: rgba(100, 160, 255, 0.25);
  border-color: rgba(100, 160, 255, 0.5);
  transform: scale(1.08) rotate(5deg);
  box-shadow: 0 6px 20px rgba(100, 160, 255, 0.2);
}

.icon {
  width: 16px;
  height: 16px;
}

@media (max-width: 768px) {
  .project-card {
    border-radius: 16px;
  }

  .project-thumbnail {
    height: 200px;
  }

  .project-content {
    padding: 16px;
  }

  .project-title {
    font-size: 16px;
  }
}
</style>
