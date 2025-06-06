
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Settings, Users, Briefcase, Award, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const AboutSection = () => {
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

  const stats = [
    { value: '500+', label: 'Clients Protected', icon: Users },
    { value: '24/7', label: 'Monitoring', icon: Shield },
    { value: '99.9%', label: 'Reliability', icon: Award },
    { value: '15+', label: 'Years Experience', icon: Star }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-white to-nethra-light/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-nethra-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-nethra-navy/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Premium section header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-nethra-navy/10 rounded-full mb-6">
            <Star className="w-5 h-5 text-nethra-accent" />
            <span className="text-nethra-navy font-semibold">About NSS</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-nethra-navy mb-6">
            Pioneering the Future of Security
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-nethra-navy to-nethra-accent mx-auto mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg text-nethra-gray leading-relaxed">
            NSS pioneers the future of security by integrating advanced technology with expert human oversight, 
            delivering intelligent solutions that move beyond traditional methods.
          </p>
        </div>

        {/* Stats section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-nethra-navy to-nethra-blue rounded-2xl flex items-center justify-center shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:scale-110">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-nethra-navy mb-2">{stat.value}</div>
              <div className="text-sm text-nethra-gray font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content section */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-nethra-navy mb-6">
                Redefining Security Excellence
              </h3>
              
              <div className="space-y-4 text-nethra-gray leading-relaxed">
                <p className="text-lg">
                  NSS pioneers the future of security by integrating <span className="text-nethra-navy font-semibold">advanced technology</span> 
                  with expert human oversight. Responding to today's complex threat landscape, we deliver intelligent 
                  solutions that move beyond traditional methods.
                </p>
                
                <p>
                  We offer proactive, data-driven physical and digital security, utilizing cutting-edge technology 
                  for predictive insights and automation for enhanced efficiency. Our blend of seasoned 
                  security professionals and tech innovators ensures smarter, faster, and more resilient protection.
                </p>
                
                <p>
                  We provide the next generation of security, safeguarding your assets, people, and 
                  operations in a rapidly evolving world, delivering <span className="text-nethra-accent font-semibold">peace of mind</span> through intelligent vigilance.
                </p>
              </div>

              <Button 
                size="lg" 
                className="btn-premium h-12 px-8 rounded-xl shadow-premium hover:shadow-premium-lg transition-all duration-300" 
                asChild
              >
                <Link to="/about">Discover Our Story</Link>
              </Button>
            </div>
          </div>

          {/* Cards section */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <Card className="p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover-lift border-0 bg-gradient-to-br from-white to-nethra-light/30">
              <CardHeader className="p-0">
                <div className="w-12 h-12 bg-gradient-to-br from-nethra-navy to-nethra-blue rounded-xl flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-nethra-navy mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-nethra-gray mb-4 leading-relaxed">
                  To empower clients with superior security by seamlessly integrating human 
                  expertise with advanced technology.
                </p>
                <Link to="/about" className="text-nethra-accent hover:text-nethra-navy font-semibold transition-colors inline-flex items-center gap-1">
                  Read More <span className="text-lg">→</span>
                </Link>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover-lift border-0 bg-gradient-to-br from-white to-nethra-light/30">
              <CardHeader className="p-0">
                <div className="w-12 h-12 bg-gradient-to-br from-nethra-accent to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-nethra-navy mb-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-nethra-gray mb-4 leading-relaxed">
                  To be the global benchmark for intelligent security, pioneering 
                  the fusion of technology and human insight.
                </p>
                <Link to="/about" className="text-nethra-accent hover:text-nethra-navy font-semibold transition-colors inline-flex items-center gap-1">
                  Read More <span className="text-lg">→</span>
                </Link>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover-lift border-0 bg-gradient-to-br from-nethra-navy/5 to-nethra-blue/5">
              <Settings className="w-12 h-12 text-nethra-accent mb-4" />
              <h4 className="font-bold text-xl mb-3 text-nethra-navy">Technology</h4>
              <p className="text-nethra-gray">Advanced technology-driven security solutions for modern challenges</p>
            </Card>

            <Card className="p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover-lift border-0 bg-gradient-to-br from-nethra-accent/5 to-blue-500/5">
              <Users className="w-12 h-12 text-nethra-navy mb-4" />
              <h4 className="font-bold text-xl mb-3 text-nethra-navy">Expertise</h4>
              <p className="text-nethra-gray">Seasoned security professionals with industry-leading experience</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
