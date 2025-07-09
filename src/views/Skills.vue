<template>
  <div class="skills">
    <section class="skills-hero">
      <div class="container">
        <h1 class="skills-title">
          <span class="code-comment">// Skills & Technologies</span>
          <br>
          Mein Tech-Stack ⚡
        </h1>
        <p class="skills-intro">
          Diese Technologien und Tools nutze ich täglich, um großartige Software zu entwickeln.
        </p>
      </div>
    </section>

    <section class="skills-matrix">
      <div class="container">
        <h2 class="section-title">
          <span class="code-keyword">const</span> skillMatrix = {
        </h2>
        
        <div class="skills-categories">
          <div class="skill-category" v-for="category in skillCategories" :key="category.name">
            <h3 class="category-title">{{ category.name }}:</h3>
            <div class="skills-list">
              <div class="skill-item" v-for="skill in category.skills" :key="skill.name">
                <div class="skill-header">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" 
                       :style="{ width: skill.level + '%' }"
                       :class="getSkillLevelClass(skill.level)">
                  </div>
                </div>
                <div class="skill-description">{{ skill.description }}</div>
                <div class="skill-experience">
                  <span class="experience-badge">{{ skill.experience }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="section-closing">}</div>
      </div>
    </section>

    <section class="tools-showcase">
      <div class="container">
        <h2 class="section-title">
          Meine liebsten Tools 🛠️
        </h2>
        
        <div class="tools-grid">
          <div class="tool-card" v-for="tool in favoriteTools" :key="tool.name">
            <div class="tool-icon">{{ tool.icon }}</div>
            <h3 class="tool-name">{{ tool.name }}</h3>
            <p class="tool-description">{{ tool.description }}</p>
            <div class="tool-rating">
              <span v-for="star in 5" :key="star" 
                    :class="['star', { filled: star <= tool.rating }]">
                ⭐
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="learning-journey">
      <div class="container">
        <h2 class="section-title">
          Continuous Learning 📚
        </h2>
        
        <div class="learning-timeline">
          <div class="timeline-item" v-for="item in learningPath" :key="item.id">
            <div class="timeline-marker" :class="item.status"></div>
            <div class="timeline-content">
              <h3 class="timeline-title">{{ item.title }}</h3>
              <p class="timeline-description">{{ item.description }}</p>
              <div class="timeline-tags">
                <span class="tag" v-for="tag in item.tags" :key="tag">{{ tag }}</span>
              </div>
              <div class="timeline-progress" v-if="item.progress">
                <div class="progress-bar">
                  <div class="progress-fill" :style="{ width: item.progress + '%' }"></div>
                </div>
                <span class="progress-text">{{ item.progress }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="certifications">
      <div class="container">
        <h2 class="section-title">
          Zertifikate & Auszeichnungen 🏆
        </h2>
        
        <div class="cert-grid">
          <div class="cert-card" v-for="cert in certifications" :key="cert.id">
            <div class="cert-badge">{{ cert.badge }}</div>
            <h3 class="cert-title">{{ cert.title }}</h3>
            <p class="cert-issuer">{{ cert.issuer }}</p>
            <p class="cert-date">{{ cert.date }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const skillCategories = ref([
  {
    name: 'Backend Development',
    skills: [
      {
        name: 'Django',
        level: 95,
        description: 'Python Web-Framework für robuste Anwendungen',
        experience: '2+ Jahre'
      },
      {
        name: 'Python',
        level: 90,
        description: 'Vielseitige Sprache für Backend und Data Science',
        experience: '3+ Jahre'
      },
      {
        name: 'Java',
        level: 85,
        description: 'Enterprise-Anwendungen und Spring Framework',
        experience: '2+ Jahre'
      },
      {
        name: 'PostgreSQL',
        level: 85,
        description: 'Relationale Datenbanken und komplexe Queries',
        experience: '2+ Jahre'
      }
    ]
  },
  {
    name: 'Frontend Development',
    skills: [
      {
        name: 'Vue.js',
        level: 90,
        description: 'Modernes JavaScript-Framework für SPAs',
        experience: '2+ Jahre'
      },
      {
        name: 'React',
        level: 85,
        description: 'Komponenten-basierte UI-Entwicklung',
        experience: '1.5+ Jahre'
      },
      {
        name: 'JavaScript',
        level: 90,
        description: 'ES6+, Async/Await, moderne Features',
        experience: '3+ Jahre'
      },
      {
        name: 'HTML/CSS',
        level: 85,
        description: 'Responsive Design und moderne CSS-Features',
        experience: '3+ Jahre'
      }
    ]
  },
  {
    name: 'Mobile Development',
    skills: [
      {
        name: 'Flutter',
        level: 85,
        description: 'Cross-platform mobile App-Entwicklung',
        experience: '4+ Jahr'
      },
      {
        name: 'Dart',
        level: 80,
        description: 'Programmiersprache für Flutter-Apps',
        experience: '4+ Jahr'
      }
    ]
  },
  {
    name: 'DevOps & Infrastructure',
    skills: [
      {
        name: 'Docker',
        level: 85,
        description: 'Containerization und Microservices',
        experience: '3+ Jahre'
      },
      {
        name: 'Kubernetes',
        level: 75,
        description: 'Container-Orchestrierung und Skalierung',
        experience: '1+ Jahr'
      },
      {
        name: 'Git',
        level: 95,
        description: 'Versionskontrolle und Collaboration',
        experience: '5+ Jahre'
      }
    ]
  },
  {
    name: 'Data Science & AI',
    skills: [
      {
        name: 'TensorFlow',
        level: 80,
        description: 'Machine Learning und Deep Learning',
        experience: '2+ Jahre'
      },
      {
        name: 'Jupyter',
        level: 80,
        description: 'Data Analysis und Prototyping',
        experience: '2+ Jahre'
      },
      {
        name: 'Kafka',
        level: 75,
        description: 'Event Streaming und Data Pipelines',
        experience: '1+ Jahr'
      }
    ]
  },
  {
    name: 'Operating Systems',
    skills: [
      {
        name: 'Ubuntu',
        level: 95,
        description: 'Linux-Administration und Server-Setup',
        experience: '3+ Jahre'
      },
      {
        name: 'Windows',
        level: 90,
        description: 'Desktop-Entwicklung und Administration',
        experience: '5+ Jahre'
      },
      {
        name: 'macOS',
        level: 80,
        description: 'Entwicklung und Design auf Apple-Plattformen',
        experience: '2+ Jahr'
      }
    ]
  }
])

const favoriteTools = ref([
  {
    name: 'Django',
    icon: '🐍',
    description: 'Mein bevorzugtes Python-Framework für Backend-Entwicklung',
    rating: 5
  },
  {
    name: 'Vue.js',
    icon: '�',
    description: 'Elegantes JavaScript-Framework für moderne UIs',
    rating: 5
  },
  {
    name: 'Docker',
    icon: '�',
    description: 'Containerization für konsistente Entwicklungsumgebungen',
    rating: 5
  },
  {
    name: 'Flutter',
    icon: '📱',
    description: 'Cross-platform mobile App-Entwicklung',
    rating: 4
  },
  {
    name: 'PostgreSQL',
    icon: '�',
    description: 'Robuste relationale Datenbank für komplexe Anwendungen',
    rating: 5
  },
  {
    name: 'Jupyter',
    icon: '�',
    description: 'Interactive Data Science und Prototyping',
    rating: 4
  }
])

const learningPath = ref([
  {
    id: 1,
    title: 'Advanced Kubernetes',
    description: 'Vertiefung in Container-Orchestrierung und Cloud-Native Patterns',
    tags: ['DevOps', 'Cloud', 'Kubernetes'],
    status: 'in-progress',
    progress: 45
  },
  {
    id: 2,
    title: 'Advanced TensorFlow',
    description: 'Deep Learning und Neural Networks für produktive AI-Anwendungen',
    tags: ['AI', 'Machine Learning', 'TensorFlow'],
    status: 'planning',
    progress: 0
  },
  {
    id: 3,
    title: 'Flutter Advanced',
    description: 'State Management und Performance-Optimierung für Mobile Apps',
    tags: ['Mobile', 'Flutter', 'Dart'],
    status: 'in-progress',
    progress: 60
  },
  {
    id: 4,
    title: 'Kafka Streams',
    description: 'Event-Driven Architecture und Stream Processing',
    tags: ['Streaming', 'Kafka', 'Architecture'],
    status: 'completed',
    progress: 100
  }
])

const certifications = ref([
  {
    id: 1,
    title: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    date: '2024',
    badge: '☁️'
  },
  {
    id: 2,
    title: 'Google Analytics Certified',
    issuer: 'Google',
    date: '2023',
    badge: '📊'
  },
  {
    id: 3,
    title: 'GitHub Actions Certified',
    issuer: 'GitHub',
    date: '2023',
    badge: '🤖'
  }
])

const getSkillLevelClass = (level) => {
  if (level >= 90) return 'expert'
  if (level >= 80) return 'advanced'
  if (level >= 70) return 'intermediate'
  return 'beginner'
}
</script>

<style scoped>
.skills-hero {
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.skills-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23333" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.3;
}

.skills-title {
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

.skills-intro {
  font-size: 1.2rem;
  text-align: center;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.skills-matrix {
  padding: 6rem 0;
  background: #f8f9fa;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-family: 'Fira Code', monospace;
  color: #2c3e50;
  text-align: center;
}

.code-keyword {
  color: #667eea;
  font-weight: 700;
}

.section-closing {
  font-size: 2rem;
  color: #667eea;
  font-family: 'Fira Code', monospace;
  font-weight: 700;
  text-align: center;
  margin-top: 3rem;
}

.skills-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.skill-category {
  background: white;
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
}

.category-title {
  font-family: 'Fira Code', monospace;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 700;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-item {
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 10px;
  border: 1px solid #e9ecef;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-weight: 600;
  color: #2c3e50;
  font-size: 1.1rem;
}

.skill-level {
  font-family: 'Fira Code', monospace;
  color: #667eea;
  font-weight: 600;
}

.skill-bar {
  height: 8px;
  background: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.skill-progress {
  height: 100%;
  border-radius: 4px;
  transition: width 1s ease;
}

.skill-progress.expert {
  background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
}

.skill-progress.advanced {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.skill-progress.intermediate {
  background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
}

.skill-progress.beginner {
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
}

.skill-description {
  font-size: 0.9rem;
  color: #7f8c8d;
  margin-bottom: 0.5rem;
}

.skill-experience {
  display: flex;
  justify-content: flex-end;
}

.experience-badge {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

.tools-showcase {
  padding: 6rem 0;
  background: #2c3e50;
  color: white;
}

.tools-showcase .section-title {
  color: white;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.tool-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.tool-card:hover {
  transform: translateY(-5px);
}

.tool-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.tool-name {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #5af78e;
}

.tool-description {
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.tool-rating {
  display: flex;
  justify-content: center;
  gap: 0.25rem;
}

.star {
  opacity: 0.3;
  transition: opacity 0.3s ease;
}

.star.filled {
  opacity: 1;
}

.learning-journey {
  padding: 6rem 0;
  background: #f8f9fa;
}

.learning-timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.learning-timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 4rem;
}

.timeline-marker {
  position: absolute;
  left: 21px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid white;
  z-index: 2;
}

.timeline-marker.completed {
  background: #27ae60;
}

.timeline-marker.in-progress {
  background: #f39c12;
}

.timeline-marker.planning {
  background: #95a5a6;
}

.timeline-content {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.timeline-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.timeline-description {
  color: #7f8c8d;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.timeline-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.tag {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.timeline-progress {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.progress-bar {
  flex: 1;
  height: 8px;
  background: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
  transition: width 1s ease;
}

.progress-text {
  font-family: 'Fira Code', monospace;
  color: #667eea;
  font-weight: 600;
  min-width: 40px;
}

.certifications {
  padding: 6rem 0;
  background: #2c3e50;
  color: white;
}

.certifications .section-title {
  color: white;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.cert-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.cert-card:hover {
  transform: translateY(-5px);
}

.cert-badge {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.cert-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #5af78e;
}

.cert-issuer {
  opacity: 0.8;
  margin-bottom: 0.5rem;
}

.cert-date {
  font-family: 'Fira Code', monospace;
  color: #667eea;
  font-weight: 600;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .skills-matrix {
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

  .skill-item {
    background: #34495e;
    border-color: #3a4a5c;
  }

  .skill-name {
    color: #ecf0f1;
  }

  .skill-description {
    color: #bdc3c7;
  }

  .learning-journey {
    background: #1a1a1a;
  }

  .timeline-content {
    background: #2c3e50;
    color: #ecf0f1;
  }

  .timeline-title {
    color: #ecf0f1;
  }

  .timeline-description {
    color: #bdc3c7;
  }
}

/* Mobile responsive */
@media (max-width: 768px) {
  .skills-title {
    font-size: 2rem;
  }

  .skills-categories {
    grid-template-columns: 1fr;
  }

  .skill-category {
    padding: 1.5rem;
  }

  .tools-grid {
    grid-template-columns: 1fr;
  }

  .learning-timeline::before {
    left: 20px;
  }

  .timeline-item {
    padding-left: 3rem;
  }

  .timeline-marker {
    left: 11px;
  }

  .cert-grid {
    grid-template-columns: 1fr;
  }
}
</style>
