# Aradhya Ray Portfolio

A modern personal portfolio website for **Aradhya Ray**, a Computer Science Engineering student specializing in AI & ML. The site highlights experience, technical skills, featured projects, open-source work, certifications, achievements, education, resume access, and contact links.

## Overview

This portfolio is built as a single-page React application with smooth scrolling, animated sections, responsive layouts, and a dark visual style. It is designed to present AI/ML, full-stack, and open-source work in a clean and professional format.

Repository: [AradhyaRay05/Portfolio](https://github.com/AradhyaRay05/Portfolio)

## Features

- Responsive single-page portfolio layout
- Hero section with resume view/download actions
- Smooth in-page navigation
- About, experience, education, and achievements sections
- Technology stack showcase
- Featured project cards with GitHub and live demo links
- Project archive and open-source highlights
- GitHub profile section
- Certifications section
- Contact section with email, Gmail, Outlook, copy-email, and social links
- Motion effects using Framer Motion
- Tailwind CSS based styling

## Tech Stack

- **React 18**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**
- **ESLint**

## Project Structure

```text
.
├── public/
│   ├── Aradhya Ray Resume.pdf
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   └── ui.tsx
│   ├── sections/
│   │   ├── AboutSection.tsx
│   │   ├── AchievementsSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── GitHubSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── MarqueeSection.tsx
│   │   ├── OpenSourceSection.tsx
│   │   ├── ProjectArchiveSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   └── TechStackSection.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm.

### Installation

```bash
git clone https://github.com/AradhyaRay05/Portfolio.git
cd Portfolio
npm install
```

### Run Locally

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173/
```

## Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production-ready build in the `dist/` directory.

```bash
npm run preview
```

Serves the production build locally for preview.

```bash
npm run lint
```

Runs ESLint to check code quality.

## Updating Portfolio Content

Most portfolio content is organized by section inside `src/sections/`.

- Update the hero introduction and navigation in `src/sections/HeroSection.tsx`
- Update featured projects in `src/sections/ProjectsSection.tsx`
- Update contact details and social links in `src/sections/ContactSection.tsx`
- Replace the resume PDF in `public/Aradhya Ray Resume.pdf`
- Adjust global styles in `src/index.css`

## Build and Deployment

To create a deployable build:

```bash
npm run build
```

The final static files will be generated in `dist/`. You can deploy this folder to platforms such as Netlify, Vercel, GitHub Pages, or any static hosting provider.

## Contact

- GitHub: [AradhyaRay05](https://github.com/AradhyaRay05)
- LinkedIn: [rayaradhya](https://www.linkedin.com/in/rayaradhya)
- Instagram: [muse_in_machines](https://www.instagram.com/muse_in_machines/)
- Email: [aradhyaray05@gmail.com](mailto:aradhyaray05@gmail.com)

## 📄 License

This project is licensed under the [MIT License](LICENSE).


## 📬 Contact

<p>
  <a href="mailto:aradhyaray05@gmail.com"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>
  <a href="www.linkedin.com/in/rayaradhya"><img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
  <a href="https://github.com/AradhyaRay05"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" /></a>
</p>


Thanks for visiting ! Feel free to explore my other repositories and connect with me.