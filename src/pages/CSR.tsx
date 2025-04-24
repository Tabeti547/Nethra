
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShieldCheck, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CSR = () => {
  return (
    <>
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-nethra-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Corporate Social Responsibility</h1>
          <p className="max-w-3xl mx-auto text-lg text-white/80">
            We believe in giving back to the communities we serve through meaningful initiatives that 
            create positive social impact alongside our business operations.
          </p>
        </div>
      </section>
      
      {/* CSR Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-nethra-navy mb-6 text-center">Our Approach to CSR</h2>
            <p className="text-lg text-nethra-gray mb-4">
              At Nethra Security Services, we recognize that our responsibility extends beyond providing security solutions. 
              We are committed to making a positive contribution to society and the environment through our 
              Corporate Social Responsibility (CSR) initiatives.
            </p>
            <p className="text-lg text-nethra-gray mb-4">
              Our CSR approach is built on the principles of sustainability, community engagement, and ethical business 
              practices. We focus on areas where we can leverage our expertise and resources to create meaningful impact, 
              particularly in communities where we operate.
            </p>
            <p className="text-lg text-nethra-gray">
              Through strategic partnerships, employee volunteerism, and targeted initiatives, we aim to address 
              social challenges while promoting environmental sustainability and inclusive growth.
            </p>
          </div>
        </div>
      </section>
      
      {/* CSR Focus Areas */}
      <section className="py-16 bg-nethra-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-nethra-navy mb-12 text-center">Our CSR Focus Areas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <div className="w-16 h-16 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-6">
                <Users size={32} className="text-nethra-navy" />
              </div>
              <h3 className="text-xl font-bold text-nethra-navy mb-4">Community Development</h3>
              <p className="text-nethra-gray mb-4">
                We invest in programs that strengthen communities by addressing local needs and creating 
                opportunities for growth and development.
              </p>
              <ul className="space-y-3">
                <li className="pl-5 relative text-nethra-gray">
                  <span className="absolute left-0 top-2 w-3 h-3 bg-nethra-navy/20 rounded-full"></span>
                  Educational support programs for underprivileged children
                </li>
                <li className="pl-5 relative text-nethra-gray">
                  <span className="absolute left-0 top-2 w-3 h-3 bg-nethra-navy/20 rounded-full"></span>
                  Vocational training initiatives for youth employability
                </li>
                <li className="pl-5 relative text-nethra-gray">
                  <span className="absolute left-0 top-2 w-3 h-3 bg-nethra-navy/20 rounded-full"></span>
                  Community health and wellness campaigns
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <div className="w-16 h-16 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck size={32} className="text-nethra-navy" />
              </div>
              <h3 className="text-xl font-bold text-nethra-navy mb-4">Security Awareness</h3>
              <p className="text-nethra-gray mb-4">
                We leverage our security expertise to promote safety awareness and preparedness in 
                communities, schools, and organizations.
              </p>
              <ul className="space-y-3">
                <li className="pl-5 relative text-nethra-gray">
                  <span className="absolute left-0 top-2 w-3 h-3 bg-nethra-navy/20 rounded-full"></span>
                  Free security workshops for community organizations
                </li>
                <li className="pl-5 relative text-nethra-gray">
                  <span className="absolute left-0 top-2 w-3 h-3 bg-nethra-navy/20 rounded-full"></span>
                  Safety awareness programs for schools and colleges
                </li>
                <li className="pl-5 relative text-nethra-gray">
                  <span className="absolute left-0 top-2 w-3 h-3 bg-nethra-navy/20 rounded-full"></span>
                  Disaster preparedness training for vulnerable communities
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <div className="w-16 h-16 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-6">
                <Heart size={32} className="text-nethra-navy" />
              </div>
              <h3 className="text-xl font-bold text-nethra-navy mb-4">Environmental Sustainability</h3>
              <p className="text-nethra-gray mb-4">
                We are committed to minimizing our environmental footprint and promoting sustainable 
                practices in our operations and communities.
              </p>
              <ul className="space-y-3">
                <li className="pl-5 relative text-nethra-gray">
                  <span className="absolute left-0 top-2 w-3 h-3 bg-nethra-navy/20 rounded-full"></span>
                  Tree plantation drives in urban and rural areas
                </li>
                <li className="pl-5 relative text-nethra-gray">
                  <span className="absolute left-0 top-2 w-3 h-3 bg-nethra-navy/20 rounded-full"></span>
                  Waste reduction and recycling initiatives
                </li>
                <li className="pl-5 relative text-nethra-gray">
                  <span className="absolute left-0 top-2 w-3 h-3 bg-nethra-navy/20 rounded-full"></span>
                  Energy conservation awareness campaigns
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured CSR Initiatives */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-nethra-navy mb-12 text-center">Our Featured Initiatives</h2>
          
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-nethra-light h-64 rounded-lg"></div>
              <div>
                <h3 className="text-2xl font-bold text-nethra-navy mb-4">Security Skills for Youth</h3>
                <p className="text-nethra-gray mb-4">
                  This flagship program provides vocational training in security services for underprivileged 
                  youth, equipping them with employable skills and creating pathways to sustainable careers.
                </p>
                <p className="text-nethra-gray mb-4">
                  Through partnerships with local NGOs and educational institutions, we offer comprehensive 
                  training that covers basic security protocols, technology usage, and soft skills development. 
                  Successful trainees are offered placement opportunities either within our organization or 
                  through our industry network.
                </p>
                <div className="flex items-center space-x-4 text-nethra-gray">
                  <div>
                    <span className="block text-2xl font-bold text-nethra-navy">250+</span>
                    <span className="text-sm">Youth Trained</span>
                  </div>
                  <div className="h-8 w-px bg-nethra-gray/20"></div>
                  <div>
                    <span className="block text-2xl font-bold text-nethra-navy">85%</span>
                    <span className="text-sm">Placement Rate</span>
                  </div>
                  <div className="h-8 w-px bg-nethra-gray/20"></div>
                  <div>
                    <span className="block text-2xl font-bold text-nethra-navy">12</span>
                    <span className="text-sm">Partner NGOs</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-nethra-navy mb-4">Community Safety Network</h3>
                <p className="text-nethra-gray mb-4">
                  This initiative focuses on enhancing safety and security awareness in residential communities, 
                  particularly in vulnerable neighborhoods. We conduct regular workshops, training sessions, and 
                  awareness campaigns to empower residents with knowledge and skills to create safer environments.
                </p>
                <p className="text-nethra-gray mb-4">
                  The program includes neighborhood watch training, basic emergency response procedures, and 
                  guidance on implementing cost-effective security measures. We also establish communication 
                  channels between communities and local law enforcement to strengthen cooperation.
                </p>
                <div className="flex items-center space-x-4 text-nethra-gray">
                  <div>
                    <span className="block text-2xl font-bold text-nethra-navy">35+</span>
                    <span className="text-sm">Communities</span>
                  </div>
                  <div className="h-8 w-px bg-nethra-gray/20"></div>
                  <div>
                    <span className="block text-2xl font-bold text-nethra-navy">5,000+</span>
                    <span className="text-sm">Residents Trained</span>
                  </div>
                  <div className="h-8 w-px bg-nethra-gray/20"></div>
                  <div>
                    <span className="block text-2xl font-bold text-nethra-navy">20%</span>
                    <span className="text-sm">Incident Reduction</span>
                  </div>
                </div>
              </div>
              <div className="bg-nethra-light h-64 rounded-lg order-1 md:order-2"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-nethra-light h-64 rounded-lg"></div>
              <div>
                <h3 className="text-2xl font-bold text-nethra-navy mb-4">Green Security Initiative</h3>
                <p className="text-nethra-gray mb-4">
                  This pioneering program integrates environmental sustainability into security operations, 
                  demonstrating that effective security can coexist with eco-friendly practices. We implement 
                  energy-efficient security systems, reduce paper usage through digital reporting, and utilize 
                  electric vehicles for patrol services where feasible.
                </p>
                <p className="text-nethra-gray mb-4">
                  Additionally, we organize regular environmental conservation activities such as tree planting 
                  drives, clean-up campaigns, and awareness programs. Our security personnel are trained to 
                  be environmental stewards, incorporating sustainability principles into their daily duties.
                </p>
                <div className="flex items-center space-x-4 text-nethra-gray">
                  <div>
                    <span className="block text-2xl font-bold text-nethra-navy">30%</span>
                    <span className="text-sm">Carbon Reduction</span>
                  </div>
                  <div className="h-8 w-px bg-nethra-gray/20"></div>
                  <div>
                    <span className="block text-2xl font-bold text-nethra-navy">5,000+</span>
                    <span className="text-sm">Trees Planted</span>
                  </div>
                  <div className="h-8 w-px bg-nethra-gray/20"></div>
                  <div>
                    <span className="block text-2xl font-bold text-nethra-navy">15</span>
                    <span className="text-sm">Electric Vehicles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CSR Policy */}
      <section className="py-16 bg-nethra-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-nethra-navy mb-8 text-center">Our CSR Policy</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-nethra-gray mb-4">
                Nethra Security Services' Corporate Social Responsibility (CSR) policy is guided by the following principles:
              </p>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-nethra-navy/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-nethra-navy font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nethra-navy mb-1">Ethical Business Conduct</h4>
                    <p className="text-nethra-gray">
                      Maintaining the highest standards of integrity, transparency, and accountability in all our operations.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-nethra-navy/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-nethra-navy font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nethra-navy mb-1">Community Engagement</h4>
                    <p className="text-nethra-gray">
                      Actively engaging with communities to understand their needs and develop initiatives that create lasting positive impact.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-nethra-navy/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-nethra-navy font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nethra-navy mb-1">Environmental Responsibility</h4>
                    <p className="text-nethra-gray">
                      Minimizing our environmental footprint and promoting sustainable practices in our operations and communities.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-nethra-navy/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-nethra-navy font-semibold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nethra-navy mb-1">Inclusive Growth</h4>
                    <p className="text-nethra-gray">
                      Creating opportunities for marginalized groups and promoting diversity and inclusion in all our initiatives.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-nethra-navy/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-nethra-navy font-semibold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nethra-navy mb-1">Employee Participation</h4>
                    <p className="text-nethra-gray">
                      Encouraging and facilitating employee involvement in CSR activities through volunteerism and skill-sharing.
                    </p>
                  </div>
                </li>
              </ul>
              
              <p className="text-nethra-gray">
                Our CSR policy is implemented through a dedicated committee that oversees the planning, execution, 
                and monitoring of all initiatives. We allocate resources based on identified needs and potential 
                impact, ensuring that our efforts create meaningful and sustainable change.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Training Companies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-nethra-navy mb-12 text-center">Our Training Partners</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-nethra-light p-8 rounded-lg h-40 flex items-center justify-center">
              <div className="text-center">
                <div className="text-xl font-bold text-nethra-navy">Training Partner 1</div>
                <p className="text-sm text-nethra-gray">Security Training</p>
              </div>
            </div>
            
            <div className="bg-nethra-light p-8 rounded-lg h-40 flex items-center justify-center">
              <div className="text-center">
                <div className="text-xl font-bold text-nethra-navy">Training Partner 2</div>
                <p className="text-sm text-nethra-gray">Technology Training</p>
              </div>
            </div>
            
            <div className="bg-nethra-light p-8 rounded-lg h-40 flex items-center justify-center">
              <div className="text-center">
                <div className="text-xl font-bold text-nethra-navy">Training Partner 3</div>
                <p className="text-sm text-nethra-gray">Skill Development</p>
              </div>
            </div>
            
            <div className="bg-nethra-light p-8 rounded-lg h-40 flex items-center justify-center">
              <div className="text-center">
                <div className="text-xl font-bold text-nethra-navy">Training Partner 4</div>
                <p className="text-sm text-nethra-gray">Leadership Training</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-nethra-gray mb-6">
              We collaborate with leading training institutions and organizations to provide comprehensive, 
              up-to-date training for both our security personnel and community beneficiaries.
            </p>
            <Button variant="outline" className="border-nethra-navy text-nethra-navy" asChild>
              <Link to="/contact">Become a Training Partner</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Our Clients */}
      <section className="py-16 bg-nethra-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-nethra-navy mb-12 text-center">Our Valued Clients</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-white p-6 rounded-lg h-28 flex items-center justify-center">
              <div className="text-center">
                <div className="font-semibold text-nethra-navy">Client 1</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg h-28 flex items-center justify-center">
              <div className="text-center">
                <div className="font-semibold text-nethra-navy">Client 2</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg h-28 flex items-center justify-center">
              <div className="text-center">
                <div className="font-semibold text-nethra-navy">Client 3</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg h-28 flex items-center justify-center">
              <div className="text-center">
                <div className="font-semibold text-nethra-navy">Client 4</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg h-28 flex items-center justify-center">
              <div className="text-center">
                <div className="font-semibold text-nethra-navy">Client 5</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg h-28 flex items-center justify-center">
              <div className="text-center">
                <div className="font-semibold text-nethra-navy">Client 6</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg h-28 flex items-center justify-center">
              <div className="text-center">
                <div className="font-semibold text-nethra-navy">Client 7</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg h-28 flex items-center justify-center">
              <div className="text-center">
                <div className="font-semibold text-nethra-navy">Client 8</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg h-28 flex items-center justify-center">
              <div className="text-center">
                <div className="font-semibold text-nethra-navy">Client 9</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg h-28 flex items-center justify-center">
              <div className="text-center">
                <div className="font-semibold text-nethra-navy">Client 10</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg h-28 flex items-center justify-center">
              <div className="text-center">
                <div className="font-semibold text-nethra-navy">Client 11</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg h-28 flex items-center justify-center">
              <div className="text-center">
                <div className="font-semibold text-nethra-navy">Client 12</div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-nethra-gray mb-6">
              We are proud to serve a diverse range of clients across various industries, providing them 
              with customized security solutions that meet their unique needs.
            </p>
            <Button asChild>
              <Link to="/contact">Become a Client</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-nethra-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Partner with Us for Social Impact</h2>
          <p className="max-w-2xl mx-auto text-lg text-white/80 mb-8">
            Interested in collaborating on CSR initiatives or learning more about our social impact programs? 
            Contact us to explore partnership opportunities.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default CSR;
