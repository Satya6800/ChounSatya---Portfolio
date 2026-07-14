import { ref, watch } from 'vue';

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

// Watch for changes and apply them
watch(isDark, (val) => {
  applyTheme(val);
});

// Auto-init when module first loads (safe because this runs in browser)
if (typeof window !== 'undefined') {
  initTheme();
}

export function useTheme() {
  function toggleTheme() {
    isDark.value = !isDark.value;
  }

  return { isDark, toggleTheme };
}
