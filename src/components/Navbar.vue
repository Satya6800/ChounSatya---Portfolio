<template>
    <nav class="glass-navbar fixed-top" :class="{ 'scrolled': isScrolled }">
        <div class="navbar-container container-fluid">
            <!-- Logo -->
            <a class="navbar-logo" href="#home" @click.prevent="scrollToSection('home')">
                <span class="logo-text">CHOUN SATYA</span>
            </a>

            <!-- Navigation Menu -->
            <nav class="nav-menu" :class="{ active: isOpen }">
                <ul class="nav-list">
                    <li class="nav-item">
                        <a href="#home" class="nav-link" :class="{ 'router-link-active': activeSection === 'home' }" @click.prevent="scrollToSection('home')">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#about" class="nav-link" :class="{ 'router-link-active': activeSection === 'about' }" @click.prevent="scrollToSection('about')">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="#portfolio" class="nav-link" :class="{ 'router-link-active': activeSection === 'portfolio' }" @click.prevent="scrollToSection('portfolio')">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a href="#services" class="nav-link" :class="{ 'router-link-active': activeSection === 'services' }" @click.prevent="scrollToSection('services')">Services</a>
                    </li>
                    <li class="nav-item">
                        <a href="#skills" class="nav-link" :class="{ 'router-link-active': activeSection === 'skills' }" @click.prevent="scrollToSection('skills')">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a href="#contact" class="nav-link" :class="{ 'router-link-active': activeSection === 'contact' }" @click.prevent="scrollToSection('contact')">Contact</a>
                    </li>
                </ul>
            </nav>

            <!-- Right side: theme toggle + hamburger -->
            <div class="navbar-actions">
                <!-- Theme Toggle -->
                <button class="theme-toggle" @click="toggleTheme" :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'" aria-label="Toggle theme">
                    <!-- Sun icon (shown in dark mode to switch to light) -->
                    <svg v-if="isDark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="theme-icon">
                        <circle cx="12" cy="12" r="5"/>
                        <line x1="12" y1="1" x2="12" y2="3"/>
                        <line x1="12" y1="21" x2="12" y2="23"/>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                        <line x1="1" y1="12" x2="3" y2="12"/>
                        <line x1="21" y1="12" x2="23" y2="12"/>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                    </svg>
                    <!-- Moon icon (shown in light mode to switch to dark) -->
                    <svg v-else viewBox="0 0 24 24" fill="currentColor" class="theme-icon">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                    </svg>
                </button>

                <!-- Menu Toggle Button -->
                <button class="menu-toggle" :class="{ active: isOpen }" @click="isOpen = !isOpen">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </button>
            </div>

        </div>
    </nav>
</template>

<style scoped>
/* ===== LIQUID GLASS NAVBAR ===== */
.glass-navbar {
    width: 85%;
    padding: 12px 20px;
    margin: 1.5rem auto 0;
    background: var(--navbar-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--border-color);
    z-index: 1000;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 50px;
}

.glass-navbar.scrolled {
    background: var(--navbar-scrolled-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--navbar-scrolled-border);
    box-shadow: var(--shadow-md);
    margin-top: 1rem;
}

.navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* ===== LOGO STYLING ===== */
.navbar-logo {
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: -1px;
}

.logo-text {
    background: var(--brand-gradient-logo);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientShift 3s ease infinite;
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
}

@keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

/* ===== NAVIGATION MENU ===== */
.nav-menu {
    display: flex;
    align-items: center;
}

.nav-list {
    list-style: none;
    display: flex;
    gap: 3rem;
    margin: 0;
    padding: 0;
}

.nav-item {
    position: relative;
}

/* ===== NAVIGATION LINKS ===== */
.nav-link {
    color: var(--nav-link-color);
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 0.3px;
    position: relative;
    padding: 0.5rem 0;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: var(--nav-link-hover);
}

