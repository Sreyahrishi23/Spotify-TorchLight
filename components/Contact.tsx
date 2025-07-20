import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';

// Social Media Icons as SVG components
const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export function Contact() {
  const socialLinks = [
    { name: 'X (Twitter)', icon: TwitterIcon, href: '#' },
    { name: 'Instagram', icon: InstagramIcon, href: '#' },
    { name: 'Facebook', icon: FacebookIcon, href: '#' },
    { name: 'LinkedIn', icon: LinkedInIcon, href: '#' },
  ];

  return (
    <section id="contact" className="py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Made more compact */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Get In </span>
            <span className="text-[#1DB954]">Touch</span>
          </h2>
          <p className="text-xl text-[#B3B3B3] max-w-2xl mx-auto">
            Ready to light up your music experience? Reach out to us and let's start the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 p-6 bg-[#282828] rounded-lg hover:bg-[#383838] transition-colors duration-300">
                <div className="w-12 h-12 bg-[#1DB954]/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#1DB954]" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Email Us</h4>
                  <a 
                    href="mailto:spotifytorch.light@gmail.com" 
                    className="text-[#B3B3B3] hover:text-[#1DB954] transition-colors duration-200"
                  >
                    spotifytorch.light@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-6 bg-[#282828] rounded-lg hover:bg-[#383838] transition-colors duration-300">
                <div className="w-12 h-12 bg-[#1DB954]/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#1DB954]" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Call Us</h4>
                  <a 
                    href="tel:+911234567890" 
                    className="text-[#B3B3B3] hover:text-[#1DB954] transition-colors duration-200"
                  >
                    +91 1234567890
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-6 bg-[#282828] rounded-lg hover:bg-[#383838] transition-colors duration-300">
                <div className="w-12 h-12 bg-[#1DB954]/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#1DB954]" />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Visit Us</h4>
                  <p className="text-[#B3B3B3]">SJCET, Palai</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-white/10">
              <h4 className="font-medium text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      title={social.name}
                      className="w-12 h-12 bg-[#282828] rounded-lg flex items-center justify-center text-[#B3B3B3] hover:bg-[#1DB954] hover:text-white transition-all duration-200 group"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#282828] rounded-lg p-8">
            <h3 className="font-medium text-white mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#B3B3B3] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#191414] border border-white/10 rounded-lg text-white placeholder-[#B3B3B3] focus:border-[#1DB954] focus:outline-none transition-colors duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#B3B3B3] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#191414] border border-white/10 rounded-lg text-white placeholder-[#B3B3B3] focus:border-[#1DB954] focus:outline-none transition-colors duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#B3B3B3] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-[#191414] border border-white/10 rounded-lg text-white placeholder-[#B3B3B3] focus:border-[#1DB954] focus:outline-none transition-colors duration-200"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#B3B3B3] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#191414] border border-white/10 rounded-lg text-white placeholder-[#B3B3B3] focus:border-[#1DB954] focus:outline-none transition-colors duration-200"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#B3B3B3] mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-[#191414] border border-white/10 rounded-lg text-white placeholder-[#B3B3B3] focus:border-[#1DB954] focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell us about your project or question..."
                ></textarea>
              </div>
              
              <Button className="w-full bg-[#1DB954] hover:bg-[#1ED760] text-white py-3 transition-all duration-200">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-[#B3B3B3]">
            © 2025 Torch. All rights reserved. Light up your music experience.
          </p>
        </div>
      </div>
    </section>
  );
}