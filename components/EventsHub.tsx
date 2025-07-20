import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Music, MapPin, Plus, Users, Clock } from 'lucide-react';

export function EventsHub() {
  const [activeTab, setActiveTab] = useState('live');

  const events = [
    {
      id: 1,
      name: 'Electric Nights Festival',
      host: 'DJ Neon Pulse',
      status: 'live',
      time: '9:00 PM - 2:00 AM',
      listeners: 2847,
      genre: 'Electronic',
      location: 'Virtual Stage 1'
    },
    {
      id: 2,
      name: 'Indie Underground',
      host: 'The Midnight Echoes',
      status: 'starting-soon',
      time: '10:30 PM - 1:00 AM',
      listeners: 1523,
      genre: 'Indie Rock',
      location: 'Studio B'
    },
    {
      id: 3,
      name: 'Hip-Hop Cypher Night',
      host: 'MC Torch Bearer',
      status: 'live',
      time: '8:00 PM - 12:00 AM',
      listeners: 3291,
      genre: 'Hip-Hop',
      location: 'Main Hall'
    }
  ];

  return (
    <section id="events" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Made more compact */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Events </span>
            <span className="text-[#1DB954]">Hub</span>
          </h2>
          <p className="text-xl text-[#B3B3B3] max-w-3xl mx-auto">
            Discover live concerts, find nearby parties, or create your own synchronized music events
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <Button
            onClick={() => setActiveTab('live')}
            className={`rounded-full px-6 py-3 transition-all duration-200 ${
              activeTab === 'live' 
                ? 'bg-[#1DB954] text-white hover:bg-[#1ED760]' 
                : 'bg-[#282828] text-[#B3B3B3] hover:bg-[#383838] hover:text-white'
            }`}
          >
            <Music className="w-4 h-4 mr-2" />
            Live Concerts
          </Button>
          <Button
            onClick={() => setActiveTab('nearby')}
            className={`rounded-full px-6 py-3 transition-all duration-200 ${
              activeTab === 'nearby' 
                ? 'bg-[#1DB954] text-white hover:bg-[#1ED760]' 
                : 'bg-[#282828] text-[#B3B3B3] hover:bg-[#383838] hover:text-white'
            }`}
          >
            <MapPin className="w-4 h-4 mr-2" />
            Nearby Events
          </Button>
          <Button
            onClick={() => setActiveTab('create')}
            className={`rounded-full px-6 py-3 transition-all duration-200 ${
              activeTab === 'create' 
                ? 'bg-[#1DB954] text-white hover:bg-[#1ED760]' 
                : 'bg-[#282828] text-[#B3B3B3] hover:bg-[#383838] hover:text-white'
            }`}
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Event
          </Button>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={event.id}
              className="group bg-[#282828] rounded-lg p-6 transition-all duration-300 hover:bg-[#383838] hover:shadow-lg hover:shadow-[#1DB954]/20 border border-transparent hover:border-[#1DB954]/30 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-4">
                <Badge 
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.status === 'live' 
                      ? 'bg-red-500/20 text-red-400 border-red-500/30' 
                      : 'bg-orange-500/20 text-orange-400 border-orange-500/30'
                  }`}
                >
                  {event.status === 'live' ? 'Live Now' : 'Starting Soon'}
                </Badge>
                <div className="flex items-center gap-1 text-[#B3B3B3] text-sm">
                  <Users className="w-4 h-4" />
                  <span>{event.listeners.toLocaleString()}</span>
                </div>
              </div>

              {/* Event Info */}
              <h3 className="font-bold text-white mb-2 group-hover:text-[#1ED760] transition-colors duration-300">
                {event.name}
              </h3>
              
              <p className="text-[#B3B3B3] text-sm mb-3">
                {event.host}
              </p>

              {/* Time and Location */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-[#B3B3B3] text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-[#B3B3B3] text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
              </div>

              {/* Genre Tag */}
              <div className="flex items-center justify-between">
                <Badge className="bg-[#1DB954]/20 text-[#1DB954] border-[#1DB954]/30 px-3 py-1 rounded-full text-xs">
                  {event.genre}
                </Badge>
                <Button 
                  size="sm"
                  className="bg-[#1DB954] hover:bg-[#1ED760] text-white rounded-full px-4 py-2 text-sm transition-all duration-200"
                >
                  Join
                </Button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-lg shadow-lg shadow-[#1DB954]/10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-[#1DB954] text-[#1DB954] hover:bg-[#1DB954] hover:text-white px-8 py-3 rounded-full transition-all duration-200"
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
}