
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Building, Calendar, FileText, Award, ChevronRight, Shield, Star
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const ServiceCard = ({ icon: Icon, title, description, link, index }: {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
  index: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className={`group relative overflow-hidden bg-white rounded-3xl shadow-premium hover:shadow-premium-lg transition-all duration-500 hover-lift border border-nethra-light/50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-nethra-navy/5 to-nethra-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative p-8">
        {/* Icon with premium styling */}
        <div className="w-16 h-16 bg-gradient-to-br from-nethra-navy to-nethra-blue rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Icon size={32} className="text-white" />
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-nethra-navy group-hover:text-nethra-blue transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-nethra-gray mb-6 leading-relaxed">
          {description}
        </p>
        
        <Link 
          to={link} 
          className="inline-flex items-center text-nethra-accent hover:text-nethra-navy font-semibold transition-all duration-300 group/link"
        >
          Learn More 
          <ChevronRight size={20} className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Users,
      title: "Manpower Guarding",
      description: "Professional security personnel trained in the latest security protocols and equipped with technology-assisted monitoring tools for enhanced vigilance and protection.",
      link: "/services#manpower"
    },
    {
      icon: Building,
      title: "Security for Businesses",
      description: "Comprehensive security solutions tailored for corporate environments, including access control, surveillance systems, and threat assessment with 24/7 monitoring.",
      link: "/services#business"
    },
    {
      icon: Calendar,
      title: "Event Security",
      description: "Specialized security services for concerts, parties, and corporate events, ensuring attendee safety while maintaining a positive and secure atmosphere.",
      link: "/services#events"
    },
    {
      icon: FileText,
      title: "Security Consultancy",
      description: "Expert risk assessment and security planning services to identify vulnerabilities and develop comprehensive security strategies tailored to your needs.",
      link: "/services#consultancy"
    },
    {
      icon: Award,
      title: "Security Training",
      description: "Professional training programs for security personnel, enhancing skills in threat detection, emergency response, and modern security technologies.",
      link: "/services#training"
    },
    {
      icon: Shield,
      title: "Executive Protection",
      description: "Premium personal security services for executives and VIPs, providing discreet and professional protection with advanced threat assessment capabilities.",
      link: "/services#executive"
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-nethra-light/30 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-nethra-navy/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-nethra-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Premium section header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-nethra-accent/10 rounded-full mb-6">
            <Shield className="w-5 h-5 text-nethra-accent" />
            <span className="text-nethra-navy font-semibold">Our Services</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-nethra-navy mb-6">
            Comprehensive Security Solutions
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-nethra-navy to-nethra-accent mx-auto mb-8 rounded-full"></div>
          
          <p className="max-w-4xl mx-auto text-lg text-nethra-gray leading-relaxed">
            We offer a comprehensive range of security services enhanced with technology to 
            provide superior protection for your business, events, and assets. Each solution is 
            carefully crafted to meet the unique demands of modern security challenges.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
        
        {/* Premium CTA section */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-br from-nethra-navy to-nethra-blue rounded-3xl p-12 shadow-premium-lg">
            <Star className="w-12 h-12 text-nethra-accent mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Secure Your Future?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Discover how our premium security solutions can be tailored to your specific needs. 
              Let's discuss your security requirements today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="h-12 px-8 rounded-xl font-semibold hover:scale-105 transition-all duration-300" 
                asChild
              >
                <Link to="/services">View All Services</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="h-12 px-8 rounded-xl font-semibold border-2 border-white/30 text-white hover:bg-white hover:text-nethra-navy transition-all duration-300 hover:scale-105" 
                asChild
              >
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
