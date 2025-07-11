<template>
  <div class="contact">
    <section class="contact-hero">
      <div class="container">
        <h1 class="contact-title">
          <span class="code-comment">// Let's connect!</span>
          <br>
          Lass uns zusammenarbeiten 🚀
        </h1>
        <p class="contact-intro">
          Hast du eine coole Idee oder suchst du einen motivierten Entwickler? 
          Ich freue mich darauf, von dir zu hören!
        </p>
      </div>
    </section>

    <section class="contact-methods">
      <div class="container">
        <div class="methods-grid">
          <div class="method-card" v-for="method in contactMethods" :key="method.id">
            <div class="method-icon">{{ method.icon }}</div>
            <h3 class="method-title">{{ method.title }}</h3>
            <p class="method-description">{{ method.description }}</p>
            <a :href="method.link" class="method-link">{{ method.linkText }}</a>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-form-section">
      <div class="container">
        <div class="form-container">
          <div class="form-header">
            <h2 class="form-title">
              <span class="code-keyword">function</span> sendMessage() {
            </h2>
            <p class="form-subtitle">
              Schick mir eine Nachricht und ich melde mich so schnell wie möglich zurück!
            </p>
          </div>

          <form @submit.prevent="sendMessage" class="contact-form">
            <div class="form-group">
              <label for="name" class="form-label">Name *</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                class="form-input"
                :class="{ 'error': errors.name }"
                placeholder="Dein Name"
                required
              >
              <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
            </div>

            <div class="form-group">
              <label for="email" class="form-label">Email *</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                class="form-input"
                :class="{ 'error': errors.email }"
                placeholder="deine@email.com"
                required
              >
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </div>

            <div class="form-group">
              <label for="subject" class="form-label">Betreff *</label>
              <select 
                id="subject" 
                v-model="form.subject" 
                class="form-select"
                :class="{ 'error': errors.subject }"
                required
              >
                <option value="">Wähle einen Betreff...</option>
                <option value="collaboration">💼 Zusammenarbeit</option>
                <option value="project">🚀 Projekt-Anfrage</option>
                <option value="question">❓ Frage</option>
                <option value="feedback">💬 Feedback</option>
                <option value="other">🔧 Sonstiges</option>
              </select>
              <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
            </div>

            <div class="form-group">
              <label for="message" class="form-label">Nachricht *</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                class="form-textarea"
                :class="{ 'error': errors.message }"
                placeholder="Erzähl mir von deiner Idee..."
                rows="6"
                required
              ></textarea>
              <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
            </div>

            <div class="form-actions">
              <button 
                type="submit" 
                class="submit-btn"
                :disabled="isSubmitting"
                :class="{ 'loading': isSubmitting }"
              >
                <span v-if="!isSubmitting">
                  <span class="btn-icon">📧</span>
                  Nachricht senden
                </span>
                <span v-else>
                  <span class="btn-icon">⏳</span>
                  Wird gesendet...
                </span>
              </button>
            </div>
          </form>

          <div class="form-footer">
            <div class="section-closing">}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="availability">
      <div class="container">
        <div class="availability-card">
          <h3 class="availability-title">
            <span class="status-indicator" :class="availabilityStatus.class"></span>
            {{ availabilityStatus.text }}
          </h3>
          <p class="availability-description">{{ availabilityStatus.description }}</p>
          <div class="response-time">
            <span class="response-icon">⚡</span>
            Antwortzeit: {{ responseTime }}
          </div>
        </div>
      </div>
    </section>

    <!-- Success/Error Messages -->
    <div v-if="showMessage" class="message-overlay" @click="showMessage = false">
      <div class="message-box" :class="messageType">
        <div class="message-icon">
          {{ messageType === 'success' ? '✅' : '❌' }}
        </div>
        <div class="message-content">
          <h3 class="message-title">{{ messageTitle }}</h3>
          <p class="message-text">{{ messageText }}</p>
        </div>
        <button class="message-close" @click="showMessage = false">×</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = ref({})
const isSubmitting = ref(false)
const showMessage = ref(false)
const messageType = ref('success')
const messageTitle = ref('')
const messageText = ref('')

const contactMethods = ref([
  {
    id: 1,
    icon: '📧',
    title: 'Email',
    description: 'Für ausführliche Projektanfragen und Zusammenarbeit',
    link: 'mailto:moin@middendorf.tech',
    linkText: 'moin@middendorf.tech'
  },
  {
    id: 2,
    icon: '💼',
    title: 'LinkedIn',
    description: 'Berufliches Netzwerk und Karriere-Gespräche',
    link: 'https://de.linkedin.com/in/jmiddendorf',
    linkText: 'linkedin.com/in/jmiddendorf'
  },
  {
    id: 3,
    icon: '🐙',
    title: 'GitHub',
    description: 'Code-Kollaboration und Open Source Projekte',
    link: 'https://github.com/justusmiddendorf', 
    linkText: 'github.com/justusmiddendorf'
  },
])

