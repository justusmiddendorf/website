<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="terminal-window">
          <div class="terminal-header">
            <div class="terminal-buttons">
              <div class="btn-close"></div>
              <div class="btn-minimize"></div>
              <div class="btn-maximize"></div>
            </div>
            <div class="terminal-title">justus@dev:~$</div>
          </div>
          <div class="terminal-body">
            <div class="terminal-line">
              <span class="prompt">justus@dev:~$</span>
              <span class="command">whoami</span>
            </div>
            <div class="terminal-output">
              <div class="typing-text">{{ typedText }}</div>
              <span class="cursor" :class="{ 'blink': showCursor }">|</span>
            </div>
          </div>
        </div>
        
        <h1 class="hero-title">
          Hey, ich bin <span class="highlight">Justus</span>
        </h1>
        <p class="hero-subtitle">
          Informatik-Student mit Leidenschaft für 
          <span class="tech-highlight">Clean Code</span>, 
          <span class="tech-highlight">Web Development</span> & 
          <span class="tech-highlight">Innovation</span>
        </p>
        
        <div class="hero-stats">
          <div class="stat">
            <div class="stat-number">{{ teaCount }}</div>
            <div class="stat-label">🫖 Schwarzer Tee heute</div>
          </div>
          <div class="stat">
            <div class="stat-number">{{ codeLines }}</div>
            <div class="stat-label">📝 Lines of Code</div>
          </div>
          <div class="stat">
            <div class="stat-number">{{ projectCount }}</div>
            <div class="stat-label">🚀 Projekte</div>
          </div>
        </div>
        
        <div class="hero-actions">
          <button class="btn btn-primary">
            <span class="btn-icon">💼</span>
            Projekte ansehen
          </button>
          <button class="btn btn-secondary">
            <span class="btn-icon">📧</span>
            Kontakt aufnehmen
          </button>
        </div>
      </div>
      
      <div class="hero-visual">
        <div class="code-snippet">
          <div class="code-header">
            <span class="file-name">justus.ts</span>
            <div class="code-actions">
              <span class="dot green"></span>
              <span class="dot yellow"></span>
              <span class="dot red"></span>
            </div>
          </div>
          <div class="code-content">
            <pre><code>{{ codeSnippet }}</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills">
      <div class="container">
        <h2 class="section-title">
          <span class="title-prefix">const</span> skills <span class="title-suffix">= {</span>
        </h2>
        <div class="skills-grid">
          <div class="skill-category" v-for="category in skillCategories" :key="category.name">
            <h3 class="category-title">{{ category.name }}:</h3>
            <div class="skill-items">
              <div class="skill-item" v-for="skill in category.skills" :key="skill.name">
                <span class="skill-name">{{ skill.name }}</span>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                </div>
                <span class="skill-level">{{ skill.level }}%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="section-closing">}</div>
      </div>
    </section>

    <!-- Quick Projects -->
    <section class="projects-preview">
      <div class="container">
        <h2 class="section-title">
          Recent <span class="highlight">Projects</span>
        </h2>
        <div class="projects-grid">
          <div class="project-card" v-for="project in featuredProjects" :key="project.id">
            <div class="project-header">
              <h3 class="project-title">{{ project.title }}</h3>
              <div class="project-links">
                <a href="#" class="project-link">�</a>
                <a href="#" class="project-link">📂</a>
              </div>
            </div>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tech">
              <span class="tech-tag" v-for="tech in project.technologies" :key="tech">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// Typing animation
const typedText = ref('')
const showCursor = ref(true)
const fullText = 'Informatik-Student • Full-Stack Developer • Problem Solver'

// Stats
const teaCount = ref(0)
const codeLines = ref(0)
const projectCount = ref(0)

// Skills data
const skillCategories = ref([
  {
    name: 'Frontend',
    skills: [
      { name: 'Vue.js', level: 90 },
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'CSS/SCSS', level: 85 }
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 90 },
      { name: 'Java', level: 75 },
      { name: 'PostgreSQL', level: 80 }
    ]
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'Linux', level: 85 }
    ]
  }
])

// Featured projects
const featuredProjects = ref([
  {
    id: 1,
    title: 'Smart Todo App',
    description: 'KI-gestützte Todo-App mit intelligenter Priorisierung und Zeitmanagement',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'AI/ML']
  },
  {
    id: 2,
    title: 'Code Snippet Manager',
    description: 'Plattform zum Organisieren und Teilen von Code-Snippets mit Syntax-Highlighting',
    technologies: ['React', 'Express', 'PostgreSQL', 'Redis']
  },
  {
    id: 3,
    title: 'Campus Event Tracker',
    description: 'Event-Management-System für Universitätscampus mit Echtzeit-Updates',
    technologies: ['Vue.js', 'Firebase', 'PWA', 'WebSocket']
  }
])

// Code snippet for visual
const codeSnippet = ref(`interface Developer {
  name: string;
  status: "coding" | "learning" | "debugging";
  skills: string[];
  teaLevel: number;
}

const justus: Developer = {
  name: "Justus",
  status: "coding",
  skills: ["Vue.js", "Python", "TypeScript"],
  teaLevel: 9000
};

console.log("Ready to build amazing things! 🚀");`)

