import React, { useState } from 'react';
import { Flame } from 'lucide-react';

interface LoadingTorchProps {
  onIgnite: () => void;
}

export function LoadingTorch({ onIgnite }: LoadingTorchProps) {
  const [isIgnited, setIsIgnited] = useState(false);

  const handleTorchClick = () => {
    setIsIgnited(true);
    setTimeout(() => {
      onIgnite();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative flex flex-col items-center justify-center">
        {/* Torch Handle */}
        <div className="relative w-6 h-32 mb-4">
          <div className="w-full h-full bg-gradient-to-b from-gray-600 to-gray-800 rounded-lg shadow-lg"></div>
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-gray-700 rounded"></div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-gray-700 rounded"></div>
        </div>

        {/* Torch Top/Flame Area */}
        <div 
          className={`relative cursor-pointer transition-all duration-1000 flex flex-col items-center ${
            isIgnited ? 'transform scale-150' : ''
          }`}
          onClick={handleTorchClick}
        >
          {!isIgnited ? (
            <div className="flex flex-col items-center">
              <div className="w-8 h-6 bg-gray-700 rounded-t-lg mb-2"></div>
              <Flame className="w-8 h-8 text-gray-500 hover:text-[#1DB954] transition-colors duration-300" />
              <p className="mt-4 text-gray-400 text-center">
                Click to ignite the torch
              </p>
            </div>
          ) : (
            <div className="relative flex flex-col items-center">
              <div className="w-8 h-6 bg-gray-700 rounded-t-lg mb-2"></div>
              {/* Green Flame Effect */}
              <div className="relative">
                <Flame className="w-8 h-8 text-[#1DB954] torch-flame" />
                <div className="absolute inset-0 w-8 h-8">
                  <Flame className="w-8 h-8 text-[#1ED760] opacity-70 torch-flame" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>
              
              {/* Expanding Green Light Effect */}
              <div 
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-[#1DB954] to-transparent transition-all duration-1000 ${
                  isIgnited ? 'w-96 h-96 opacity-30' : 'w-0 h-0 opacity-0'
                }`}
                style={{
                  background: 'radial-gradient(circle, rgba(29, 185, 84, 0.3) 0%, transparent 70%)'
                }}
              ></div>
            </div>
          )}
        </div>

        {/* Sparks/Particles - Centered around the torch */}
        {isIgnited && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            {[...Array(12)].map((_, i) => {
              const angle = i * 30 * Math.PI / 180;
              const radius = 80;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-[#1DB954] rounded-full opacity-80"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: 'translate(-50%, -50%)',
                    animation: `fadeInUp ${0.5 + i * 0.1}s ease-out forwards`,
                  }}
                ></div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}