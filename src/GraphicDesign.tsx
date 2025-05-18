import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  CheckCircle, 
  PenTool, 
  ArrowRight, 
  DollarSign, 
  Image, 
  Layout,
  Layers 
} from 'lucide-react';

// Add CSS for animation and effects
import './GraphicDesign.css';

const GraphicDesign: React.FC = () => {
  // State for animations and counter effects
  const statsRef = useRef<HTMLDivElement>(null);
  const [countersStarted, setCountersStarted] = useState(false);
  // State for service details modal
  const [activeService, setActiveService] = useState<string | null>(null);
  const [showServiceModal, setShowServiceModal] = useState(false);
  
  // Use React Router's navigate
  const navigate = useNavigate();

  const handleCTAClick = () => {
    // Use React Router navigation to go to the contact page or section
    navigate('/#contact');
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach((el) => {
      const id = el.id;
      if (!id) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add animation class when element is visible
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      
      observer.observe(el);
      observers.push(observer);
    });

    // Observer for stats section to trigger counters
    if (statsRef.current) {
      const statsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !countersStarted) {
              setCountersStarted(true);
              statsObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      
      statsObserver.observe(statsRef.current);
      observers.push(statsObserver);
    }
    
    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, [countersStarted]);

  // Handle Learn More clicks for services
  const handleServiceLearnMore = (serviceId: string) => {
    setActiveService(serviceId);
    setShowServiceModal(true);
    // You could also navigate to specific service pages if you have them
    // navigate(`/services/graphic-design/${serviceId}`);
  };

  // Close the service detail modal
  const closeServiceModal = () => {
    setShowServiceModal(false);
  };

  return (
    <div className="graphic-design-page overflow-hidden">
      {/* Hero Section - Modern & Interactive */}
      <section className="relative min-h-[90vh] flex items-center pt-28 pb-24 overflow-hidden">
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
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              background: `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 200 + 55)}, ${Math.random() * 0.7 + 0.3})`,
              animationDelay: `${Math.random() * 5}s`
            } as React.CSSProperties}
          />
        ))}
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 slide-in-left">
              {/* 3D Floating Badge */}
              <div className="inline-block mb-4 relative">
                <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full animate-pulse-slow"></div>
                <div className="relative glass-effect px-4 py-2 rounded-full text-indigo-700 font-medium text-sm inline-flex items-center gap-2 tilt-effect">
                  <span className="relative bg-indigo-500 text-white p-1 rounded-full">
                    <PenTool className="w-3 h-3" />
                  </span>
                  <span>Award-Winning Design Agency</span>
                </div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="animated-text-reveal block text-indigo-700">Captivating</span>
                <span className="animated-text-reveal-delay block text-purple-600">Graphic Design</span>
              </h1>
              
              {/* Description */}
              <p className="text-xl text-gray-600 animate-fade-in relative">
                <span className="relative z-10">Transform your brand with visually stunning designs that captivate your audience and elevate your market presence with our expert graphic design services.</span>
                <span className="absolute bottom-0 left-0 w-24 h-2 bg-indigo-500/30 rounded-full blur-sm"></span>
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button
                  onClick={handleCTAClick}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold 
                           shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-105
                           transition-all duration-300 flex items-center gap-2 group relative overflow-hidden"
                >
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></div>
                </button>
                
                <button
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 border-2 border-indigo-500/30 text-indigo-600 rounded-xl font-semibold 
                           hover:bg-indigo-500/5 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span>View Pricing</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center gap-4 text-gray-500 text-sm mt-4">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-indigo-500" />
                  <span>100% Satisfaction</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-indigo-500" />
                  <span>Quick Turnaround</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-indigo-500" />
                  <span>Premium Quality</span>
                </div>
              </div>
            </div>
            
            {/* Right 3D Visual Column - Modern Redesign */}
            <div className="relative slide-in-right">
              {/* 3D Design Elements Container */}
              <div className="relative z-10 perspective-1000 lg:max-w-[90%] xl:max-w-[80%] mx-auto">
                {/* Main Showcase with 3D Tilt Effect */}
                <div className="relative group transform-gpu transition-transform duration-300 hover:scale-[1.02]">
                  {/* Main Visual - Design Showcase */}
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <div className="relative bg-gradient-to-br from-indigo-800 to-purple-800 aspect-[4/3] p-6 flex items-center justify-center">
                      {/* Modern Design Elements */}
                      <div className="absolute top-6 left-6 w-24 h-24 rounded-md shadow-lg transform rotate-12 animate-float-slow bg-white">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-md opacity-90"></div>
                        <div className="absolute inset-0 rounded-md flex items-center justify-center">
                          <PenTool className="w-10 h-10 text-white drop-shadow-md" />
                        </div>
                      </div>
                      
                      <div className="absolute bottom-10 right-8 w-28 h-16 rounded-md shadow-lg transform -rotate-6 animate-float bg-white">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md opacity-90"></div>
                        <div className="absolute inset-0 rounded-md flex items-center justify-center">
                          <Layout className="w-8 h-8 text-white drop-shadow-md" />
                        </div>
                      </div>
                      
                      <div className="absolute top-24 right-12 w-20 h-20 rounded-md shadow-lg transform rotate-45 animate-float-reverse-slow bg-white">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-md opacity-90"></div>
                        <div className="absolute inset-0 rounded-md flex items-center justify-center">
                          <Image className="w-8 h-8 text-white drop-shadow-md" />
                        </div>
                      </div>
                      
                      {/* Modern Central Card */}
                      <div className="relative rounded-2xl p-6 shadow-2xl w-64 h-64 flex items-center justify-center z-20 border-2 border-white/50 bg-white group/card">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl"></div>
                        <div className="text-center relative z-10 transition-transform duration-300 group-hover/card:scale-105">
                          <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg transition-transform duration-300 hover:rotate-[5deg] hover:scale-110">
                            <Layers className="w-10 h-10 text-white drop-shadow-lg" />
                          </div>
                          <h3 className="text-indigo-900 text-xl font-bold">Elevate Your Brand</h3>
                          <p className="text-indigo-700 text-sm mt-2">Creative designs that make an impact</p>
                        </div>
                      </div>
                      
                      {/* Interactive Shape Elements */}
                      <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-pink-500 rounded-md opacity-80 animate-ping-slow"></div>
                      <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-blue-500 rounded-md opacity-80 animate-ping-slow delay-300"></div>
                      <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-purple-500 rounded-md opacity-80 animate-ping-slow delay-700"></div>
                    </div>
                  </div>
                  
                  {/* Modern hover effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-indigo-500/0 hover:border-indigo-500/100 transition-all duration-300 pointer-events-none"></div>
                </div>
                
                {/* Modern Floating Elements */}
                <div className="absolute -bottom-6 -right-6 rounded-xl p-4 shadow-xl animate-float transform rotate-6 w-40 border-2 border-indigo-500 bg-white">
                  <div className="bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-lg p-3 flex flex-col items-center">
                    <div className="w-full h-2 bg-purple-500 rounded-full mb-2"></div>
                    <div className="w-3/4 h-2 bg-indigo-500 rounded-full mb-2"></div>
                    <div className="w-1/2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="absolute -left-10 top-1/3 rounded-xl p-2 shadow-xl animate-float-reverse transform -rotate-12 w-24 border-2 border-purple-500 bg-white">
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-2 flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-indigo-500 mb-2 hover:scale-110 transition-transform duration-300"></div>
                    <div className="w-full h-1 bg-purple-500 rounded-full mb-1"></div>
                    <div className="w-full h-1 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Background elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/30 rounded-full animate-pulse-slow blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-500/30 rounded-full animate-pulse-slow delay-500 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background decoration elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-indigo-500/10 rounded-full opacity-70 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-purple-500/10 rounded-full opacity-70 blur-3xl animate-pulse-slow delay-700"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block relative mb-2">
              <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full animate-pulse-slow"></div>
              <span className="inline-block px-4 py-2 glass-effect rounded-full text-indigo-700 font-semibold text-sm relative">
                <span className="mr-2 inline-flex items-center justify-center bg-indigo-600 text-white p-1 rounded-full">
                  <PenTool className="w-3 h-3" />
                </span>
                OUR SERVICES
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700">
                Exceptional Graphic Design
              </span>
              <div className="mx-auto w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-4"></div>
            </h2>
            <p className="text-gray-600 text-lg">
              Our creative team delivers high-impact visual solutions that captivate audiences and elevate brands to their full potential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1: Logo Design */}
            <div className="glass-effect rounded-xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/20 group hover:transform hover:-translate-y-1 tilt-effect">
              <div className="mb-6 overflow-hidden rounded-lg">
                <img 
                  src="https://www.starlinks.nz/blog/wp-content/uploads/2024/01/Logo-Design-New-Zealand.jpg" 
                  alt="Logo Design Services" 
                  className="w-full h-48 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />  
              </div>
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full animate-pulse-slow opacity-70"></div>
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center relative z-10 shadow-lg group-hover:scale-110 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <PenTool className="w-8 h-8 text-white relative" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-indigo-700 group-hover:text-purple-600 transition-all duration-300">
                Logo Design
              </h3>
              <p className="text-gray-600 mb-6">
                Distinctive, memorable logos that capture your brand's essence and resonate with your audience for lasting impact and recognition.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-500" />
                  <span>Multiple concept options</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-500" />
                  <span>Vector file formats</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-500" />
                  <span>Brand color palette</span>
                </li>
              </ul>
              
              <Link to="#" onClick={(e) => {
                e.preventDefault();
                handleServiceLearnMore('logo-design');
              }} 
                className="inline-flex items-center text-indigo-600 font-semibold hover:text-purple-600 transition-colors duration-300 group/learn mt-2">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover/learn:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            
            {/* Service 2: Social Media Graphics */}
            <div className="glass-effect rounded-xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/20 group hover:transform hover:-translate-y-1 tilt-effect">
              <div className="mb-6 overflow-hidden rounded-lg">
                <img 
                  src="https://www.completeconnection.ca/wp-content/uploads/2020/12/Social-Media-and-Graphic-Design.jpg" 
                  alt="Social Media Graphics Services" 
                  className="w-full h-48 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />  
              </div>
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full animate-pulse-slow opacity-70"></div>
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center relative z-10 shadow-lg group-hover:scale-110 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <Image className="w-8 h-8 text-white relative" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-indigo-700 group-hover:text-purple-600 transition-all duration-300">
                Social Media Graphics
              </h3>
              <p className="text-gray-600 mb-6">
                Eye-catching, shareable content designed for maximum engagement across all social platforms, tailored to your brand identity.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-500" />
                  <span>Platform-optimized sizes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-500" />
                  <span>Engagement-driven design</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-500" />
                  <span>Consistent brand aesthetics</span>
                </li>
              </ul>
              
              <Link to="#" onClick={(e) => {
                e.preventDefault();
                handleServiceLearnMore('social-media');
              }} 
                className="inline-flex items-center text-indigo-600 font-semibold hover:text-purple-600 transition-colors duration-300 group/learn mt-2">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover/learn:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            
            {/* Service 3: Marketing Materials */}
            <div className="glass-effect rounded-xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/20 group hover:transform hover:-translate-y-1 tilt-effect">
              <div className="mb-6 overflow-hidden rounded-lg">
                <img 
                  src="https://firespring.com/wp-content/uploads/2021/05/southeast-mail-1024x576.png" 
                  alt="Marketing Materials Services" 
                  className="w-full h-48 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />  
              </div>
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full animate-pulse-slow opacity-70"></div>
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center relative z-10 shadow-lg group-hover:scale-110 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <Layout className="w-8 h-8 text-white relative" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-indigo-700 group-hover:text-purple-600 transition-all duration-300">
                Marketing Materials
              </h3>
              <p className="text-gray-600 mb-6">
                Professionally designed brochures, flyers, posters and promotional materials that effectively communicate your message.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-500" />
                  <span>Print-ready formats</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-500" />
                  <span>Compelling layouts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-500" />
                  <span>Strategic visual hierarchy</span>
                </li>
              </ul>
              
              <Link to="#" onClick={(e) => {
                e.preventDefault();
                handleServiceLearnMore('marketing-materials');
              }} 
                className="inline-flex items-center text-indigo-600 font-semibold hover:text-purple-600 transition-colors duration-300 group/learn mt-2">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover/learn:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative overflow-hidden">
        {/* Background decoration elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-indigo-500/10 rounded-full opacity-70 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-purple-500/10 rounded-full opacity-70 blur-3xl animate-pulse-slow delay-700"></div>
        
        {/* Animated particles */}
        {Array.from({ length: 10 }).map((_, index) => (
          <div 
            key={`pricing-particle-${index}`}
            className="particle animate-particle"
            style={{
              '--random': Math.random(),
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 3}px`,
              height: `${Math.random() * 8 + 3}px`,
              background: `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 200 + 55)}, ${Math.random() * 0.5 + 0.2})`,
              animationDelay: `${Math.random() * 5}s`
            } as React.CSSProperties}
          />
        ))}
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block relative mb-2">
              <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full animate-pulse-slow"></div>
              <span className="inline-block px-4 py-2 glass-effect rounded-full text-indigo-700 font-semibold text-sm relative">
                <span className="mr-2 inline-flex items-center justify-center bg-indigo-600 text-white p-1 rounded-full">
                  <DollarSign className="w-3 h-3" />
                </span>
                PRICING PLANS
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700">
                Choose Your Package
              </span>
              <div className="relative">
                <div className="mx-auto w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-4"></div>
                <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 w-3 h-3 bg-purple-500 rounded-full"></div>
              </div>
            </h2>
            <p className="text-gray-600 text-lg mt-8">
              Flexible pricing options tailored to your business needs and growth objectives.
            </p>
            
            {/* Pricing badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="px-4 py-2 glass-effect rounded-lg flex items-center gap-2 text-sm">
                <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
                </svg>
                <span>30-day Money Back</span>
              </div>
              
              <div className="px-4 py-2 glass-effect rounded-lg flex items-center gap-2 text-sm">
                <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                </svg>
                <span>Dedicated Support</span>
              </div>
              
              <div className="px-4 py-2 glass-effect rounded-lg flex items-center gap-2 text-sm">
                <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Premium Quality</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="glass-effect rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/20 group hover:transform hover:-translate-y-1 tilt-effect">
              <div className="absolute top-6 right-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-indigo-400 blur-md rounded-full opacity-30"></div>
                  <div className="relative bg-gradient-to-br from-indigo-500 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8 pt-12">
                <h3 className="text-xl font-semibold mb-2 text-indigo-700 flex items-center">
                  <div className="w-6 h-6 bg-indigo-500/20 rounded-full flex items-center justify-center mr-2">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  </div>
                  Basic Package
                </h3>
                <div className="text-4xl font-bold mb-6 flex items-end">
                  <span className="text-purple-600">KES 20,000</span>
                  <span className="text-gray-500 text-lg ml-1">/month</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                    <span>Logo Design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                    <span>Social Media Graphics (10 designs/month)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-100/30 to-purple-100/30 p-6 border-t border-indigo-200/20">
                <button
                  onClick={handleCTAClick}
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold 
                         shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-105
                         transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
                >
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
            
            {/* Standard Package */}
            <div className="glass-effect rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/20 group hover:transform hover:-translate-y-2 tilt-effect relative border-2 border-indigo-500/20">
              <div className="absolute top-6 right-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-400 blur-md rounded-full opacity-30"></div>
                  <div className="relative bg-gradient-to-br from-purple-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm px-4 py-1 rounded-full shadow-lg">
                  Most Popular
                </span>
              </div>
              
              <div className="p-8 pt-12">
                <h3 className="text-xl font-semibold mb-2 text-indigo-700 flex items-center">
                  <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center mr-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  </div>
                  Standard Package
                </h3>
                <div className="text-4xl font-bold mb-6 flex items-end">
                  <span className="text-purple-600">KES 40,000</span>
                  <span className="text-gray-500 text-lg ml-1">/month</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                    <span>Logo Design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                    <span>Social Media Graphics (20 designs/month)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                    <span>Marketing Materials (Brochures, Flyers)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-100/40 to-purple-100/40 p-6 border-t border-indigo-200/30">
                <button
                  onClick={handleCTAClick}
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold 
                         shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105
                         transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
                >
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
            
            {/* Premium Package */}
            <div className="glass-effect rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/20 group hover:transform hover:-translate-y-1 tilt-effect">
              <div className="absolute top-6 right-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-indigo-400 blur-md rounded-full opacity-30"></div>
                  <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 2a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8 pt-12">
                <h3 className="text-xl font-semibold mb-2 text-indigo-700 flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full flex items-center justify-center mr-2">
                    <div className="w-3 h-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full"></div>
                  </div>
                  Premium Package
                </h3>
                <div className="text-4xl font-bold mb-6 flex items-end">
                  <span className="text-purple-600">KES 60,000</span>
                  <span className="text-gray-500 text-lg ml-1">/month</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                    <span>Logo Design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                    <span>Social Media Graphics (30 designs/month)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                    <span>Marketing Materials (Brochures, Flyers, Posters)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                    <span>Brand Identity Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                    <span>Infographics</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-100/30 to-purple-100/30 p-6 border-t border-indigo-200/20">
                <button
                  onClick={handleCTAClick}
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold 
                         shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-105
                         transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
                >
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
          
          {/* Custom Projects CTA */}
          <div className="max-w-3xl mx-auto mt-16 text-center glass-effect rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-6">Have a specific project in mind? Contact us for a tailored proposal to meet your unique requirements.</p>
            <button
              onClick={handleCTAClick}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold 
                      shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-105
                      transition-all duration-300 flex items-center gap-2 group relative overflow-hidden mx-auto"
            >
              <span className="relative z-10">Request Custom Quote</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900">
        {/* Floating graphics elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/20 rounded-full opacity-30 blur-3xl animate-pulse-slow delay-700"></div>
        
        {/* Animated particles */}
        {Array.from({ length: 8 }).map((_, index) => (
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
              Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-200">Brand Identity</span>?
            </h2>
            <p className="text-lg mb-10 text-white/80 leading-relaxed">
              Partner with our expert design team to create visuals that captivate your audience and elevate your brand presence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={handleCTAClick}
                className="bg-white text-indigo-900 hover:text-purple-900 px-8 py-4 rounded-xl text-lg font-semibold 
                         shadow-lg shadow-indigo-800/30 hover:shadow-indigo-700/50
                         transition-all transform hover:scale-105 flex items-center gap-3 group relative overflow-hidden"
              >
                <span className="relative z-10">Get Started Today</span>
                <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1 relative z-10" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-indigo-400 to-purple-400 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {showServiceModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Animated backdrop */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 to-purple-900/80 backdrop-blur-lg animate-fade-in"></div>
          
          {/* Animated particles in modal background */}
          {Array.from({ length: 15 }).map((_, index) => (
            <div 
              key={`modal-particle-${index}`}
              className="absolute particle animate-particle z-40"
              style={{
                '--random': Math.random(),
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                background: `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`,
                animationDelay: `${Math.random() * 5}s`
              } as React.CSSProperties}
            />
          ))}
          
          <div className="relative glass-effect rounded-2xl max-w-4xl w-full max-h-[85vh] shadow-2xl z-50 border border-white/10 animate-modal-appear" style={{backgroundColor: 'rgba(30, 27, 75, 0.85)'}}>
            {/* Modal Header - Enhanced with gradient and better spacing */}
            <div className="relative p-8 border-b border-indigo-100/20">
              {/* Background glow */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl"></div>
              
              <div className="flex justify-between items-center relative">
                <div>
                  <span className="px-3 py-1 bg-indigo-100/10 text-indigo-300 text-xs rounded-full mb-2 inline-block">
                    GRAPHIC DESIGN SERVICES
                  </span>
                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
                    {activeService === 'logo-design' && 'Logo Design'}
                    {activeService === 'social-media' && 'Social Media Graphics'}
                    {activeService === 'marketing-materials' && 'Marketing Materials'}
                  </h3>
                </div>
                <button 
                  onClick={closeServiceModal}
                  className="p-3 rounded-full bg-indigo-700/40 hover:bg-indigo-600/50 border border-white/10 transition-all duration-300 hover:scale-110"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(85vh-112px)]" style={{ scrollbarWidth: 'thin', scrollbarColor: '#6366f1 transparent' }}>
              {activeService === 'logo-design' && (
                <div className="px-8 py-6 text-white/90">
                  {/* Animated header with 3D elements */}
                  <div className="relative mb-10">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                      <div>
                        <h4 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-200 inline-block mb-4">
                          Logo Design
                        </h4>
                        <p className="text-lg leading-relaxed">
                          Our logo design service creates distinctive, versatile brand marks that capture your company's essence and values while ensuring recognition and memorability across all touchpoints.
                        </p>
                      </div>
                      
                      <div className="flex justify-center">
                        <div className="relative w-64 h-64 perspective-800 logo-showcase">
                          <div className="absolute inset-0 flex items-center justify-center floating-element">
                            <img 
                              src="https://www.starlinks.nz/blog/wp-content/uploads/2024/01/Logo-Design-New-Zealand.jpg" 
                              alt="Logo Design Examples" 
                              className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-transparent rounded-2xl"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Process timeline with modern design */}
                  <div className="mb-10">
                    <h5 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white">
                      <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                      </svg>
                      Our Logo Design Process
                    </h5>
                    
                    <div className="relative">
                      {/* Progress line */}
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 via-purple-500 to-indigo-400"></div>
                      
                      <div className="space-y-6">
                        <div className="flex service-item service-item-1 hover:translate-y-[-2px] transition-transform duration-300">
                          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 z-10 mr-4 shadow-lg shadow-indigo-500/20">
                            <span className="text-white text-sm font-bold">1</span>
                          </div>
                          <div className="glass-effect p-4 rounded-xl border border-white/10 flex-grow" style={{backgroundColor: 'rgba(79, 70, 229, 0.15)'}}>
                            <h6 className="font-semibold mb-1">Brand Discovery</h6>
                            <p className="text-sm text-white">In-depth questionnaire and consultation to understand your brand's values, personality, audience, and goals</p>
                          </div>
                        </div>
                        
                        <div className="flex service-item service-item-2">
                          <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0 z-10 mr-4 shadow-lg shadow-indigo-500/20">
                            <span className="text-white text-sm font-bold">2</span>
                          </div>
                          <div className="glass-effect p-4 rounded-xl border border-white/10 flex-grow" style={{backgroundColor: 'rgba(79, 70, 229, 0.15)'}}>
                            <h6 className="font-semibold mb-1">Research & Concept Development</h6>
                            <p className="text-sm text-white">Exploring design directions, industry trends, competitor analysis, and visual inspiration gathering</p>
                          </div>
                        </div>
                        
                        <div className="flex service-item service-item-3">
                          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 z-10 mr-4 shadow-lg shadow-purple-500/20">
                            <span className="text-white text-sm font-bold">3</span>
                          </div>
                          <div className="glass-effect p-4 rounded-xl border border-white/10 flex-grow" style={{backgroundColor: 'rgba(79, 70, 229, 0.15)'}}>
                            <h6 className="font-semibold mb-1">Initial Logo Concepts</h6>
                            <p className="text-sm text-white">Presentation of 3-5 unique design concepts with clear rationale behind each approach</p>
                          </div>
                        </div>
                        
                        <div className="flex service-item service-item-4">
                          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 z-10 mr-4 shadow-lg shadow-purple-500/20">
                            <span className="text-white text-sm font-bold">4</span>
                          </div>
                          <div className="glass-effect p-4 rounded-xl border border-white/10 flex-grow" style={{backgroundColor: 'rgba(79, 70, 229, 0.15)'}}>
                            <h6 className="font-semibold mb-1">Refinement & Iterations</h6>
                            <p className="text-sm text-white">Collaborative feedback process to perfect your chosen design with up to 3 rounds of revisions</p>
                          </div>
                        </div>
                        
                        <div className="flex service-item service-item-5">
                          <div className="w-8 h-8 rounded-full bg-indigo-700 flex items-center justify-center flex-shrink-0 z-10 mr-4 shadow-lg shadow-indigo-500/20">
                            <span className="text-white text-sm font-bold">5</span>
                          </div>
                          <div className="glass-effect p-4 rounded-xl border border-white/10 flex-grow" style={{backgroundColor: 'rgba(79, 70, 229, 0.15)'}}>
                            <h6 className="font-semibold mb-1">Finalization & Delivery</h6>
                            <p className="text-sm text-white">Comprehensive file package including all necessary formats for print, digital, and various applications</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Logo package and why logos matter sections */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="glass-effect rounded-xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 group">
                      <div className="mb-4 flex items-center">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-500 flex items-center justify-center mr-3 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <h5 className="text-xl font-semibold group-hover:text-indigo-300 transition-colors duration-300">Logo Package Includes</h5>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 mt-4">
                        <div className="flex items-center p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200">
                          <svg className="w-5 h-5 text-indigo-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-sm">Vector source files</span>
                        </div>
                        <div className="flex items-center p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200">
                          <svg className="w-5 h-5 text-indigo-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-sm">Web-ready formats</span>
                        </div>
                        <div className="flex items-center p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200">
                          <svg className="w-5 h-5 text-indigo-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-sm">Color variations</span>
                        </div>
                        <div className="flex items-center p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200">
                          <svg className="w-5 h-5 text-indigo-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-sm">Black & white versions</span>
                        </div>
                        <div className="flex items-center p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200">
                          <svg className="w-5 h-5 text-indigo-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-sm">Transparent backgrounds</span>
                        </div>
                        <div className="flex items-center p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200">
                          <svg className="w-5 h-5 text-indigo-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-sm">Social media profiles</span>
                        </div>
                      </div>
                    </div>
                          
                    <div className="glass-effect rounded-xl p-6 border border-white/10">
                      <h5 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                        <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                        </svg>
                        Why Your Logo Matters
                      </h5>
                      
                      <p className="mb-4 text-white/80">A professionally designed logo is the foundation of your brand identity. It's often the first thing customers notice and remember about your business.</p>
                      
                      <div className="space-y-3 mt-4">
                        <div className="flex items-start p-3 bg-white/5 rounded-lg border border-white/5">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-500 flex items-center justify-center flex-shrink-0 mr-3">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          </div>
                          <div>
                            <h6 className="font-medium text-sm">First Impressions</h6>
                            <p className="text-xs text-white/70 mt-1">Your logo creates immediate impressions about your company's professionalism, values, and quality</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start p-3 bg-white/5 rounded-lg border border-white/5">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-500 flex items-center justify-center flex-shrink-0 mr-3">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div>
                            <h6 className="font-medium text-sm">Brand Recognition</h6>
                            <p className="text-xs text-white/70 mt-1">A distinctive logo helps customers instantly recognize your brand across all platforms and materials</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start p-3 bg-white/5 rounded-lg border border-white/5">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-500 flex items-center justify-center flex-shrink-0 mr-3">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                            </svg>
                          </div>
                          <div>
                            <h6 className="font-medium text-sm">Trust Building</h6>
                            <p className="text-xs text-white/70 mt-1">Professional design signals credibility, helping build trust with your audience and stakeholders</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeService === 'social-media' && (
                <div className="px-8 py-6 text-white/90">
                  {/* Intro with enhanced visual elements */}
                  <div className="relative mb-8">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl"></div>
                    <h4 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-200 inline-block mb-4">
                      Social Media Graphics
                    </h4>
                    <p className="text-lg leading-relaxed relative">
                      Our social media graphic design service helps your brand stand out in crowded feeds with eye-catching, on-brand visual content optimized for each platform and designed to increase engagement.
                    </p>
                  </div>
                  
                  {/* Interactive tabs */}
                  <div className="flex border-b border-white/10 mb-6 gap-x-6 px-2">
                    <div className="modal-tab active pb-2 text-white font-medium">
                      Overview
                    </div>
                    <div className="modal-tab pb-2 text-indigo-200 font-medium hover:text-white transition-colors">
                      Platforms
                    </div>
                    <div className="modal-tab pb-2 text-indigo-200 font-medium hover:text-white transition-colors">
                      Content Types
                    </div>
                    <div className="modal-tab pb-2 text-indigo-200 font-medium hover:text-white transition-colors">
                      Process
                    </div>
                  </div>
                  
                  {/* Main content area with visually striking design */}
                  <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-3 space-y-6">
                      <div className="glass-effect rounded-xl p-6 border border-white/10 pulse-glow">
                        <h5 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                          <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                          </svg>
                          Platforms We Design For
                        </h5>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          <div className="service-item service-item-1 glass-effect p-3 rounded-lg bg-indigo-900/30 flex flex-col items-center justify-center text-center hover:bg-indigo-800/40 transition-all cursor-pointer border border-white/10">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center mb-2">
                              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                              </svg>
                            </div>
                            <span className="text-sm font-medium">Instagram</span>
                          </div>
                          
                          <div className="service-item service-item-2 glass-effect p-3 rounded-lg bg-indigo-900/30 flex flex-col items-center justify-center text-center hover:bg-indigo-800/40 transition-all cursor-pointer border border-white/10">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center mb-2">
                              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                              </svg>
                            </div>
                            <span className="text-sm font-medium">Facebook</span>
                          </div>
                          
                          <div className="service-item service-item-3 glass-effect p-3 rounded-lg bg-indigo-900/30 flex flex-col items-center justify-center text-center hover:bg-indigo-800/40 transition-all cursor-pointer border border-white/10">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center mb-2">
                              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
                              </svg>
                            </div>
                            <span className="text-sm font-medium">Twitter/X</span>
                          </div>
                          
                          <div className="service-item service-item-4 glass-effect p-3 rounded-lg bg-indigo-900/30 flex flex-col items-center justify-center text-center hover:bg-indigo-800/40 transition-all cursor-pointer border border-white/10">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center mb-2">
                              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </div>
                            <span className="text-sm font-medium">LinkedIn</span>
                          </div>
                          
                          <div className="service-item service-item-5 glass-effect p-3 rounded-lg bg-indigo-900/30 flex flex-col items-center justify-center text-center hover:bg-indigo-800/40 transition-all cursor-pointer border border-white/10">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-black to-gray-800 flex items-center justify-center mb-2">
                              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                              </svg>
                            </div>
                            <span className="text-sm font-medium">TikTok</span>
                          </div>
                          
                          <div className="service-item service-item-6 glass-effect p-3 rounded-lg bg-indigo-900/30 flex flex-col items-center justify-center text-center hover:bg-indigo-800/40 transition-all cursor-pointer border border-white/10">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-400 flex items-center justify-center mb-2">
                              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                              </svg>
                            </div>
                            <span className="text-sm font-medium">Pinterest</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <div className="glass-effect rounded-xl overflow-hidden border border-white/10">
                        <div className="h-48 bg-gradient-to-br from-indigo-800 to-purple-700 flex items-center justify-center">
                          <img 
                            src="https://www.completeconnection.ca/wp-content/uploads/2020/12/Social-Media-and-Graphic-Design.jpg" 
                            alt="Social Media Design Services" 
                            className="w-full h-full object-cover mix-blend-overlay"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-indigo-900/80 to-transparent">
                            <div className="text-center px-4">
                              <h5 className="text-xl font-bold text-white mb-2">Content Types</h5>
                              <div className="flex flex-wrap justify-center gap-2">
                                <span className="px-2 py-1 bg-indigo-700/60 rounded-full text-xs font-medium shadow-sm">Feed Posts</span>
                                <span className="px-2 py-1 bg-indigo-700/60 rounded-full text-xs font-medium shadow-sm">Stories</span>
                                <span className="px-2 py-1 bg-indigo-700/60 rounded-full text-xs font-medium shadow-sm">Profile Graphics</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 space-y-4">
                          <h5 className="text-xl font-semibold text-white mb-2">How Our Process Works</h5>
                          <div className="space-y-2">
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-white text-xs font-bold">1</span>
                              </div>
                              <p className="text-sm text-white">Brand & strategy consultation</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-white text-xs font-bold">2</span>
                              </div>
                              <p className="text-sm text-white">Visual style development</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-white text-xs font-bold">3</span>
                              </div>
                              <p className="text-sm text-white">Platform-specific optimization</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-white text-xs font-bold">4</span>
                              </div>
                              <p className="text-sm text-white">Content calendar planning</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-indigo-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-white text-xs font-bold">5</span>
                              </div>
                              <p className="text-sm text-white">Revisions & final delivery</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeService === 'marketing-materials' && (
                <div className="px-8 py-6 text-white/90">
                  {/* Intro with enhanced visual elements */}
                  <div className="relative mb-8">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-500/20 rounded-full blur-3xl"></div>
                    <h4 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-200 inline-block mb-4">
                      Marketing Materials
                    </h4>
                    <p className="text-lg leading-relaxed relative">
                      Our marketing materials design service creates professionally designed print and digital assets that consistently reinforce your brand message, support your marketing campaigns, and help you achieve business goals.
                    </p>
                  </div>
                  
                  {/* 3D-style hero banner for marketing materials */}
                  <div className="relative h-48 mb-10 rounded-xl overflow-hidden">
                    <img 
                      src="https://firespring.com/wp-content/uploads/2021/05/southeast-mail-1024x576.png" 
                      alt="Marketing Materials Showcase" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/50 to-transparent">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h5 className="text-xl font-bold text-white mb-1">Professional Marketing Materials</h5>
                        <p className="text-sm text-white">Elevate your brand with our premium design services</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Main content area with visually striking design */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="glass-effect rounded-xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 group">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-400 flex items-center justify-center mr-4 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <h5 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors duration-300">Print Materials</h5>
                      </div>
                      
                      <div className="space-y-3 pl-16">
                        <div className="flex items-center py-1 px-3 bg-indigo-900/30 rounded-md hover:bg-indigo-800/40 transition-colors duration-200 cursor-pointer border border-white/5">
                          <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                          <span>Brochures & flyers</span>
                        </div>
                        <div className="flex items-center py-1 px-3 bg-indigo-900/30 rounded-md hover:bg-indigo-800/40 transition-colors duration-200 cursor-pointer border border-white/5">
                          <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                          <span>Business cards</span>
                        </div>
                        <div className="flex items-center py-1 px-3 bg-indigo-900/30 rounded-md hover:bg-indigo-800/40 transition-colors duration-200 cursor-pointer border border-white/5">
                          <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                          <span>Postcards</span>
                        </div>
                        <div className="flex items-center py-1 px-3 bg-indigo-900/30 rounded-md hover:bg-indigo-800/40 transition-colors duration-200 cursor-pointer border border-white/5">
                          <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                          <span>Posters & banners</span>
                        </div>
                        <div className="flex items-center py-1 px-3 bg-indigo-900/30 rounded-md hover:bg-indigo-800/40 transition-colors duration-200 cursor-pointer border border-white/5">
                          <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                          <span>Packaging designs</span>
                        </div>
                        <div className="flex items-center py-1 px-3 bg-indigo-900/30 rounded-md hover:bg-indigo-800/40 transition-colors duration-200 cursor-pointer border border-white/5">
                          <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                          <span>Event materials</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="glass-effect rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center mr-4 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h5 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">Digital Materials</h5>
                      </div>
                      
                      <div className="space-y-3 pl-16">
                        <div className="flex items-center py-1 px-3 bg-indigo-900/30 rounded-md hover:bg-indigo-800/40 transition-colors duration-200 cursor-pointer border border-white/5">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                          <span>Email templates</span>
                        </div>
                        <div className="flex items-center py-1 px-3 bg-indigo-900/30 rounded-md hover:bg-indigo-800/40 transition-colors duration-200 cursor-pointer border border-white/5">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                          <span>Web banners</span>
                        </div>
                        <div className="flex items-center py-1 px-3 bg-indigo-900/30 rounded-md hover:bg-indigo-800/40 transition-colors duration-200 cursor-pointer border border-white/5">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                          <span>E-books & guides</span>
                        </div>
                        <div className="flex items-center py-1 px-3 bg-indigo-900/30 rounded-md hover:bg-indigo-800/40 transition-colors duration-200 cursor-pointer border border-white/5">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                          <span>Presentation templates</span>
                        </div>
                        <div className="flex items-center py-1 px-3 bg-indigo-900/30 rounded-md hover:bg-indigo-800/40 transition-colors duration-200 cursor-pointer border border-white/5">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                          <span>Digital brochures</span>
                        </div>
                        <div className="flex items-center py-1 px-3 bg-indigo-900/30 rounded-md hover:bg-indigo-800/40 transition-colors duration-200 cursor-pointer border border-white/5">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                          <span>Infographics</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Why Choose Us section with modern design */}
                  <div className="mt-10 glass-effect rounded-xl p-6 border border-white/10">
                    <h5 className="text-xl font-semibold flex items-center gap-2 text-white mb-4">
                      <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 001.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                      Why Choose Our Service
                    </h5>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-indigo-500/20 transition-all duration-300">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-500 flex items-center justify-center mb-3">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                          </svg>
                        </div>
                        <h6 className="text-base font-medium mb-1">Expert Designers</h6>
                        <p className="text-sm text-white/70">Experienced professionals who understand marketing principles and design trends</p>
                      </div>
                      
                      <div className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-indigo-500/20 transition-all duration-300">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-500 flex items-center justify-center mb-3">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <h6 className="text-base font-medium mb-1">Brand Consistency</h6>
                        <p className="text-sm text-white/70">Ensuring all materials align perfectly with your brand guidelines and voice</p>
                      </div>
                      
                      <div className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-indigo-500/20 transition-all duration-300">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-500 flex items-center justify-center mb-3">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"></path>
                          </svg>
                        </div>
                        <h6 className="text-base font-medium mb-1">Multi-Format Delivery</h6>
                        <p className="text-sm text-white/70">Optimized files for both print and digital applications with all necessary formats</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Modal Footer */}
            <div className="border-t border-gray-100 p-6 flex justify-end">
              <button 
                className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg mr-4 hover:shadow-lg transition-all duration-300"
                onClick={() => {
                  closeServiceModal();
                  setTimeout(() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }), 100);
                }}
              >
                View Pricing
              </button>
              <button 
                onClick={closeServiceModal}
                className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GraphicDesign;