/* ===== ACTIVE LINK STYLE ===== */
.nav-list .router-link-active {
    color: var(--nav-active-color);
    background: var(--nav-active-bg);
    padding: 0.5rem 1rem;
    border-radius: 25px;
    transition: all 0.3s ease;
    box-shadow: var(--shadow-glow);
}

/* ===== NAVBAR ACTIONS (toggle group) ===== */
.navbar-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

/* ===== THEME TOGGLE ===== */
.theme-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    background: var(--toggle-bg);
    border-radius: 25px;
    padding: 0.6rem;
    width: 40px;
    height: 40px;
    color: var(--text-accent);
    transition: background 0.3s ease, transform 0.2s ease;
}

.theme-toggle:hover {
    background: var(--toggle-hover-bg);
    transform: scale(1.1) rotate(15deg);
}

.theme-icon {
    width: 18px;
    height: 18px;
}

/* ===== MENU TOGGLE BUTTON ===== */
.menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
    border: none;
    background: var(--toggle-bg);
    border-radius: 25px;
    padding: 0.75rem;
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
    position: relative;
    align-items: center;
    justify-content: center;
}

.menu-toggle:hover {
    background: var(--toggle-hover-bg);
    transform: scale(1.05);
}

.hamburger-line {
    width: 20px;
    height: 2px;
    background: linear-gradient(90deg, var(--brand-cyan), var(--brand-purple));
    border-radius: 25px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hamburger-line:nth-child(2) {
    margin: 6px 0;
    opacity: 1;
}

/* ===== ACTIVE TOGGLE ANIMATION ===== */
.menu-toggle.active .hamburger-line:nth-child(1) {
    transform: rotate(45deg) translate(8px, 8px);
}

.menu-toggle.active .hamburger-line:nth-child(2) {
    opacity: 0;
}

.menu-toggle.active .hamburger-line:nth-child(3) {
    transform: rotate(-45deg) translate(8px, -8px);
}

.menu-toggle.active {
    background: var(--toggle-active-bg);
    box-shadow: var(--shadow-glow);
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
    .glass-navbar {
        padding: 1rem 1.5rem;
    }

    .navbar-container {
        padding: 0;
    }

    .menu-toggle {
        display: flex;
    }

    .nav-menu {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--navbar-mobile-bg);
        backdrop-filter: blur(20px);
        border-bottom: 1px solid var(--border-subtle);
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .nav-menu.active {
        max-height: 400px;
    }

    .nav-list {
        flex-direction: column;
        gap: 0;
        width: 100%;
        padding: 1.5rem 0;
    }

    .nav-item {
        padding: 0.75rem 1.5rem;
        border-bottom: 1px solid var(--border-subtle);
    }

    .nav-item:last-child {
        border-bottom: none;
    }

    .nav-link {
        display: block;
        font-size: 1rem;
    }

    .logo-text {
        font-size: 1.4rem;
    }
}

@media (max-width: 480px) {
    .glass-navbar {
        padding: 0.75rem 1rem;
    }

    .navbar-logo {
        font-size: 1.4rem;
    }

    .nav-list {
        padding: 1rem 0;
    }

    .nav-item {
        padding: 0.6rem 1rem;
    }
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useTheme } from '../composables/useTheme';

const { isDark, toggleTheme } = useTheme();

const isOpen = ref(false);
const isScrolled = ref(false);
const activeSection = ref('home');

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
    
    // Scroll spy logic
    const sections = ['home', 'about', 'portfolio', 'services', 'skills', 'contact'];
    let current = 'home';
    
    for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            // If the top of the section is near the top of the viewport (adjust offset as needed)
            if (rect.top <= 200) {
                current = section;
            }
        }
    }
    activeSection.value = current;
};

const scrollToSection = (id) => {
    isOpen.value = false;
    const element = document.getElementById(id);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 80, // Adjust for navbar height
            behavior: 'smooth'
        });
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