// Animations
const typeText = () => {
  let i = 0
  const typeInterval = setInterval(() => {
    if (i < fullText.length) {
      typedText.value += fullText.charAt(i)
      i++
    } else {
      clearInterval(typeInterval)
    }
  }, 50)
}

const animateStats = () => {
  // Animate tea count
  const teaInterval = setInterval(() => {
    if (teaCount.value < 7) {
      teaCount.value++
    } else {
      clearInterval(teaInterval)
    }
  }, 200)

  // Animate code lines
  const codeInterval = setInterval(() => {
    if (codeLines.value < 15420) {
      codeLines.value += 342
    } else {
      codeLines.value = 15420
      clearInterval(codeInterval)
    }
  }, 50)

  // Animate project count
  const projectInterval = setInterval(() => {
    if (projectCount.value < 12) {
      projectCount.value++
    } else {
      clearInterval(projectInterval)
    }
  }, 300)
}

onMounted(() => {
  typeText()
  animateStats()
  
  // Cursor blink
  setInterval(() => {
    showCursor.value = !showCursor.value
  }, 500)
})
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
  padding: 4rem 0;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23333" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.3;
  z-index: 1;
}

.hero-content {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 2rem;
  z-index: 2;
  position: relative;
}

.hero-visual {
  z-index: 2;
  position: relative;
  padding: 0 2rem;
}

.terminal-window {
  background: #1e1e1e;
  border-radius: 10px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
  overflow: hidden;
  border: 1px solid #333;
}

.terminal-header {
  background: #2d2d2d;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #333;
}

.terminal-buttons {
  display: flex;
  gap: 0.5rem;
}

.terminal-buttons > div {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.btn-close { background: #ff5f56; }
.btn-minimize { background: #ffbd2e; }
.btn-maximize { background: #27ca3f; }

.terminal-title {
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  color: #ccc;
}

.terminal-body {
  padding: 1rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
}

.terminal-line {
  margin-bottom: 0.5rem;
}

.prompt {
  color: #5af78e;
  font-weight: bold;
}

.command {
  color: #9aedfe;
  margin-left: 1rem;
}

.terminal-output {
  color: #f8f8f2;
  margin-left: 1rem;
  min-height: 1.5rem;
}

.typing-text {
  display: inline;
}

.cursor {
  display: inline-block;
  background: #f8f8f2;
  width: 10px;
  height: 20px;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.highlight {
  background: linear-gradient(135deg, #5af78e 0%, #57d9a3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
}

.tech-highlight {
  color: #5af78e;
  font-weight: 600;
}

.hero-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.stat {
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: #5af78e;
  font-family: 'Fira Code', monospace;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-top: 0.5rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.code-snippet {
  background: #1e1e1e;
  border-radius: 10px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid #333;
  overflow: hidden;
}

.code-header {
  background: #2d2d2d;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #333;
}

.file-name {
  font-family: 'Fira Code', monospace;
  color: #5af78e;
  font-size: 0.9rem;
}

.code-actions {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27ca3f; }

.code-content {
  padding: 1rem;
  overflow-x: auto;
}

.code-content pre {
  margin: 0;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  line-height: 1.5;
  color: #f8f8f2;
}

.skills {
  padding: 6rem 0;
  background: #f8f9fa;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-family: 'Fira Code', monospace;
  color: #2c3e50;
}

.title-prefix, .title-suffix {
  color: #667eea;
  font-weight: 700;
}

.section-closing {
  font-size: 2rem;
  color: #667eea;
  font-family: 'Fira Code', monospace;
  font-weight: 700;
  margin-top: 2rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.skill-category {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
}

.category-title {
  font-family: 'Fira Code', monospace;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.skill-name {
  min-width: 100px;
  font-weight: 600;
  color: #2c3e50;
}

.skill-bar {
  flex: 1;
  height: 8px;
  background: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
  transition: width 1s ease;
}

.skill-level {
  min-width: 40px;
  text-align: right;
  font-family: 'Fira Code', monospace;
  color: #667eea;
  font-weight: 600;
}

.projects-preview {
  padding: 6rem 0;
  background: #2c3e50;
  color: white;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.project-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #5af78e;
}

.project-links {
  display: flex;
  gap: 0.5rem;
}

.project-link {
  color: #ccc;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: #5af78e;
}

.project-description {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  opacity: 0.9;
}

.project-tech {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tech-tag {
  background: rgba(90, 247, 142, 0.2);
  color: #5af78e;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(90, 247, 142, 0.3);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .skills {
    background: #1a1a1a;
  }

  .section-title {
    color: #ecf0f1;
  }

  .skill-category {
    background: #2c3e50;
    color: #ecf0f1;
    border-color: #34495e;
  }

  .category-title {
    color: #ecf0f1;
  }

  .skill-name {
    color: #ecf0f1;
  }
}

/* Mobile responsive */
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 2rem 0;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-stats {
    justify-content: center;
    gap: 1rem;
  }

  .stat {
    min-width: 100px;
  }

  .hero-actions {
    justify-content: center;
  }

  .btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .skill-item {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }

  .skill-name {
    min-width: auto;
  }
}
</style>
