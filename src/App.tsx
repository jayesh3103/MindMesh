import React from 'react';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import TechSecurity from './components/TechSecurity';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      <CustomCursor />
      <Hero />
      <Features />
      <Demo />
      <TechSecurity />
      <Footer />
    </div>
  );
}

export default App;