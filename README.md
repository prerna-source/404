# Prerna Kumari — Personal Portfolio Website

A modern, authentic, and responsive personal portfolio website for **Prerna Kumari**, a first-year B.Tech student in Electronics & Communication Engineering at JCRC University.

## 🚀 Built With
- **React 18** — Component-driven UI
- **Vite** — High-performance frontend build tool
- **Tailwind CSS** — Modern styling and customized responsive design system
- **Lucide React** — Minimalist, clean iconography

## 📂 Project Structure
```text
prerna-portfolio/
├── index.html                   # SEO metadata, Open Graph, and fonts
├── package.json                 # Project dependencies and scripts
├── vercel.json                  # Vercel deployment configuration
├── tailwind.config.js           # Extended color palette & animation keyframes
└── src/
    ├── data/
    │   └── portfolioData.js     # Central data store (easy to update all text, skills, projects)
    ├── components/
    │   ├── common/              # Button, Card, Badge, SectionHeader, Modal
    │   ├── layout/              # Navbar (sticky, active spy, mobile drawer) & Footer
    │   └── visual/              # Custom TechIllustration abstract SVG/terminal visual
    ├── sections/                # Hero, About, Education, Skills, Projects, Achievements, Contact
    ├── App.jsx                  # Main application orchestrator
    └── index.css                # Base Tailwind & custom scrollbar styling
```

## 🛠️ How to Run Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

3. **Build for production**:
   ```bash
   npm run build
   ```

## 🌐 Deploying to Vercel
1. Push this project folder to your GitHub account (when created).
2. Go to [Vercel](https://vercel.com) and import the repository.
3. Framework Preset: **Vite**
4. Click **Deploy**. Done!

## ✏️ Updating Portfolio Information
All personal details, skills, projects, and achievements are organized in a single configuration file:
👉 `src/data/portfolioData.js`
