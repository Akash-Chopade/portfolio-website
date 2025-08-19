# Akash - Personal Portfolio Website

A modern, responsive personal portfolio website built with React, showcasing my skills, projects, and experience as a Software Engineer.

## 🌟 Features

### 🎨 Design & UX

- **Dark/Light Theme Toggle** - Seamless theme switching with smooth transitions
- **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- **Smooth Animations** - Powered by Framer Motion for engaging user interactions
- **Modern UI** - Clean, professional design with gradient accents

### 🔧 Technical Features

- **React 18** - Latest React features with functional components and hooks
- **Framer Motion** - Advanced animations and smooth transitions
- **CSS Modules** - Modular, maintainable styling
- **React Context API** - Global theme state management
- **React Icons** - Comprehensive icon library
- **EmailJS Integration** - Real contact form that sends emails to your inbox
- **Google Analytics** - Comprehensive visitor tracking and analytics
- **SEO Optimized** - Proper meta tags and semantic HTML

### 📱 Sections

- **Hero Section** - Introduction with call-to-action and social links
- **About Me** - Professional background and experience summary
- **Skills** - Interactive skill showcase with animated progress indicators
- **Projects** - Featured projects with technologies and live demos
- **Contact** - Interactive contact form with real email functionality and tracking

## 📧 Email & Analytics Features

### ✉️ Contact Form

- **Real Email Sending** - Messages sent directly to your email via EmailJS
- **Form Validation** - Client-side validation with error handling
- **Success Feedback** - User-friendly confirmation messages
- **Professional Formatting** - Clean email templates with sender information

### 📊 Visitor Analytics

- **Google Analytics Integration** - Comprehensive visitor tracking
- **Real-time Data** - Live visitor monitoring and user behavior
- **Engagement Tracking** - Form submissions, project clicks, social media interactions
- **Geographic Insights** - Visitor location and demographics
- **Device Analytics** - Mobile vs desktop usage patterns

**📖 Setup Guide:** See `EMAIL_ANALYTICS_SETUP.md` for detailed configuration instructions.

## 🚀 Technologies Used

- **Frontend:** React 18, JavaScript ES6+
- **Styling:** CSS3, CSS Modules, Custom Properties (CSS Variables)
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Build Tool:** Vite
- **Development:** ESLint for code quality

## 🛠 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/portfolio.git
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

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.jsx   # Navigation bar with theme toggle
│   └── Footer.jsx       # Footer with social links
├── pages/              # Main section components
│   ├── Hero.jsx        # Landing section
│   ├── About.jsx       # About me section
│   ├── Skills.jsx      # Skills showcase
│   ├── Projects.jsx    # Projects portfolio
│   └── Contact.jsx     # Contact form
├── context/            # React Context providers
│   └── ThemeContext.jsx # Theme management
├── styles/             # CSS Module files
│   ├── Navigation.module.css
│   ├── Hero.module.css
│   ├── About.module.css
│   ├── Skills.module.css
│   ├── Projects.module.css
│   ├── Contact.module.css
│   └── Footer.module.css
├── assets/             # Static assets
├── App.jsx             # Main App component
├── App.css             # Global app styles
├── index.css           # Global styles and CSS variables
└── main.jsx            # React app entry point
```

## 🎯 Key Features Breakdown

### Theme Management

- React Context API for global theme state
- Smooth CSS transitions between themes
- Persistent theme preference in localStorage
- System preference detection

### Responsive Design

- Mobile-first approach
- Flexible grid layouts
- Optimized images and icons
- Touch-friendly interactions

### Performance Optimizations

- Lazy loading for smooth scrolling
- Optimized animations with Framer Motion
- Efficient CSS with custom properties
- Fast development with Vite

### Accessibility

- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- Screen reader friendly

## 🔧 Customization

### Personal Information

Update the following files with your information:

- `src/pages/Hero.jsx` - Name, title, and tagline
- `src/pages/About.jsx` - Professional background
- `src/pages/Skills.jsx` - Technical skills and proficiency
- `src/pages/Projects.jsx` - Your projects and GitHub links
- `src/pages/Contact.jsx` - Contact information

### Styling

- Modify CSS variables in `src/index.css` for color scheme
- Update component styles in respective `.module.css` files
- Customize animations in component files

### Content

- Replace placeholder project images and descriptions
- Update social media links
- Add your actual resume file
- Update meta tags in `index.html`

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**Akash** - Software Engineer

- 📧 Email: akash@example.com
- 💼 LinkedIn: [Your LinkedIn](https://linkedin.com)
- 🐱 GitHub: [Your GitHub](https://github.com)

---

⭐ Star this repo if you found it helpful!
