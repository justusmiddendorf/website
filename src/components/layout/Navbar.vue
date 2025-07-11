<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo/Brand -->
      <div class="navbar-brand">
        <router-link to="/" class="brand-link">
          <span class="brand-text">
            <span class="code-bracket">&lt;</span>
            justus middendorf
            <span class="code-bracket">/&gt;</span>
          </span>
        </router-link>
      </div>

      <!-- Mobile menu button -->
      <button 
        class="mobile-menu-btn"
        @click="toggleMobileMenu"
        :class="{ 'active': isMobileMenuOpen }"
        aria-label="Toggle navigation"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <!-- Navigation Links -->
      <div class="navbar-menu" :class="{ 'active': isMobileMenuOpen }">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link" @click="closeMobileMenu">
              <span class="nav-icon">🏠</span>
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" @click="closeMobileMenu">
              <span class="nav-icon">👨‍💻</span>
              About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-link" @click="closeMobileMenu">
              <span class="nav-icon">🚀</span>
              Projekte
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/skills" class="nav-link" @click="closeMobileMenu">
              <span class="nav-icon">⚡</span>
              Skills
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" @click="closeMobileMenu">
              <span class="nav-icon">📧</span>
              Kontakt
            </router-link>
          </li>
        </ul>

        <!-- CTA Button -->
        <div class="navbar-cta">
          <button class="cta-btn">
            <span class="btn-icon">💼</span>
            Hire Me
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Close mobile menu when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.navbar')) {
    isMobileMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.navbar {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.brand-link {
  text-decoration: none;
  color: inherit;
}

.brand-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  font-family: 'Fira Code', 'Monaco', 'Cascadia Code', 'Roboto Mono', monospace;
}

.code-bracket {
  color: #667eea;
  font-weight: 900;
}

.brand-text:hover .code-bracket {
  color: #764ba2;
  transition: color 0.3s ease;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.hamburger-line {
  width: 100%;
  height: 2px;
  background: #2c3e50;
  transition: all 0.3s ease;
  transform-origin: center;
}

.mobile-menu-btn.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-btn.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navbar-nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-item {
  position: relative;
}

.nav-link {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #667eea;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.navbar-cta {
  margin-left: 1rem;
}

.cta-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.nav-icon {
  margin-right: 0.5rem;
  font-size: 1.1rem;
}

.btn-icon {
  margin-right: 0.5rem;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .navbar {
    background: rgba(26, 26, 26, 0.95);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .brand-text {
    color: #ecf0f1;
  }

  .hamburger-line {
    background: #ecf0f1;
  }

  .nav-link {
    color: #ecf0f1;
  }

  .nav-link:hover {
    color: #667eea;
  }
}

/* Mobile responsive */
@media (max-width: 768px) {
  .navbar-container {
    padding: 0 var(--spacing-sm);
    height: 60px;
  }

  .mobile-menu-btn {
    display: flex;
    position: relative;
    z-index: 1001;
  }

  .navbar-menu {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    flex-direction: column;
    padding: 2rem 0;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    gap: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    max-height: calc(100vh - 60px);
    overflow-y: auto;
  }

  .navbar-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .navbar-nav {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
    width: 100%;
  }

  .nav-link {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    min-height: 48px;
    width: 100%;
    transition: all 0.3s ease;
  }

  .nav-link:hover {
    background: rgba(102, 126, 234, 0.1);
  }

  .nav-icon {
    font-size: 1.2rem;
  }

  .navbar-cta {
    margin-left: 0;
    margin-top: 1rem;
    padding: 0 2rem;
  }

  .cta-btn {
    width: 100%;
    padding: 1rem 1.5rem;
    font-size: 1rem;
    min-height: 48px;
  }

  .brand-text {
    font-size: 1.3rem;
  }

  @media (prefers-color-scheme: dark) {
    .navbar-menu {
      background: rgba(26, 26, 26, 0.98);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    .nav-link:hover {
      background: rgba(102, 126, 234, 0.2);
    }
  }
}

@media (max-width: 480px) {
  .navbar-container {
    padding: 0 var(--spacing-xs);
    height: 56px;
  }

  .navbar-menu {
    top: 56px;
    padding: 1.5rem 0;
  }

  .nav-link {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  .navbar-cta {
    padding: 0 1.5rem;
  }

  .cta-btn {
    padding: 0.875rem 1.25rem;
    font-size: 0.9rem;
  }

  .brand-text {
    font-size: 1.2rem;
  }

  .mobile-menu-btn {
    width: 28px;
    height: 18px;
  }

  .hamburger-line {
    height: 2px;
  }
}

/* Landscape orientation on mobile */
@media (max-width: 768px) and (orientation: landscape) {
  .navbar-menu {
    max-height: calc(100vh - 60px);
    padding: 1rem 0;
  }

  .nav-link {
    padding: 0.75rem 2rem;
    font-size: 1rem;
  }

  .navbar-cta {
    margin-top: 0.5rem;
  }
}
</style>
