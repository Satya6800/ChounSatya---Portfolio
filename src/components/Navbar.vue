<template>
  <nav class="glass-navbar fixed-top" :class="{ scrolled: isScrolled }">
    <div class="navbar-container">
      <!-- Logo -->
      <a class="navbar-logo" href="#home" @click.prevent="scrollToSection('home')">
        <div class="logo-icon-box">
          <svg class="dev-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
        <span class="logo-text">CHOUN SATYA</span>
      </a>

      <!-- Center Navigation Links -->
      <nav class="nav-menu" :class="{ active: isOpen }">
        <ul class="nav-list">
          <li class="nav-item">
            <a
              href="#home"
              class="nav-link"
              :class="{ 'is-active': activeSection === 'home' }"
              @click.prevent="scrollToSection('home')"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a
              href="#about"
              class="nav-link"
              :class="{ 'is-active': activeSection === 'about' }"
              @click.prevent="scrollToSection('about')"
              >About</a
            >
          </li>
          <li class="nav-item">
            <a
              href="#portfolio"
              class="nav-link"
              :class="{ 'is-active': activeSection === 'portfolio' }"
              @click.prevent="scrollToSection('portfolio')"
              >Projects</a
            >
          </li>
          <li class="nav-item">
            <a
              href="#skills"
              class="nav-link"
              :class="{ 'is-active': activeSection === 'skills' }"
              @click.prevent="scrollToSection('skills')"
              >Skills</a
            >
          </li>
          <li class="nav-item">
            <a
              href="#contact"
              class="nav-link"
              :class="{ 'is-active': activeSection === 'contact' }"
              @click.prevent="scrollToSection('contact')"
              >Contact</a
            >
          </li>
        </ul>
      </nav>

      <!-- Right Side: Theme Toggle + CTA + Hamburger -->
      <div class="navbar-actions">
        <!-- Theme Toggle -->
        <button
          class="theme-toggle"
          @click="toggleTheme"
          :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          aria-label="Toggle theme"
        >
          <!-- Sun icon — shown in dark mode to switch to light -->
          <svg v-if="isDark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="theme-icon">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
          <!-- Moon icon — shown in light mode to switch to dark -->
          <svg v-else viewBox="0 0 24 24" fill="currentColor" class="theme-icon">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>

        <!-- Get in Touch CTA -->
        <a
          href="#contact"
          class="navbar-cta"
          @click.prevent="scrollToSection('contact')"
        >
          Get in touch
        </a>

        <!-- Hamburger (mobile only) -->
        <button
          class="menu-toggle"
          :class="{ active: isOpen }"
          @click="isOpen = !isOpen"
          aria-label="Toggle menu"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useTheme } from '../composables/useTheme';

const { isDark, toggleTheme } = useTheme();

const isOpen = ref(false);
const isScrolled = ref(false);
const activeSection = ref('home');

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;

  // Scroll-spy logic
  const sections = ['home', 'about', 'portfolio', 'services', 'skills', 'contact'];
  let current = 'home';

  for (const section of sections) {
    const el = document.getElementById(section);
    if (el && el.getBoundingClientRect().top <= 120) {
      current = section;
    }
  }
  activeSection.value = current;
};

const scrollToSection = (id) => {
  isOpen.value = false;
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  }
};

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<style scoped>
/* ===== FLOATING PILL NAVBAR ===== */
.glass-navbar {
  left: 50%;
  transform: translateX(-50%);
  width: min(90%, 1100px);
  padding: 10px 20px;
  margin-top: 1.25rem;
  background: var(--navbar-bg);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid var(--border-color);
  border-radius: 9999px;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-navbar.scrolled {
  background: var(--navbar-scrolled-bg);
  border-color: var(--navbar-scrolled-border);
  box-shadow: var(--shadow-md);
  margin-top: 0.75rem;
}

/* ===== CONTAINER ===== */
.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

/* ===== LOGO ===== */
.navbar-logo {
  text-decoration: none;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  transition: transform 0.25s ease;
}

.navbar-logo:hover {
  transform: translateY(-1px);
}

.logo-icon-box {
  width: 32px;
  height: 32px;
  border-radius: 9px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(99, 102, 241, 0.15));
  border: 1px solid rgba(59, 130, 246, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(59, 130, 246, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: var(--primary-color);
}

.navbar-logo:hover .logo-icon-box {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.35), rgba(99, 102, 241, 0.25));
  border-color: rgba(59, 130, 246, 0.6);
  box-shadow: 0 0 16px rgba(59, 130, 246, 0.35);
  transform: rotate(-5deg) scale(1.06);
}

