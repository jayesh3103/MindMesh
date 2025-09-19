import React, { useState } from 'react';
import { Brain, Mail, Twitter, Github, Linkedin, ArrowRight, Send, Sparkles } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Newsletter signup:', email);
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <footer className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 border-t border-white/10 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-shimmer"></div>
        
        {/* Floating elements */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main footer content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 animate-fade-in-up">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center animate-pulse-glow">
                <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-bounce-subtle" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-white">MindMesh</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-sparkle" />
            </div>
            <p className="text-sm sm:text-base text-slate-300 mb-4 sm:mb-6 max-w-md animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              The future of cognitive journaling. Let intelligence guide your personal growth and self-discovery.
            </p>
            
            {/* Newsletter */}
            <div className="mb-4 sm:mb-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <h4 className="text-white font-semibold mb-2 sm:mb-3 flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400 animate-pulse" />
                Stay Updated
              </h4>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500/70 focus:bg-white/20 transition-all duration-300 text-sm sm:text-base"
                  required
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2 group animate-button-glow ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <Send className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4 sm:mb-6 animate-fade-in-up" style={{animationDelay: '0.6s'}}>Product</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Features', 'Security', 'Privacy', 'Pricing', 'API'].map((item) => (
                <li key={item} className="animate-fade-in-up" style={{animationDelay: `${0.8 + ['Features', 'Security', 'Privacy', 'Pricing', 'API'].indexOf(item) * 0.1}s`}}>
                  <a 
                    href="#" 
                    className="text-sm sm:text-base text-slate-300 hover:text-white transition-all duration-300 hover:underline hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 sm:mb-6 animate-fade-in-up" style={{animationDelay: '1.3s'}}>Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['About', 'Blog', 'Careers', 'Contact', 'Support'].map((item) => (
                <li key={item} className="animate-fade-in-up" style={{animationDelay: `${1.5 + ['About', 'Blog', 'Careers', 'Contact', 'Support'].indexOf(item) * 0.1}s`}}>
                  <a 
                    href="#" 
                    className="text-sm sm:text-base text-slate-300 hover:text-white transition-all duration-300 hover:underline hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social links */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-white/10 gap-6">
          <div className="flex items-center gap-4 sm:gap-6 animate-fade-in-up" style={{animationDelay: '2s'}}>
            {[
              { icon: Twitter, href: '#', color: 'hover:text-blue-400', bg: 'hover:bg-blue-400/10' },
              { icon: Github, href: '#', color: 'hover:text-gray-400', bg: 'hover:bg-gray-400/10' },
              { icon: Linkedin, href: '#', color: 'hover:text-blue-500', bg: 'hover:bg-blue-500/10' },
              { icon: Mail, href: '#', color: 'hover:text-green-400', bg: 'hover:bg-green-400/10' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-slate-300 ${social.color} ${social.bg} transition-all duration-300 hover:scale-125 hover:rotate-12 animate-icon-glow`}
                style={{animationDelay: `${2.2 + index * 0.1}s`}}
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            ))}
          </div>

          <div className="text-slate-400 text-xs sm:text-sm text-center sm:text-right animate-fade-in-up" style={{animationDelay: '2.6s'}}>
            © 2025 MindMesh. All rights reserved.💜
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-px h-8 sm:h-16 bg-gradient-to-b from-purple-500/50 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-px h-8 sm:h-16 bg-gradient-to-b from-cyan-500/50 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
    </footer>
  );
};

export default Footer;