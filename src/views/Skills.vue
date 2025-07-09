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


  </div>
</template>

<script setup>
import { ref } from 'vue'
import skillCategoriesData from '../data/skills.js'

const skillCategories = ref(skillCategoriesData)

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
}
</style>
