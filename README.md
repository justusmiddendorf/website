# Modern Vue.js Website

Eine moderne, professionell strukturierte Vue.js-Anwendung mit schöner Navbar und responsive Design.

## 🚀 Projektstruktur

```
src/
├── components/          # Wiederverwendbare Komponenten
│   ├── layout/         # Layout-Komponenten
│   │   ├── Navbar.vue  # Moderne Top-Navbar
│   │   ├── Footer.vue  # Footer-Komponente
│   │   └── MainLayout.vue # Haupt-Layout
│   └── ui/             # UI-Komponenten (Buttons, Cards, etc.)
├── views/              # Seiten/Views
│   └── Home.vue        # Startseite
├── composables/        # Vue 3 Composables
│   └── useUI.js        # UI-bezogene Composables
├── utils/              # Hilfsfunktionen
│   └── helpers.js      # Allgemeine Utility-Funktionen
├── assets/             # Statische Assets
│   ├── images/         # Bilder
│   └── icons/          # Icons
├── styles/             # CSS-Dateien
│   ├── main.css        # Haupt-CSS (mit Imports)
│   ├── variables.css   # CSS-Variablen
│   └── utilities.css   # Utility-Klassen
├── router/             # Vue Router (vorbereitet)
│   └── index.js        # Router-Konfiguration
├── stores/             # Pinia/Vuex Stores (vorbereitet)
├── App.vue             # Haupt-App-Komponente
└── main.js             # Einstiegspunkt
```

## 🎨 Features

- **Moderne Navbar**: Responsive Top-Navigation mit Hamburger-Menü
- **Clean Architecture**: Gut strukturierte Ordnerorganisation
- **CSS-Variablen**: Konsistente Theming-Unterstützung
- **Dark Mode**: Automatische Dark Mode-Unterstützung
- **Responsive Design**: Mobile-first Ansatz
- **Utility Classes**: Tailwind-ähnliche Utility-Klassen
- **Vue 3 Composition API**: Moderne Vue.js-Patterns
- **Composables**: Wiederverwendbare Logik
- **TypeScript-ready**: Einfach zu TypeScript migrierbar

## 🛠️ Installation

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Build für Produktion
npm run build
```

## 📱 Responsive Design

Die Anwendung ist vollständig responsive und optimiert für:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🎯 Nächste Schritte

1. **Router hinzufügen**: Vue Router für Navigation einrichten
2. **Weitere Views**: About, Services, Contact-Seiten erstellen
3. **Komponenten erweitern**: Weitere UI-Komponenten hinzufügen
4. **State Management**: Pinia für globalen State einrichten
5. **API Integration**: Axios für HTTP-Requests hinzufügen

## 💡 Entwicklungsrichtlinien

- **Komponenten**: Verwenden Sie die Composition API
- **Styling**: Nutzen Sie CSS-Variablen für Konsistenz
- **Utilities**: Verwenden Sie die bereitgestellten Utility-Klassen
- **Ordnerstruktur**: Halten Sie die Struktur sauber und logisch

## 🔧 Konfiguration

- **Vite**: Moderne Build-Tools
- **Vue 3**: Neueste Vue-Version
- **CSS**: Moderne CSS-Features mit Variablen
- **ESLint**: Code-Qualität (konfigurierbar)

## 📄 Lizenz

MIT License
