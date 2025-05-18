import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  CheckCircle, 
  Target, 
  ArrowRight, 
  DollarSign, 
  BarChart2,
  TrendingUp,
  Search,
  Award,
  LineChart,
  MousePointer
} from 'lucide-react';

// Add CSS for animation and effects
import './StrategicPaidAdvertising.css';

const StrategicPaidAdvertising: React.FC = () => {
  // State for animations and counter effects
  const statsRef = useRef<HTMLDivElement>(null);
  const [countersStarted, setCountersStarted] = useState(false);
  // State for package details modal
  const [activePackage, setActivePackage] = useState<string | null>(null);
  const [showPackageModal, setShowPackageModal] = useState(false);
  
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

  // Handle Learn More clicks for packages
  const handlePackageLearnMore = (packageId: string) => {
    setActivePackage(packageId);
    setShowPackageModal(true);
  };

  // Close the package detail modal
  const closePackageModal = () => {
    setShowPackageModal(false);
  };

  return (
    <div className="paid-advertising-page overflow-hidden">
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
                    <Target className="w-3 h-3" />
                  </span>
                  <span>Results-Driven PPC Marketing</span>
                </div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl lg:text-6xl font-bold">
                <span className="animated-text-reveal block text-indigo-700">Strategic</span>
                <span className="animated-text-reveal-delay block text-purple-600">Paid Advertising</span>
              </h1>
              
              {/* Description */}
              <p className="text-xl text-gray-600 animate-fade-in relative">
                <span className="relative z-10">Maximize your ROI with targeted pay-per-click campaigns that drive qualified traffic, boost conversions, and accelerate your business growth.</span>
                <span className="absolute bottom-0 left-0 w-24 h-2 bg-indigo-200 -z-0 blur-sm"></span>
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={handleCTAClick} 
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium text-lg
                           hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 transform hover:scale-105
                           flex items-center justify-center gap-2 group"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="#pricing" 
                  className="px-8 py-4 border-2 border-indigo-300 text-indigo-700 rounded-xl font-medium text-lg
                           hover:bg-indigo-50 transition-all duration-300
                           flex items-center justify-center gap-2 group"
                >
                  <span>View Pricing</span>
                  <DollarSign className="w-5 h-5" />
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 items-center pt-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">Google Ads Partner</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">Meta Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">7-Day Setup</span>
                </div>
              </div>
            </div>
            
            {/* 3D Animation Side */}
            <div className="hidden lg:block relative perspective-container slide-in-right">
              <div className="relative tilt-effect-heavy p-4">
                {/* Floating 3D Ad Campaign */}
                <div className="relative z-20 bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto
                              transform transition-transform hover:scale-105 hover:shadow-indigo-500/30
                              border border-indigo-100">
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white text-lg font-bold
                                shadow-lg shadow-indigo-500/30 animate-float-slow">
                    <MousePointer className="w-7 h-7" />
                  </div>
                  
                  {/* Mock PPC Dashboard */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold text-xl text-gray-800">Campaign Dashboard</h4>
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Active</div>
                    </div>
                    
                    {/* Stats Mock */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-gray-500 text-xs mb-1">Impressions</p>
                        <div className="flex items-end gap-2">
                          <span className="text-gray-800 font-bold text-xl">86.4K</span>
                          <span className="text-green-500 text-xs flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" />18%
                          </span>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-gray-500 text-xs mb-1">Clicks</p>
                        <div className="flex items-end gap-2">
                          <span className="text-gray-800 font-bold text-xl">3,842</span>
                          <span className="text-green-500 text-xs flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" />12%
                          </span>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-gray-500 text-xs mb-1">Avg. CPC</p>
                        <div className="flex items-end gap-2">
                          <span className="text-gray-800 font-bold text-xl">KSh 22</span>
                          <span className="text-green-500 text-xs flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" />5%
                          </span>
                        </div>
                      </div>
                      <div className="bg-indigo-50 p-3 rounded-lg">
                        <p className="text-indigo-500 text-xs mb-1">Conversions</p>
                        <div className="flex items-end gap-2">
                          <span className="text-indigo-700 font-bold text-xl">428</span>
                          <span className="text-green-500 text-xs flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" />24%
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Performance Graph */}
                    <div className="h-24 w-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg mb-4 overflow-hidden relative">
                      {/* Simplified graph representation */}
                      <div className="absolute bottom-0 left-0 w-full h-full">
                        <svg viewBox="0 0 100 30" className="w-full h-full">
                          <path 
                            d="M0,30 L5,28 L10,26 L15,27 L20,25 L25,23 L30,22 L35,24 L40,20 L45,18 L50,16 L55,14 L60,15 L65,13 L70,10 L75,8 L80,5 L85,7 L90,4 L95,2 L100,0" 
                            fill="none" 
                            stroke="#6366f1" 
                            strokeWidth="1.5"
                            className="graph-path"
                          />
                          <path 
                            d="M0,30 L5,28 L10,26 L15,27 L20,25 L25,23 L30,22 L35,24 L40,20 L45,18 L50,16 L55,14 L60,15 L65,13 L70,10 L75,8 L80,5 L85,7 L90,4 L95,2 L100,0" 
                            fill="url(#gradientFill)" 
                          />
                          <defs>
                            <linearGradient id="gradientFill" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex justify-between">
                      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-colors">
                        Optimize
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                        View Report
                      </button>
                    </div>
                  </div>
                  
                  {/* Floating Mini Ads */}
                  <div className="absolute top-1/3 left-8 glass-effect rounded-xl p-4 shadow-xl animate-float transform -rotate-3 w-28 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                    <div className="text-white text-sm font-semibold">Creativity</div>
                    <div className="w-full h-1 bg-purple-500/60 rounded-full mt-1"></div>
                  </div>
                  
                  {/* Floating mini ad visual */}
                  <div className="absolute -bottom-8 -left-12 w-44 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-lg transform rotate-3 animate-float z-10">
                    <img 
                      src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                      alt="Google Ads" 
                      className="w-6 h-6 object-cover rounded-full absolute -top-2 -left-2 border-2 border-white"
                    />
                    <div className="text-xs text-indigo-600 font-medium mb-0.5 truncate">Summer Collection Sale</div>
                    <div className="text-xs text-gray-600 truncate">Up to 50% off on all items</div>
                    <div className="flex items-center mt-1 text-gray-500 text-xs">
                      <span>www.fashionstore.com</span>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200 rounded-full blur-xl opacity-60 animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-10 w-16 h-16 bg-indigo-300 rounded-full blur-xl opacity-60 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
            
            {/* Mobile-only visualization */}
            <div className="block lg:hidden relative perspective-container slide-in-up mt-8">
              <div className="relative tilt-effect p-4">
                {/* Simplified Mobile Dashboard */}
                <div className="relative z-20 bg-white rounded-2xl shadow-xl p-4 max-w-sm mx-auto
                              border border-indigo-100">
                  <div className="absolute -top-4 -right-4 w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center text-white
                                shadow-lg shadow-indigo-500/30 animate-float-slow">
                    <MousePointer className="w-5 h-5" />
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-bold text-lg text-gray-800">Campaign</h4>
                      <div className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs">Active</div>
                    </div>
                    
                    {/* Simplified Stats for Mobile */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-gray-50 p-2 rounded-lg">
                        <p className="text-gray-500 text-xs mb-0.5">Clicks</p>
                        <div className="flex items-end gap-1">
                          <span className="text-gray-800 font-bold text-base">3,842</span>
                          <span className="text-green-500 text-xs flex items-center">
                            <TrendingUp className="w-2 h-2 mr-0.5" />12%
                          </span>
                        </div>
                      </div>
                      <div className="bg-indigo-50 p-2 rounded-lg">
                        <p className="text-indigo-500 text-xs mb-0.5">Conversions</p>
                        <div className="flex items-end gap-1">
                          <span className="text-indigo-700 font-bold text-base">428</span>
                          <span className="text-green-500 text-xs flex items-center">
                            <TrendingUp className="w-2 h-2 mr-0.5" />24%
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mini Graph for Mobile */}
                    <div className="h-16 w-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg overflow-hidden relative">
                      <div className="absolute bottom-0 left-0 w-full h-full">
                        <svg viewBox="0 0 100 30" className="w-full h-full">
                          <path 
                            d="M0,30 L5,28 L10,26 L15,27 L20,25 L25,23 L30,22 L35,24 L40,20 L45,18 L50,16 L55,14 L60,15 L65,13 L70,10 L75,8 L80,5 L85,7 L90,4 L95,2 L100,0" 
                            fill="none" 
                            stroke="#6366f1" 
                            strokeWidth="2"
                            className="graph-path"
                          />
                          <path 
                            d="M0,30 L5,28 L10,26 L15,27 L20,25 L25,23 L30,22 L35,24 L40,20 L45,18 L50,16 L55,14 L60,15 L65,13 L70,10 L75,8 L80,5 L85,7 L90,4 L95,2 L100,0 L100,30 L0,30" 
                            fill="url(#mobileGradientFill)" 
                          />
                          <defs>
                            <linearGradient id="mobileGradientFill" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden" id="why-choose-us">
        {/* Background Design Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full -mr-32 -mt-16 filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full -ml-32 -mb-16 filter blur-3xl opacity-70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll" id="why-choose-title">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Our Paid Advertising Delivers <span className="text-indigo-600">Exceptional Results</span></h2>
            <p className="text-lg text-gray-600">Discover how our strategic approach to PPC campaigns translates into higher conversions and growth for your business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Advantage Card 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll feature-item" id="advantage-1" style={{animationDelay: '0s'}}>
              <div className="flex flex-col">
                {/* Image on top */}
                <div className="mb-5 rounded-lg overflow-hidden h-44">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Precision Targeting" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div className="w-16 h-16 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Precision Targeting</h3>
                <p className="text-gray-600">We identify and target your ideal customers with laser precision, ensuring your ad budget is spent efficiently on audiences most likely to convert.</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-indigo-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Location targeting</span>
                </div>
                <div className="flex items-center gap-2 text-indigo-600 mt-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Demographic filtering</span>
                </div>
                <div className="flex items-center gap-2 text-indigo-600 mt-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Interest-based segmentation</span>
                </div>
              </div>
            </div>
            
            {/* Advantage Card 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll feature-item" id="advantage-2" style={{animationDelay: '0.2s'}}>
              <div className="flex flex-col">
                {/* Image on top */}
                <div className="mb-5 rounded-lg overflow-hidden h-44">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Data-Driven Optimization" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div className="w-16 h-16 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <BarChart2 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Data-Driven Optimization</h3>
                <p className="text-gray-600">We continuously analyze campaign performance data to optimize bids, ad copy, and landing pages, maximizing your return on ad spend.</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-purple-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">A/B testing</span>
                </div>
                <div className="flex items-center gap-2 text-purple-600 mt-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Conversion tracking</span>
                </div>
                <div className="flex items-center gap-2 text-purple-600 mt-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">ROI analysis</span>
                </div>
              </div>
            </div>
            
            {/* Advantage Card 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll feature-item" id="advantage-3" style={{animationDelay: '0.4s'}}>
              <div className="flex flex-col">
                {/* Image on top */}
                <div className="mb-5 rounded-lg overflow-hidden h-44">
                  <img 
                    src="https://images.vodafone.co.uk/69eepp2lubij/1ti41k2YlNIhCZ1YJw6Isa/baa7beceec7dbc2cef19e94c00223a10/IMG-FI-2.WEB?fm=webp"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div className="w-16 h-16 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Industry Expertise</h3>
                <p className="text-gray-600">Our certified PPC specialists understand the nuances of different ad platforms and industries, crafting campaigns that speak directly to your target audience.</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-indigo-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Google Ads certified</span>
                </div>
                <div className="flex items-center gap-2 text-indigo-600 mt-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Meta Blueprint certified</span>
                </div>
                <div className="flex items-center gap-2 text-indigo-600 mt-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Multi-industry experience</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Benefits Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300 animate-on-scroll" id="mini-advantage-1" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold">Quick Results</h4>
              </div>
              <p className="text-gray-600 text-sm">See improved traffic and leads within days, not months like with SEO.</p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300 animate-on-scroll" id="mini-advantage-2" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                  <LineChart className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold">Measurable ROI</h4>
              </div>
              <p className="text-gray-600 text-sm">Every shilling spent is tracked to show exactly what results your ads generate.</p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300 animate-on-scroll" id="mini-advantage-3" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold">Brand Visibility</h4>
              </div>
              <p className="text-gray-600 text-sm">Increase brand awareness by appearing prominently in search results and on social platforms.</p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300 animate-on-scroll" id="mini-advantage-4" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold">Budget Control</h4>
              </div>
              <p className="text-gray-600 text-sm">Full control over daily or monthly spending with the ability to adjust at any time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Stats Section */}
      <section className="py-20 relative overflow-hidden" ref={statsRef}>
        {/* Background Design Elements */}
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-indigo-50 rounded-full -mr-36 transform -translate-y-1/2 filter blur-3xl opacity-70"></div>
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-50 rounded-full -ml-36 filter blur-3xl opacity-70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll" id="results-title">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Driving <span className="text-indigo-600">Real Business Results</span></h2>
            <p className="text-lg text-gray-600">Our data-backed approach has helped businesses across industries achieve significant growth through strategic paid advertising campaigns</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Stat Counter 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-indigo-50 text-center glow-effect animate-on-scroll" id="stat-1">
              <div className="text-4xl md:text-5xl font-bold text-indigo-700 mb-3">
                {countersStarted ? (
                  <span className="counter-animate is-visible">246%</span>
                ) : (
                  <span>246%</span>
                )}
              </div>
              <p className="text-gray-600 uppercase tracking-wider text-xs font-semibold">Average ROI</p>
              <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
            </div>
            
            {/* Stat Counter 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-indigo-50 text-center glow-effect animate-on-scroll" id="stat-2" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl md:text-5xl font-bold text-purple-700 mb-3">
                {countersStarted ? (
                  <span className="counter-animate is-visible">89%</span>
                ) : (
                  <span>89%</span>
                )}
              </div>
              <p className="text-gray-600 uppercase tracking-wider text-xs font-semibold">Increase in Conversions</p>
              <div className="w-12 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
            </div>
            
            {/* Stat Counter 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-indigo-50 text-center glow-effect animate-on-scroll" id="stat-3" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl md:text-5xl font-bold text-indigo-700 mb-3">
                {countersStarted ? (
                  <span className="counter-animate is-visible">38%</span>
                ) : (
                  <span>38%</span>
                )}
              </div>
              <p className="text-gray-600 uppercase tracking-wider text-xs font-semibold">Lower Cost-Per-Click</p>
              <div className="w-12 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
            </div>
            
            {/* Stat Counter 4 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-indigo-50 text-center glow-effect animate-on-scroll" id="stat-4" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl md:text-5xl font-bold text-purple-700 mb-3">
                {countersStarted ? (
                  <span className="counter-animate is-visible">74%</span>
                ) : (
                  <span>74%</span>
                )}
              </div>
              <p className="text-gray-600 uppercase tracking-wider text-xs font-semibold">Increased Click-Through Rate</p>
              <div className="w-12 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
            </div>
          </div>
          
          {/* Client Results Showcase */}
          <div className="rounded-2xl p-8 md:p-12 animate-on-scroll relative overflow-hidden" id="client-results">
            {/* Background with darker overlay for better text visibility */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-indigo-900 opacity-95"></div>
              <img 
                src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Analytics Background" 
                className="w-full h-full object-cover opacity-10 mix-blend-overlay" 
              />
              {/* Adding a dark gradient overlay to improve text contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-900"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center relative z-10">
              <div className="lg:col-span-3 text-white">
                <div className="inline-block px-4 py-1 bg-white/30 backdrop-blur-md rounded-full text-white text-sm font-medium mb-4 border border-white/20 shadow-lg">
                  Client Success Story
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white drop-shadow-md">"Our ad campaigns now generate 3x more qualified leads at 30% lower cost"</h3>
                <p className="mb-6 text-white text-lg leading-relaxed drop-shadow-sm">After struggling with ineffective advertising, our strategic approach transformed their digital campaigns, resulting in sustainable growth and higher conversion rates.</p>
                <div className="flex items-center gap-4 bg-indigo-800/40 p-3 rounded-xl border border-indigo-500/20">
                  <div className="w-12 h-12 rounded-full bg-white shadow-lg p-0.5">
                    <div className="w-full h-full rounded-full bg-indigo-600 flex items-center justify-center text-white text-lg font-bold">
                      J
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-white">John K.</p>
                    <p className="text-sm text-white">E-commerce CEO</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2 bg-white/95 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl">
                <h4 className="font-semibold text-indigo-900 mb-4 text-lg">Campaign Results</h4>
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-700 font-medium">Conversion Rate</span>
                      <span className="text-indigo-700 font-bold">12.6%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{width: '65%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-700 font-medium">Return on Ad Spend</span>
                      <span className="text-indigo-700 font-bold">387%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-700 font-medium">Cost Per Acquisition</span>
                      <span className="text-green-600 font-bold">-43%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{width: '72%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden" id="pricing">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Pricing Background" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        {/* Background Design Elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-100 rounded-full filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-70"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll" id="pricing-title">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent <span className="text-indigo-600">Pricing Plans</span></h2>
            <p className="text-lg text-gray-600">Choose the perfect advertising package to meet your business goals and budget</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Basic Package */}
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-indigo-50 pricing-card animate-on-scroll" id="basic-package" style={{animationDelay: '0.1s'}}>
              <div className="absolute -top-5 left-8 px-4 py-2 bg-indigo-50 rounded-lg text-indigo-600 font-semibold text-sm">
                Basic Package
              </div>
              <div className="pt-6">
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-3xl font-extrabold text-gray-900">KSh 30,000</span>
                  <span className="text-gray-500">/month</span>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="min-w-[24px] h-6 flex items-center justify-center pt-0.5">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    </div>
                    <span className="text-gray-600">Google Ads Management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="min-w-[24px] h-6 flex items-center justify-center pt-0.5">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    </div>
                    <span className="text-gray-600">Keyword Research</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="min-w-[24px] h-6 flex items-center justify-center pt-0.5">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    </div>
                    <span className="text-gray-600">Ad Creatives</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="min-w-[24px] h-6 flex items-center justify-center pt-0.5">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    </div>
                    <span className="text-gray-600">Monthly Reports</span>
                  </div>
                </div>
                
                <button 
                  onClick={handleCTAClick} 
                  className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 btn-shine"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Standard Package */}
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-indigo-500 pricing-card animate-on-scroll" id="standard-package">
              {/* Popular Badge */}
              <div className="absolute -top-5 right-8 px-4 py-2 bg-indigo-500 rounded-lg text-white font-semibold text-sm">
                Most Popular
              </div>
              <div className="absolute -top-5 left-8 px-4 py-2 bg-indigo-50 rounded-lg text-indigo-600 font-semibold text-sm">
                Standard Package
              </div>
              <div className="pt-6">
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-3xl font-extrabold text-gray-900">KSh 60,000</span>
                  <span className="text-gray-500">/month</span>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="min-w-[24px] h-6 flex items-center justify-center pt-0.5">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    </div>
                    <span className="text-gray-600">Google Ads Management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="min-w-[24px] h-6 flex items-center justify-center pt-0.5">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    </div>
                    <span className="text-gray-600">Bing Ads Management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="min-w-[24px] h-6 flex items-center justify-center pt-0.5">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    </div>
                    <span className="text-gray-600">Keyword Research</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="min-w-[24px] h-6 flex items-center justify-center pt-0.5">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    </div>
                    <span className="text-gray-600">Ad Creatives</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="min-w-[24px] h-6 flex items-center justify-center pt-0.5">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    </div>
                    <span className="text-gray-600">Retargeting Campaigns</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="min-w-[24px] h-6 flex items-center justify-center pt-0.5">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    </div>
                    <span className="text-gray-600">Monthly Reports</span>
                  </div>
                </div>
                
                <button 
                  onClick={handleCTAClick} 
                  className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2 btn-shine shadow-lg shadow-indigo-500/20"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Premium Package */}
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-indigo-50 pricing-card animate-on-scroll" id="premium-package" style={{animationDelay: '0.2s'}}>
              <div className="absolute -top-5 left-8 px-4 py-2 bg-indigo-50 rounded-lg text-indigo-600 font-semibold text-sm">
                Premium Package
              </div>
              <div className="pt-6">
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-3xl font-extrabold text-gray-900">KSh 90,000</span>
                  <span className="text-gray-500">/month</span>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="min-w-[24px] h-6 flex items-center justify-center pt-0.5">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    </div>
                    <span className="text-gray-600">Google Ads Management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="min-w-[24px] h-6 flex items-center justify-center pt-0.5">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    </div>
                    <span className="text-gray-600">Bing Ads Management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="min-w-[24px] h-6 flex items-center justify-center pt-0.5">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    </div>
                    <span className="text-gray-600">Social Media Ads Management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="min-w-[24px] h-6 flex items-center justify-center pt-0.5">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    </div>
                    <span className="text-gray-600">Keyword Research</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="min-w-[24px] h-6 flex items-center justify-center pt-0.5">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    </div>
                    <span className="text-gray-600">Ad Creatives</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="min-w-[24px] h-6 flex items-center justify-center pt-0.5">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    </div>
                    <span className="text-gray-600">Retargeting Campaigns</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="min-w-[24px] h-6 flex items-center justify-center pt-0.5">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    </div>
                    <span className="text-gray-600">Display Advertising</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="min-w-[24px] h-6 flex items-center justify-center pt-0.5">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    </div>
                    <span className="text-gray-600">Weekly Reports</span>
                  </div>
                </div>
                
                <button 
                  onClick={handleCTAClick} 
                  className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 btn-shine"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Custom Solution */}
          <div className="mt-12 text-center animate-on-scroll" id="custom-solution">
            <p className="text-gray-600">Need a custom solution? <button onClick={handleCTAClick} className="text-indigo-600 font-medium hover:text-indigo-800 underline decoration-2 underline-offset-2">Contact us</button> for a personalized quote.</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Analytics CTA Background" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 opacity-90"></div>
        </div>
        
        {/* Animated particles */}
        {Array.from({ length: 15 }).map((_, index) => (
          <div 
            key={`cta-particle-${index}`}
            className="particle animate-particle"
            style={{
              '--random': Math.random(),
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 3}px`,
              height: `${Math.random() * 10 + 3}px`,
              background: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})`,
              animationDelay: `${Math.random() * 5}s`
            } as React.CSSProperties}
          />
        ))}
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white animate-on-scroll" id="final-cta-title">
              Ready to Supercharge Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-200">Digital Advertising</span>?
            </h2>
            <p className="text-xl mb-10 text-white/80 leading-relaxed max-w-2xl mx-auto animate-on-scroll" id="final-cta-text" style={{animationDelay: '0.1s'}}>
              Join hundreds of successful businesses that have transformed their advertising ROI with our strategic paid ad campaigns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-on-scroll" id="final-cta-buttons" style={{animationDelay: '0.2s'}}>
              <button 
                onClick={handleCTAClick}
                className="bg-white text-indigo-900 hover:text-purple-900 px-8 py-4 rounded-xl text-lg font-semibold 
                         shadow-lg shadow-indigo-800/30 hover:shadow-indigo-700/50
                         transition-all transform hover:scale-105 flex items-center gap-3 group relative overflow-hidden"
              >
                <span className="relative z-10">Start Your Campaign</span>
                <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1 relative z-10" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-indigo-400 to-purple-400 transition-opacity duration-300"></div>
              </button>
              <a 
                href="#pricing" 
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl text-lg font-semibold 
                         transition-all transform hover:scale-105 hover:border-white/50 flex items-center gap-3 group glass-effect"
              >
                <span>View Pricing</span>
                <DollarSign className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StrategicPaidAdvertising;
