
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Compliance = () => {
  return (
    <>
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-nethra-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Manpower Compliance</h1>
          <p className="max-w-3xl mx-auto text-lg text-white/80">
            We maintain strict adherence to all statutory requirements and industry standards to ensure 
            the welfare of our security personnel and compliance with legal obligations.
          </p>
        </div>
      </section>
      
      {/* Compliance Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-nethra-navy mb-6 text-center">Our Commitment to Compliance</h2>
            <p className="text-lg text-nethra-gray mb-4">
              At NSS, we believe that maintaining the highest standards of compliance is 
              not just a legal obligation but a cornerstone of our business ethics. We are committed to ensuring 
              that all our operations adhere to relevant laws, regulations, and industry best practices.
            </p>
            <p className="text-lg text-nethra-gray mb-4">
              Our comprehensive compliance framework covers all aspects of our operations, with particular focus 
              on manpower management. We ensure that our security personnel receive all statutory benefits and 
              work in conditions that promote their wellbeing and professional development.
            </p>
            <p className="text-lg text-nethra-gray">
              This commitment to compliance extends beyond just meeting legal requirements – it reflects our 
              dedication to operating with integrity, transparency, and respect for all stakeholders involved 
              in our business.
            </p>
          </div>
        </div>
      </section>
      
      {/* Compliance Areas */}
      <section className="py-16 bg-nethra-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-nethra-navy mb-12 text-center">Manpower Compliance Areas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-nethra-navy" size={28} />
              </div>
              <h3 className="text-xl font-bold text-nethra-navy mb-3">ESI (Employee State Insurance)</h3>
              <p className="text-nethra-gray mb-4">
                We ensure all eligible employees are registered under the ESI scheme, providing them with 
                comprehensive medical insurance benefits and social security protection.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Timely contribution to ESI for all eligible employees</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Complete medical coverage for employees and their families</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Assistance with claim processing and benefit availing</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-nethra-navy" size={28} />
              </div>
              <h3 className="text-xl font-bold text-nethra-navy mb-3">PF (Provident Fund)</h3>
              <p className="text-nethra-gray mb-4">
                We maintain strict compliance with Provident Fund regulations, ensuring financial security 
                for our employees through systematic retirement savings.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Regular and timely PF contributions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Transparent records and employee account management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Support for employee PF withdrawals and advances</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-nethra-navy" size={28} />
              </div>
              <h3 className="text-xl font-bold text-nethra-navy mb-3">Accommodation</h3>
              <p className="text-nethra-gray mb-4">
                Where required, we provide quality accommodation for outstation security personnel, 
                ensuring comfortable and safe living conditions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Clean, hygienic living spaces with essential amenities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Regular maintenance and upkeep of accommodations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Proximity to work locations to minimize commute</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-nethra-navy" size={28} />
              </div>
              <h3 className="text-xl font-bold text-nethra-navy mb-3">Bonus</h3>
              <p className="text-nethra-gray mb-4">
                We adhere to bonus payment regulations, providing additional financial incentives 
                to our employees in accordance with the Payment of Bonus Act.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Annual bonus payments as per statutory requirements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Performance-based incentives for exceptional service</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Special recognition for long-serving employees</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-nethra-navy" size={28} />
              </div>
              <h3 className="text-xl font-bold text-nethra-navy mb-3">Uniform</h3>
              <p className="text-nethra-gray mb-4">
                We provide high-quality uniforms to all our security personnel, ensuring a professional 
                appearance and clear identification.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Regular provision of complete uniform sets</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Climate-appropriate uniform materials and designs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Replacement policy for worn-out uniforms</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-nethra-navy" size={28} />
              </div>
              <h3 className="text-xl font-bold text-nethra-navy mb-3">Food</h3>
              <p className="text-nethra-gray mb-4">
                For deployments requiring extended shifts, we ensure our personnel have access to 
                nutritious meals to maintain their energy and alertness.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Meal allowances for off-site deployments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Catering arrangements for large security teams</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Consideration of dietary restrictions and preferences</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-nethra-navy" size={28} />
              </div>
              <h3 className="text-xl font-bold text-nethra-navy mb-3">Transport</h3>
              <p className="text-nethra-gray mb-4">
                We provide transport facilities or allowances for our security personnel, especially 
                for shifts during odd hours or at remote locations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Transport arrangements for night shifts and remote locations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Transport allowances where direct service isn't feasible</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Emergency transport provisions for unforeseen situations</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-nethra-navy/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-nethra-navy" size={28} />
              </div>
              <h3 className="text-xl font-bold text-nethra-navy mb-3">Management Charges</h3>
              <p className="text-nethra-gray mb-4">
                We maintain transparent and competitive management charges that reflect the value of our 
                comprehensive services while ensuring affordability for our clients.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Competitive and transparent charging structure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">No hidden costs or unexpected surcharges</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-nethra-navy mr-2 mt-1 flex-shrink-0" />
                  <span className="text-nethra-gray">Customized billing plans based on service scope</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Compliance Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-nethra-navy mb-8 text-center">Benefits of Our Compliance Standards</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-nethra-navy/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle size={24} className="text-nethra-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-nethra-navy mb-2">Enhanced Security Personnel Performance</h3>
                  <p className="text-nethra-gray">
                    By ensuring our security personnel receive all statutory benefits and work in conducive conditions, 
                    we enhance their job satisfaction and motivation, resulting in superior service delivery for our clients.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-nethra-navy/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle size={24} className="text-nethra-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-nethra-navy mb-2">Risk Mitigation for Clients</h3>
                  <p className="text-nethra-gray">
                    Our strict compliance adherence shields our clients from potential legal liabilities related to 
                    manpower deployment, providing peace of mind and protection from compliance-related risks.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-nethra-navy/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle size={24} className="text-nethra-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-nethra-navy mb-2">Lower Personnel Turnover</h3>
                  <p className="text-nethra-gray">
                    Our comprehensive benefits and compliance measures lead to higher retention rates among our 
                    security personnel, ensuring consistency in service delivery and reduced training costs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-nethra-navy/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle size={24} className="text-nethra-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-nethra-navy mb-2">Reputation Enhancement</h3>
                  <p className="text-nethra-gray">
                    Our commitment to compliance strengthens our reputation as a responsible and ethical security 
                    service provider, attracting both quality clients and talented security professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-nethra-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Our Commitment to Excellence</h2>
          <p className="max-w-2xl mx-auto text-lg text-white/80 mb-8">
            Discover how our adherence to the highest compliance standards translates into superior security services for your organization.
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

export default Compliance;
