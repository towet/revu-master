import React, { useState, useEffect, useRef, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  Globe2,
  Rocket,
  MessageSquare,
  Share2,
  Search,
  PenTool,
  Users,
  Target,
  Code2,
  TrendingUp,
  Shield,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Settings,
  BarChart2,
  X,
  Mail,
  Phone,
  Trophy,
  Lightbulb,
  MapPin,
  Award,
  Menu
} from 'lucide-react';
import heroImage from '../reti.png';
import facebookLogo from './assets/socials/icons8-facebook-48.png';
import instagramLogo from './assets/socials/icons8-instagram-64.png';
import youtubeLogo from './assets/socials/icons8-youtube-48.png';
import googleAdsLogo from './assets/socials/google-ads-logo-vector-115738525038dma6lhprs.png';
import codeLogo from './assets/socials/icons8-code-48.png';
import metaLogo from './assets/socials/png-clipart-meta-logo-social-media-icons.png';
import './pricing-adjustments.css';
import WebDevelopment from './WebDevelopment';
import AIDevelopment from './AIDevelopment';
import CustomAIAgents from './CustomAIAgents';
import SocialMediaMarketing from './SocialMediaMarketing';
import SearchEngineOptimization from './SearchEngineOptimization';
import DataAnalytics from './DataAnalytics';
import GraphicDesign from './GraphicDesign';
import StrategicPaidAdvertising from './StrategicPaidAdvertising';
import ContactUs from './ContactUs';
import ScrollToTop from './ScrollToTop';

