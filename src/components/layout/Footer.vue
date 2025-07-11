<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">
            <span class="code-bracket">&lt;</span>
            justus middendorf
            <span class="code-bracket">/&gt;</span>
          </h3>
          <p class="footer-description">
            Informatik-Student mit Leidenschaft für Open Source, KI-Innovation und nachhaltige Technologielösungen
          </p>
          <div class="social-links">
            <a href="#" class="social-link">💼 LinkedIn</a>
            <a href="#" class="social-link">🐙 GitHub</a>
            <a href="#" class="social-link">📧 Email</a>
          </div>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-subtitle">Navigation</h4>
          <ul class="footer-links">
            <li><router-link to="/" class="footer-link">🏠 Home</router-link></li>
            <li><router-link to="/about" class="footer-link">👨‍💻 About</router-link></li>
            <li><router-link to="/projects" class="footer-link">🚀 Projekte</router-link></li>
            <li><router-link to="/skills" class="footer-link">⚡ Skills</router-link></li>
            <li><router-link to="/contact" class="footer-link">📧 Kontakt</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4 class="footer-subtitle">Tech Stack</h4>
          <div class="tech-stack">
            <span class="tech-item">Django</span>
            <span class="tech-item">Vue.js</span>
            <span class="tech-item">Python</span>
            <span class="tech-item">Java</span>
            <span class="tech-item">Flutter</span>
            <span class="tech-item">PostgreSQL</span>
            <span class="tech-item">Docker</span>
            <span class="tech-item">TensorFlow</span>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>{{ currentYear }} Justus Middendorf - Informatik-Student • Made with ❤️ on Wangerooge </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: #2c3e50;
  color: #ecf0f1;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 20px 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3,
.footer-section h4 {
  margin-bottom: 1rem;
}

.code-bracket {
  color: #5af78e;
  font-weight: 900;
}

.footer-title {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.5rem;
  font-family: 'Fira Code', monospace;
}

.footer-subtitle {
  color: #bdc3c7;
  font-size: 1.1rem;
}

.footer-description {
  color: #95a5a6;
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.social-link {
  color: #95a5a6;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.9rem;
}

.social-link:hover {
  color: #5af78e;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-link {
  color: #95a5a6;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #667eea;
}

.contact-info p {
  color: #95a5a6;
  margin-bottom: 0.5rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-item {
  background: rgba(90, 247, 142, 0.1);
  color: #5af78e;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(90, 247, 142, 0.3);
}

.footer-bottom {
  border-top: 1px solid #34495e;
  padding-top: 1rem;
  text-align: center;
  color: #95a5a6;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>
