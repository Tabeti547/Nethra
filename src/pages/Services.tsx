import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Users, Building, Calendar, FileText, Award, CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Services = () => {
  return (
    <>
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-nethra-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="max-w-3xl mx-auto text-lg text-white/80">
            We offer comprehensive security solutions that blend advanced technology with expert human oversight 
            to provide unparalleled protection for your business, events, and assets.
          </p>
        </div>
      </section>
      
      {/* Services Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-nethra-navy mb-6">Comprehensive Security Solutions</h2>
            <p className="text-lg text-nethra-gray">
              At NSS, we deliver intelligent security solutions that move beyond traditional methods. 
              Our technology-integrated approach ensures proactive threat detection, efficient resource allocation, and seamless 
              security operations across all our service offerings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-nethra-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-nethra-navy mb-6">Why Our Services Stand Out</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle size={24} className="text-nethra-navy mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-nethra-navy mb-1">Tech-Driven Monitoring</h4>
                    <p className="text-nethra-gray">
                      Our security systems use advanced technology to analyze video feeds, detect anomalies, and alert 
                      security personnel to potential threats in real-time.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={24} className="text-nethra-navy mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-nethra-navy mb-1">Data-Driven Security</h4>
                    <p className="text-nethra-gray">
                      We leverage analytics to identify patterns and vulnerabilities, enabling proactive 
                      security measures that prevent incidents before they occur.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={24} className="text-nethra-navy mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-nethra-navy mb-1">Expert Personnel</h4>
                    <p className="text-nethra-gray">
                      Our security professionals undergo rigorous training in both traditional security 
                      practices and the latest technological advancements.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={24} className="text-nethra-navy mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-nethra-navy mb-1">Customized Solutions</h4>
                    <p className="text-nethra-gray">
                      We tailor our services to your specific needs, ensuring you receive the most effective 
                      and efficient security solution for your unique situation.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-nethra-navy mb-4">Our Security Approach</h3>
              <p className="text-nethra-gray mb-4">
                We provide a holistic approach to security that addresses both physical and digital vulnerabilities.
                Our integrated security solutions combine the irreplaceable human element with cutting-edge 
                technology to create a comprehensive security ecosystem.
              </p>
              <p className="text-nethra-gray mb-4">
                By utilizing advanced algorithms, we enhance traditional security measures 
                with predictive capabilities, automated monitoring, and rapid response protocols. This fusion 
                of technology and expertise allows us to deliver security services that are more efficient, 
                effective, and adaptable than conventional approaches.
              </p>
              <p className="text-nethra-gray">
                Whether you require security personnel, technological solutions, or strategic consulting, 
                our services are designed to provide peace of mind through intelligent vigilance and proactive protection.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Detailed Services */}
      <section id="manpower" className="py-16 bg-nethra-light">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
              <div className="w-16 h-16 bg-nethra-navy/10 rounded-full flex items-center justify-center md:flex-shrink-0">
                <Users size={32} className="text-nethra-navy" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-nethra-navy">Manpower Guarding</h2>
                <p className="text-nethra-gray">Professional security personnel trained with the latest security protocols</p>
              </div>
            </div>
            <p className="text-nethra-gray mb-4">
              Our Manpower Guarding service provides highly trained security personnel who serve as the frontline 
              defense for your premises. Unlike traditional security guards, our team is equipped with technology-assisted 
              tools that enhance their capabilities and effectiveness.
            </p>
            <p className="text-nethra-gray mb-4">
              Each security professional undergoes rigorous training in threat assessment, conflict resolution, 
              emergency response, and the use of our proprietary technology platforms. This ensures they can 
              handle a wide range of security situations with confidence and expertise.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-nethra-light p-4 rounded-md">
                <h4 className="font-semibold text-nethra-navy mb-2">Key Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Technology-assisted monitoring tools for enhanced vigilance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Real-time reporting and incident documentation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Comprehensive background checks for all personnel</span>
                  </li>
                </ul>
              </div>
              <div className="bg-nethra-light p-4 rounded-md">
                <h4 className="font-semibold text-nethra-navy mb-2">Applications:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Corporate offices and business complexes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Residential communities and apartments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Industrial facilities and warehouses</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div id="business" className="bg-white p-8 rounded-lg shadow-md mb-12">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
              <div className="w-16 h-16 bg-nethra-navy/10 rounded-full flex items-center justify-center md:flex-shrink-0">
                <Building size={32} className="text-nethra-navy" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-nethra-navy">Security for Businesses</h2>
                <p className="text-nethra-gray">Comprehensive security solutions for corporate environments</p>
              </div>
            </div>
            <p className="text-nethra-gray mb-4">
              Our Business Security solutions are designed to protect your company's assets, employees, and 
              operations from a wide range of threats. We integrate advanced surveillance systems, access control, 
              and technology-powered monitoring with expert security personnel to create a robust security framework.
            </p>
            <p className="text-nethra-gray mb-4">
              We begin with a thorough security assessment of your premises, identifying vulnerabilities and 
              developing a customized security plan that addresses your specific needs and concerns. Our 
              solutions are scalable, allowing us to provide appropriate security measures for businesses of all sizes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-nethra-light p-4 rounded-md">
                <h4 className="font-semibold text-nethra-navy mb-2">Key Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Integrated access control and surveillance systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Technology-powered threat detection and alert systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Emergency response planning and implementation</span>
                  </li>
                </ul>
              </div>
              <div className="bg-nethra-light p-4 rounded-md">
                <h4 className="font-semibold text-nethra-navy mb-2">Applications:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Corporate headquarters and branch offices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Retail establishments and shopping centers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Financial institutions and banks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div id="events" className="bg-white p-8 rounded-lg shadow-md mb-12">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
              <div className="w-16 h-16 bg-nethra-navy/10 rounded-full flex items-center justify-center md:flex-shrink-0">
                <Calendar size={32} className="text-nethra-navy" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-nethra-navy">Event Security</h2>
                <p className="text-nethra-gray">Specialized security for concerts, parties, and corporate events</p>
              </div>
            </div>
            <p className="text-nethra-gray mb-4">
              Our Event Security services ensure the safety and smooth operation of gatherings of all sizes. 
              We provide comprehensive security coverage that maintains a positive atmosphere while effectively 
              managing potential risks and disruptions.
            </p>
            <p className="text-nethra-gray mb-4">
              From crowd management and access control to emergency response coordination and VIP protection, 
              our team has the expertise and technology to handle every aspect of event security. We work closely 
              with event organizers to develop security plans that align with the nature and requirements of each event.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-nethra-light p-4 rounded-md">
                <h4 className="font-semibold text-nethra-navy mb-2">Key Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Advanced crowd monitoring and management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Discrete security personnel in appropriate attire</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Coordination with local authorities and emergency services</span>
                  </li>
                </ul>
              </div>
              <div className="bg-nethra-light p-4 rounded-md">
                <h4 className="font-semibold text-nethra-navy mb-2">Applications:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Corporate events and conferences</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Concerts and entertainment events</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Private parties and social gatherings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div id="consultancy" className="bg-white p-8 rounded-lg shadow-md mb-12">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
              <div className="w-16 h-16 bg-nethra-navy/10 rounded-full flex items-center justify-center md:flex-shrink-0">
                <FileText size={32} className="text-nethra-navy" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-nethra-navy">Security Consultancy & Risk Management</h2>
                <p className="text-nethra-gray">Expert risk assessment and security planning services</p>
              </div>
            </div>
            <p className="text-nethra-gray mb-4">
              Our Security Consultancy services provide expert guidance on all aspects of security planning and 
              implementation. We help organizations identify vulnerabilities, assess risks, and develop comprehensive 
              security strategies that protect their assets, people, and operations.
            </p>
            <p className="text-nethra-gray mb-4">
              Leveraging our expertise in both traditional security practices and cutting-edge technology, 
              we offer insights and recommendations that enable clients to make informed decisions about their 
              security investments. Our consultancy services are tailored to address the specific needs and 
              challenges of each client.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-nethra-light p-4 rounded-md">
                <h4 className="font-semibold text-nethra-navy mb-2">Key Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Comprehensive security audits and vulnerability assessments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Development of security policies and procedures</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Technology evaluation and recommendation</span>
                  </li>
                </ul>
              </div>
              <div className="bg-nethra-light p-4 rounded-md">
                <h4 className="font-semibold text-nethra-navy mb-2">Applications:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Enterprise-wide security planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">New facility security design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Security enhancement for existing facilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div id="executive" className="bg-white p-8 rounded-lg shadow-md mb-12">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
              <div className="w-16 h-16 bg-nethra-navy/10 rounded-full flex items-center justify-center md:flex-shrink-0">
                <ShieldCheck size={32} className="text-nethra-navy" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-nethra-navy">Executive Protection</h2>
                <p className="text-nethra-gray">Personalized security solutions for executives and VIPs</p>
              </div>
            </div>
            <p className="text-nethra-gray mb-4">
              Our Executive Protection services provide discreet, professional security for high-profile individuals 
              who may face elevated personal risks. We combine close protection by experienced security personnel 
              with advanced threat monitoring and intelligence gathering to ensure comprehensive safety.
            </p>
            <p className="text-nethra-gray mb-4">
              Each protection detail is carefully tailored to the client's specific needs, lifestyle, and risk profile, 
              balancing effective security measures with minimal disruption to daily activities. Our protection specialists 
              are trained in both traditional close protection techniques and the latest technological tools.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-nethra-light p-4 rounded-md">
                <h4 className="font-semibold text-nethra-navy mb-2">Key Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Personalized threat assessment and protection planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Secure transportation and travel security</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Advanced technical surveillance countermeasures</span>
                  </li>
                </ul>
              </div>
              <div className="bg-nethra-light p-4 rounded-md">
                <h4 className="font-semibold text-nethra-navy mb-2">Applications:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Corporate executives and high-net-worth individuals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Public figures and celebrities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Diplomatic and political figures</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div id="training" className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
              <div className="w-16 h-16 bg-nethra-navy/10 rounded-full flex items-center justify-center md:flex-shrink-0">
                <Award size={32} className="text-nethra-navy" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-nethra-navy">Security Training</h2>
                <p className="text-nethra-gray">Professional training programs for security personnel</p>
              </div>
            </div>
            <p className="text-nethra-gray mb-4">
              Our Security Training programs are designed to enhance the skills and capabilities of security professionals, 
              equipping them with the knowledge and techniques needed to address modern security challenges. We offer 
              comprehensive training that covers both traditional security protocols and cutting-edge technologies.
            </p>
            <p className="text-nethra-gray mb-4">
              Led by experienced security professionals with extensive field experience, our training programs combine 
              theoretical instruction with practical exercises to ensure participants develop both understanding and 
              applicable skills. We offer both standard training modules and customized programs tailored to specific 
              organizational needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-nethra-light p-4 rounded-md">
                <h4 className="font-semibold text-nethra-navy mb-2">Key Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Hands-on training with modern security technology</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Scenario-based exercises for practical skill development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Certification programs for professional advancement</span>
                  </li>
                </ul>
              </div>
              <div className="bg-nethra-light p-4 rounded-md">
                <h4 className="font-semibold text-nethra-navy mb-2">Training Programs:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Basic and advanced security officer training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Crisis management and emergency response</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                    <span className="text-nethra-gray">Technology integration for security operations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-nethra-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Security Solution?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Contact us today to discuss how our technology-powered security services can be tailored to your specific needs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Services;
