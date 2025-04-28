
import React from 'react';
import { Star, Award, Users, Settings } from 'lucide-react';

const CoreValues = () => {
  return (
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
          {[
            {
              icon: Star,
              title: "Integrity",
              description: "We uphold the highest ethical standards in all our operations, building trust through transparency and honesty."
            },
            {
              icon: Award,
              title: "Excellence",
              description: "We continuously strive to exceed expectations through rigorous training, innovation, and attention to detail."
            },
            {
              icon: Users,
              title: "Collaboration",
              description: "We work closely with our clients and partners to develop integrated security solutions that address specific needs."
            },
            {
              icon: Settings,
              title: "Innovation",
              description: "We embrace technological advancements and creative thinking to deliver cutting-edge security solutions."
            }
          ].map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-nethra-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon size={36} className="text-nethra-navy" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-nethra-navy">{value.title}</h3>
              <p className="text-nethra-gray">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
