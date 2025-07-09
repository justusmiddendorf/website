<template>
  <div class="about">
    <section class="about-hero">
      <div class="container">
        <div class="about-content">
          <h1 class="about-title">
            <span class="code-comment">// About me</span>
            <br>
            Hallo, ich bin <span class="highlight">Justus</span> 👋
          </h1>
          <p class="about-intro">
            Informatik-Student im {{ currentSemester }}. Semester mit einer Leidenschaft für 
            Softwareentwicklung, KI und grüne Innovation. Spezialisiert auf Full-Stack-Entwicklung 
            mit modernen Frameworks und Cloud-Technologien.
          </p>
        </div>
      </div>
    </section>

    <section class="journey">
      <div class="container">
        <h2 class="section-title">
          <span class="code-keyword">class</span> Journey <span class="code-bracket">{</span>
        </h2>
        
        <div class="timeline">
          <div class="timeline-item" v-for="item in timeline" :key="item.year">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3 class="timeline-title">{{ item.title }}</h3>
              <span class="timeline-year">{{ item.year }}</span>
              <p class="timeline-description">{{ item.description }}</p>
            </div>
          </div>
        </div>
        
        <div class="section-closing">}</div>
      </div>
    </section>

    <section class="interests">
      <div class="container">
        <h2 class="section-title">
          const interests = [
        </h2>
        
        <div class="interests-grid">
          <div class="interest-card" v-for="interest in interests" :key="interest.name">
            <div class="interest-icon">{{ interest.icon }}</div>
            <h3 class="interest-title">{{ interest.name }}</h3>
            <p class="interest-description">{{ interest.description }}</p>
          </div>
        </div>
        
        <div class="section-closing">];</div>
      </div>
    </section>

    <section class="philosophy">
      <div class="container">
        <div class="philosophy-content">
          <h2 class="philosophy-title">Meine Philosophie</h2>
          <blockquote class="philosophy-quote">
            "Code is poetry written in logic. Every line should tell a story, 
            solve a problem, and make the world a little bit better."
          </blockquote>
          <p class="philosophy-text">
            Ich glaube daran, dass guter Code nicht nur funktioniert, sondern auch 
            elegant, verständlich und wartbar ist. Mein Ziel ist es, Technologie 
            zu nutzen, um echte Probleme zu lösen und das Leben der Menschen zu verbessern.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { interests as interestsData, timeline as timelineData } from '../data/about.js'

const currentYear = new Date().getFullYear()
const startYear = 2022
const currentSemester = computed(() => {
  const yearsElapsed = currentYear - startYear
  return (yearsElapsed * 2)  // Assuming we're in sommer semester
})

const timeline = ref(timelineData)
const interests = ref(interestsData)

const philosophy = ref(
  'Ich glaube an die Kraft von Open Source, interdisziplinärer Forschung und nachhaltiger Technologie. Meine Projekte verbinden Wissenschaft, Softwareentwicklung und gesellschaftlichen Mehrwert – immer mit dem Ziel, Lösungen zu schaffen, die wirklich etwas bewegen.'
)

const projectHighlights = ref([
  {
    title: 'AutoWindLoc',
    description: 'Machine-Learning-gestützte Lokalisierung von Windkraftanlagen für bessere Umweltregister.'
  },
  {
    title: 'Nextcloud Talk Flutter App',
    description: 'Moderne, sichere Kommunikation und Integration für Nextcloud.'
  },
  {
    title: 'Renew – The Reference Net Workshop',
    description: 'Open-Source-Framework für Petri-Netze, Forschung und Lehre.'
  },
  {
    title: 'Green Tech Innovation',
    description: 'Nachhaltige Technologien und KI-gestütztes Umweltmonitoring.'
  }
])
</script>

<style scoped>
.about-hero {
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.about-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23333" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.3;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
}

.about-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 2rem;
  line-height: 1.2;
}

.code-comment {
  font-family: 'Fira Code', monospace;
  color: #5af78e;
  font-size: 1.5rem;
  opacity: 0.8;
}

.highlight {
  background: linear-gradient(135deg, #5af78e 0%, #57d9a3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-intro {
  font-size: 1.3rem;
  line-height: 1.6;
  opacity: 0.9;
}

.journey {
  padding: 6rem 0;
  background: #f8f9fa;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-family: 'Fira Code', monospace;
  color: #2c3e50;
}

.code-keyword {
  color: #667eea;
  font-weight: 700;
}

.code-bracket {
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

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
}

.timeline-item:nth-child(odd) {
  flex-direction: row-reverse;
}

.timeline-item:nth-child(odd) .timeline-content {
  text-align: right;
  margin-right: 2rem;
}

.timeline-item:nth-child(even) .timeline-content {
  text-align: left;
  margin-left: 2rem;
}

.timeline-marker {
  position: absolute;
  left: 50%;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 2;
  border: 3px solid white;
}

.timeline-content {
  flex: 1;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  max-width: 400px;
}

.timeline-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.timeline-year {
  color: #667eea;
  font-weight: 600;
  font-family: 'Fira Code', monospace;
}

.timeline-description {
  margin-top: 1rem;
  color: #7f8c8d;
  line-height: 1.6;
}

.interests {
  padding: 6rem 0;
  background: #2c3e50;
  color: white;
}

.interests .section-title {
  color: white;
}

.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.interest-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.interest-card:hover {
  transform: translateY(-5px);
}

.interest-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.interest-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #5af78e;
}

.interest-description {
  opacity: 0.9;
  line-height: 1.6;
}

.philosophy {
  padding: 6rem 0;
  background: #f8f9fa;
}

.philosophy-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.philosophy-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-weight: 700;
}

.philosophy-quote {
  font-size: 1.5rem;
  font-style: italic;
  color: #667eea;
  margin: 2rem 0;
  position: relative;
  font-family: 'Fira Code', monospace;
  line-height: 1.6;
}

.philosophy-quote::before,
.philosophy-quote::after {
  content: '"';
  font-size: 4rem;
  color: #5af78e;
  position: absolute;
  font-family: serif;
}

.philosophy-quote::before {
  top: -1rem;
  left: -2rem;
}

.philosophy-quote::after {
  bottom: -3rem;
  right: -2rem;
}

.philosophy-text {
  font-size: 1.1rem;
  color: #7f8c8d;
  line-height: 1.8;
  margin-top: 2rem;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .journey {
    background: #1a1a1a;
  }

  .section-title {
    color: #ecf0f1;
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

  .philosophy {
    background: #1a1a1a;
  }

  .philosophy-title {
    color: #ecf0f1;
  }

  .philosophy-text {
    color: #bdc3c7;
  }
}

/* Mobile responsive */
@media (max-width: 768px) {
  .about-title {
    font-size: 2rem;
  }

  .about-intro {
    font-size: 1.1rem;
  }

  .timeline::before {
    left: 20px;
  }

  .timeline-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .timeline-item:nth-child(odd),
  .timeline-item:nth-child(even) {
    flex-direction: column;
  }

  .timeline-item:nth-child(odd) .timeline-content,
  .timeline-item:nth-child(even) .timeline-content {
    text-align: left;
    margin-left: 3rem;
    margin-right: 0;
  }

  .timeline-marker {
    left: 20px;
  }

  .interests-grid {
    grid-template-columns: 1fr;
  }

  .philosophy-quote::before,
  .philosophy-quote::after {
    display: none;
  }
}
</style>
