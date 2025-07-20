import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export function FeatureCard({ icon: Icon, title, description, features }: FeatureCardProps) {
  return (
    <div className="group relative bg-[#282828] rounded-lg p-6 transition-all duration-300 hover:bg-[#383838] hover:shadow-lg hover:shadow-[#1DB954]/20 hover:-translate-y-1 border border-transparent hover:border-[#1DB954]/30">
      {/* Green accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1DB954] to-[#1ED760] rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Icon */}
      <div className="w-12 h-12 bg-[#1DB954]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1DB954]/20 transition-colors duration-300">
        <Icon className="w-6 h-6 text-[#1DB954] group-hover:text-[#1ED760] transition-colors duration-300" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-medium text-white mb-3 group-hover:text-[#1ED760] transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-[#B3B3B3] mb-4 group-hover:text-[#CCCCCC] transition-colors duration-300">
        {description}
      </p>

      {/* Feature List */}
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-[#B3B3B3] group-hover:text-[#CCCCCC] transition-colors duration-300">
            <div className="w-1.5 h-1.5 bg-[#1DB954] rounded-full group-hover:bg-[#1ED760] transition-colors duration-300"></div>
            {feature}
          </li>
        ))}
      </ul>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-lg shadow-lg shadow-[#1DB954]/10"></div>
      </div>
    </div>
  );
}