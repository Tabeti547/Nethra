
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Users, Building, Calendar, FileText, Award, 
  CheckCircle, ArrowRight, ChevronRight
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-section">
        <div className="absolute inset-0 bg-nethra-navy opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Nethra Security Services for a Safer Tomorrow, Powered by Technology
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Nethra Security Services pioneers the future of security by integrating advanced AI technology 
              with expert human oversight for unparalleled protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
      
      {/* Technology Showcase Section - REMOVED */}
      
      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-nethra-navy mb-4">About Nethra Security</h2>
            <div className="w-24 h-1 bg-nethra-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-nethra-navy mb-4">Pioneering the Future of Security</h3>
              <p className="text-nethra-gray mb-6">
                Nethra Security Services pioneers the future of security by integrating advanced AI and technology 
                with expert human oversight. Responding to today's complex threat landscape, we deliver intelligent 
                solutions that move beyond traditional methods.
              </p>
              <p className="text-nethra-gray mb-6">
                We offer proactive, data-driven physical and digital security, utilizing machine learning for 
                predictive insights and automation for enhanced efficiency. Our blend of seasoned security 
                professionals and tech innovators ensures smarter, faster, and more resilient protection.
              </p>
              <p className="text-nethra-gray mb-6">
                We provide the next generation of security, safeguarding your assets, people, and operations 
                in a rapidly evolving world, delivering peace of mind through intelligent vigilance.
              </p>
              <Button className="mt-2" asChild>
                <Link to="/about">Learn More About Us <ArrowRight size={16} className="ml-2" /></Link>
              </Button>
            </div>
            <div className="bg-nethra-navy/5 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                  <h4 className="font-bold text-xl mb-2 text-nethra-navy">Our Mission</h4>
                  <p className="text-nethra-gray">
                    To empower clients with superior security by seamlessly integrating human expertise with advanced AI and technology.
                  </p>
                  <Link to="/about#mission" className="inline-flex items-center text-nethra-accent mt-3 hover:underline">
                    Read More <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                  <h4 className="font-bold text-xl mb-2 text-nethra-navy">Our Vision</h4>
                  <p className="text-nethra-gray">
                    To be the global benchmark for intelligent security, pioneering the fusion of AI and human insight.
                  </p>
                  <Link to="/about#vision" className="inline-flex items-center text-nethra-accent mt-3 hover:underline">
                    Read More <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section-padding bg-nethra-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-nethra-navy mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-nethra-accent mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-nethra-gray">
              We offer a comprehensive range of security services enhanced with AI technology to 
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
                  equipped with AI-assisted monitoring tools for enhanced vigilance.
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
                  <ShieldCheck size={28} className="text-nethra-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-nethra-navy">Executive Protection</h3>
                <p className="text-nethra-gray mb-4">
                  Personalized security solutions for executives and VIPs, combining 
                  discreet physical protection with advanced threat monitoring.
                </p>
                <Link to="/services#executive" className="inline-flex items-center text-nethra-accent hover:underline">
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
      
      {/* Why Choose Us */}
      <section className="section-padding bg-nethra-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Nethra Security</h2>
            <div className="w-24 h-1 bg-nethra-accent mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-white/80">
              We deliver exceptional security services that combine advanced technology with 
              human expertise for comprehensive protection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
              <CheckCircle size={32} className="text-nethra-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">AI-Enhanced Security</h3>
              <p className="text-white/80">
                Our security solutions integrate cutting-edge AI technology for predictive threat 
                detection and automated response systems.
              </p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
              <CheckCircle size={32} className="text-nethra-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Experienced Personnel</h3>
              <p className="text-white/80">
                Our security teams comprise highly trained professionals with extensive experience 
                across various security domains.
              </p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
              <CheckCircle size={32} className="text-nethra-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Customized Solutions</h3>
              <p className="text-white/80">
                We tailor our security services to meet your specific needs, ensuring optimal 
                protection for your business or event.
              </p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
              <CheckCircle size={32} className="text-nethra-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">24/7 Monitoring</h3>
              <p className="text-white/80">
                Our round-the-clock security monitoring ensures continuous protection and 
                immediate response to potential threats.
              </p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
              <CheckCircle size={32} className="text-nethra-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Compliance Adherence</h3>
              <p className="text-white/80">
                We maintain strict compliance with all industry regulations and standards, 
                ensuring legal and ethical security practices.
              </p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
              <CheckCircle size={32} className="text-nethra-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Data-Driven Approach</h3>
              <p className="text-white/80">
                Our security strategies are informed by comprehensive data analysis, enabling 
                proactive threat mitigation and continuous improvement.
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
                <ShieldCheck size={36} className="text-nethra-navy" />
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
                <FileText size={36} className="text-nethra-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-nethra-navy">Innovation</h3>
              <p className="text-nethra-gray">
                We embrace technological advancements and creative thinking to deliver cutting-edge security solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-nethra-navy to-nethra-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Security?</h2>
          <p className="max-w-2xl mx-auto text-lg text-white/90 mb-8">
            Contact us today to discuss how our AI-powered security solutions can protect 
            your business, events, and assets.
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