const availabilityStatus = computed(() => {
  // Hier könnte eine echte API-Abfrage stehen
  const hour = new Date().getHours()
  const isWorkingHours = hour >= 9 && hour <= 18
  
  if (isWorkingHours) {
    return {
      class: 'online',
      text: 'Online & verfügbar',
      description: 'Ich bin gerade online und arbeite an spannenden Projekten!'
    }
  } else {
    return {
      class: 'away',
      text: 'Außerhalb der Arbeitszeiten',
      description: 'Ich antworte normalerweise innerhalb von 24 Stunden.'
    }
  }
})

const responseTime = computed(() => {
  const hour = new Date().getHours()
  const isWorkingHours = hour >= 9 && hour <= 18
  return isWorkingHours ? '< 4 Stunden' : '< 24 Stunden'
})

const validateForm = () => {
  errors.value = {}
  
  if (!form.value.name.trim()) {
    errors.value.name = 'Name ist erforderlich'
  }
  
  if (!form.value.email.trim()) {
    errors.value.email = 'Email ist erforderlich'
  } else if (!/^\S+@\S+\.\S+$/.test(form.value.email)) {
    errors.value.email = 'Ungültige Email-Adresse'
  }
  
  if (!form.value.subject) {
    errors.value.subject = 'Betreff ist erforderlich'
  }
  
  if (!form.value.message.trim()) {
    errors.value.message = 'Nachricht ist erforderlich'
  } else if (form.value.message.trim().length < 10) {
    errors.value.message = 'Nachricht sollte mindestens 10 Zeichen haben'
  }
  
  return Object.keys(errors.value).length === 0
}