// Main App component that contains the home page content
const Home = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Add refs for smooth scrolling
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);

  const handleContactClick = () => {
    setIsContactOpen(true);
  };

  // Used in contact modal (will be implemented)
  const handleCloseContact = useCallback(() => {
    setIsContactOpen(false);
  }, []);

  // Direct contact methods - used in contact modal
  const handleWhatsApp = useCallback(() => {
    window.open('https://wa.me/254755295635', '_blank');
  }, []);

  const handleEmail = useCallback(() => {
    window.open('mailto:nexuscollective103@gmail.com', '_blank');
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Scroll to section and close menu
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    toggleMobileMenu();
  };

  // Optimize scroll performance
  useEffect(() => {
    // Add a class to the body to enable smooth scrolling
    document.body.classList.add('smooth-scroll');
    
    // Return cleanup function
    return () => {
      document.body.classList.remove('smooth-scroll');
    };
  }, []);
  
  // Animation observer with optimized performance
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Use requestAnimationFrame to batch DOM updates
      window.requestAnimationFrame(() => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Collect all elements first, then observe them in a batch
    const elements = document.querySelectorAll('.reveal, .slide-in-left, .slide-in-right, .fade-scale, .rotate-in');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section - Modern, Interactive, 3D */}
      <header id="home" className="pt-28 pb-24 relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 animated-gradient opacity-10"></div>
        
        {/* Animated particles */}
        {Array.from({ length: 20 }).map((_, index) => (
          <div 
            key={index}
            className="particle animate-particle"
            style={{
              '--random': Math.random(),
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              background: `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 200 + 55)}, ${Math.random() * 0.7 + 0.3})`,
              animationDelay: `${Math.random() * 5}s`
            } as React.CSSProperties}
          />
        ))}
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content Column */}
            <div className="space-y-8 text-center lg:text-left slide-in-left">
              {/* 3D Floating Badge */}
              <div className="inline-block mb-4 relative">
                <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full animate-pulse-slow"></div>
                <div className="relative glass-effect px-4 py-2 rounded-full text-indigo-700 font-medium text-sm inline-flex items-center gap-2 tilt-effect">
                  <span className="relative bg-indigo-500 text-white p-1 rounded-full">
                    <Trophy className="w-3 h-3" />
                  </span>
                </div>
              </div>
              
              {/* Heading with enhanced animation */}
              <h1 className="text-5xl lg:text-6xl font-bold">
                <span className="animated-text-reveal block text-indigo-700">Elevate Your Brand</span>
                <span className="animated-text-reveal-delay block text-purple-600">With Innovation</span>
              </h1>
              
              {/* Description with enhanced styling */}
              <p className="text-xl text-gray-600 animate-fade-in relative">
                <span className="relative z-10">Cutting-edge solutions for forward-thinking businesses. Transforming visions into digital excellence with precision and creativity.</span>
                <span className="absolute bottom-0 left-0 w-24 h-2 bg-indigo-500/30 rounded-full blur-sm"></span>
              </p>
              
              {/* Enhanced CTA buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold 
                           shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-105
                           transition-all duration-300 flex items-center gap-2 group relative overflow-hidden"
                >
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></div>
                </Link>
                
                <button
                  onClick={() => window.open('#portfolio', '_self')}
                  className="px-8 py-4 border-2 border-indigo-500/30 text-indigo-600 rounded-xl font-semibold 
                           hover:bg-indigo-500/5 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span>View Portfolio</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
              
              {/* Interactive Stat Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="glass-effect rounded-xl p-4 transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 tilt-effect">
                  <div className="text-2xl font-bold text-indigo-600">10+</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
                <div className="glass-effect rounded-xl p-4 transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 tilt-effect">
                  <div className="text-2xl font-bold text-indigo-600">100+</div>
                  <div className="text-gray-600 text-sm">Successful Projects</div>
                </div>
              </div>
            </div>
            
            {/* Right 3D Visual Column */}
            <div className="relative slide-in-right">
              {/* 3D Hero Image Container */}
              <div className="relative z-10 perspective-1000 lg:max-w-[85%] xl:max-w-[80%] mx-auto">
                {/* Main Image with 3D Tilt Effect */}
                <div className="relative tilt-effect group">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <img
                    src={heroImage}
                    alt="Digital Innovation"
                    className="w-full h-auto rounded-2xl shadow-2xl transform transition-all duration-700 group-hover:scale-[1.02]"
                    style={{ transformStyle: 'preserve-3d' }}
                  />
                  
                  {/* Overlay glassmorphism effect */}
                  <div className="absolute inset-0 rounded-2xl glass-effect opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
                  
                  {/* Floating dashboard mockup */}
                  <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 glass-effect rounded-xl p-2 shadow-xl animate-float transform rotate-6 w-1/2 max-w-[200px]">
                    <div className="bg-indigo-900/90 rounded-lg p-2">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 rounded-full bg-red-500"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                        <div className="w-20 h-1.5 bg-indigo-700 rounded-full"></div>
                      </div>
                      <div className="space-y-1.5">
                        <div className="w-full h-1.5 bg-indigo-700/70 rounded-full"></div>
                        <div className="w-3/4 h-1.5 bg-indigo-700/70 rounded-full"></div>
                        <div className="w-1/2 h-1.5 bg-indigo-700/70 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Social Media Floating Icons */}
                <div className="absolute -right-8 lg:-right-10 top-1/4 w-14 h-14 lg:w-16 lg:h-16 rounded-full glass-effect shadow-lg animate-float-delay flex items-center justify-center transform hover:scale-110 hover:shadow-indigo-500/30 transition-all duration-300 p-2">
                  <img src={facebookLogo} alt="Facebook" className="w-full h-full object-contain" />
                </div>
                <div className="absolute -left-8 lg:-left-12 top-10 w-12 h-12 lg:w-14 lg:h-14 rounded-full glass-effect shadow-lg animate-float-reverse flex items-center justify-center transform hover:scale-110 hover:shadow-indigo-500/30 transition-all duration-300 p-1.5">
                  <img src={instagramLogo} alt="Instagram" className="w-full h-full object-contain" />
                </div>
                <div className="absolute bottom-8 -right-4 lg:-right-6 w-12 h-12 lg:w-14 lg:h-14 rounded-full glass-effect shadow-lg animate-pulse-social flex items-center justify-center transform hover:scale-110 hover:shadow-indigo-500/30 transition-all duration-300 p-1.5">
                  <img src={youtubeLogo} alt="YouTube" className="w-full h-full object-contain" />
                </div>
                <div className="absolute -left-6 lg:-left-8 bottom-16 lg:bottom-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full glass-effect shadow-lg animate-float flex items-center justify-center transform hover:scale-110 hover:shadow-indigo-500/30 transition-all duration-300 p-1.5">
                  <img src={googleAdsLogo} alt="Google Ads" className="w-full h-full object-contain" />
                </div>
                <div className="absolute right-1/4 top-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full glass-effect shadow-lg animate-float-reverse-slow flex items-center justify-center transform hover:scale-110 hover:shadow-indigo-500/30 transition-all duration-300 p-1.5">
                  <img src={codeLogo} alt="Code" className="w-full h-full object-contain" />
                </div>
                <div className="absolute right-2 lg:right-4 bottom-1/3 w-12 h-12 lg:w-14 lg:h-14 rounded-full glass-effect shadow-lg animate-float flex items-center justify-center transform hover:scale-110 hover:shadow-indigo-500/30 transition-all duration-300 p-2">
                  <img src={metaLogo} alt="Meta" className="w-full h-full object-contain" />
                </div>
                
                {/* Data visualization element */}
                <div className="absolute -left-10 lg:-left-16 top-1/2 transform -translate-y-1/2 glass-effect rounded-xl p-3 shadow-xl animate-float-reverse">
                  <div className="flex items-end h-16 gap-1">
                    <div className="w-2 bg-indigo-400 rounded-t-sm" style={{height: '30%'}}></div>
                    <div className="w-2 bg-indigo-500 rounded-t-sm" style={{height: '50%'}}></div>
                    <div className="w-2 bg-indigo-600 rounded-t-sm" style={{height: '80%'}}></div>
                    <div className="w-2 bg-indigo-700 rounded-t-sm" style={{height: '60%'}}></div>
                    <div className="w-2 bg-indigo-800 rounded-t-sm" style={{height: '90%'}}></div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced background elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-500/20 rounded-full animate-pulse-slow blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-purple-500/20 rounded-full animate-pulse-slow delay-700 blur-xl"></div>
              <div className="absolute top-1/2 right-0 w-24 h-24 bg-blue-500/20 rounded-full animate-pulse-slow delay-700 blur-xl"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Modern Navbar */}
      <nav className="fixed w-full glass-effect z-50 top-0 shadow-lg shadow-indigo-500/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 fade-scale flex items-center gap-2">
              <span className="bg-gradient-to-br from-indigo-500 to-purple-500 w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-normal">R</span>
              Revu
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 reveal stagger-1">Home</a>
              <a href="#services" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 reveal stagger-2">Services</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 reveal stagger-3">About</a>
              <a href="#portfolio" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 reveal stagger-4">Portfolio</a>
              <Link 
                to="/contact"
                className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 reveal stagger-5 hover:scale-105 flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
            <button 
              onClick={toggleMobileMenu} 
              className="md:hidden text-gray-700 hover:text-indigo-600 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu - Appears on small screens */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 z-40">
            <div className="container mx-auto px-6 flex flex-col space-y-4">
              <a 
                href="#home" 
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('home');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  toggleMobileMenu();
                }}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 py-2 text-center"
              >
                Home
              </a>
              <a 
                href="#services" 
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  toggleMobileMenu();
                }}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 py-2 text-center"
              >
                Services
              </a>
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('about');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  toggleMobileMenu();
                }}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 py-2 text-center"
              >
                About
              </a>
              <a 
                href="#portfolio" 
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('portfolio');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  toggleMobileMenu();
                }}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 py-2 text-center"
              >
                Portfolio
              </a>
              <Link
                to="/contact"
                onClick={toggleMobileMenu}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 flex items-center justify-center text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Contact Popup */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-8 relative transform transition-all duration-300 scale-100 shadow-2xl">
            <button 
              onClick={() => setIsContactOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h2>
              <p className="text-gray-600">Choose your preferred way to reach us</p>
            </div>

            <div className="space-y-6">
              <a
                href="https://wa.me/254755295635"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mr-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-1 text-green-600">WhatsApp</h3>
                  <p className="text-green-700">Chat with us instantly</p>
                </div>
                <ArrowRight className="w-6 h-6 text-green-500 group-hover:translate-x-2 transition-transform duration-300" />
              </a>

              <a
                href="mailto:frankyfreaky103@gmail.com"
                className="flex items-center p-6 bg-red-50 rounded-xl hover:bg-red-100 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mr-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-1 text-red-600">Gmail</h3>
                  <p className="text-red-700">Send us an email</p>
                </div>
                <ArrowRight className="w-6 h-6 text-red-500 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
            </div>
          </div>
        </div>
      )}
      {showContact && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative transform transition-all duration-300 scale-100">
            <button 
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contact Us</h3>
            <div className="space-y-4">
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-500 text-white py-3 px-6 rounded-xl flex items-center justify-center gap-3 hover:bg-green-600 transition-colors duration-300 group"
              >
                <img 
                  src="https://download.logo.wine/logo/WhatsApp/WhatsApp-Logo.wine.png" 
                  alt="WhatsApp"
                  className="w-8 h-8 object-contain"
                />
                <span className="font-semibold">Chat on WhatsApp</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={handleEmail}
                className="w-full bg-red-500 text-white py-3 px-6 rounded-xl flex items-center justify-center gap-3 hover:bg-red-600 transition-colors duration-300 group"
              >
                <img 
                  src="https://w7.pngwing.com/pngs/799/918/png-transparent-mail-google-gmail-google-s-logo-icon-thumbnail.png" 
                  alt="Gmail"
                  className="w-8 h-8 object-contain"
                />
                <span className="font-semibold">Send Email</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* About Us Section - Modern & Interactive */}
      <section id="about" className="py-24 relative overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-500/10 rounded-bl-[100px] transform rotate-6 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500/10 rounded-tr-[100px] transform -rotate-6 blur-xl"></div>
        
        {/* Animated particles */}
        {Array.from({ length: 10 }).map((_, index) => (
          <div 
            key={`about-particle-${index}`}
            className="particle animate-particle"
            style={{
              '--random': Math.random(),
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 3}px`,
              height: `${Math.random() * 10 + 3}px`,
              background: `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 200 + 55)}, ${Math.random() * 0.5 + 0.2})`,
              animationDelay: `${Math.random() * 5}s`
            } as React.CSSProperties}
          />
        ))}
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 reveal">
              {/* Stylish heading section */}
              <div className="relative">
                <div className="absolute -left-6 -top-6 w-16 h-16 bg-indigo-500/20 rounded-full blur-xl animate-pulse-slow"></div>
                <span className="inline-block px-4 py-2 glass-effect rounded-full text-indigo-700 font-semibold text-sm mb-4 reveal-from-bottom">
                  <span className="mr-2 inline-flex items-center justify-center bg-indigo-600 text-white p-1 rounded-full">
                    <Rocket className="w-3 h-3" />
                  </span>
                  Our Journey
                </span>
                
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700">
                    Driving Digital Innovation
                  </span>
                  <span className="block text-purple-600">Since 2024</span>
                  <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                </h2>
                
                <p className="text-gray-600 text-lg leading-relaxed relative">
                  <span className="relative z-10">We've been at the forefront of digital transformation, helping businesses across Kenya embrace the power of technology. Our journey has been marked by innovation, excellence, and a commitment to delivering exceptional results.</span>
                  <span className="absolute -bottom-2 left-0 w-16 h-1 bg-indigo-400/30 rounded-full blur-sm"></span>
                </p>
              </div>
              
              {/* Interactive features section with glassmorphism */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Client-Centric Approach",
                    description: "Your success is our priority. We tailor our solutions to meet your unique needs.",
                    icon: Users,
                    delay: 0
                  },
                  {
                    title: "Innovation at Core",
                    description: "We stay ahead of digital trends to provide cutting-edge solutions.",
                    icon: Lightbulb,
                    delay: 100
                  },
                  {
                    title: "Local Expertise",
                    description: "Deep understanding of the Kenyan market and its digital landscape.",
                    icon: MapPin,
                    delay: 200
                  }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="reveal glass-effect p-6 rounded-xl transition-all duration-500 
                             shadow-lg hover:shadow-xl hover:shadow-indigo-500/20 group hover:transform hover:-translate-y-1 tilt-effect"
                    style={{ transitionDelay: `${feature.delay}ms` }}
                  >
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-500 w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-lg
                                 group-hover:scale-110 transition-all duration-300 overflow-hidden relative">
                      <div className="absolute inset-0 bg-white opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                      <div className="absolute -top-6 -left-6 w-12 h-12 bg-white/10 rounded-full"></div>
                      <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-white/10 rounded-full"></div>
                      {React.createElement(feature.icon, { className: 'w-7 h-7 text-white relative z-10' })}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-indigo-600 group-hover:text-indigo-500 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Enhanced stats with 3D effects */}
              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: "500+", label: "Satisfied Clients", icon: Trophy },
                  { number: "50+", label: "Awards Won", icon: Award }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="reveal glass-effect flex items-center gap-4 p-6 rounded-xl transition-all duration-500 tilt-effect
                             hover:shadow-lg hover:shadow-indigo-500/20 group"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center shrink-0 shadow-lg
                                 group-hover:scale-110 transition-all duration-300 overflow-hidden relative">
                      <div className="absolute inset-0 bg-white opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                      <div className="absolute -top-6 -left-6 w-12 h-12 bg-white/10 rounded-full"></div>
                      <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-white/10 rounded-full"></div>
                      {React.createElement(stat.icon, { className: 'w-7 h-7 text-white relative z-10' })}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-indigo-700 group-hover:text-purple-600 transition-colors duration-300">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative reveal">
              {/* Modern interactive image container */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl tilt-effect">
                {/* Main image with overlay effects */}
                <div className="relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                    alt="Team working together"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay with enhanced interaction */}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-purple-900/40 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-500"></div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-8 right-8 glass-effect rounded-xl p-4 shadow-xl animate-float-slow transform rotate-3 w-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-white text-sm font-semibold">Innovation</div>
                    <div className="w-full h-1 bg-indigo-500/60 rounded-full mt-1"></div>
                  </div>
                  
                  <div className="absolute top-1/3 left-8 glass-effect rounded-xl p-4 shadow-xl animate-float transform -rotate-3 w-28 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                    <div className="text-white text-sm font-semibold">Creativity</div>
                    <div className="w-full h-1 bg-purple-500/60 rounded-full mt-1"></div>
                  </div>
                  
                  {/* Text content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-white text-xl font-semibold mb-3 relative">
                      Expert Team
                      <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-indigo-400 group-hover:w-24 transition-all duration-500"></div>
                    </div>
                    <p className="text-white/90 max-w-md">Working together to bring your digital vision to life with innovation, expertise, and dedication.</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl opacity-70 animate-pulse-slow"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl opacity-70 animate-pulse-slow delay-700"></div>
              </div>
              
              {/* Decorative dot pattern */}
              <div className="absolute top-1/4 -right-10 grid grid-cols-3 gap-2 opacity-20">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={`dot-${i}`} className="w-2 h-2 rounded-full bg-indigo-500"></div>
                ))}
              </div>
              
              {/* Animated side element */}
              <div className="absolute -left-10 bottom-1/4 glass-effect rounded-xl p-4 shadow-lg animate-float-reverse-slow">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Modern & Interactive */}
      <section id="services" className="py-24 relative overflow-hidden" ref={servicesRef}>
        <div id="portfolio">
        {/* Background decoration elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-indigo-500/10 rounded-full opacity-70 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-purple-500/10 rounded-full opacity-70 blur-3xl animate-pulse-slow delay-700"></div>
        
        {/* Animated particles */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div 
            key={`services-particle-${index}`}
            className="particle animate-particle"
            style={{
              '--random': Math.random(),
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 12 + 4}px`,
              height: `${Math.random() * 12 + 4}px`,
              background: `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 200 + 55)}, ${Math.random() * 0.5 + 0.2})`,
              animationDelay: `${Math.random() * 5}s`
            } as React.CSSProperties}
          />
        ))}
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="inline-block relative mb-2">
              <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full animate-pulse-slow"></div>
              <span className="inline-block px-4 py-2 glass-effect rounded-full text-indigo-700 font-semibold text-sm relative">
                <span className="mr-2 inline-flex items-center justify-center bg-indigo-600 text-white p-1 rounded-full">
                  <Settings className="w-3 h-3" />
                </span>
                OUR EXPERTISE
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700">
                Innovative Digital 
              </span>
              <span className="text-purple-600">Solutions</span>
              <div className="mx-auto w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-4"></div>
            </h2>
            <p className="text-gray-600 text-lg">
              We provide cutting-edge services to transform your business with modern technology and creative strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="reveal group relative overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-orange-200"
                style={{ transitionDelay: '0ms', boxShadow: '0 10px 40px -15px rgba(0, 0, 0, 0.1)' }}>
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg" 
                  alt="Web Development"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  <Globe2 className="w-6 h-6 text-orange-500" />
                </div>
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="inline-block px-2 py-1 bg-orange-500 text-white text-xs font-semibold rounded-md">
                    🌐 Web Development
                  </div>
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-all duration-300">
                    Custom Website Design & Development
                  </h3>
                  <div className="flex flex-wrap gap-2 my-3">
                    <span className="inline-block px-2 py-1 bg-orange-50 text-orange-600 text-xs rounded-md">Responsive Design</span>
                    <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md">E-commerce</span>
                    <span className="inline-block px-2 py-1 bg-green-50 text-green-600 text-xs rounded-md">SEO-optimized</span>
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-all duration-300">
                    Custom web applications and e-commerce solutions built with cutting-edge technology for maximum performance and user engagement.
                  </p>
                  <Link to="/services/web-development" 
                    className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-300 group/learn mt-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/learn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500/0 via-orange-500 to-orange-500/0 
                            transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
            </div>





            {/* Paid Ads */}
            <div className="reveal group relative overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-green-200"
                style={{ transitionDelay: '300ms', boxShadow: '0 10px 40px -15px rgba(0, 0, 0, 0.1)' }}>
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://era9r2jcsww.exactdn.com/wp-content/uploads/2023/08/5-2.jpg?strip=all&lossy=1&quality=80&ssl=1" 
                  alt="Paid Ads"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  <BarChart2 className="w-6 h-6 text-green-500" />
                </div>
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="inline-block px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-md">
                    📈 Paid Advertising
                  </div>
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-500 transition-all duration-300">
                    Strategic Paid Advertising
                  </h3>
                  <div className="flex flex-wrap gap-2 my-3">
                    <span className="inline-block px-2 py-1 bg-green-50 text-green-600 text-xs rounded-md">Google Ads</span>
                    <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md">Facebook Ads</span>
                    <span className="inline-block px-2 py-1 bg-yellow-50 text-yellow-600 text-xs rounded-md">ROI Focused</span>
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-all duration-300">
                    Data-driven paid advertising campaigns across Google, Meta, and social platforms to maximize conversion rates and target your ideal customers.
                  </p>
                  <Link to="/services/strategic-paid-advertising" 
                    className="inline-flex items-center text-green-500 font-semibold hover:text-green-600 transition-colors duration-300 group/learn mt-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/learn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500/0 via-green-500 to-green-500/0 
                            transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
            </div>

            {/* Graphic Design */}
            <div className="reveal group relative overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-purple-200"
                style={{ transitionDelay: '400ms', boxShadow: '0 10px 40px -15px rgba(0, 0, 0, 0.1)' }}>
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=75,format=auto,fit=crop,height=630/uploads/sites/2/2023/02/Tuts_Roundup__Top_Graphic_Design_Courses.jpeg" 
                  alt="Graphic Design"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  <PenTool className="w-6 h-6 text-purple-500" />
                </div>
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="inline-block px-2 py-1 bg-purple-500 text-white text-xs font-semibold rounded-md">
                    🎨 Graphic Design
                  </div>
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-500 transition-all duration-300">
                    Creative Graphic Design
                  </h3>
                  <div className="flex flex-wrap gap-2 my-3">
                    <span className="inline-block px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-md">Branding</span>
                    <span className="inline-block px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-md">UI/UX</span>
                    <span className="inline-block px-2 py-1 bg-violet-50 text-violet-600 text-xs rounded-md">Marketing Visuals</span>
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-all duration-300">
                    Stunning visual designs that capture your brand's essence, from logo development to complete brand identity systems and marketing materials.
                  </p>
                  <Link to="/services/graphic-design" 
                    className="inline-flex items-center text-purple-500 font-semibold hover:text-purple-600 transition-colors duration-300 group/learn mt-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/learn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500/0 via-purple-500 to-purple-500/0 
                            transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
            </div>

            {/* Social Media Marketing */}
            <div className="reveal group relative overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:shadow-2xl border border-gray-100 hover:border-pink-200"
                style={{ transitionDelay: '300ms', boxShadow: '0 10px 40px -15px rgba(0, 0, 0, 0.1)' }}>
              <div className="relative h-52 overflow-hidden">
                <img 
                  src="https://images.ctfassets.net/cpumif18y1gd/4lswR4QQwwXyOrZ1sCcLpU/eb59409ea03a832082576110d3527965/How_to_be_a_Social_Media_Manager_625x417.png" 
                  alt="Social Media Marketing"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  <Share2 className="w-6 h-6 text-pink-500" />
                </div>
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="inline-block px-2 py-1 bg-pink-500 text-white text-xs font-semibold rounded-md">
                    📱 Social Media
                  </div>
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-500 transition-all duration-300">
                    Social Media Marketing & Management
                  </h3>
                  <div className="flex flex-wrap gap-2 my-3">
                    <span className="inline-block px-2 py-1 bg-pink-50 text-pink-600 text-xs rounded-md">Content Creation</span>
                    <span className="inline-block px-2 py-1 bg-red-50 text-red-600 text-xs rounded-md">Community Management</span>
                    <span className="inline-block px-2 py-1 bg-rose-50 text-rose-600 text-xs rounded-md">Ad Campaigns</span>
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-all duration-300">
                    Strategic content creation and community engagement to boost your brand presence across all social media platforms.
                  </p>
                  <Link to="/services/social-media-marketing" 
                    className="inline-flex items-center text-pink-500 font-semibold hover:text-pink-600 transition-colors duration-300 group/learn mt-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/learn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500/0 via-pink-500 to-pink-500/0 
                            transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
            </div>
            

            

          </div>
        </div>
          
          {/* View All Services Button */}
          <div className="mt-16 text-center reveal">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold 
                        hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 
                        transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden group">
              <span className="relative z-10">View All Services</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Modern & Interactive */}
      <section className="py-24 relative overflow-hidden">
        {/* Background decoration elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-500/10 rounded-bl-full blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/10 rounded-tr-full blur-xl"></div>
        
        {/* Animated particles */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div 
            key={`why-choose-particle-${index}`}
            className="particle animate-particle"
            style={{
              '--random': Math.random(),
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 3}px`,
              height: `${Math.random() * 8 + 3}px`,
              background: `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 200 + 55)}, ${Math.random() * 0.4 + 0.2})`,
              animationDelay: `${Math.random() * 5}s`
            } as React.CSSProperties}
          />
        ))}
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="inline-block relative mb-2">
              <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full animate-pulse-slow"></div>
              <span className="inline-block px-4 py-2 glass-effect rounded-full text-indigo-700 font-semibold text-sm relative">
                <span className="mr-2 inline-flex items-center justify-center bg-indigo-600 text-white p-1 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                </span>
                WHY CHOOSE US
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700">
                Driving Digital Innovation
              </span>
              <span className="block text-purple-600">Since 2024</span>
              <div className="mx-auto w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-4"></div>
            </h2>
            <p className="text-gray-600 text-lg">
              Empowering businesses across Kenya with cutting-edge digital solutions and transformative strategies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Our team of seasoned professionals brings years of experience and deep expertise to every project.",
                icon: Users,
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              },
              {
                title: "Customized Solutions",
                description: "We create tailored digital solutions that perfectly align with your business objectives and market needs.",
                icon: Settings,
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              },
              {
                title: "Proven Results",
                description: "Our track record speaks for itself - we consistently deliver outstanding results that exceed expectations.",
                icon: TrendingUp,
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1715&q=80"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="reveal group relative overflow-hidden rounded-xl glass-effect shadow-lg transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/20 border border-transparent tilt-effect"
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)'
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/30 to-indigo-900/70 opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>
                </div>
                <div className="p-8 relative">
                  <div className="bg-gradient-to-br from-indigo-600 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 -mt-16 relative z-10 mx-auto
                               shadow-lg group-hover:scale-110 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>                               
                    <div className="text-white transition-all duration-300 relative z-10">
                      {React.createElement(feature.icon, { className: 'w-8 h-8' })}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-700 text-center group-hover:text-purple-600 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center group-hover:text-gray-700 transition-all duration-300">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/0 via-purple-500 to-indigo-500/0 
                              transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Modern & Interactive */}
      <section className="py-24 relative overflow-hidden">
        {/* Background decoration elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-indigo-500/10 rounded-full opacity-70 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-purple-500/10 rounded-full opacity-70 blur-3xl animate-pulse-slow delay-700"></div>
        
        {/* Animated particles */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div 
            key={`testimonial-particle-${index}`}
            className="particle animate-particle"
            style={{
              '--random': Math.random(),
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 3}px`,
              height: `${Math.random() * 10 + 3}px`,
              background: `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 200 + 55)}, ${Math.random() * 0.5 + 0.2})`,
              animationDelay: `${Math.random() * 5}s`
            } as React.CSSProperties}
          />
        ))}
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="inline-block relative mb-2">
              <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full animate-pulse-slow"></div>
              <span className="inline-block px-4 py-2 glass-effect rounded-full text-indigo-700 font-semibold text-sm relative">
                <span className="mr-2 inline-flex items-center justify-center bg-indigo-600 text-white p-1 rounded-full">
                  <MessageSquare className="w-3 h-3" />
                </span>
                WHAT CLIENTS SAY
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700">
                Client Testimonials
              </span>
              <div className="mx-auto w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-4"></div>
            </h2>
            <p className="text-gray-600 text-lg">
              Hear what our clients have to say about their experience working with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Kamau",
                position: "Small Business Owner, Nairobi",
                image: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                quote: "Their digital solutions helped my local business reach customers across Kenya. The results were amazing!"
              },
              {
                name: "Wanjiku Maina",
                position: "Digital Creator, Mombasa",
                image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                quote: "They understood my vision and helped me build a strong online presence that resonates with my audience."
              },
              {
                name: "David Ochieng",
                position: "Startup Founder, Kisumu",
                image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                quote: "The team's expertise in digital marketing helped my startup gain visibility across East Africa."
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="reveal glass-effect rounded-xl p-8 group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/20 tilt-effect"
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)'
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full -mr-16 -mt-16 transition-all duration-500 group-hover:bg-purple-500/20 blur-sm"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-tr-full -ml-12 -mb-12 transition-all duration-500 group-hover:bg-indigo-500/20 blur-sm"></div>
                
                <div className="absolute top-4 right-4 text-4xl text-indigo-200 opacity-50 font-serif">"</div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="relative mr-4">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse-slow blur-sm opacity-70"></div>
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover relative z-10 border-2 border-white/50"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-indigo-700">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 relative pl-4 border-l-2 border-indigo-500/50 group-hover:border-purple-500/50 transition-colors duration-300">
                    <span className="italic">"{testimonial.quote}"</span>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Modern & Interactive */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        {/* Floating graphics elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/20 rounded-full opacity-30 blur-3xl animate-pulse-slow delay-700"></div>
        
        {/* Animated particles */}
        {Array.from({ length: 10 }).map((_, index) => (
          <div 
            key={`cta-particle-${index}`}
            className="particle animate-particle"
            style={{
              '--random': Math.random(),
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 3}px`,
              height: `${Math.random() * 10 + 3}px`,
              background: `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.1})`,
              animationDelay: `${Math.random() * 5}s`
            } as React.CSSProperties}
          />
        ))}
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-10">
              <div className="inline-block glass-effect px-5 py-2 rounded-full text-white/90 text-sm font-medium mb-6 tilt-effect">
                <span className="relative bg-white/20 p-1 rounded-full mr-2 inline-flex items-center justify-center">
                  <Rocket className="w-3 h-3" />
                </span>
                START YOUR JOURNEY
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-200">Digital Presence</span>?
              </h2>
              <p className="text-lg mb-10 text-white/80 leading-relaxed max-w-2xl mx-auto">
                Join hundreds of successful businesses that have revolutionized their digital strategy.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact"
                className="bg-white text-indigo-900 hover:text-purple-900 px-8 py-4 rounded-xl text-lg font-semibold 
                         shadow-lg shadow-indigo-800/30 hover:shadow-indigo-700/50
                         transition-all transform hover:scale-105 flex items-center gap-3 group relative overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1 relative z-10" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-indigo-400 to-purple-400 transition-opacity duration-300"></div>
              </Link>
              <button 
                onClick={handleContactClick}
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl text-lg font-semibold 
                         transition-all transform hover:scale-105 hover:border-white/50 flex items-center gap-3 group glass-effect"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center mb-8">
            <Globe2 className="w-8 h-8 text-accent mr-4" />
            <h2 className="text-xl font-bold">Revu</h2>
          </div>
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Revu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Main App component with routing
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/ai-development" element={<AIDevelopment />} />
        <Route path="/services/custom-ai-agents" element={<CustomAIAgents />} />
        <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
        <Route path="/services/search-engine-optimization" element={<SearchEngineOptimization />} />
        <Route path="/services/data-analytics" element={<DataAnalytics />} />
        <Route path="/services/graphic-design" element={<GraphicDesign />} />
        <Route path="/services/strategic-paid-advertising" element={<StrategicPaidAdvertising />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
