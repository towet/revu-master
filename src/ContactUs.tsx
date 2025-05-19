import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  ArrowRight,
  Check,
  Globe2
} from 'lucide-react';

const ContactUs: React.FC = () => {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Available services
  const services = [
    "Web Development",
    "Social Media Marketing",
    "Graphic Design",
    "Strategic Paid Advertising"
  ];

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setSelectedService('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="contact-us-page min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section with Animated Elements */}
      <section className="relative overflow-hidden pt-28 pb-20">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        {/* Animated Particles */}
        {Array.from({ length: 15 }).map((_, index) => (
          <div 
            key={`particle-${index}`}
            className="absolute bg-indigo-500 rounded-full opacity-20"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
        
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full font-medium text-sm mb-4">
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Contact Us
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Have questions or ready to start your next project? We're here to help.
              Reach out to our team through any of the channels below.
            </p>
          </div>
          
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {/* Email Card */}
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Email Us</h3>
              <p className="text-gray-600 mb-4">Our friendly team is here to help.</p>
              <a href="mailto:hello@revu.com" className="text-indigo-600 hover:text-purple-600 font-medium inline-flex items-center transition-colors duration-300">
                hello@revu.com
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
            
            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Call Us</h3>
              <p className="text-gray-600 mb-4">Mon-Fri from 8am to 5pm.</p>
              <a href="tel:+1234567890" className="text-indigo-600 hover:text-purple-600 font-medium inline-flex items-center transition-colors duration-300">
                +1 (234) 567-890
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
            
            {/* Office Card */}
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Visit Us</h3>
              <p className="text-gray-600 mb-4">Come say hello at our office.</p>
              <span className="text-indigo-600 hover:text-purple-600 font-medium inline-flex items-center transition-colors duration-300">
                100 Main St, San Francisco, CA
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Background Elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-indigo-300/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-purple-300/10 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-bl-3xl -mt-4 -mr-4"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-tr-3xl -mb-4 -ml-4"></div>
              
              <div className="relative">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">Request a Service</h2>
                <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
                
                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  {/* Email Field */}
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  {/* Phone Field */}
                  <div className="relative">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  {/* Service Selection Dropdown */}
                  <div className="relative">
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Select Service</label>
                    <div className="relative">
                      <select
                        id="service"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 appearance-none bg-white"
                        required
                      >
                        <option value="" disabled>Select a service...</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Message Field */}
                  <div className="relative">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                      placeholder="Tell us about your project or query"
                      required
                    ></textarea>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="relative">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 px-6 rounded-xl
                              hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                  
                  {/* Success Message */}
                  {isSubmitted && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2 animate-fade-in">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>Your message has been sent successfully. We'll be in touch soon!</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
            
            {/* Right Column - Map & Additional Info */}
            <div className="flex flex-col space-y-8">
              {/* Interactive Map Placeholder */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-72 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400 group-hover:opacity-0 transition-opacity duration-300">
                  <Globe2 className="w-16 h-16" />
                </div>
                <iframe
                  className="w-full h-full border-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0910416459557!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1653208125945!5m2!1sen!2s"
                  title="Office Location Map"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              {/* FAQ Section */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="font-medium text-indigo-700 mb-2">How quickly will you respond to my inquiry?</h4>
                    <p className="text-gray-600">We typically respond within 24 hours on business days.</p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="font-medium text-indigo-700 mb-2">Do you offer custom solutions?</h4>
                    <p className="text-gray-600">Yes, all our services can be tailored to your specific business needs.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-indigo-700 mb-2">What information should I include in my message?</h4>
                    <p className="text-gray-600">The more details you provide about your project and goals, the better we can assist you.</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link to="/" className="inline-flex items-center text-indigo-600 font-medium hover:text-purple-600 transition-colors duration-300">
                    <span>View all FAQs</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer Section */}
      <footer className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Globe2 className="w-8 h-8 text-indigo-400 mr-3" />
                <h2 className="text-2xl font-bold">Revu</h2>
              </div>
              <p className="text-gray-400">
                Creating exceptional digital experiences for businesses around the world.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.163 10.163 0 01-3.127 1.184A4.92 4.92 0 0017.78.96a4.924 4.924 0 00-4.918 4.918c0 .39.044.765.126 1.124A13.936 13.936 0 012.19 2.362a4.885 4.885 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.938 4.938 0 01-2.228-.607v.06a4.926 4.926 0 003.95 4.829 4.849 4.849 0 01-2.224.085 4.93 4.93 0 004.6 3.42 9.886 9.886 0 01-6.115 2.107c-.398 0-.79-.023-1.175-.068a13.892 13.892 0 007.547 2.209c9.057 0 14.01-7.502 14.01-14.011 0-.213-.005-.425-.015-.636a9.997 9.997 0 002.485-2.549l-.047-.019z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.083-.73.083-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.495.996.108-.775.42-1.305.763-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.312.465-2.382 1.235-3.22-.135-.308-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.266 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.868.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.21.69.825.57C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.593 7.203a2.506 2.506 0 00-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.44a2.496 2.496 0 00-1.766 1.778c-.44 1.61-.44 4.976-.44 4.976s0 3.367.44 4.976c.243.87.91 1.534 1.766 1.765 1.582.46 7.83.46 7.83.46s6.265 0 7.831-.46a2.5 2.5 0 001.767-1.765c.44-1.61.44-4.976.44-4.976s.007-3.367-.434-4.976zM9.998 15.505v-6.057l5.227 3.026-5.227 3.03z"/></svg>
                </a>
              </div>
            </div>
            
            {/* Services Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-indigo-300">Our Services</h3>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{service}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-indigo-300">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              </ul>
            </div>
            
            {/* Contact Info Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-indigo-300">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-indigo-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">100 Main St, San Francisco, CA 94103, United States</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">+1 (234) 567-890</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">hello@revu.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Revu. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
