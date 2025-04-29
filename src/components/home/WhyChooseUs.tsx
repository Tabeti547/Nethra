
import React from 'react';
import { Settings, Users, Check, Shield, Clock, Database } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-nethra-navy to-nethra-blue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Nethra Security</h2>
          <div className="w-24 h-1 bg-nethra-accent mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-white/80">
            We deliver exceptional security services that combine advanced technology with human
            expertise for comprehensive protection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-all">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Tech-Enhanced Security</h3>
            <p className="text-white/80">
              Our security solutions integrate cutting-edge technology for predictive threat detection and
              automated response systems.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-all">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Experienced Personnel</h3>
            <p className="text-white/80">
              Our security teams comprise highly trained professionals with extensive experience across
              various security domains.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-all">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Customized Solutions</h3>
            <p className="text-white/80">
              We tailor our security services to meet your specific needs, ensuring optimal protection for
              your business or event.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-all">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">24/7 Monitoring</h3>
            <p className="text-white/80">
              Our round-the-clock security monitoring ensures continuous protection and immediate response to
              potential threats.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-all">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Compliance Adherence</h3>
            <p className="text-white/80">
              We maintain strict compliance with all industry regulations and standards, ensuring legal and
              ethical security practices.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-all">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Data-Driven Approach</h3>
            <p className="text-white/80">
              Our security strategies are informed by comprehensive data analysis, enabling proactive
              threat mitigation and continuous improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
