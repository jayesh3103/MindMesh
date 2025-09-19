import React from 'react';
import { Lock, Globe, Zap, Database, Cpu, CloudOff, Shield, Wifi } from 'lucide-react';

const TechSecurity = () => {
  const techFeatures = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'Military-grade encryption ensures your thoughts remain private',
      stats: '256-bit AES',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: CloudOff,
      title: 'Local-First Storage',
      description: 'Your data stays on your device, synced securely when you choose',
      stats: 'Zero-Knowledge',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Multilingual AI',
      description: 'Think and reflect in any language with native understanding',
      stats: '50+ Languages',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cpu,
      title: 'Edge AI Processing',
      description: 'Blazing-fast AI inference running locally on your device',
      stats: '<100ms Response',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Database,
      title: 'Infinite Memory',
      description: 'Store years of thoughts with intelligent compression',
      stats: 'Unlimited Storage',
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: Zap,
      title: 'Real-time Insights',
      description: 'Instant pattern recognition and emotional intelligence',
      stats: 'Live Analysis',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated tech background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-float-reverse"></div>
        
        {/* Circuit pattern background */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-16 bg-gradient-to-b from-transparent via-green-400 to-transparent animate-data-flow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
          {[...Array(20)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute w-16 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent animate-data-flow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-green-200 to-teal-200 bg-clip-text text-transparent animate-text-glow">
            Advanced Technology
            <Shield className="inline-block w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 ml-2 text-green-400 animate-pulse" />
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto px-4 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            Built with cutting-edge AI and security technologies for the ultimate cognitive experience
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {techFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-green-500/50 transition-all duration-700 hover:scale-105 animate-fade-in-up overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Animated background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-all duration-700 rounded-2xl animate-gradient-shift`}></div>
              
              {/* Tech particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-green-400/60 rounded-full animate-float-particle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.4}s`,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                  ></div>
                ))}
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-icon-glow`}>
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-green-400 text-xs sm:text-sm font-mono bg-green-500/10 px-2 py-1 rounded animate-pulse">
                    {feature.stats}
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-green-200 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              
              {/* Hover effect border */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-500 to-teal-500 group-hover:w-full transition-all duration-700 animate-shimmer"></div>
            </div>
          ))}
        </div>

        {/* Security infographic */}
        <div className="bg-gradient-to-r from-slate-900/50 to-green-900/20 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-500 animate-fade-in-up" style={{animationDelay: '1s'}}>
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 animate-text-glow">
              Your Privacy is Our Foundation
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto px-4">
              Every design decision prioritizes your data sovereignty and mental privacy
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            {/* Data flow visualization */}
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse-glow">
                <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-spin-slow" />
              </div>
              <div className="w-8 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-green-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-slide"></div>
              </div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center animate-pulse-glow" style={{animationDelay: '0.5s'}}>
                <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-bounce-subtle" />
              </div>
              <div className="w-8 sm:w-16 h-0.5 bg-gradient-to-r from-green-500 to-purple-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-slide" style={{animationDelay: '0.5s'}}></div>
              </div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse-glow" style={{animationDelay: '1s'}}>
                <Database className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-float" />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 text-center">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-green-400 mb-1 sm:mb-2 animate-number-change">100%</div>
              <div className="text-xs sm:text-sm text-slate-300">Local Processing</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-cyan-400 mb-1 sm:mb-2 animate-number-change" style={{animationDelay: '0.2s'}}>Zero</div>
              <div className="text-xs sm:text-sm text-slate-300">Data Collection</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-purple-400 mb-1 sm:mb-2 animate-sparkle" style={{animationDelay: '0.4s'}}>∞</div>
              <div className="text-xs sm:text-sm text-slate-300">Your Control</div>
            </div>
          </div>
          
          {/* Network status indicator */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-green-500/30 animate-float">
              <Wifi className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-xs sm:text-sm text-slate-300">Secure Connection Active</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSecurity;