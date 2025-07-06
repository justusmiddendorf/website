import { computed, ref } from 'vue'

// Beispiel Composable für Dark Mode Toggle
export function useDarkMode() {
  const isDark = ref(false)
  
  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    // Hier könnten Sie die Logik für das Umschalten des Dark Mode implementieren
    document.documentElement.classList.toggle('dark', isDark.value)
  }
  
  const darkModeClass = computed(() => {
    return isDark.value ? 'dark' : 'light'
  })
  
  return {
    isDark,
    toggleDarkMode,
    darkModeClass
  }
}

// Beispiel Composable für Mobile Detection
export function useMobile() {
  const isMobile = ref(window.innerWidth < 768)
  
  const handleResize = () => {
    isMobile.value = window.innerWidth < 768
  }
  
  // Event Listener für Resize
  window.addEventListener('resize', handleResize)
  
  return {
    isMobile
  }
}
