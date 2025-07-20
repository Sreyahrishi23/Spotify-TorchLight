import React from 'react';
import { Button } from './ui/button';
import { Play, Music, Users, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, #1DB954 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      {/* Floating Particles - Increased transparency */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#1DB954] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `fadeInUp ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Hero Content */}
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Light Up Your
            <span className="block text-[#1DB954] relative neon-text-border">
              Party Scene
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#B3B3B3] mb-8 max-w-2xl mx-auto">
            Connect with your music community. Discover parties, create events, and share the perfect playlist moments together.
          </p>

          {/* Feature Icons */}
          <div className="flex items-center justify-center gap-8 mb-10">
            <div className="flex items-center gap-2 text-[#B3B3B3]">
              <Music className="w-6 h-6 text-[#1DB954]" />
              <span>Music Discovery</span>
            </div>
            <div className="flex items-center gap-2 text-[#B3B3B3]">
              <Users className="w-6 h-6 text-[#1DB954]" />
              <span>Social Events</span>
            </div>
            <div className="flex items-center gap-2 text-[#B3B3B3]">
              <Zap className="w-6 h-6 text-[#1DB954]" />
              <span>Live Parties</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="bg-[#1DB954] hover:bg-[#1ED760] text-white px-8 py-6 rounded-full text-lg transition-all duration-200 spotify-glow"
            >
              <Play className="w-5 h-5 mr-2 fill-white" />
              Start Your Party
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-[#1DB954] text-[#1DB954] hover:bg-[#1DB954] hover:text-white px-8 py-6 rounded-full text-lg transition-all duration-200"
            >
              Explore Events
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#1DB954]">50K+</div>
            <div className="text-[#B3B3B3]">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#1DB954]">1M+</div>
            <div className="text-[#B3B3B3]">Songs Shared</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#1DB954]">10K+</div>
            <div className="text-[#B3B3B3]">Parties Created</div>
          </div>
        </div>
      </div>
    </section>
  );
}