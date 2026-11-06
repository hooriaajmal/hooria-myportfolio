# Personal Portfolio Website

A modern, responsive portfolio website built with React, showcasing my projects, skills, and experience in AI/ML and web development.

🚀 **Live Demo**: [https://hooria-myportfolio.vercel.app/](https://hooria-myportfolio.vercel.app/)

## 🚀 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **Interactive Skills**: Animated skills section with proper brand colors
- **Project Showcase**: Featured projects with detailed descriptions
- **Contact Form**: Integrated contact functionality

## 🛠️ Technologies Used

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel

## 📋 Projects Showcased

1. **AI Copy Style Transfer & Generation** - TensorFlow fine-tuning with Streamlit deployment
2. **Real-Time Price Prediction System** - PyTorch hybrid models for time series analysis
3. **Timetable Generation Agent** - LLM-powered scheduling with Grok and LLaMA
4. **Urdu Sentiment Analysis** - BERT and BiLSTM models for Twitter data
5. **Urdu Story Generation Model** - LLaMA 3.1 with TTS and video generation
6. **Portfolio Website** - This React-based portfolio

## 🎯 Skills Highlighted

### Development
- HTML5, CSS3, JavaScript, TypeScript
- React, Next.js, Node.js, Express.js
- Tailwind CSS, Vite, Git, Docker

### AI/ML
- Python, TensorFlow, PyTorch
- Machine Learning, Deep Learning, NLP
- Scikit-learn, Pandas, NumPy
- Apache Spark, Jupyter, Streamlit

- Creating responsive layouts with Tailwind CSS
- Animating React components with Framer Motion
- Handling form submission with Formspree
- Managing dark/light themes with state and event listeners
- Building reusable, clean, and modern UI components

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hooriaajmal/hooria-myportfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect your GitHub repository to Vercel**
2. **Import the project**
3. **Deploy automatically** - Vercel will detect the Vite configuration

The `vercel.json` file is already configured for optimal deployment.

### Manual Deployment

```bash
npm run build
# Upload the 'dist' folder to your hosting provider
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Experience.jsx  # Experience timeline
│   ├── Skills.jsx      # Technical skills
│   ├── Projects.jsx    # Project showcase
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer
├── pages/              # Page components
│   └── Portfolio.jsx   # Main portfolio page
├── assets/             # Images and static files
└── index.css           # Global styles
```

## 🎨 Customization

### Colors
- Primary: Red (#EF4444)
- Dark mode: Black (#000000)
- Light mode: White (#FFFFFF)

### Adding Projects
Edit `src/components/Projects.jsx` to add new projects to the showcase.

### Adding Skills
Edit `src/components/Skills.jsx` to add new technical skills with proper brand colors.

## 📱 Responsive Design

- **Mobile**: Single column layout with hamburger menu
- **Tablet**: Two-column grid for projects
- **Desktop**: Three-column grid with animated skills

## 🔧 Configuration

### Tailwind CSS
Custom configuration in `tailwind.config.js` with dark mode support.

### Vite
Optimized build configuration in `vite.config.js`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Hooria Ajmal**
- GitHub: [@hooriaajmal](https://github.com/hooriaajmal)
- Portfolio: [Live Demo](https://hooria-myportfolio.vercel.app/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

⭐ **Star this repository if you found it helpful!**
