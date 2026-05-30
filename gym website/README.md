# 🔥 IGNITE FITNESS — Premium Gym Website

![Ignite Fitness](https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

> A stunning, fully responsive premium gym website built with pure HTML, CSS, and JavaScript. Featuring the sleek **"Midnight Ember"** theme with deep blacks and fiery red accents.

---

## 🌐 Live Demo

🔗 **[View Live Site →](https://gym-website.vercel.app)** *(Update with your Vercel URL after deployment)*

---

## ✨ Features

- 🎨 **Premium "Midnight Ember" Design** — Deep black + fiery red aesthetic
- 📱 **Fully Mobile Responsive** — Works perfectly on all screen sizes
- ⚡ **Smooth Animations** — Scroll reveal, hover effects & micro-animations
- 🏋️ **BMI Calculator** — Interactive body mass index tool
- 📝 **6-Page Website** — Home, About, Services, Pricing, Blog, Contact
- 🗺️ **Embedded Google Map** — On the Contact page
- 🔤 **Premium Typography** — Bebas Neue + Inter fonts from Google Fonts
- 🚀 **No Dependencies** — Pure HTML, CSS & vanilla JavaScript

---

## 📄 Pages

| Page | Description |
|------|-------------|
| **Home** (`index.html`) | Hero, Stats, Services preview, Testimonials, BMI Calculator |
| **About** (`about.html`) | Our story, Trainers team, Stats |
| **Services** (`services.html`) | All 6 fitness services |
| **Pricing** (`pricing.html`) | 3-tier membership plans |
| **Blog** (`blog.html`) | 3 fitness blog post cards |
| **Contact** (`contact.html`) | Contact form + embedded Google Map |

---

## 🗂️ Project Structure

```
gym website/
│
├── index.html          # Home page
├── about.html          # About page
├── services.html       # Services page
├── pricing.html        # Pricing page
├── blog.html           # Blog page
├── contact.html        # Contact page
│
├── style.css           # Main stylesheet (Midnight Ember theme)
├── script.js           # JavaScript (animations, BMI, nav)
│
└── README.md           # This file
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#0a0a0a` | Main background |
| `--bg-secondary` | `#111111` | Section backgrounds |
| `--bg-card` | `#161616` | Card backgrounds |
| `--accent` | `#E63946` | Primary red accent |
| `--ember` | `#FF6B35` | Orange gradient accent |
| `--text-primary` | `#FFFFFF` | Headings & body text |
| `--text-secondary` | `#B0B0B0` | Subtitles & descriptions |

**Fonts:**
- **Bebas Neue** — Display / headings
- **Inter** — Body text

---

## 🚀 Getting Started

### Run Locally

No installation needed! Just open the file in your browser:

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/gym-website.git

# Navigate to the project
cd gym-website

# Open in browser (Mac)
open index.html
```

Or simply double-click `index.html` to open it in your browser.

---

## ☁️ Deploy to Vercel

### Option 1: Via GitHub (Recommended)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **"Add New → Project"**
4. Select your **gym-website** repository
5. Click **"Deploy"** — Done! 🎉

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy from project folder
vercel
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| `< 600px` | Mobile — Single column |
| `600px+` | Tablet — 2 columns |
| `900px+` | Desktop — 3 columns, full nav |
| `1200px+` | Large — Max typography sizes |

---

## 🏋️ Sections Overview

- **Hero** — Full-viewport background image with animated badge and CTA buttons
- **Marquee** — Infinite scrolling ticker (STRENGTH · ENDURANCE · POWER · FOCUS)
- **Stats** — Animated counters (50+ Trainers, 5000+ Members, etc.)
- **Services** — 6 service cards with hover animations
- **Testimonials** — 3 member testimonials with star ratings
- **BMI Calculator** — Real-time body mass index calculator
- **Pricing** — 3 plan cards (Basic, Pro, Elite) with popular badge
- **Blog** — 3 article cards with category badges, dates & images
- **Contact** — Form with name/email/subject/message + Google Map

---

## 👨‍💻 Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** — IntersectionObserver, counter animations, BMI logic
- **Google Fonts** — Bebas Neue + Inter
- **Unsplash** — High-quality placeholder images

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with 🔥 by <strong>Ignite Fitness</strong></p>
<p align="center">Designed & Developed by <strong>Irfhan</strong> 👨‍💻</p>
