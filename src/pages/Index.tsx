
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CoreValues from '@/components/home/CoreValues';
import CtaSection from '@/components/home/CtaSection';

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <CoreValues />
      <CtaSection />
      <Footer />
    </>
  );
};

export default Index;
