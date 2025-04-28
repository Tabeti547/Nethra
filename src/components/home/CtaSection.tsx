
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-nethra-navy to-nethra-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Security?</h2>
        <p className="max-w-2xl mx-auto text-lg text-white/90 mb-8">
          Contact us today to discuss how our technology-powered security solutions can 
          protect your business and assets.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="secondary" className="bg-white text-nethra-navy hover:bg-white/90" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-nethra-navy" asChild>
            <Link to="/services">Explore Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
