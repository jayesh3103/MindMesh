import React from 'react';
import { MessageCircle, Network, Heart, Brain, Shield, Mic, Zap, Eye } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Conversational Journaling',
      description: 'Voice and text input with natural AI conversation',
      gradient: 'from-purple-500 to-pink-500',
      particles: 8
    },
    {
      icon: Network,
      title: 'Evolving Mind Map',
      description: 'Automatically connects thoughts and discovers patterns',
      gradient: 'from-cyan-500 to-blue-500',
      particles: 12
    },
    {
      icon: Heart,
      title: 'Emotion Tagging',
      description: 'Advanced sentiment analysis tracks your emotional journey',
      gradient: 'from-rose-500 to-orange-500',
      particles: 6
    },
    {
      icon: Brain,
      title: 'Memory-Aware AI',
      description: 'Chatbot remembers context and grows with your insights',
      gradient: 'from-indigo-500 to-purple-500',
      particles: 10
    },
    {
      icon: Shield,
      title: 'Privacy-First Encryption',
      description: 'Your thoughts stay secure with end-to-end encryption',
      gradient: 'from-teal-500 to-green-500',
      particles: 4
    },
    {
      icon: Mic,
      title: 'Voice Intelligence',
      description: 'Seamless voice-to-text with emotional tone detection',
      gradient: 'from-violet-500 to-purple-500',
      particles: 7
    }
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-text-glow">
            Intelligent Features
            <div className="inline-block ml-2 sm:ml-4">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-yellow-400 animate-pulse" />
            </div>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto px-4 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            Experience the future of personal reflection with AI-powered insights and seamless interaction
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-4 sm:p-6 lg:p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-700 hover:scale-105 hover:bg-white/15 animate-fade-in-up overflow-hidden"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-all duration-700 rounded-2xl animate-gradient-shift`}></div>
              
              {/* Floating particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(feature.particles)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/60 rounded-full animate-float-particle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  ></div>
                ))}
              </div>
              
              {/* Icon container */}
              <div className={`relative mb-4 sm:mb-6 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-icon-glow`}>
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                
                {/* Energy rings around icon */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-xl border-2 border-white/30 animate-ping"></div>
                  <div className="absolute inset-0 rounded-xl border border-white/20 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                </div>
                
                {/* Orbiting particles around icon */}
                <div className="absolute -inset-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full animate-orbit"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${i * 120}deg) translateX(30px) translateY(-50%)`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: '3s'
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-4 group-hover:text-purple-200 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 group-hover:w-full transition-all duration-700 animate-shimmer"></div>
              
              {/* Corner accents */}
              <div className="absolute top-2 right-2 w-0 h-0 border-l-8 border-b-8 border-transparent group-hover:border-purple-400/30 transition-all duration-500"></div>
              <div className="absolute bottom-2 left-2 w-0 h-0 border-r-8 border-t-8 border-transparent group-hover:border-cyan-400/30 transition-all duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* Interactive showcase */}
        <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-md rounded-full border border-purple-500/30 animate-float">
            <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 animate-pulse" />
            <span className="text-sm sm:text-base text-slate-300">Hover over cards to see the magic</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;