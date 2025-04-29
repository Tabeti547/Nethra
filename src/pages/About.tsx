
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, CheckCircle, ShieldCheck, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-nethra-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="max-w-3xl mx-auto text-lg text-white/80">
            NSS pioneers the future of security by integrating advanced technology 
            with expert human oversight to deliver superior protection.
          </p>
        </div>
      </section>
      
      {/* About Us Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-nethra-navy mb-6">Our Journey</h2>
              <p className="text-nethra-gray mb-4">
                NSS emerges as a dynamic force in the security industry, bringing fresh perspectives 
                and innovative solutions to modern security challenges. We're building tomorrow's 
                security standards today.
              </p>
              <p className="text-nethra-gray mb-4">
                Our team brings together seasoned security professionals and technology experts 
                who share a vision of transforming how security services are delivered.
              </p>
              <p className="text-nethra-gray">
                With every project, we strengthen our commitment to excellence, innovation, 
                and client satisfaction, setting new benchmarks in the security industry.
              </p>
            </div>
            <div className="bg-nethra-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-nethra-navy mb-6">Our Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-nethra-navy mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-nethra-navy mb-1">Tech-Driven Intelligence</h4>
                    <p className="text-nethra-gray">
                      We leverage advanced technology to analyze security data, identify patterns, 
                      and predict potential threats before they materialize.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-nethra-navy mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-nethra-navy mb-1">Human Expertise</h4>
                    <p className="text-nethra-gray">
                      Our highly trained security professionals bring invaluable experience, judgment, 
                      and adaptability to complement our technological capabilities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-nethra-navy mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-nethra-navy mb-1">Integrated Solutions</h4>
                    <p className="text-nethra-gray">
                      We develop comprehensive security systems that seamlessly integrate physical 
                      security measures with advanced monitoring and analytics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-nethra-navy mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-nethra-navy mb-1">Continuous Improvement</h4>
                    <p className="text-nethra-gray">
                      We consistently refine our methods through ongoing training, technology updates, 
                      and performance analysis to stay ahead of evolving security challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section id="mission" className="py-16 bg-nethra-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-nethra-navy mb-6">Our Mission</h2>
              <p className="text-nethra-gray mb-4">
                To empower clients with superior security by seamlessly integrating human expertise with advanced technology. We deliver proactive, intelligent, and resilient protection, effectively neutralizing the evolving spectrum of physical threats to ensure operational continuity and safety in the modern era.
              </p>
              <p className="text-nethra-gray">
                Through our commitment to innovation, excellence, and client-focused solutions, we aim to:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Provide forward-thinking security solutions that anticipate and prevent threats</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Foster peace of mind through reliable, consistent protection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Adapt our approaches to meet the unique needs of each client</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Continuously elevate industry standards through technological innovation</span>
                </li>
              </ul>
            </div>
            
            <div id="vision" className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-nethra-navy mb-6">Our Vision</h2>
              <p className="text-nethra-gray mb-4">
                To be the global benchmark for intelligent security, pioneering the fusion of technology and human insight. 
                We aim to create inherently safer, smarter, and more secure environments for businesses and communities 
                worldwide, defining the future standard of protection through continuous technological innovation.
              </p>
              <p className="text-nethra-gray">
                Our vision encompasses:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Leading the transformation of the security industry through technology integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Setting new benchmarks for security effectiveness and efficiency</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Building resilient security ecosystems that adapt to evolving threats</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Becoming the trusted security partner for organizations worldwide</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-nethra-navy mb-8 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-nethra-light p-6 rounded-lg">
              <div className="w-16 h-16 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck size={32} className="text-nethra-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-nethra-navy">Integrity</h3>
              <p className="text-nethra-gray">
                We conduct all operations with unwavering honesty, transparency, and ethical standards, 
                earning the trust of our clients through consistent reliability and principled practices.
              </p>
            </div>
            
            <div className="bg-nethra-light p-6 rounded-lg">
              <div className="w-16 h-16 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-4">
                <Award size={32} className="text-nethra-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-nethra-navy">Excellence</h3>
              <p className="text-nethra-gray">
                We pursue the highest standards in every aspect of our service, from personnel training 
                to technology implementation, constantly striving to exceed expectations and deliver superior results.
              </p>
            </div>
            
            <div className="bg-nethra-light p-6 rounded-lg">
              <div className="w-16 h-16 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-4">
                <Users size={32} className="text-nethra-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-nethra-navy">Collaboration</h3>
              <p className="text-nethra-gray">
                We believe in the power of teamwork, fostering strong partnerships with our clients and 
                working together to develop comprehensive security solutions that address specific needs and challenges.
              </p>
            </div>
            
            <div className="bg-nethra-light p-6 rounded-lg">
              <div className="w-16 h-16 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-4">
                <Award size={32} className="text-nethra-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-nethra-navy">Innovation</h3>
              <p className="text-nethra-gray">
                We embrace technological advancements and creative thinking, continuously exploring new approaches 
                to security challenges and pioneering solutions that set new industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-nethra-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Tech-Driven Security?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Contact us today to learn more about our technology-powered security solutions and how we can help protect your business, events, and assets.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default About;