const sendMessage = async () => {
  if (!validateForm()) return
  
  isSubmitting.value = true
  
  try {
    // Hier würde normalerweise eine API-Anfrage stehen
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    messageType.value = 'success'
    messageTitle.value = 'Nachricht gesendet! 🎉'
    messageText.value = 'Danke für deine Nachricht! Ich melde mich so schnell wie möglich zurück.'
    showMessage.value = true
    
    // Form zurücksetzen
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    
  } catch (error) {
    messageType.value = 'error'
    messageTitle.value = 'Fehler beim Senden 😞'
    messageText.value = 'Es gab einen Fehler beim Senden deiner Nachricht. Bitte versuche es später noch einmal.'
    showMessage.value = true
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-hero {
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.contact-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23333" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.3;
}

.contact-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
  z-index: 2;
}

.code-comment {
  font-family: 'Fira Code', monospace;
  color: #5af78e;
  font-size: 1.5rem;
  opacity: 0.8;
}

.contact-intro {
  font-size: 1.2rem;
  text-align: center;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.contact-methods {
  padding: 6rem 0;
  background: #f8f9fa;
}

.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.method-card {
  background: white;
  padding: 2.5rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.method-card:hover {
  transform: translateY(-5px);
}

.method-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.method-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.method-description {
  color: #7f8c8d;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.method-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.method-link:hover {
  color: #5a67d8;
}

.contact-form-section {
  padding: 6rem 0;
  background: #2c3e50;
  color: white;
}

.form-container {
  max-width: 600px;
  margin: 0 auto;
}

.form-header {
  text-align: center;
  margin-bottom: 3rem;
}

.form-title {
  font-size: 2rem;
  font-family: 'Fira Code', monospace;
  margin-bottom: 1rem;
}

.code-keyword {
  color: #5af78e;
  font-weight: 700;
}

.form-subtitle {
  opacity: 0.9;
  font-size: 1.1rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #5af78e;
}

.form-input,
.form-select,
.form-textarea {
  padding: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #5af78e;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.form-input.error,
.form-select.error,
.form-textarea.error {
  border-color: #e74c3c;
}

.error-message {
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.form-actions {
  margin-top: 1rem;
}

.submit-btn {
  width: 100%;
  padding: 1.2rem;
  background: linear-gradient(135deg, #5af78e 0%, #57d9a3 100%);
  color: #2c3e50;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(90, 247, 142, 0.4);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-btn.loading {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

.form-footer {
  text-align: center;
  margin-top: 2rem;
}

.section-closing {
  font-size: 2rem;
  color: #5af78e;
  font-family: 'Fira Code', monospace;
  font-weight: 700;
}

.availability {
  padding: 4rem 0;
  background: #f8f9fa;
}

.availability-card {
  max-width: 500px;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.availability-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.status-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.status-indicator.online {
  background: #27ae60;
  animation: pulse-green 2s infinite;
}

.status-indicator.away {
  background: #f39c12;
}

@keyframes pulse-green {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.availability-description {
  color: #7f8c8d;
  margin-bottom: 1rem;
}

.response-time {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #667eea;
  font-weight: 600;
}

.response-icon {
  font-size: 1.2rem;
}

.message-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.message-box {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  max-width: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.message-box.success {
  border-left: 4px solid #27ae60;
}

.message-box.error {
  border-left: 4px solid #e74c3c;
}

.message-icon {
  font-size: 2rem;
}

.message-content {
  flex: 1;
}

.message-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.message-text {
  color: #7f8c8d;
}

.message-close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #95a5a6;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.message-close:hover {
  background: #f8f9fa;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .contact-methods {
    background: #1a1a1a;
  }

  .method-card {
    background: #2c3e50;
    color: #ecf0f1;
  }

  .method-title {
    color: #ecf0f1;
  }

  .method-description {
    color: #bdc3c7;
  }

  .availability {
    background: #1a1a1a;
  }

  .availability-card {
    background: #2c3e50;
    color: #ecf0f1;
  }

  .availability-title {
    color: #ecf0f1;
  }

  .availability-description {
    color: #bdc3c7;
  }

  .message-box {
    background: #2c3e50;
    color: #ecf0f1;
  }

  .message-title {
    color: #ecf0f1;
  }

  .message-text {
    color: #bdc3c7;
  }
}

/* Mobile responsive */
@media (max-width: 768px) {
  .contact-hero {
    padding: 4rem 0;
  }

  .contact-title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .code-comment {
    font-size: 1.2rem;
  }

  .contact-intro {
    font-size: 1rem;
    padding: 0 1rem;
  }

  .contact-methods {
    padding: 4rem 0;
  }

  .methods-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }

  .method-card {
    padding: 1.5rem;
  }

  .method-icon {
    font-size: 2.5rem;
  }

  .method-title {
    font-size: 1.2rem;
  }

  .method-description {
    font-size: 0.9rem;
  }

  .contact-form-section {
    padding: 4rem 0;
  }

  .form-container {
    padding: 0 1rem;
  }

  .form-title {
    font-size: 2rem;
  }

  .form-subtitle {
    font-size: 1rem;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-label {
    font-size: 0.9rem;
  }

  .form-input,
  .form-select,
  .form-textarea {
    font-size: 16px; /* Prevent zoom on iOS */
    padding: 0.875rem;
    min-height: 48px;
  }

  .form-textarea {
    min-height: 120px;
  }

  .form-actions {
    flex-direction: column;
    gap: 1rem;
  }

  .submit-btn {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
  }

  .cancel-btn {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
  }

  .availability-section {
    padding: 4rem 0;
  }

  .availability-title {
    font-size: 2rem;
  }

  .availability-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }

  .availability-card {
    padding: 1.5rem;
  }

  .availability-status {
    font-size: 1.2rem;
  }

  .availability-description {
    font-size: 0.9rem;
  }

  .message-overlay {
    padding: 1rem;
  }

  .message-box {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }

  .message-title {
    font-size: 1.2rem;
  }

  .message-text {
    font-size: 0.9rem;
  }

  .message-actions {
    margin-top: 1rem;
  }

  .message-btn {
    width: 100%;
    padding: 0.875rem;
  }
}

@media (max-width: 480px) {
  .contact-hero {
    padding: 3rem 0;
  }

  .contact-title {
    font-size: 1.75rem;
  }

  .contact-intro {
    font-size: 0.9rem;
    padding: 0 0.5rem;
  }

  .contact-methods {
    padding: 3rem 0;
  }

  .methods-grid {
    padding: 0 0.5rem;
  }

  .method-card {
    padding: 1rem;
  }

  .method-icon {
    font-size: 2rem;
  }

  .method-title {
    font-size: 1.1rem;
  }

  .method-description {
    font-size: 0.85rem;
  }

  .contact-form-section {
    padding: 3rem 0;
  }

  .form-container {
    padding: 0 0.5rem;
  }

  .form-title {
    font-size: 1.75rem;
  }

  .form-subtitle {
    font-size: 0.9rem;
  }

  .form-input,
  .form-select,
  .form-textarea {
    padding: 0.75rem;
  }

  .form-textarea {
    min-height: 100px;
  }

  .submit-btn,
  .cancel-btn {
    padding: 0.875rem;
    font-size: 0.9rem;
  }

  .availability-section {
    padding: 3rem 0;
  }

  .availability-title {
    font-size: 1.75rem;
  }

  .availability-grid {
    padding: 0 0.5rem;
  }

  .availability-card {
    padding: 1rem;
  }

  .availability-status {
    font-size: 1.1rem;
  }

  .availability-description {
    font-size: 0.85rem;
  }

  .message-box {
    padding: 1rem;
  }

  .message-title {
    font-size: 1.1rem;
  }

  .message-text {
    font-size: 0.85rem;
  }
}

/* Landscape orientation on mobile */
@media (max-width: 768px) and (orientation: landscape) {
  .contact-hero {
    padding: 2rem 0;
  }

  .contact-methods {
    padding: 2rem 0;
  }

  .contact-form-section {
    padding: 2rem 0;
  }

  .availability-section {
    padding: 2rem 0;
  }

  .contact-title {
    font-size: 1.75rem;
  }

  .form-title {
    font-size: 1.75rem;
  }

  .availability-title {
    font-size: 1.75rem;
  }
}
</style>
