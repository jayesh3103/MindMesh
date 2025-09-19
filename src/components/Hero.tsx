import React, { useEffect, useRef, useState } from 'react';
import { Brain, Play, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient-shift">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.4),transparent_60%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(20,184,166,0.3),transparent_50%)] animate-pulse-slower"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_70%)] animate-pulse-slowest"></div>
      </div>

      {/* Neural Network Animation */}
      <div className="absolute inset-0">
        

        {/* Flowing neural nodes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 rounded-full animate-float-particle opacity-80"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                ['#F59E0B', '#EC4899', '#14B8A6', '#8B5CF6', '#3B82F6'][Math.floor(Math.random() * 5)]
              }, rgba(255,255,255,0.1))`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            <div className="w-2 h-2 bg-white rounded-full m-3 animate-pulse"></div>
          </div>
        ))}
        
        {/* Connecting neural pathways */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`path-${i}`}
            className="absolute opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${100 + Math.random() * 200}px`,
              height: '2px',
              background: `linear-gradient(90deg, transparent, ${
                ['#8B5CF6', '#14B8A6', '#EC4899', '#F59E0B'][Math.floor(Math.random() * 4)]
              }, transparent)`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `data-stream ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}

        {/* Curved neural connections */}
        {[...Array(8)].map((_, i) => (
          <svg
            key={`curve-${i}`}
            className="absolute opacity-20"
            style={{
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
              width: '200px',
              height: '200px',
              animation: `pulse-line ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            <path
              d={`M 0 100 Q ${50 + Math.random() * 100} ${Math.random() * 200} 200 100`}
              stroke={['#8B5CF6', '#14B8A6', '#EC4899', '#F59E0B'][Math.floor(Math.random() * 4)]}
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;10"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        ))}
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center transition-all duration-2000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Headlines */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight animate-text-glow mt-8 sm:mt-12">
          MindMesh
          <Sparkles className="inline-block w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 ml-2 text-yellow-400 animate-sparkle" />
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-purple-200 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          A Cognitive Journal That Talks Back
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 animate-fade-in-up" style={{animationDelay: '1s'}}>
          Capture your thoughts, let AI connect them, reflect with you, and help you grow.
        </p>

        {/* Tagline */}
        <div className="mb-8 sm:mb-12 mx-4 animate-fade-in-up" style={{animationDelay: '1.5s'}}>
          <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-lg rounded-full border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 hover:bg-white/20 hover:scale-105 animate-button-glow">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-sm opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
            
            {/* Text */}
            <span className="relative text-white font-bold text-sm sm:text-base lg:text-lg bg-gradient-to-r from-cyan-200 via-purple-200 to-pink-200 bg-clip-text text-transparent group-hover:from-white group-hover:via-purple-100 group-hover:to-cyan-100 transition-all duration-500">
              Let Intelligence Take the Lead
            </span>
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up px-4" style={{animationDelay: '2s'}}>
          <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-cyan-700 transition-all duration-500 flex items-center justify-center gap-3 shadow-2xl hover:shadow-purple-500/50 transform hover:scale-110 hover:rotate-1 animate-button-glow">
            Get Started
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
          </button>
          <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-purple-500/30 hover:bg-white/20 transition-all duration-500 flex items-center justify-center gap-3 hover:border-purple-400/70 transform hover:scale-110 hover:-rotate-1 animate-button-pulse">
            <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-125 transition-transform duration-300" />
            Watch Demo
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-purple-400/70 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-2 sm:h-3 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mt-2 animate-scroll-indicator"></div>
        </div>
      </div>
      
      {/* Ultra HD overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-purple-900/10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)] pointer-events-none"></div>
    </div>
  );
};

export default Hero;