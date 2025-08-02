"use client"
import React, { useState, useEffect } from 'react';
// Import the motion component from Framer Motion
import { motion, AnimatePresence } from 'framer-motion';

// --- ICONS ---
const CodeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);
const GithubIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.68 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.43.1 2.68.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85v2.72c0 .27.16.58.67.5A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10Z"/></svg>
);
const LinkedinIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);
const WhatsappIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);
const DatabaseIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
);
const BrushIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"></path><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"></path></svg>
);
const ExternalLinkIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);
const MenuIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
);
const XIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" /></svg>
);


// --- Main App Component ---
export default function App() {
  const [typedText, setTypedText] = useState('');
  const roles = ["AI Engineer", "Data Scientist", "Creative Developer"];
  const [activeFilter, setActiveFilter] = useState('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // --- MOCK DATA with 'role' added ---
  const projects = [
    { id: 1, title: "Neural Style Transfer", role: "Lead AI Developer", description: "An AI-powered web app that applies the style of one image to another using a convolutional neural network (CNN).", image: "https://placehold.co/600x400/1a202c/718096?text=AI+Project", tags: ["AI/ML"], liveUrl: "#", sourceUrl: "#", tech: ["PyTorch", "Flask", "React"]},
    { id: 2, title: "Customer Churn Prediction", role: "Data Scientist", description: "A data science project to predict customer churn using machine learning models, with interactive visualizations.", image: "https://placehold.co/600x400/1a202c/718096?text=Data+Science", tags: ["Data Science"], liveUrl: "#", sourceUrl: "#", tech: ["Scikit-learn", "Pandas", "Plotly"]},
    { id: 3, title: "Interactive Portfolio Website", role: "Full-Stack Developer", description: "This very portfolio, built with Next.js and Framer Motion to create a dynamic and engaging user experience.", image: "https://placehold.co/600x400/1a202c/718096?text=Frontend", tags: ["Frontend"], liveUrl: "#", sourceUrl: "#", tech: ["Next.js", "Tailwind CSS", "Framer Motion"]},
    { id: 4, title: "Sentiment Analysis API", role: "Machine Learning Engineer", description: "Developed a REST API that classifies text sentiment as positive, negative, or neutral using a fine-tuned BERT model.", image: "https://placehold.co/600x400/1a202c/718096?text=AI/ML+API", tags: ["AI/ML", "Data Science"], liveUrl: "#", sourceUrl: "#", tech: ["Hugging Face", "FastAPI", "Docker"]},
    { id: 5, title: "E-commerce Dashboard", role: "Frontend Developer", description: "A responsive front-end for an e-commerce analytics dashboard, featuring complex data visualizations and filtering.", image: "https://placehold.co/600x400/1a202c/718096?text=Frontend+App", tags: ["Frontend"], liveUrl: "#", sourceUrl: "#", tech: ["React", "D3.js", "TypeScript"]}
  ];

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    function type() {
      const currentRole = roles[roleIndex];
      if (isDeleting) { setTypedText(currentRole.substring(0, charIndex - 1)); charIndex--; }
      else { setTypedText(currentRole.substring(0, charIndex + 1)); charIndex++; }

      if (!isDeleting && charIndex === currentRole.length) { isDeleting = true; timeoutId = setTimeout(type, 2000); }
      else if (isDeleting && charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; timeoutId = setTimeout(type, 500); }
      else { timeoutId = setTimeout(type, isDeleting ? 75 : 150); }
    }
    type();
    return () => clearTimeout(timeoutId);
  }, []);

  const filteredProjects = projects.filter(project => activeFilter === 'All' || project.tags.includes(activeFilter));

  // --- ANIMATION VARIANTS ---
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
  };

  // --- SMOOTH SCROLL HANDLER ---
  const handleNavClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close menu on link click
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Changed back to 'smooth' for animated scrolling
        block: 'start'
      });
    }
  };

  return (
    <div className="bg-gray-900 text-gray-200 font-sans antialiased">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-cyan-400">Your Name</a>
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" onClick={handleNavClick} className="hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">About</a>
            <a href="#skills" onClick={handleNavClick} className="hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">Skills</a>
            <a href="#projects" onClick={handleNavClick} className="hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">Projects</a>
            <a href="#contact" onClick={handleNavClick} className="hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">Contact</a>
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <MenuIcon className="w-6 h-6 text-gray-200" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Popup */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden fixed top-20 right-6 z-50 w-64 bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-xl p-4"
          >
            <nav className="flex flex-col items-start space-y-2">
              <a href="#about" onClick={handleNavClick} className="text-lg w-full text-left p-2 rounded-md hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors">About</a>
              <a href="#skills" onClick={handleNavClick} className="text-lg w-full text-left p-2 rounded-md hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#projects" onClick={handleNavClick} className="text-lg w-full text-left p-2 rounded-md hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#contact" onClick={handleNavClick} className="text-lg w-full text-left p-2 rounded-md hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors">Contact</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <main>
          {/* Hero Section */}
          <section id="hero" className="min-h-screen flex items-center justify-center text-center bg-grid-gray-700/[0.2]">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="container mx-auto px-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">I Build Intelligent <br />& Creative Solutions</h1>
              <p className="text-xl md:text-2xl text-cyan-400 font-mono h-8 mb-8">{typedText}<span className="animate-ping">|</span></p>
              <a href="#projects" onClick={handleNavClick} className="bg-cyan-500 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-cyan-400 transition-all transform hover:scale-105">Explore My Work</a>
            </motion.div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 md:py-32 overflow-hidden scroll-mt-20">
            <div className="container mx-auto px-6">
              <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</motion.h2>
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/3">
                  <img src="https://placehold.co/400x400/1a202c/718096?text=You" alt="Your Name" className="rounded-full shadow-lg w-64 h-64 md:w-80 md:h-80 mx-auto border-4 border-cyan-500"/>
                </div>
                <div className="md:w-2/3 text-lg text-gray-300">
                  <p className="mb-4">Hello! I'm a passionate developer with a dual focus on AI/Data Science and creative front-end development. My journey in tech began with a fascination for how data can tell stories and how code can bring those stories to life.</p>
                  <p className="mb-4">I thrive at the intersection of logic and design, building intelligent systems with robust back-ends and crafting beautiful, intuitive user interfaces. Whether I'm training a neural network or perfecting a pixel-perfect animation, I'm driven by a desire to solve complex problems and create meaningful digital experiences.</p>
                </div>
              </motion.div>
            </div>
          </section>
          
          {/* Skills Section */}
          <section id="skills" className="py-20 md:py-32 bg-gray-800 bg-opacity-50 overflow-hidden scroll-mt-20">
            <div className="container mx-auto px-6">
              <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-12">My Arsenal</motion.h2>
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg"><div className="flex items-center mb-4"><CodeIcon className="w-8 h-8 text-cyan-400 mr-4"/><h3 className="text-2xl font-bold">Languages</h3></div><ul className="space-y-2 text-gray-300"><li>Python</li><li>JavaScript / TypeScript</li><li>SQL</li><li>HTML / CSS</li></ul></div>
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg"><div className="flex items-center mb-4"><GithubIcon className="w-8 h-8 text-cyan-400 mr-4"/><h3 className="text-2xl font-bold">AI / ML</h3></div><ul className="space-y-2 text-gray-300"><li>PyTorch / TensorFlow</li><li>Scikit-learn</li><li>Hugging Face</li><li>Pandas / NumPy</li></ul></div>
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg"><div className="flex items-center mb-4"><BrushIcon className="w-8 h-8 text-cyan-400 mr-4"/><h3 className="text-2xl font-bold">Frontend</h3></div><ul className="space-y-2 text-gray-300"><li>React / Next.js</li><li>Tailwind CSS</li><li>Framer Motion / D3.js</li><li>Vue.js</li></ul></div>
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg"><div className="flex items-center mb-4"><DatabaseIcon className="w-8 h-8 text-cyan-400 mr-4"/><h3 className="text-2xl font-bold">Tools & Platforms</h3></div><ul className="space-y-2 text-gray-300"><li>Docker</li><li>Git / GitHub</li><li>PostgreSQL</li><li>Vercel / AWS</li></ul></div>
              </motion.div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 md:py-32 overflow-hidden scroll-mt-20">
            <div className="container mx-auto px-6">
              <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</motion.h2>
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex justify-center space-x-2 md:space-x-4 mb-12">
                {['All', 'AI/ML', 'Data Science', 'Frontend'].map(filter => (
                  <button key={filter} onClick={() => setActiveFilter(filter)} className={`font-semibold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 ${activeFilter === filter ? 'bg-cyan-500 text-gray-900' : 'bg-gray-700 hover:bg-gray-600'}`}>{filter}</button>
                ))}
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <AnimatePresence>
                    {filteredProjects.map((project, i) => (
                      <motion.div 
                        key={project.id}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: (i % 3) * 0.1 }}
                        layout
                        className="group bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/20"
                      >
                        <div className="relative">
                          <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex space-x-4">
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-cyan-500 text-gray-900 py-2 px-4 rounded-full font-semibold flex items-center gap-2 hover:bg-cyan-400 transition-transform transform hover:scale-105"><ExternalLinkIcon className="w-5 h-5"/> Live</a>
                                <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-700 py-2 px-4 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-600 transition-transform transform hover:scale-105"><GithubIcon className="w-5 h-5"/> Source</a>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2 text-cyan-400">{project.title}</h3>
                          
                          <div className="relative h-20 mb-4">
                            <p className="absolute inset-0 text-gray-400 transition-opacity duration-300 group-hover:opacity-0">{project.description}</p>
                            <div className="absolute inset-0 flex flex-col justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                              <p className="font-bold text-gray-300 text-sm">ROLE</p>
                              <p className="text-cyan-400 font-semibold">{project.role}</p>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                              {project.tech.map(tech => (<span key={tech} className="bg-gray-700 text-cyan-300 text-xs font-mono py-1 px-2 rounded-full">{tech}</span>))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 md:py-32 bg-gray-800 bg-opacity-50 overflow-hidden scroll-mt-20">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="container mx-auto px-6 max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
              <p className="text-gray-300 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out to me.
              </p>
              <div className="flex justify-center items-center gap-8">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">
                  <GithubIcon className="w-10 h-10" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">
                  <LinkedinIcon className="w-10 h-10" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">
                  <WhatsappIcon className="w-10 h-10" />
                </a>
              </div>
            </motion.div>
          </section>
        </main>

        <footer className="bg-gray-900 py-6">
          <div className="container mx-auto px-6 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <p>Built with Next.js & Framer Motion</p>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}
