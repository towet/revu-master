import React, { useEffect, useRef, useState } from 'react';
import { 
  BarChart2,

  CheckCircle, 
  MessageCircle, 
  Target, 
  TrendingUp, 
  Users,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
  PieChart,
  Heart
} from 'lucide-react';

const SocialMediaMarketing: React.FC = () => {
  // Intersection Observer for animations
  const heroRef = useRef<HTMLDivElement>(null);
  const whyChooseUsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  // State for counter animations
  const [countersStarted, setCountersStarted] = useState(false);
  
  useEffect(() => {
    // Create observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          
          // Start counters when stats section is visible
          if (entry.target.id === 'results-title' && !countersStarted) {
            setCountersStarted(true);
          }
        }
      });
    }, { threshold: 0.1 });
    
    // Get all elements with the animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      // Clean up observer
      animatedElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="pt-20 pb-32 relative overflow-hidden" ref={heroRef}>
        {/* Background Design Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-bl-full opacity-70 filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-pink-50 to-purple-100 rounded-tr-full opacity-70 filter blur-3xl"></div>
        
        {/* Animated Social Media Icons Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="social-icon-float instagram-float absolute top-1/4 left-1/5 animate-float">
            <Instagram className="w-10 h-10 text-pink-400 opacity-20" />
          </div>
          <div className="social-icon-float facebook-float absolute top-1/3 right-1/4 animate-float-delay-1">
            <Facebook className="w-10 h-10 text-blue-500 opacity-20" />
          </div>
          <div className="social-icon-float twitter-float absolute bottom-1/4 left-1/3 animate-float-delay-2">
            <Twitter className="w-10 h-10 text-blue-400 opacity-20" />
          </div>
          <div className="social-icon-float linkedin-float absolute bottom-1/3 right-1/5 animate-float-delay-3">
            <Linkedin className="w-10 h-10 text-blue-700 opacity-20" />
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-on-scroll">
                <span className="text-gray-900">Elevate Your Brand with</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
                  Social Media Excellence
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 animate-on-scroll" style={{animationDelay: '0.1s'}}>
                Transform your social media presence with data-driven strategies, captivating content, and engagement-focused campaigns that connect with your audience and deliver measurable results.
              </p>
              <div className="flex flex-wrap gap-4 animate-on-scroll" style={{animationDelay: '0.2s'}}>
                <a href="#contact" className="btn-primary bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
                  Get Started
                </a>
                <a href="#why-us" className="btn-secondary border-2 border-gray-200 hover:border-gray-300 px-6 py-3 rounded-lg font-medium transition-all text-gray-700 hover:bg-gray-50">
                  Learn More
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center animate-on-scroll" style={{animationDelay: '0.3s'}}>
              {/* Social Media Dashboard Mockup */}
              <div className="mockup-container relative w-full max-w-lg">
                <div className="rounded-xl bg-white shadow-2xl overflow-hidden border border-gray-100 p-4">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-bold text-gray-800">Social Performance</h3>
                      <p className="text-sm text-gray-500">Monthly Overview</p>
                    </div>
                    <div className="flex space-x-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-red-400"></span>
                      <span className="inline-block w-2 h-2 rounded-full bg-yellow-400"></span>
                      <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
                    </div>
                  </div>
                  
                  {/* Engagement Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Followers</span>
                        <Users className="w-4 h-4 text-blue-500" />
                      </div>
                      <div className="mt-2 font-bold text-xl text-blue-700">84.7K</div>
                      <div className="text-xs text-green-600 flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        12.6%
                      </div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Engagement</span>
                        <Heart className="w-4 h-4 text-purple-500" />
                      </div>
                      <div className="mt-2 font-bold text-xl text-purple-700">5.28%</div>
                      <div className="text-xs text-green-600 flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        3.2%
                      </div>
                    </div>
                    <div className="bg-pink-50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Reach</span>
                        <Users className="w-4 h-4 text-pink-500" />
                      </div>
                      <div className="mt-2 font-bold text-xl text-pink-700">125K</div>
                      <div className="text-xs text-green-600 flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        24.8%
                      </div>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Clicks</span>
                        <ArrowRight className="w-4 h-4 text-indigo-500" />
                      </div>
                      <div className="mt-2 font-bold text-xl text-indigo-700">12.9K</div>
                      <div className="text-xs text-green-600 flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        18.3%
                      </div>
                    </div>
                  </div>
                  
                  {/* Graph Visualization */}
                  <div className="rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-5 mb-5">
                    <div className="h-24 flex items-end justify-between space-x-2">
                      <div className="w-1/12 h-4/6 bg-white opacity-40 rounded"></div>
                      <div className="w-1/12 h-2/6 bg-white opacity-40 rounded"></div>
                      <div className="w-1/12 h-5/6 bg-white opacity-40 rounded"></div>
                      <div className="w-1/12 h-3/6 bg-white opacity-40 rounded"></div>
                      <div className="w-1/12 h-4/6 bg-white opacity-40 rounded"></div>
                      <div className="w-1/12 h-full bg-white opacity-80 rounded"></div>
                      <div className="w-1/12 h-5/6 bg-white opacity-40 rounded"></div>
                      <div className="w-1/12 h-4/6 bg-white opacity-40 rounded"></div>
                      <div className="w-1/12 h-3/6 bg-white opacity-40 rounded"></div>
                      <div className="w-1/12 h-5/6 bg-white opacity-40 rounded"></div>
                      <div className="w-1/12 h-4/6 bg-white opacity-40 rounded"></div>
                      <div className="w-1/12 h-2/6 bg-white opacity-40 rounded"></div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-white opacity-70">Jun</span>
                      <span className="text-xs text-white opacity-70">Jul</span>
                      <span className="text-xs text-white font-medium">Aug</span>
                      <span className="text-xs text-white opacity-70">Sep</span>
                    </div>
                  </div>
                  
                  {/* Recent Posts */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-700">Recent Posts</h4>
                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                      <div className="w-10 h-10 rounded bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-white">
                        <Facebook className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-600 truncate">New product launch - Coming this fall!</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex items-center space-x-1 text-pink-500">
                            <Heart className="w-3 h-3" />
                            <span className="text-xs">428</span>
                          </div>
                          <div className="flex items-center space-x-1 text-blue-500">
                            <MessageCircle className="w-3 h-3" />
                            <span className="text-xs">86</span>
                          </div>
                        </div>
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
      <section className="py-20 relative overflow-hidden" id="why-us" ref={whyChooseUsRef}>
        {/* Background Design Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-50 to-blue-100 rounded-tr-full opacity-30 filter blur-3xl"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-pink-50 to-purple-100 rounded-bl-full opacity-30 filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Social Media Services</span></h2>
            <p className="text-lg text-gray-600">Our team of social media experts delivers results-driven strategies that enhance brand visibility, engagement, and conversions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Advantage Card 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll feature-item" id="advantage-1" style={{animationDelay: '0s'}}>
              <div className="flex flex-col">
                {/* Image on top */}
                <div className="mb-5 rounded-lg overflow-hidden h-44">
                  <img 
                    src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Strategic Content Planning" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Strategic Content Planning</h3>
                <p className="text-gray-600">We craft tailored content strategies that resonate with your target audience and align with your business objectives, ensuring every post drives engagement.</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-blue-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Platform-specific content</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600 mt-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Content calendars</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600 mt-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Trend analysis</span>
                </div>
              </div>
            </div>
            
            {/* Advantage Card 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll feature-item" id="advantage-2" style={{animationDelay: '0.2s'}}>
              <div className="flex flex-col">
                {/* Image on top */}
                <div className="mb-5 rounded-lg overflow-hidden h-44">
                  <img 
                    src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Engagement-Focused Campaigns" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div className="w-16 h-16 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <BarChart2 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Engagement-Focused Campaigns</h3>
                <p className="text-gray-600">We design campaigns that spark conversations, drive shares, and create meaningful connections with your audience across all social platforms.</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-purple-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Community management</span>
                </div>
                <div className="flex items-center gap-2 text-purple-600 mt-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Interactive content</span>
                </div>
                <div className="flex items-center gap-2 text-purple-600 mt-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Audience growth tactics</span>
                </div>
              </div>
            </div>
            
            {/* Advantage Card 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll feature-item" id="advantage-3" style={{animationDelay: '0.4s'}}>
              <div className="flex flex-col">
                {/* Image on top */}
                <div className="mb-5 rounded-lg overflow-hidden h-44">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Data-Driven Analytics" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div className="w-16 h-16 rounded-lg bg-pink-100 flex items-center justify-center mb-4">
                  <PieChart className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Data-Driven Analytics</h3>
                <p className="text-gray-600">We continuously analyze performance metrics to refine strategies, optimize content, and ensure maximum ROI for your social media investment.</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-pink-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Performance reporting</span>
                </div>
                <div className="flex items-center gap-2 text-pink-600 mt-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Competitor analysis</span>
                </div>
                <div className="flex items-center gap-2 text-pink-600 mt-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">ROI measurement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Stats Section */}
      <section className="py-12 relative overflow-hidden" ref={statsRef}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Social Media Results Background" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 animate-on-scroll" id="results-title">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Delivering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Measurable Results</span></h2>
            <p className="text-sm md:text-base text-white/80">Our strategic approach has helped businesses achieve significant growth through effective social media campaigns</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Stat Counter 1 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 text-center glow-effect animate-on-scroll" id="stat-1">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {countersStarted ? (
                  <span className="counter-animate is-visible">3.2x</span>
                ) : (
                  <span>3.2x</span>
                )}
              </div>
              <p className="text-blue-200 uppercase tracking-wider text-xs font-semibold">Engagement Increase</p>
              <div className="w-10 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
            </div>
            
            {/* Stat Counter 2 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 text-center glow-effect animate-on-scroll" id="stat-2" style={{animationDelay: '0.1s'}}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {countersStarted ? (
                  <span className="counter-animate is-visible">167%</span>
                ) : (
                  <span>167%</span>
                )}
              </div>
              <p className="text-purple-200 uppercase tracking-wider text-xs font-semibold">Follower Growth</p>
              <div className="w-10 h-1 bg-gradient-to-r from-purple-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
            </div>
            
            {/* Stat Counter 3 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 text-center glow-effect animate-on-scroll" id="stat-3" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {countersStarted ? (
                  <span className="counter-animate is-visible">214%</span>
                ) : (
                  <span>214%</span>
                )}
              </div>
              <p className="text-pink-200 uppercase tracking-wider text-xs font-semibold">Website Traffic</p>
              <div className="w-10 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mt-4 rounded-full"></div>
            </div>
            
            {/* Stat Counter 4 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 text-center glow-effect animate-on-scroll" id="stat-4" style={{animationDelay: '0.3s'}}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {countersStarted ? (
                  <span className="counter-animate is-visible">42%</span>
                ) : (
                  <span>42%</span>
                )}
              </div>
              <p className="text-indigo-200 uppercase tracking-wider text-xs font-semibold">Conversion Rate</p>
              <div className="w-10 h-1 bg-gradient-to-r from-indigo-400 to-indigo-500 mx-auto mt-4 rounded-full"></div>
            </div>
          </div>
          
          {/* Client Success Story */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 animate-on-scroll" style={{animationDelay: '0.4s'}}>
              <div className="p-3 md:p-4">
                <div className="flex flex-col">
                  <div className="mb-3">
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-white italic">"Their social media team transformed our online presence completely. We've seen a dramatic increase in engagement and conversions. The ROI exceeded our expectations."</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-blue-400 to-purple-400 p-[2px]">
                        <div className="rounded-full overflow-hidden w-full h-full bg-blue-800">
                          <img 
                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                            alt="Client Portrait" 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Sarah Johnson</h4>
                      <p className="text-blue-200 text-sm">Marketing Director, TechVision Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Results Display */}
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-3 md:p-4">
                <h4 className="font-bold text-white mb-3 text-sm">Campaign Results</h4>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-blue-200">Engagement Rate</span>
                      <span className="text-sm font-medium text-white">8.4%</span>
                    </div>
                    <div className="w-full bg-blue-900/50 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-2.5 rounded-full" style={{ width: '84%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-purple-200">Lead Generation</span>
                      <span className="text-sm font-medium text-white">92%</span>
                    </div>
                    <div className="w-full bg-purple-900/50 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-purple-400 to-purple-500 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-pink-200">Brand Awareness</span>
                      <span className="text-sm font-medium text-white">76%</span>
                    </div>
                    <div className="w-full bg-pink-900/50 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-pink-400 to-pink-500 h-2.5 rounded-full" style={{ width: '76%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 relative overflow-hidden" id="pricing" ref={pricingRef}>
        {/* Background Design Elements */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
            alt="Pricing Background" 
            className="w-full h-full object-cover opacity-10" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50 to-white"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Social Media Package</span></h2>
            <p className="text-lg text-gray-600">Flexible packages designed to meet your specific business needs and growth objectives</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Basic Package */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden animate-on-scroll pricing-card" style={{animationDelay: '0s'}}>
              <div className="p-8">
                <div className="pb-8">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Basic Package</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900">KES 20,000</span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                  <p className="text-gray-500 mt-4">Perfect for small businesses looking to establish a social media presence</p>
                </div>
                
                <div className="border-t border-gray-100 pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <span className="mr-3 inline-flex items-center justify-center w-5 h-5 bg-blue-100 text-blue-600 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                      </span>
                      <span>Social Media Strategy</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 inline-flex items-center justify-center w-5 h-5 bg-blue-100 text-blue-600 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                      </span>
                      <span>Content Creation (10 posts/month)</span>
                    </li>
                    <li className="flex items-center text-gray-400">
                      <span className="mr-3 inline-flex items-center justify-center w-5 h-5 bg-gray-100 text-gray-400 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                      </span>
                      <span>Paid Social Media Advertising</span>
                    </li>
                    <li className="flex items-center text-gray-400">
                      <span className="mr-3 inline-flex items-center justify-center w-5 h-5 bg-gray-100 text-gray-400 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                      </span>
                      <span>Analytics and Reporting</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <a href="#contact" className="block w-full py-3 px-4 text-center font-medium bg-white border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  Get Started
                </a>
              </div>
            </div>
            
            {/* Standard Package */}
            <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden relative animate-on-scroll pricing-card" style={{animationDelay: '0.2s'}}>
              <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold py-1 text-center">
                MOST POPULAR
              </div>
              <div className="p-8 pt-10">
                <div className="pb-8">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Standard Package</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900">KES 40,000</span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                  <p className="text-gray-500 mt-4">Ideal for growing businesses seeking enhanced engagement and visibility</p>
                </div>
                
                <div className="border-t border-gray-100 pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <span className="mr-3 inline-flex items-center justify-center w-5 h-5 bg-blue-100 text-blue-600 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                      </span>
                      <span>Social Media Strategy</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 inline-flex items-center justify-center w-5 h-5 bg-blue-100 text-blue-600 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                      </span>
                      <span>Content Creation (20 posts/month)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 inline-flex items-center justify-center w-5 h-5 bg-blue-100 text-blue-600 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                      </span>
                      <span>Paid Social Media Advertising</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 inline-flex items-center justify-center w-5 h-5 bg-blue-100 text-blue-600 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                      </span>
                      <span className="text-xs">(Ad spend not included)</span>
                    </li>
                    <li className="flex items-center text-gray-400">
                      <span className="mr-3 inline-flex items-center justify-center w-5 h-5 bg-gray-100 text-gray-400 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                      </span>
                      <span>Analytics and Reporting</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <a href="#contact" className="block w-full py-3 px-4 text-center font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
                  Get Started
                </a>
              </div>
            </div>
            
            {/* Premium Package */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden animate-on-scroll pricing-card" style={{animationDelay: '0.4s'}}>
              <div className="p-8">
                <div className="pb-8">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Premium Package</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900">KES 60,000</span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                  <p className="text-gray-500 mt-4">Comprehensive solution for businesses serious about social media dominance</p>
                </div>
                
                <div className="border-t border-gray-100 pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <span className="mr-3 inline-flex items-center justify-center w-5 h-5 bg-blue-100 text-blue-600 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                      </span>
                      <span>Social Media Strategy</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 inline-flex items-center justify-center w-5 h-5 bg-blue-100 text-blue-600 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                      </span>
                      <span>Content Creation (30 posts/month)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 inline-flex items-center justify-center w-5 h-5 bg-blue-100 text-blue-600 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                      </span>
                      <span>Paid Social Media Advertising</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 inline-flex items-center justify-center w-5 h-5 bg-blue-100 text-blue-600 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                      </span>
                      <span className="text-xs">(Ad spend not included)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 inline-flex items-center justify-center w-5 h-5 bg-blue-100 text-blue-600 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                      </span>
                      <span>Advanced Analytics and Reporting</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <a href="#contact" className="block w-full py-3 px-4 text-center font-medium bg-white border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden" ref={ctaRef}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="CTA Background" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Social Media Presence?</span></h2>
            <p className="text-xl text-white/80 mb-10">Join hundreds of businesses that have elevated their brand with our expert social media services.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="btn-primary bg-white hover:bg-gray-50 text-blue-900 px-8 py-4 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl text-lg">
                Start Your Journey Today
              </a>
              <a href="#why-us" className="btn-secondary border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-lg font-medium transition-all text-white hover:bg-white/10 text-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaMarketing;
