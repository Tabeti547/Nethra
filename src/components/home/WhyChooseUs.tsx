
import React from 'react';
import { Settings, Users, Star } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-nethra-navy to-nethra-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose NSS</h2>
          <div className="w-24 h-1 bg-nethra-accent mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-white/80">
            We deliver exceptional security services through our unique blend of 
            human expertise and advanced technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-all">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Tech-Enhanced Security</h3>
            <p className="text-white/80">
              Our security solutions integrate advanced technology for enhanced monitoring 
              and rapid response capabilities.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-all">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Expert Team</h3>
            <p className="text-white/80">
              Our security professionals bring years of experience and specialized 
              training to every assignment.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-all">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Proven Excellence</h3>
            <p className="text-white/80">
              We maintain the highest standards in security services, ensuring 
              reliable protection for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
