
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronDown, Shield, Award, Users } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-professional"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nethra-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-5xl">
          {/* Premium badges */}
          <div className={`flex flex-wrap gap-6 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 px-6 py-3 glass-effect rounded-full border border-white/20">
              <Shield className="w-5 h-5 text-nethra-accent" />
              <span className="text-white text-sm font-medium">Premium Security</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 glass-effect rounded-full border border-white/20">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-white text-sm font-medium">PSARA Licensed</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 glass-effect rounded-full border border-white/20">
              <Users className="w-5 h-5 text-green-400" />
              <span className="text-white text-sm font-medium">Expert Team</span>
            </div>
          </div>

          {/* Main heading with professional typography */}
          <h1 className={`font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="block mb-4">NSS Security Services</span>
            <span className="block bg-gradient-to-r from-white via-nethra-accent to-white bg-clip-text text-transparent">
              for a Safer Tomorrow
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-8 text-white/90 font-medium">
              Powered by Technology
            </span>
          </h1>

          {/* Enhanced description */}
          <p className={`text-xl md:text-2xl lg:text-3xl text-white/90 mb-16 max-w-4xl leading-relaxed transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            NSS Security Services pioneers the future of security by integrating advanced technology 
            with expert human oversight for <span className="text-nethra-accent font-semibold">unparalleled protection</span>.
          </p>

          {/* Premium CTA buttons */}
          <div className={`flex flex-col sm:flex-row gap-8 mb-20 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button 
              size="xl" 
              className="btn-premium h-16 px-12 text-lg font-semibold rounded-2xl shadow-premium hover:shadow-premium-lg transition-all duration-300" 
              asChild
            >
              <Link to="/services" className="flex items-center gap-3">
                Explore Our Services
                <Shield className="w-6 h-6" />
              </Link>
            </Button>
            
            <Button 
              size="xl" 
              variant="outline" 
              className="h-16 px-12 text-lg font-semibold rounded-2xl border-2 border-white/30 text-white hover:bg-white hover:text-nethra-navy glass-effect transition-all duration-300 hover:scale-105" 
              asChild
            >
              <Link to="/contact" className="flex items-center gap-3">
                Contact Us
                <Users className="w-6 h-6" />
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className={`flex flex-wrap items-center gap-12 text-white/70 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-base font-medium">24/7 Monitoring</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-base font-medium">ISO Certified</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-base font-medium">PSARA Licensed</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToNext}
            className="flex flex-col items-center gap-3 text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <span className="text-base font-medium">Discover More</span>
            <ChevronDown className="w-7 h-7 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
