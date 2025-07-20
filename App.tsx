import React, { useState } from 'react';
import { LoadingTorch } from './components/LoadingTorch';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { EventsHub } from './components/EventsHub';
import { HowItWorks } from './components/HowItWorks';
import { Premium } from './components/Premium';
import { Contact } from './components/Contact';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleTorchIgnite = () => {
    setIsLoaded(true);
  };

  if (!isLoaded) {
    return <LoadingTorch onIgnite={handleTorchIgnite} />;
  }

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <EventsHub />
        <HowItWorks />
        <Premium />
        <Contact />
      </main>
      
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(29, 185, 84, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(29, 185, 84, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        ></div>
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#1DB954]/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#191414]/50 to-transparent"></div>
      </div>
    </div>
  );
}