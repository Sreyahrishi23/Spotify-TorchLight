import React from 'react';
import { Button } from './ui/button';
import { Crown } from 'lucide-react';
import torchLogo from 'figma:asset/192f23c419cdcf8b493cdd0cc8a921fa99ccf071.png';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#191414] border-b border-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={torchLogo} 
              alt="Torch Logo" 
              className="w-8 h-8"
            />
            <span className="text-xl font-medium text-white">Torch</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[#B3B3B3] hover:text-white transition-colors duration-200">
              Features
            </a>
            <a href="#events" className="text-[#B3B3B3] hover:text-white transition-colors duration-200">
              Events
            </a>
            <a href="#how-it-works" className="text-[#B3B3B3] hover:text-white transition-colors duration-200">
              How it Works
            </a>
            <a href="#premium" className="flex items-center gap-1 text-[#1DB954] hover:text-[#1ED760] transition-colors duration-200 font-medium">
              <Crown className="w-4 h-4" />
              Explore Premium
            </a>
            <a href="#contact" className="text-[#B3B3B3] hover:text-white transition-colors duration-200">
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              className="border-[#1DB954] text-[#1DB954] hover:bg-[#1DB954] hover:text-white transition-all duration-200"
            >
              Log In
            </Button>
            <Button className="bg-[#1DB954] hover:bg-[#1ED760] text-white transition-all duration-200">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}