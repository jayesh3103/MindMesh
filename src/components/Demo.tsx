import React, { useState } from 'react';
import { Calendar, TrendingUp, Smile, Meh, Frown, Activity, Brain, Sparkles } from 'lucide-react';

const Demo = () => {
  const [selectedMonth, setSelectedMonth] = useState(5);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const timelineData = [
    { month: 0, mood: 3, thoughts: 12, connections: 5, label: 'Jan', insights: 'Starting journey', growth: 15 },
    { month: 1, mood: 4, thoughts: 18, connections: 8, label: 'Feb', insights: 'Building habits', growth: 25 },
    { month: 2, mood: 2, thoughts: 22, connections: 12, label: 'Mar', insights: 'Facing challenges', growth: 35 },
    { month: 3, mood: 4, thoughts: 28, connections: 18, label: 'Apr', insights: 'Finding balance', growth: 50 },
    { month: 4, mood: 5, thoughts: 35, connections: 25, label: 'May', insights: 'Peak performance', growth: 70 },
    { month: 5, mood: 4, thoughts: 42, connections: 32, label: 'Jun', insights: 'Sustained growth', growth: 85 },
  ];

  const handleMonthChange = (index: number) => {
    setIsAnimating(true);
    setSelectedMonth(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getMoodIcon = (mood: number) => {
    if (mood >= 4) return <Smile className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 animate-bounce-subtle" />;
    if (mood >= 3) return <Meh className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 animate-pulse" />;
    return <Frown className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 animate-pulse" />;
  };

  const getMoodColor = (mood: number) => {
    if (mood >= 4) return 'from-green-500 to-emerald-500';
    if (mood >= 3) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float-reverse"></div>
        
        {/* Data visualization background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-8 bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-data-flow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent animate-text-glow">
            Watch Your Mind Evolve
            <Brain className="inline-block w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 ml-2 text-cyan-400 animate-pulse" />
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto px-4 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            Interactive timeline shows how your thoughts, emotions, and insights develop over time
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-500 animate-fade-in-up" style={{animationDelay: '1s'}}>
          {/* Timeline Slider */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 sm:gap-3">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 animate-pulse" />
                Journey Timeline
              </h3>
              <div className="text-sm sm:text-base text-slate-300 flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                Slide to explore your cognitive evolution
              </div>
            </div>

            {/* Slider Track */}
            <div className="relative mb-6 sm:mb-8">
              <div className="h-2 sm:h-3 bg-slate-700/50 backdrop-blur-sm rounded-full relative overflow-hidden border border-slate-600/30">
                <div 
                  className={`h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full transition-all duration-700 animate-shimmer ${
                    isAnimating ? 'animate-pulse' : ''
                  }`}
                  style={{ width: `${((selectedMonth + 1) / timelineData.length) * 100}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-slide"></div>
                </div>
              </div>
              
              {/* Month markers */}
              <div className="flex justify-between mt-3 sm:mt-4 gap-1 sm:gap-2">
                {timelineData.map((data, index) => (
                  <button
                    key={index}
                    onClick={() => handleMonthChange(index)}
                    className={`relative px-2 sm:px-4 py-1 sm:py-2 rounded-full transition-all duration-500 text-xs sm:text-sm font-medium ${
                      selectedMonth === index 
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg scale-110 animate-button-glow' 
                        : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:scale-105'
                    }`}
                  >
                    {data.label}
                    {selectedMonth === index && (
                      <>
                        <div className="absolute -top-1 sm:-top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-ping"></div>
                        <div className="absolute inset-0 rounded-full border border-white/30 animate-pulse"></div>
                      </>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats Display */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
              <div className={`bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-500 ${
                isAnimating ? 'animate-pulse' : ''
              }`}>
                <div className="flex items-center justify-between mb-2 sm:mb-4">
                  <div className="text-xs sm:text-sm text-slate-300">Mood</div>
                  {getMoodIcon(timelineData[selectedMonth].mood)}
                </div>
                <div className={`text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r ${getMoodColor(timelineData[selectedMonth].mood)} bg-clip-text text-transparent animate-number-change`}>
                  {timelineData[selectedMonth].mood}/5
                </div>
              </div>

              <div className={`bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 ${
                isAnimating ? 'animate-pulse' : ''
              }`}>
                <div className="flex items-center justify-between mb-2 sm:mb-4">
                  <div className="text-xs sm:text-sm text-slate-300">Thoughts</div>
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-400 animate-bounce-subtle" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent animate-number-change">
                  {timelineData[selectedMonth].thoughts}
                </div>
              </div>

              <div className={`bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-pink-500/30 transition-all duration-500 ${
                isAnimating ? 'animate-pulse' : ''
              }`}>
                <div className="flex items-center justify-between mb-2 sm:mb-4">
                  <div className="text-xs sm:text-sm text-slate-300">Connections</div>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-spin-slow">
                    <div className="w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full animate-ping"></div>
                  </div>
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent animate-number-change">
                  {timelineData[selectedMonth].connections}
                </div>
              </div>
              
              <div className={`bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-green-500/30 transition-all duration-500 sm:col-span-2 lg:col-span-1 ${
                isAnimating ? 'animate-pulse' : ''
              }`}>
                <div className="flex items-center justify-between mb-2 sm:mb-4">
                  <div className="text-xs sm:text-sm text-slate-300">Growth</div>
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-400 animate-sparkle" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent animate-number-change">
                  {timelineData[selectedMonth].growth}%
                </div>
              </div>
            </div>

            {/* Visual representation */}
            <div className="mt-6 sm:mt-8 h-24 sm:h-32 lg:h-40 bg-slate-800/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 relative overflow-hidden border border-slate-700/30">
              <div className="flex items-end justify-between h-full gap-1 sm:gap-2">
                {timelineData.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className={`w-full max-w-6 sm:max-w-8 bg-gradient-to-t from-purple-500 via-pink-500 to-cyan-500 rounded-t transition-all duration-700 relative overflow-hidden ${
                        selectedMonth === index ? 'opacity-100 scale-110 shadow-lg' : 'opacity-50 hover:opacity-80'
                      }`}
                      style={{ 
                        height: `${(data.thoughts / 50) * 100}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      {selectedMonth === index && (
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent animate-slide-up"></div>
                      )}
                    </div>
                    <div className={`text-xs text-center transition-all duration-300 ${
                      selectedMonth === index ? 'text-cyan-400 font-bold' : 'text-slate-500'
                    }`}>
                      {data.label}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Floating insights */}
              {selectedMonth >= 0 && (
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/10 backdrop-blur-md rounded-lg p-2 sm:p-3 border border-purple-500/30 animate-float">
                  <div className="text-xs sm:text-sm text-purple-200 font-medium flex items-center gap-1">
                    <Brain className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
                    {timelineData[selectedMonth].label} Insights
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    {timelineData[selectedMonth].insights}
                  </div>
                </div>
              )}
              
              {/* Background grid */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-full h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent"
                    style={{ top: `${(i + 1) * 20}%` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;