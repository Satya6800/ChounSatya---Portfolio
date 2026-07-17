import { ref } from 'vue';

const STORAGE_KEY = 'portfolio-theme';

// Shared singleton state — created once at module level
const isDark = ref(true);

function applyTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light');
}

// Initialize theme immediately from localStorage (runs once on module load)
function initTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    isDark.value = saved === 'dark';
  } else {
    isDark.value = !window.matchMedia('(prefers-color-scheme: light)').matches;
  }
  applyTheme(isDark.value);
}

if (typeof window !== 'undefined') {
  initTheme();
}

export function useTheme() {
  function toggleTheme() {
    const newVal = !isDark.value;

    // Update the reactive state immediately so the icon swaps at once
    isDark.value = newVal;

    if (document.startViewTransition) {
      // Modern browsers: GPU snapshot crossfade — zero per-element repaint
      document.startViewTransition(() => {
        applyTheme(newVal);
      });
    } else {
      // Fallback: instant apply; CSS transition on <html> handles the fade
      applyTheme(newVal);
    }
  }

  return { isDark, toggleTheme };
}
