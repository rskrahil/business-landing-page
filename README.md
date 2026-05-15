# IZU Solutions — Business Landing Page

A modern, fully responsive business landing page built with **React** and **Vite**, featuring smooth animations, a clean white & orange design, and a well-structured component architecture.

---

## 🌐 Live Preview

> Coming soon — will be deployed on Vercel

---

## 🚀 Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI component library |
| Vite | Build tool and dev server |
| CSS3 | Styling with variables and animations |
| JavaScript ES6+ | Logic and interactivity |

---

## ✨ Features

- ⚡ Fast performance with Vite
- 📱 Fully responsive — works on mobile, tablet, and desktop
- 🎨 Clean white & orange design
- 🔄 Animated cycling hero headline
- 📜 Smooth scroll-triggered fade-up animations
- 🍔 Mobile hamburger menu with animation
- 🎞️ Auto-scrolling marquee banner
- 📂 Accordion to show/hide all 16 services
- 📬 Contact form with success message
- 🎯 Active navbar link tracking

---

## 🗂️ Project Structure

```
IZWebsite/
├── index.html                  ← Entry HTML file
├── package.json                ← Project dependencies
├── vite.config.js              ← Vite configuration
└── src/
    ├── main.jsx                ← React entry point
    ├── App.jsx                 ← Root component
    ├── data.js                 ← All static website content
    ├── hooks.js                ← Custom React hooks
    ├── styles/
    │   ├── index.css           ← Global styles and CSS variables
    │   ├── Navbar.css          ← Navbar and mobile menu styles
    │   ├── Hero.css            ← Hero section styles
    │   ├── Services.css        ← Services grid and pills styles
    │   └── components.css      ← Shared component styles
    └── components/
        ├── FadeUp.jsx          ← Reusable scroll animation wrapper
        ├── Navbar.jsx          ← Fixed navbar with mobile menu
        ├── Hero.jsx            ← Hero section with animated headline
        ├── Marquee.jsx         ← Auto-scrolling orange banner
        ├── About.jsx           ← About section with value cards
        ├── Services.jsx        ← Services grid with accordion
        ├── Vision.jsx          ← Vision/CTA section
        ├── Industries.jsx      ← Industries we serve section
        └── Footer.jsx          ← Footer with contact form
```
