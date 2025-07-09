<template>
  <div class="projects">
    <section class="projects-hero">
      <div class="container">
        <h1 class="projects-title">
          <span class="code-comment">// My Projects</span>
          <br>
          Dinge, die ich gebaut habe 🚀
        </h1>
        <p class="projects-intro">
          Eine Sammlung meiner Lieblingsprojekte - von kleinen Experimenten bis hin zu vollwertigen Anwendungen.
        </p>
      </div>
    </section>

    <section class="projects-filter">
      <div class="container">
        <div class="filter-tabs">
          <button 
            v-for="category in categories" 
            :key="category"
            :class="['filter-btn', { active: activeCategory === category }]"
            @click="setActiveCategory(category)"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <section class="projects-grid-section">
      <div class="container">
        <div class="projects-grid">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="project-card"
            @click="openProject(project)"
          >
            <div class="project-image">
            </div>
            
            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ project.title }}</h3>
                <span class="project-status" :class="project.status">{{ project.status }}</span>
              </div>
              
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-features">
                <div class="feature-item" v-for="feature in project.features" :key="feature">
                  ✨ {{ feature }}
                </div>
              </div>
              
              <div class="project-tech">
                <span class="tech-tag" v-for="tech in project.technologies" :key="tech">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import projectsData from '../data/projects.js'

const activeCategory = ref('Alle')
const categories = ref(['Alle', 'Web Apps', 'Mobile', 'AI/ML', 'Tools', 'DevOps'])

const projects = ref(projectsData)

const filteredProjects = computed(() => {
  if (activeCategory.value === 'Alle') {
    return projects.value
  }
  return projects.value.filter(project => project.category === activeCategory.value)
})

const setActiveCategory = (category) => {
  activeCategory.value = category
}

const openProject = (project) => {
  // Hier könnte ein Modal oder eine neue Seite geöffnet werden
  console.log('Opening project:', project.title)
}
</script>

<style scoped>
.projects-hero {
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.projects-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23333" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.3;
}

.projects-title {
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

.projects-intro {
  font-size: 1.2rem;
  text-align: center;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.projects-filter {
  background: white;
  padding: 2rem 0;
  border-bottom: 1px solid #e9ecef;
}

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  background: #f8f9fa;
  border: 2px solid transparent;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  color: #2c3e50;
}

.filter-btn:hover {
  background: #e9ecef;
  transform: translateY(-2px);
}

.filter-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: #667eea;
}

.projects-grid-section {
  padding: 4rem 0;
  background: #f8f9fa;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.project-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.project-image {
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
}

.project-content {
  padding: 2rem;
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
  color: #2c3e50;
}

.project-status {
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
}

.project-status.completed {
  background: rgba(90, 247, 142, 0.2);
  color: #27ae60;
}

.project-status.in-progress {
  background: rgba(255, 193, 7, 0.2);
  color: #f39c12;
}

.project-description {
  margin-bottom: 1.5rem;
  color: #7f8c8d;
  line-height: 1.6;
}

.project-features {
  margin-bottom: 1.5rem;
}

.feature-item {
  font-size: 0.9rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.project-tech {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.tech-tag {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(102, 126, 234, 0.2);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .projects-filter {
    background: #1a1a1a;
    border-color: #333;
  }

  .filter-btn {
    background: #2c3e50;
    color: #ecf0f1;
  }

  .filter-btn:hover {
    background: #34495e;
  }

  .projects-grid-section {
    background: #1a1a1a;
  }

  .project-card {
    background: #2c3e50;
    color: #ecf0f1;
  }

  .project-title {
    color: #ecf0f1;
  }

  .project-description {
    color: #bdc3c7;
  }

  .feature-item {
    color: #ecf0f1;
  }
}

/* Mobile responsive */
@media (max-width: 768px) {
  .projects-title {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-card {
    margin: 0 1rem;
  }
}
</style>
