<template>
    <nav class="glass-navbar fixed-top" :class="{ 'scrolled': isScrolled }">
        <div class="navbar-container container-fluid">
            <!-- Logo -->
            <router-link class="navbar-logo" to="/">
                <span class="logo-text">CHOUN SATYA</span>
            </router-link>

            <!-- Menu Toggle Button -->
            <button class="menu-toggle" :class="{ active: isOpen }" @click="isOpen = !isOpen">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>

            <!-- Navigation Menu -->
            <nav class="nav-menu" :class="{ active: isOpen }">
                <ul class="nav-list">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/" @click="isOpen = false">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about" @click="isOpen = false">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/portfolio" @click="isOpen = false">Portfolio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/services" @click="isOpen = false">Services</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/skills" @click="isOpen = false">Skills</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact" @click="isOpen = false">Contact</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </nav>
</template>

<style scoped>
/* ===== LIQUID GLASS NAVBAR ===== */
.glass-navbar {
    width: 85%;
    padding: 12px 20px;
    margin: 1.5rem auto 0;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(100, 160, 255, 0.25);
    z-index: 1000;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 50px;
}

.glass-navbar.scrolled {
    background: rgba(13, 27, 42, 0.75);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(100, 160, 255, 0.4);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
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
    background: linear-gradient(130deg, #00d4ff 50%, #7b68ee 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientShift 3s ease infinite;
     font-family: 'Poppins', sans-serif;
    font-size: 22px;
}

@keyframes gradientShift {
    0%, 100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
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
    color: rgba(255, 255, 255, 0.85);
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
    color: #00d4ff;
}

/* ===== ACTIVE LINK STYLE ===== */
.nav-list .router-link-active {
    color: #00d4ff;
    background: rgba(0, 212, 255, 0.15);
    padding: 0.5rem 1rem;
    border-radius: 25px;
    transition: all 0.3s ease;
}

.nav-list .router-link-active::before {
    width: 100%;
}

/* ===== MENU TOGGLE BUTTON ===== */
.menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
    border: none;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 25px;
    padding: 0.75rem;
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
    position: relative;
}

.menu-toggle:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: scale(1.05);
}

.hamburger-line {
    width: 20px;
    height: 2px;
    background: linear-gradient(90deg, #00d4ff, #7b68ee);
    border-radius: 25px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hamburger-line:nth-child(1) {
    transform-origin: center;
}

.hamburger-line:nth-child(2) {
    margin: 6px 0;
    opacity: 1;
}

.hamburger-line:nth-child(3) {
    transform-origin: center;
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
    background: rgba(0, 212, 255, 0.15);
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.3);
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
        background: rgba(13, 27, 42, 0.95);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .nav-item:last-child {
        border-bottom: none;
    }

    .nav-link {
        display: block;
        font-size: 1rem;
    }

    .nav-link::before {
        bottom: 0;
        height: 2px;
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

const isOpen = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
