import React, { useState } from 'react';
import { 
  Palette, 
  Layers, 
  PenTool, 
  Monitor, 
  Smartphone, 
  Users, 
  ChevronDown, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Code, 
  Zap,
  Menu,
  X,
  Eye,
  Figma,
  Layout,
  Compass,
  Lightbulb,
  Award,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="#" className="flex items-center">
                <Palette className="h-8 w-8 text-indigo-400 mr-2" />
                <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">DesignCraft</span>
              </a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-indigo-400 transition-colors duration-300">Home</a>
              <a href="#services" className="text-white hover:text-indigo-400 transition-colors duration-300">Services</a>
              <a href="#features" className="text-white hover:text-indigo-400 transition-colors duration-300">Features</a>
              <a href="#experience" className="text-white hover:text-indigo-400 transition-colors duration-300">Experience</a>
              <a href="#skills" className="text-white hover:text-indigo-400 transition-colors duration-300">Skills</a>
              <a href="#contact" className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 transition-all duration-300 text-white">Contact</a>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded-md text-white hover:bg-indigo-500/20 hover:text-indigo-400 transition-colors duration-300">Home</a>
              <a href="#services" className="block px-3 py-2 rounded-md text-white hover:bg-indigo-500/20 hover:text-indigo-400 transition-colors duration-300">Services</a>
              <a href="#features" className="block px-3 py-2 rounded-md text-white hover:bg-indigo-500/20 hover:text-indigo-400 transition-colors duration-300">Features</a>
              <a href="#experience" className="block px-3 py-2 rounded-md text-white hover:bg-indigo-500/20 hover:text-indigo-400 transition-colors duration-300">Experience</a>
              <a href="#skills" className="block px-3 py-2 rounded-md text-white hover:bg-indigo-500/20 hover:text-indigo-400 transition-colors duration-300">Skills</a>
              <a href="#contact" className="block px-3 py-2 rounded-md text-white bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 transition-all duration-300">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Header Section */}
      <header className="relative h-screen flex flex-col justify-center items-center text-center px-4 pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-pink-500/20"></div>
        
        {/* Hero Image */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="UI/UX Design Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="z-10 max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg shadow-indigo-500/30">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="UI/UX Designer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
            UI/UX Design Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Crafting intuitive digital experiences that delight users and drive business growth
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View Portfolio
            </button>
            <button className="px-8 py-3 rounded-full bg-transparent border-2 border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Contact Me
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
              My Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive design solutions tailored to elevate your digital products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Layout className="w-10 h-10 text-indigo-400" />,
                title: "UI Design",
                description: "Creating visually stunning interfaces that align with your brand identity and captivate users."
              },
              {
                icon: <Users className="w-10 h-10 text-pink-400" />,
                title: "UX Research",
                description: "Conducting in-depth user research to inform design decisions and create user-centered experiences."
              },
              {
                icon: <Smartphone className="w-10 h-10 text-purple-400" />,
                title: "Mobile App Design",
                description: "Designing intuitive and engaging mobile experiences that users love to interact with."
              },
              {
                icon: <Monitor className="w-10 h-10 text-blue-400" />,
                title: "Web Design",
                description: "Crafting responsive websites that provide seamless experiences across all devices and screen sizes."
              },
              {
                icon: <Compass className="w-10 h-10 text-teal-400" />,
                title: "Design Systems",
                description: "Building scalable design systems that ensure consistency and accelerate product development."
              },
              {
                icon: <Layers className="w-10 h-10 text-orange-400" />,
                title: "Prototyping",
                description: "Creating interactive prototypes that validate concepts and streamline the development process."
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-700 hover:border-indigo-500/50 group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
              Why Choose Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My approach combines creativity, research, and strategy for exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 p-1 group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-slate-900 p-8 rounded-lg h-full">
                <Eye className="w-12 h-12 text-indigo-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">User-Centered Approach</h3>
                <p className="text-gray-300 mb-6">
                  I place users at the heart of every design decision. By understanding their needs, behaviors, and pain points, I create experiences that resonate deeply and solve real problems.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-400 mr-2"></div>
                    Comprehensive user research
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-400 mr-2"></div>
                    Persona development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-400 mr-2"></div>
                    Usability testing
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-1 group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-slate-900 p-8 rounded-lg h-full">
                <Lightbulb className="w-12 h-12 text-pink-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Creative Problem Solving</h3>
                <p className="text-gray-300 mb-6">
                  I approach each design challenge with creativity and strategic thinking. By exploring multiple solutions, I deliver innovative designs that stand out while meeting business objectives.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-pink-400 mr-2"></div>
                    Design thinking methodology
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-pink-400 mr-2"></div>
                    Iterative design process
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-pink-400 mr-2"></div>
                    Data-informed decisions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
              My Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A track record of success across industries and design challenges
            </p>
          </div>
          
          <div className="space-y-12">
            {[
              {
                year: "2021 - Present",
                role: "Senior UI/UX Designer",
                company: "InnovateTech Solutions",
                description: "Lead designer for enterprise SaaS products, resulting in 40% improvement in user engagement metrics and 25% reduction in onboarding time. Established design system used across multiple products."
              },
              {
                year: "2019 - 2021",
                role: "Product Designer",
                company: "Creative Design Studio",
                description: "Designed user experiences for mobile applications in fintech and healthcare sectors. Conducted user research and usability testing that led to 35% increase in user satisfaction scores."
              },
              {
                year: "2017 - 2019",
                role: "UI Designer",
                company: "Digital Experience Agency",
                description: "Created visually compelling interfaces for e-commerce and media clients. Collaborated with development teams to ensure pixel-perfect implementation of designs."
              }
            ].map((exp, index) => (
              <div 
                key={index} 
                className="relative pl-8 md:pl-0 group"
              >
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-pink-600 z-10 shadow-lg group-hover:scale-150 transition-transform duration-300"></div>
                {index !== 2 && <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500/50 to-pink-600/50"></div>}
                
                <div className="md:grid md:grid-cols-7 items-center">
                  <div className="md:col-span-2 mb-4 md:mb-0 md:text-right md:pr-12">
                    <span className="text-sm font-semibold text-gray-400">{exp.year}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">{exp.role}</h3>
                    <p className="text-pink-400">{exp.company}</p>
                  </div>
                  
                  <div className="md:col-span-5 bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 group-hover:border-indigo-500/50 shadow-lg transform transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
              My Skills
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert capabilities that drive exceptional design outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              {[
                { name: "UI Design", percentage: 95 },
                { name: "UX Research", percentage: 90 },
                { name: "Interaction Design", percentage: 92 },
                { name: "Design Systems", percentage: 88 }
              ].map((skill, index) => (
                <div key={index} className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-white">{skill.name}</span>
                    <span className="text-gray-400">{skill.percentage}%</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-500 to-pink-600 rounded-full transform origin-left transition-transform duration-1000 ease-out"
                      style={{ width: `${skill.percentage}%`, transform: 'scaleX(0)', animationFillMode: 'forwards' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scaleX(1)'}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { name: "Figma", icon: <Figma className="w-8 h-8 text-indigo-400 group-hover:text-white transition-colors duration-300" /> },
                { name: "Adobe XD", icon: <PenTool className="w-8 h-8 text-indigo-400 group-hover:text-white transition-colors duration-300" /> },
                { name: "Sketch", icon: <Palette className="w-8 h-8 text-indigo-400 group-hover:text-white transition-colors duration-300" /> },
                { name: "Prototyping", icon: <Layers className="w-8 h-8 text-indigo-400 group-hover:text-white transition-colors duration-300" /> },
                { name: "Wireframing", icon: <Layout className="w-8 h-8 text-indigo-400 group-hover:text-white transition-colors duration-300" /> },
                { name: "HTML/CSS", icon: <Code className="w-8 h-8 text-indigo-400 group-hover:text-white transition-colors duration-300" /> },
                { name: "User Testing", icon: <Users className="w-8 h-8 text-indigo-400 group-hover:text-white transition-colors duration-300" /> },
                { name: "Design Thinking", icon: <Lightbulb className="w-8 h-8 text-indigo-400 group-hover:text-white transition-colors duration-300" /> }
              ].map((tool, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-indigo-500/50 flex flex-col items-center justify-center text-center group hover:bg-gradient-to-br hover:from-indigo-900/40 hover:to-purple-900/40 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="mb-3">
                    {tool.icon}
                  </div>
                  <h3 className="font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {tool.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A selection of my most impactful design work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Finance App Redesign",
                category: "Mobile App",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
              },
              {
                title: "E-commerce Website",
                category: "Web Design",
                image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
              },
              {
                title: "Health Tracking Dashboard",
                category: "UI/UX Design",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
              },
              {
                title: "Travel Booking Platform",
                category: "Web App",
                image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
              },
              {
                title: "Smart Home Control",
                category: "Mobile App",
                image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
              },
              {
                title: "Educational Platform",
                category: "Web Design",
                image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
              }
            ].map((project, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-w-16 aspect-h-9 w-full h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-indigo-400 text-sm font-medium mb-2">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <button className="mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-full text-white text-sm transition-colors duration-300 w-fit">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-3 rounded-full bg-transparent border-2 border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to elevate your digital product? Let's collaborate on your next project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-gray-700 shadow-lg">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-slate-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-slate-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full bg-slate-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    placeholder="Subject"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-slate-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-gray-700 shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-indigo-500/20 p-3 rounded-lg mr-4">
                      <Mail className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm mb-1">Email</h4>
                      <p className="text-white">hello@designcraft.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-pink-500/20 p-3 rounded-lg mr-4">
                      <Award className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm mb-1">Availability</h4>
                      <p className="text-white">Available for freelance projects</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4 text-white">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500/20 to-pink-500/20 flex items-center justify-center border border-gray-700 hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span className="sr-only">Github</span>
                    <Github className="w-5 h-5 text-indigo-400" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500/20 to-pink-500/20 flex items-center justify-center border border-gray-700 hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="w-5 h-5 text-indigo-400" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500/20 to-pink-500/20 flex items-center justify-center border border-gray-700 hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span className="sr-only">Twitter</span>
                    <Twitter className="w-5 h-5 text-indigo-400" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500/20 to-pink-500/20 flex items-center justify-center border border-gray-700 hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span className="sr-only">Instagram</span>
                    <Instagram className="w-5 h-5 text-indigo-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center mb-4">
            <Palette className="h-6 w-6 text-indigo-400 mr-2" />
            <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">DesignCraft</span>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} DesignCraft Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;