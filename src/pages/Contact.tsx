
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <>
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-nethra-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-lg text-white/80">
            Get in touch with our team for any inquiries about our security services or to request a customized security solution.
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-nethra-light p-6 rounded-lg text-center">
              <div className="w-14 h-14 bg-nethra-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-nethra-navy" />
              </div>
              <h3 className="text-lg font-bold text-nethra-navy mb-2">Our Address</h3>
              <p className="text-nethra-gray">
                2nd Floor, Corporate Office, 7-1-25, Marigold Hotel Premises, Begumpet, Hyderabad, Secunderabad, Telangana, India, 500016
              </p>
            </div>
            
            <div className="bg-nethra-light p-6 rounded-lg text-center">
              <div className="w-14 h-14 bg-nethra-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-nethra-navy" />
              </div>
              <h3 className="text-lg font-bold text-nethra-navy mb-2">Call Us</h3>
              <p className="text-nethra-gray mb-1">Phone: +91-40-6706 9999</p>
              <p className="text-nethra-gray">Fax: 6668 7766</p>
            </div>
            
            <div className="bg-nethra-light p-6 rounded-lg text-center">
              <div className="w-14 h-14 bg-nethra-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-nethra-navy" />
              </div>
              <h3 className="text-lg font-bold text-nethra-navy mb-2">Email Us</h3>
              <a href="mailto:nsservicesllp@gmail.com" className="text-nethra-accent hover:underline">
                nsservicesllp@gmail.com
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-nethra-navy mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
            
            {/* Company Information */}
            <div>
              <h2 className="text-2xl font-bold text-nethra-navy mb-6">Company Information</h2>
              <div className="bg-nethra-light p-8 rounded-lg">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-nethra-navy mb-2">Company Details</h3>
                  <p className="text-nethra-gray mb-1">LLPIN: ACN-4795</p>
                  <p className="text-nethra-gray">PAN #: AAYFN0579K</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-nethra-navy mb-2">Business Hours</h3>
                  <p className="text-nethra-gray mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-nethra-gray mt-2">24/7 Security Operations Center Available</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-nethra-navy mb-2">Service Areas</h3>
                  <p className="text-nethra-gray">
                    We provide security services throughout Telangana & Andhra Pradesh. 
                    Contact us for services in other locations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-12 bg-nethra-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-nethra-navy mb-6 text-center">Find Us</h2>
          <div className="h-[400px] bg-nethra-gray/20 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.024552198076!2d78.4870327!3d17.4357861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99dc53d0fea7%3A0x9071a1afd88c871f!2sBegumpet%2C%20Hyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1650451234567!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Nethra Security Services Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-nethra-navy mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-nethra-light p-6 rounded-lg">
              <h3 className="text-lg font-bold text-nethra-navy mb-2">How quickly can you deploy security personnel?</h3>
              <p className="text-nethra-gray">
                We can deploy security personnel within 24-48 hours for standard requests, and even faster for emergency situations.
              </p>
            </div>
            
            <div className="bg-nethra-light p-6 rounded-lg">
              <h3 className="text-lg font-bold text-nethra-navy mb-2">Do you offer customized security plans?</h3>
              <p className="text-nethra-gray">
                Yes, we develop tailored security solutions based on your specific requirements, risk assessment, and budget considerations.
              </p>
            </div>
            
            <div className="bg-nethra-light p-6 rounded-lg">
              <h3 className="text-lg font-bold text-nethra-navy mb-2">Are your security personnel licensed and insured?</h3>
              <p className="text-nethra-gray">
                All our security personnel are fully licensed, insured, and undergo rigorous background checks and training.
              </p>
            </div>
            
            <div className="bg-nethra-light p-6 rounded-lg">
              <h3 className="text-lg font-bold text-nethra-navy mb-2">How does your AI technology enhance security?</h3>
              <p className="text-nethra-gray">
                Our AI systems enhance threat detection, automate routine monitoring tasks, and provide predictive analytics to identify potential security issues before they escalate.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Contact;
