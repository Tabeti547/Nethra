
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-r from-nethra-navy to-nethra-blue">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
            Nethra Security Services for a Safer Tomorrow, Powered by Technology
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fade-in delay-100">
            Nethra Security Services pioneers the future of security by integrating advanced technology 
            with expert human oversight for unparalleled protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-200">
            <Button size="lg" variant="secondary" className="bg-white text-nethra-navy hover:bg-white/90" asChild>
              <Link to="/services">Explore Our Services</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-nethra-navy" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
