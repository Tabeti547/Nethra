
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Building, Calendar, FileText, Award, ChevronRight
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const ServiceCard = ({ icon: Icon, title, description, link }: {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
    <div className="p-6">
      <div className="w-14 h-14 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-6">
        <Icon size={28} className="text-nethra-navy" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-nethra-navy">{title}</h3>
      <p className="text-nethra-gray mb-4">{description}</p>
      <Link to={link} className="inline-flex items-center text-nethra-accent hover:underline">
        Learn More <ChevronRight size={16} className="ml-1" />
      </Link>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "Manpower Guarding",
      description: "Professional security personnel trained in the latest security protocols and equipped with technology-assisted monitoring tools for enhanced vigilance.",
      link: "/services#manpower"
    },
    {
      icon: Building,
      title: "Security for Businesses",
      description: "Comprehensive security solutions tailored for corporate environments, including access control, surveillance systems, and threat assessment.",
      link: "/services#business"
    },
    {
      icon: Calendar,
      title: "Event Security",
      description: "Specialized security services for concerts, parties, and corporate events, ensuring attendee safety while maintaining a positive atmosphere.",
      link: "/services#events"
    },
    {
      icon: FileText,
      title: "Security Consultancy",
      description: "Expert risk assessment and security planning services to identify vulnerabilities and develop comprehensive security strategies.",
      link: "/services#consultancy"
    },
    {
      icon: Award,
      title: "Security Training",
      description: "Professional training programs for security personnel, enhancing skills in threat detection, emergency response, and modern security technologies.",
      link: "/services#training"
    }
  ];

  return (
    <section className="section-padding bg-nethra-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-nethra-navy mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-nethra-accent mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-nethra-gray">
            We offer a comprehensive range of security services enhanced with technology to 
            provide superior protection for your business, events, and assets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