.dev-icon {
  width: 17px;
  height: 17px;
  stroke: currentColor;
}

.logo-text {
  font-family: 'Poppins', sans-serif;
  font-size: 1.05rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  background: var(--brand-gradient-logo);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ===== NAV LINKS ===== */
.nav-menu {
  display: flex;
  align-items: center;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 0.25rem;
  margin: 0;
  padding: 0;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: var(--nav-link-color);
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 13.5px;
  letter-spacing: 0.01em;
  padding: 0.45rem 0.85rem;
  border-radius: 9999px;
  transition: color 0.25s ease, background 0.25s ease;
  display: block;
}

.nav-link:hover {
  color: var(--nav-link-hover);
  background: var(--toggle-bg);
}

.nav-link.is-active {
  color: var(--nav-active-color);
  background: var(--nav-active-bg);
  font-weight: 600;
}

/* ===== RIGHT ACTIONS ===== */
.navbar-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

/* ===== THEME TOGGLE ===== */
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background: var(--toggle-bg);
  border-radius: 9999px;
  padding: 0.5rem;
  width: 38px;
  height: 38px;
  color: var(--text-primary);
  transition: background 0.25s ease, transform 0.2s ease;
}

.theme-toggle:hover {
  background: var(--toggle-hover-bg);
  transform: scale(1.1) rotate(15deg);
}

.theme-icon {
  width: 17px;
  height: 17px;
}

/* ===== NAVBAR CTA ===== */
.navbar-cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0.5rem 1.1rem;
  background: var(--brand-gradient);
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 600;
  border-radius: 9999px;
  text-decoration: none;
  transition: box-shadow 0.25s ease, transform 0.2s ease, opacity 0.2s ease;
  box-shadow: var(--shadow-btn);
  white-space: nowrap;
}

.navbar-cta:hover {
  box-shadow: var(--shadow-btn-hover);
  transform: translateY(-1px);
  opacity: 0.92;
  color: #ffffff;
}

/* ===== HAMBURGER (mobile) ===== */
.menu-toggle {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background: var(--toggle-bg);
  border-radius: 9999px;
  padding: 0.6rem;
  width: 40px;
  height: 40px;
  gap: 5px;
  transition: all 0.3s ease;
}

.menu-toggle:hover {
  background: var(--toggle-hover-bg);
}

.hamburger-line {
  width: 18px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 9999px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: block;
}

.menu-toggle.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.menu-toggle.active .hamburger-line:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.menu-toggle.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  .navbar-cta {
    display: none;
  }
}

@media (max-width: 768px) {
  .glass-navbar {
    border-radius: 20px;
    padding: 0.75rem 1.25rem;
  }

  .menu-toggle {
    display: flex;
  }

  .nav-menu {
    position: absolute;
    top: calc(100% + 0.75rem);
    left: 0;
    right: 0;
    background: var(--navbar-mobile-bg);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), padding 0.4s ease;
  }

  .nav-menu.active {
    max-height: 400px;
    padding: 0.75rem 0;
  }

  .nav-list {
    flex-direction: column;
    gap: 0.25rem;
    padding: 0.5rem 1rem;
  }

  .nav-link {
    border-radius: 12px;
    padding: 0.7rem 1rem;
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .glass-navbar {
    width: calc(100% - 2rem);
    padding: 0.6rem 1rem;
  }
}
</style>
