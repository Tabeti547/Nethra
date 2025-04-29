
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Certifications = () => {
  return (
    <>
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-nethra-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Certifications & Compliance</h1>
          <p className="max-w-3xl mx-auto text-lg text-white/80">
            Our industry certifications and regulatory compliance demonstrate our commitment to maintaining 
            the highest standards in security services.
          </p>
        </div>
      </section>
      
      {/* Certifications Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-nethra-navy mb-6 text-center">Our Certifications Journey</h2>
            <p className="text-lg text-nethra-gray mb-4">
              At Nethra Security Services, we pursue and maintain certifications that validate our expertise, 
              processes, and commitment to excellence. These certifications reflect our dedication to continuous 
              improvement and adherence to international best practices in security services.
            </p>
            <p className="text-lg text-nethra-gray mb-4">
              Each certification we hold represents a rigorous assessment of our capabilities and a confirmation 
              of our ability to deliver security services that meet or exceed established industry standards. 
              We regularly undergo audits and assessments to maintain these certifications, ensuring our 
              practices remain current and effective.
            </p>
            <p className="text-lg text-nethra-gray">
              Our certification portfolio encompasses multiple aspects of security operations, from quality 
              management and risk assessment to specialized security services and technological implementations.
            </p>
          </div>
        </div>
      </section>
      
      {/* Certifications List */}
      <section className="py-16 bg-nethra-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-nethra-navy mb-12 text-center">Our Key Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* PSARA Compliance - Now first */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck size={32} className="text-nethra-navy" />
              </div>
              <h3 className="text-xl font-bold text-nethra-navy mb-4">PSARA Compliance</h3>
              <p className="text-nethra-gray mb-4">
                Full compliance with the Private Security Agencies Regulation Act, confirming our adherence 
                to all legal requirements for operating a security services agency in India.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Valid PSARA license</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Adherence to prescribed training standards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Compliance with all regulatory requirements</span>
                </li>
              </ul>
            </div>
            
            {/* ISO Certifications */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-6">
                <Award size={32} className="text-nethra-navy" />
              </div>
              <h3 className="text-xl font-bold text-nethra-navy mb-4">ISO 9001:2015</h3>
              <p className="text-nethra-gray mb-4">
                Quality Management System certification validating our commitment to consistent service excellence 
                and customer satisfaction through effective quality management processes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Standardized operational procedures</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Continuous improvement framework</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Customer-focused approach</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-6">
                <Award size={32} className="text-nethra-navy" />
              </div>
              <h3 className="text-xl font-bold text-nethra-navy mb-4">ISO 14001:2015</h3>
              <p className="text-nethra-gray mb-4">
                Environmental Management System certification demonstrating our commitment to minimizing 
                environmental impact and promoting sustainable practices in our operations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Eco-friendly operational practices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Reduced resource consumption</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Environmental risk management</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-6">
                <Award size={32} className="text-nethra-navy" />
              </div>
              <h3 className="text-xl font-bold text-nethra-navy mb-4">ISO 27001:2013</h3>
              <p className="text-nethra-gray mb-4">
                Information Security Management System certification confirming our robust approach to 
                protecting sensitive information and maintaining data security protocols.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Comprehensive data protection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Information security risk management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Secure information handling procedures</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-6">
                <Award size={32} className="text-nethra-navy" />
              </div>
              <h3 className="text-xl font-bold text-nethra-navy mb-4">ISO 45001:2018</h3>
              <p className="text-nethra-gray mb-4">
                Occupational Health and Safety Management System certification recognizing our dedication 
                to maintaining safe working conditions and protecting employee wellbeing.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Comprehensive safety protocols</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Regular safety training and assessments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Occupational hazard prevention</span>
                </li>
              </ul>
            </div>
            
            {/* AI Security Certification removed as requested */}
          </div>
        </div>
      </section>
      
      {/* Security Compliance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-nethra-navy mb-12 text-center">Security Compliance Standards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-nethra-navy mb-6">Regulatory Compliance</h3>
              <p className="text-nethra-gray mb-6">
                Beyond certifications, we maintain strict adherence to all applicable laws and regulations 
                governing security services in each region we operate. This includes compliance with:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-nethra-navy/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <CheckCircle size={20} className="text-nethra-navy" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-nethra-navy mb-1">Labor Laws</h4>
                    <p className="text-nethra-gray">
                      Complete adherence to all applicable labor regulations, ensuring fair treatment, 
                      appropriate working hours, and proper compensation for all employees.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-nethra-navy/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <CheckCircle size={20} className="text-nethra-navy" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-nethra-navy mb-1">Security Industry Regulations</h4>
                    <p className="text-nethra-gray">
                      Full compliance with industry-specific regulations governing security services, 
                      including personnel licensing, training requirements, and operational standards.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-nethra-navy/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <CheckCircle size={20} className="text-nethra-navy" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-nethra-navy mb-1">Data Protection Regulations</h4>
                    <p className="text-nethra-gray">
                      Strict adherence to data privacy laws and regulations, ensuring proper handling, 
                      storage, and protection of all sensitive information.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-nethra-navy mb-6">Internal Compliance Measures</h3>
              <p className="text-nethra-gray mb-6">
                We maintain robust internal compliance mechanisms that go beyond regulatory requirements 
                to ensure the highest standards of service delivery and operational integrity:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-nethra-navy/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <CheckCircle size={20} className="text-nethra-navy" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-nethra-navy mb-1">Regular Audits</h4>
                    <p className="text-nethra-gray">
                      Systematic internal and external audits of our operations, ensuring adherence 
                      to established protocols and identifying areas for improvement.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-nethra-navy/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <CheckCircle size={20} className="text-nethra-navy" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-nethra-navy mb-1">Continuous Training</h4>
                    <p className="text-nethra-gray">
                      Ongoing education and training programs for all personnel, ensuring awareness of 
                      compliance requirements and the skills needed to meet them.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-nethra-navy/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <CheckCircle size={20} className="text-nethra-navy" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-nethra-navy mb-1">Ethics Framework</h4>
                    <p className="text-nethra-gray">
                      A comprehensive code of ethics and professional conduct that guides all aspects of 
                      our operations and interactions with clients, employees, and the public.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-nethra-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Partner with a Certified Security Leader</h2>
          <p className="max-w-2xl mx-auto text-lg text-white/80 mb-8">
            Experience the difference that comes from working with a security service provider that meets the highest standards of certification and compliance.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Certifications;
