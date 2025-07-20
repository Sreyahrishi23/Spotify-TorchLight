import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Check, 
  Star, 
  Crown, 
  Zap, 
  Music, 
  Users, 
  Lightbulb,
  Radio,
  Heart,
  Calendar
} from 'lucide-react';

export function Premium() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for getting started with Torch',
      features: [
        'Basic music rooms',
        'Up to 10 participants',
        'Standard light sync',
        '2 playlists',
        'Basic emoji reactions',
        'Community support'
      ],
      buttonText: 'Get Started Free',
      buttonVariant: 'outline' as const,
      popular: false
    },
    {
      name: 'Premium',
      price: '$9.99',
      period: '/month',
      description: 'Enhanced features for music enthusiasts',
      features: [
        'Unlimited music rooms',
        'Up to 50 participants',
        'Advanced light sync modes',
        'Unlimited playlists',
        'Custom emoji reactions',
        'Music battles & voting',
        'Mood-based discovery',
        'Voice commands',
        'Priority support'
      ],
      buttonText: 'Go Premium',
      buttonVariant: 'default' as const,
      popular: true
    },
    {
      name: 'Pro',
      price: '$19.99',
      period: '/month',
      description: 'Ultimate experience for party hosts',
      features: [
        'Everything in Premium',
        'Unlimited participants',
        'Professional light sync',
        'Custom branded rooms',
        'Advanced analytics',
        'API access',
        'White-label options',
        'Dedicated support',
        'Early feature access'
      ],
      buttonText: 'Go Pro',
      buttonVariant: 'outline' as const,
      popular: false
    }
  ];

  const premiumFeatures = [
    {
      icon: Music,
      title: 'Advanced Music Discovery',
      description: 'AI-powered recommendations based on your party history and mood'
    },
    {
      icon: Lightbulb,
      title: 'Professional Light Sync',
      description: 'Sync with 50+ smart light brands and create custom lighting patterns'
    },
    {
      icon: Users,
      title: 'Unlimited Party Size',
      description: 'Host massive parties with unlimited participants and multiple rooms'
    },
    {
      icon: Radio,
      title: 'HD Audio Streaming',
      description: 'Crystal clear audio streaming with zero latency for the perfect sync'
    },
    {
      icon: Heart,
      title: 'Advanced Analytics',
      description: 'Detailed insights into your party performance and music preferences'
    },
    {
      icon: Calendar,
      title: 'Event Management',
      description: 'Advanced scheduling, RSVP tracking, and automated reminders'
    }
  ];

  return (
    <section id="premium" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1DB954]/10 border border-[#1DB954]/30 rounded-full text-[#1DB954] mb-6">
            <Crown className="w-4 h-4" />
            <span>Premium Plans</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Explore </span>
            <span className="text-[#1DB954]">Premium</span>
          </h2>
          <p className="text-xl text-[#B3B3B3] max-w-2xl mx-auto">
            Unlock the full potential of Torch with premium features designed for serious music lovers and party hosts.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative bg-[#282828] rounded-lg p-8 transition-all duration-300 hover:bg-[#383838] border ${
                plan.popular 
                  ? 'border-[#1DB954] shadow-lg shadow-[#1DB954]/20 scale-105' 
                  : 'border-[#383838] hover:border-[#1DB954]/30'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#1DB954] text-white px-4 py-2 rounded-full font-medium">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-end justify-center gap-1 mb-3">
                  <span className="text-4xl font-bold text-[#1DB954]">{plan.price}</span>
                  <span className="text-[#B3B3B3] mb-1">{plan.period}</span>
                </div>
                <p className="text-[#B3B3B3] text-sm">{plan.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#1DB954] flex-shrink-0 mt-0.5" />
                    <span className="text-[#B3B3B3] text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                variant={plan.buttonVariant}
                className={`w-full py-3 transition-all duration-200 ${
                  plan.buttonVariant === 'default' 
                    ? 'bg-[#1DB954] hover:bg-[#1ED760] text-white' 
                    : 'border-[#1DB954] text-[#1DB954] hover:bg-[#1DB954] hover:text-white'
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* Premium Features Showcase */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Why Choose Premium?
            </h3>
            <p className="text-[#B3B3B3] max-w-2xl mx-auto">
              Unlock advanced features that transform your music parties into unforgettable experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-[#191414] rounded-lg p-6 border border-[#383838] hover:border-[#1DB954]/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#1DB954]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1DB954]/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#1DB954]" />
                  </div>
                  <h4 className="font-medium text-white mb-2 group-hover:text-[#1ED760] transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-[#B3B3B3] text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-[#1DB954]/10 to-[#1ED760]/10 rounded-lg p-12 border border-[#1DB954]/30">
          <Crown className="w-16 h-16 text-[#1DB954] mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Upgrade Your Experience?
          </h3>
          <p className="text-[#B3B3B3] mb-8 max-w-xl mx-auto">
            Join thousands of music lovers who have already upgraded to Premium and transformed their party experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="bg-[#1DB954] hover:bg-[#1ED760] text-white px-8 py-3 transition-all duration-200"
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Premium Trial
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-[#1DB954] text-[#1DB954] hover:bg-[#1DB954] hover:text-white px-8 py-3 transition-all duration-200"
            >
              Compare Plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}