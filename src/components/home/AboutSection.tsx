
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Settings, Users, Briefcase } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="section-padding bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-nethra-navy mb-4">About Nethra Security</h2>
          <div className="w-24 h-1 bg-nethra-accent mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-nethra-navy mb-4">Pioneering the Future of Security</h3>
              <p className="text-nethra-gray mb-4">
                Nethra Security Services pioneers the future of security by integrating advanced AI 
                and technology with expert human oversight. Responding to today's complex threat 
                landscape, we deliver intelligent solutions that move beyond traditional methods.
              </p>
              <p className="text-nethra-gray mb-4">
                We offer proactive, data-driven physical and digital security, utilizing machine learning 
                for predictive insights and automation for enhanced efficiency. Our blend of seasoned 
                security professionals and tech innovators ensures smarter, faster, and more resilient 
                protection.
              </p>
              <p className="text-nethra-gray mb-6">
                We provide the next generation of security, safeguarding your assets, people, and 
                operations in a rapidly evolving world, delivering peace of mind through intelligent 
                vigilance.
              </p>
              <Button asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-bold text-nethra-navy mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-nethra-gray mb-4">
                  To empower clients with superior security by seamlessly integrating human 
                  expertise with advanced AI and technology.
                </p>
                <Link to="/about" className="text-nethra-accent hover:text-nethra-accent/90">
                  Read More &gt;
                </Link>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-bold text-nethra-navy mb-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-nethra-gray mb-4">
                  To be the global benchmark for intelligent security, pioneering 
                  the fusion of AI and human insight.
                </p>
                <Link to="/about" className="text-nethra-accent hover:text-nethra-accent/90">
                  Read More &gt;
                </Link>
              </CardContent>
            </Card>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <Settings className="w-12 h-12 text-nethra-accent mb-4" />
              <h4 className="font-bold text-xl mb-2 text-nethra-navy">Technology</h4>
              <p className="text-nethra-gray">Advanced AI-driven security solutions</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <Users className="w-12 h-12 text-nethra-accent mb-4" />
              <h4 className="font-bold text-xl mb-2 text-nethra-navy">Expertise</h4>
              <p className="text-nethra-gray">Seasoned security professionals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
