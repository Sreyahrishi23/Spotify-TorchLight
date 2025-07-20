import React from 'react';
import { FeatureCard } from './FeatureCard';
import { 
  Lock, 
  Unlock, 
  Zap, 
  Trophy, 
  Music, 
  Heart, 
  Award, 
  Swords, 
  Smile, 
  Lightbulb, 
  Mic, 
  Clock 
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Lock,
      title: 'Private Music Rooms',
      description: 'Create exclusive music spaces for intimate gatherings with friends.'
    },
    {
      icon: Unlock,
      title: 'Public Music Rooms',
      description: 'Join open music rooms and discover new communities worldwide.'
    },
    {
      icon: Zap,
      title: 'Sync Strobe Lights',
      description: 'Synchronize your party lights with the beat for immersive experiences.'
    },
    {
      icon: Trophy,
      title: 'Gamified Party Leaderboard',
      description: 'Compete with friends and climb the party rankings for ultimate bragging rights.'
    },
    {
      icon: Music,
      title: 'Sync Spotify and App',
      description: 'Seamlessly integrate your Spotify account for complete music control.'
    },
    {
      icon: Heart,
      title: 'Mood-Based Music Discovery',
      description: 'Find perfect tracks that match your current vibe and energy level.'
    },
    {
      icon: Award,
      title: 'Torchlight Wrapped',
      description: 'Get your personalized year-end party and music statistics recap.'
    },
    {
      icon: Swords,
      title: 'Music Battles',
      description: 'Challenge friends to music battles and let the community vote for winners.'
    },
    {
      icon: Smile,
      title: 'Real-Time Emoji Reactions',
      description: 'Express yourself instantly with live emoji reactions during parties.'
    },
    {
      icon: Lightbulb,
      title: 'Light Sync Modes',
      description: 'Choose from multiple lighting patterns that sync with your music.'
    },
    {
      icon: Mic,
      title: 'Voice Commands',
      description: 'Control your party experience hands-free with intuitive voice controls.'
    },
    {
      icon: Clock,
      title: 'Sleep Timer',
      description: 'Set automatic party wind-down timers for responsible late-night sessions.'
    }
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to 
            <span className="block text-[#1DB954]">Light Up the Night</span>
          </h2>
          <p className="text-xl text-[#B3B3B3] max-w-2xl mx-auto">
            Torch brings together music discovery, social events, and community building 
            in one seamless platform designed for music lovers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="group relative bg-[#282828] rounded-lg p-6 transition-all duration-300 hover:bg-[#383838] hover:shadow-lg hover:shadow-[#1DB954]/20 hover:-translate-y-1 border border-transparent hover:border-[#1DB954]/30">
                {/* Green accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1DB954] to-[#1ED760] rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <div className="w-12 h-12 bg-[#1DB954]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1DB954]/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-[#1DB954] group-hover:text-[#1ED760] transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="font-medium text-white mb-3 group-hover:text-[#1ED760] transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-[#B3B3B3] group-hover:text-[#CCCCCC] transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-lg shadow-lg shadow-[#1DB954]/10"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#1DB954]/10 border border-[#1DB954]/30 rounded-full text-[#1DB954] mb-4">
            <Music className="w-4 h-4" />
            <span>Join the Community</span>
          </div>
          <p className="text-[#B3B3B3]">
            Ready to transform your music experience? Start connecting with your community today.
          </p>
        </div>
      </div>
    </section>
  );
}