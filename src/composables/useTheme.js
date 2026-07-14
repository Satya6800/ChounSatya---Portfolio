import { ref, watch, onMounted } from 'vue';

const STORAGE_KEY = 'portfolio-theme';
const isDark = ref(true); // default dark

function applyTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light');
}

export function useTheme() {
  onMounted(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      isDark.value = saved === 'dark';
    } else {
      // Respect OS preference
      isDark.value = !window.matchMedia('(prefers-color-scheme: light)').matches;
    }
    applyTheme(isDark.value);
  });

  watch(isDark, (val) => {
    applyTheme(val);
  });

  function toggleTheme() {
    isDark.value = !isDark.value;
  }

  return { isDark, toggleTheme };
}
