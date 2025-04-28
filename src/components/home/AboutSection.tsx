
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Settings, Users, Briefcase } from 'lucide-react';
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-nethra-navy mb-4">About NSS</h2>
          <div className="w-24 h-1 bg-nethra-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-nethra-navy mb-4">Innovating Security Solutions</h3>
            <p className="text-nethra-gray mb-6">
              At NSS, we're transforming the future of security by bringing together
              skilled professionals and advanced technology. We understand that modern security 
              challenges require innovative solutions.
            </p>
            <p className="text-nethra-gray mb-6">
              Our approach combines expert human insight with technological capabilities,
              delivering proactive security solutions that ensure peace of mind for our clients.
            </p>
            <Button className="mt-2" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="bg-nethra-navy/5 p-8 rounded-lg grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <Star className="w-12 h-12 text-nethra-accent mb-4" />
              <h4 className="font-bold text-xl mb-2 text-nethra-navy">Excellence</h4>
              <p className="text-nethra-gray">Setting new standards in security services through innovation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <Settings className="w-12 h-12 text-nethra-accent mb-4" />
              <h4 className="font-bold text-xl mb-2 text-nethra-navy">Technology</h4>
              <p className="text-nethra-gray">Leveraging advanced tools for enhanced protection.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <Users className="w-12 h-12 text-nethra-accent mb-4" />
              <h4 className="font-bold text-xl mb-2 text-nethra-navy">Expertise</h4>
              <p className="text-nethra-gray">Professional team with extensive security experience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <Briefcase className="w-12 h-12 text-nethra-accent mb-4" />
              <h4 className="font-bold text-xl mb-2 text-nethra-navy">Solutions</h4>
              <p className="text-nethra-gray">Customized security strategies for your needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
