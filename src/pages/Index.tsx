import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Building, Calendar, FileText, Award, 
  CheckCircle, ChevronRight, Briefcase, Star, Settings
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-r from-nethra-navy to-nethra-blue">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
              Nethra Security Services for a Safer Tomorrow
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-fade-in delay-100">
              Where human expertise meets technology for unparalleled protection.
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
      
      {/* About Section */}
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
      
      {/* Services Section with Visual Cards */}
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
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="p-6">
                <div className="w-14 h-14 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-6">
                  <Users size={28} className="text-nethra-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-nethra-navy">Manpower Guarding</h3>
                <p className="text-nethra-gray mb-4">
                  Professional security personnel trained in the latest security protocols and 
                  equipped with technology-assisted monitoring tools for enhanced vigilance.
                </p>
                <Link to="/services#manpower" className="inline-flex items-center text-nethra-accent hover:underline">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="p-6">
                <div className="w-14 h-14 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-6">
                  <Building size={28} className="text-nethra-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-nethra-navy">Security for Businesses</h3>
                <p className="text-nethra-gray mb-4">
                  Comprehensive security solutions tailored for corporate environments, including 
                  access control, surveillance systems, and threat assessment.
                </p>
                <Link to="/services#business" className="inline-flex items-center text-nethra-accent hover:underline">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="p-6">
                <div className="w-14 h-14 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-6">
                  <Calendar size={28} className="text-nethra-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-nethra-navy">Event Security</h3>
                <p className="text-nethra-gray mb-4">
                  Specialized security services for concerts, parties, and corporate events, 
                  ensuring attendee safety while maintaining a positive atmosphere.
                </p>
                <Link to="/services#events" className="inline-flex items-center text-nethra-accent hover:underline">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="p-6">
                <div className="w-14 h-14 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-6">
                  <FileText size={28} className="text-nethra-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-nethra-navy">Security Consultancy</h3>
                <p className="text-nethra-gray mb-4">
                  Expert risk assessment and security planning services to identify vulnerabilities 
                  and develop comprehensive security strategies.
                </p>
                <Link to="/services#consultancy" className="inline-flex items-center text-nethra-accent hover:underline">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="p-6">
                <div className="w-14 h-14 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-6">
                  <FileText size={28} className="text-nethra-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-nethra-navy">Security Consultancy</h3>
                <p className="text-nethra-gray mb-4">
                  Expert risk assessment and security planning services to identify vulnerabilities 
                  and develop comprehensive security strategies.
                </p>
                <Link to="/services#consultancy" className="inline-flex items-center text-nethra-accent hover:underline">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="p-6">
                <div className="w-14 h-14 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-6">
                  <Award size={28} className="text-nethra-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-nethra-navy">Security Training</h3>
                <p className="text-nethra-gray mb-4">
                  Professional training programs for security personnel, enhancing skills in 
                  threat detection, emergency response, and modern security technologies.
                </p>
                <Link to="/services#training" className="inline-flex items-center text-nethra-accent hover:underline">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section with Modern Design */}
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
      
      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-nethra-navy mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-nethra-accent mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-nethra-gray">
              These principles guide everything we do as we strive to provide the highest level of security services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-nethra-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={36} className="text-nethra-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-nethra-navy">Integrity</h3>
              <p className="text-nethra-gray">
                We uphold the highest ethical standards in all our operations, building trust through transparency and honesty.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-nethra-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={36} className="text-nethra-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-nethra-navy">Excellence</h3>
              <p className="text-nethra-gray">
                We continuously strive to exceed expectations through rigorous training, innovation, and attention to detail.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-nethra-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={36} className="text-nethra-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-nethra-navy">Collaboration</h3>
              <p className="text-nethra-gray">
                We work closely with our clients and partners to develop integrated security solutions that address specific needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-nethra-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings size={36} className="text-nethra-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-nethra-navy">Innovation</h3>
              <p className="text-nethra-gray">
                We embrace technological advancements and creative thinking to deliver cutting-edge security solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section with Enhanced Design */}
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
      
      <Footer />
    </>
  );
};

export default Index;
