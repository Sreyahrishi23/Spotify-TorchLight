import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { 
  Music, 
  Users, 
  Lightbulb, 
  Play, 
  CheckCircle, 
  ArrowRight,
  Smartphone,
  Wifi,
  Volume2
} from 'lucide-react';

export function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isConnecting, setIsConnecting] = useState(false);

  const steps = [
    {
      number: 1,
      title: 'Connect Your Spotify',
      description: 'Link your Spotify account to sync your music library and preferences.',
      icon: Music,
      color: '#1DB954'
    },
    {
      number: 2,
      title: 'Join or Create a Room',
      description: 'Find nearby parties or create your own synchronized music space.',
      icon: Users,
      color: '#1ED760'
    },
    {
      number: 3,
      title: 'Sync Your Lights',
      description: 'Connect smart lights that automatically align with the genre and beat of currently playing songs.',
      icon: Lightbulb,
      color: '#00D9FF'
    },
    {
      number: 4,
      title: 'Start the Party',
      description: 'Launch your synchronized music and lighting experience.',
      icon: Play,
      color: '#FF6B35'
    }
  ];

  const progressSteps = [
    { name: 'Spotify Connection', percentage: 25 },
    { name: 'Room Setup', percentage: 50 },
    { name: 'Smart Lights Sync', percentage: 75 },
    { name: 'Party Ready', percentage: 100 }
  ];

  useEffect(() => {
    if (isConnecting && progress < 100) {
      const timer = setTimeout(() => {
        setProgress(prev => Math.min(prev + 2, 100));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isConnecting, progress]);

  const handleStartDemo = () => {
    setIsConnecting(true);
    setProgress(0);
  };

  const handleResetDemo = () => {
    setIsConnecting(false);
    setProgress(0);
    setCurrentStep(1);
  };

  return (
    <section id="how-it-works" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Made more compact */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">How It </span>
            <span className="text-[#1DB954]">Works</span>
          </h2>
          <p className="text-xl text-[#B3B3B3] max-w-2xl mx-auto">
            Get started with Torch in just four simple steps and transform your music experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Steps Section */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number;
              
              return (
                <div 
                  key={step.number}
                  className={`relative flex gap-6 p-6 rounded-lg transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'bg-[#282828] border border-[#1DB954]/30' 
                      : 'bg-[#191414] hover:bg-[#282828]'
                  }`}
                  onClick={() => setCurrentStep(step.number)}
                >
                  {/* Step Number/Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isCompleted 
                      ? 'bg-[#1DB954]' 
                      : isActive 
                        ? `bg-[${step.color}]/20 border-2 border-[${step.color}]` 
                        : 'bg-[#383838] border border-[#B3B3B3]/30'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : (
                      <Icon className={`w-6 h-6 ${
                        isActive ? `text-[${step.color}]` : 'text-[#B3B3B3]'
                      }`} />
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className={`font-medium transition-colors duration-300 ${
                        isActive ? 'text-[#1ED760]' : 'text-white'
                      }`}>
                        {step.title}
                      </h3>
                      {isActive && (
                        <Badge className="bg-[#1DB954]/20 text-[#1DB954] border-[#1DB954]/30 px-2 py-1 text-xs">
                          Active
                        </Badge>
                      )}
                    </div>
                    <p className="text-[#B3B3B3] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {step.number < 4 && (
                    <div className="absolute -bottom-4 left-6 w-0.5 h-8 bg-[#383838]"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Live Demo Section */}
          <div className="bg-[#191414] rounded-lg p-8 border border-[#383838]">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-medium text-white mb-2">Live Demo</h3>
              <p className="text-[#B3B3B3]">Watch the setup process in action</p>
            </div>

            {/* Demo Device Mockup */}
            <div className="bg-[#282828] rounded-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-[#1DB954]" />
                  <span className="text-white">Torch App</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Demo Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-[#191414] rounded">
                  <div className="flex items-center gap-3">
                    <Music className="w-5 h-5 text-[#1DB954]" />
                    <span className="text-white text-sm">Spotify Connected</span>
                  </div>
                  <CheckCircle className="w-5 h-5 text-[#1DB954]" />
                </div>
                
                <div className="flex items-center justify-between p-3 bg-[#191414] rounded">
                  <div className="flex items-center gap-3">
                    <Wifi className="w-5 h-5 text-[#1DB954]" />
                    <span className="text-white text-sm">Room: Party Zone #1</span>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 text-xs">Active</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-[#191414] rounded">
                  <div className="flex items-center gap-3">
                    <Lightbulb className="w-5 h-5 text-[#1DB954]" />
                    <span className="text-white text-sm">Smart Lights (3 devices)</span>
                  </div>
                  <Volume2 className="w-5 h-5 text-[#1DB954]" />
                </div>
              </div>
            </div>

            {/* Setup Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-medium">Setup Progress</span>
                <span className="text-[#1DB954]">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2 bg-[#383838]" />
              
              {/* Progress Steps */}
              <div className="mt-4 space-y-2">
                {progressSteps.map((step, index) => {
                  const isCompleted = progress >= step.percentage;
                  const isActive = progress >= (index > 0 ? progressSteps[index - 1].percentage : 0) && progress < step.percentage;
                  
                  return (
                    <div key={step.name} className="flex items-center justify-between text-sm">
                      <span className={`${isCompleted ? 'text-[#1DB954]' : isActive ? 'text-white' : 'text-[#B3B3B3]'}`}>
                        {step.name}
                      </span>
                      {isCompleted && <CheckCircle className="w-4 h-4 text-[#1DB954]" />}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Demo Controls */}
            <div className="flex gap-3">
              <Button
                onClick={handleStartDemo}
                disabled={isConnecting && progress < 100}
                className="flex-1 bg-[#1DB954] hover:bg-[#1ED760] text-white transition-all duration-200"
              >
                {progress === 100 ? (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Party Ready!
                  </>
                ) : isConnecting ? (
                  'Connecting...'
                ) : (
                  <>
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Start Demo
                  </>
                )}
              </Button>
              
              {(isConnecting || progress > 0) && (
                <Button
                  onClick={handleResetDemo}
                  variant="outline"
                  className="border-[#383838] text-[#B3B3B3] hover:bg-[#383838] hover:text-white"
                >
                  Reset
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}