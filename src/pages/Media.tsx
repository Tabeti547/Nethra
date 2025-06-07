
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, FileText, Image, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Media = () => {
  const [activeTab, setActiveTab] = useState("news");

  return (
    <>
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-nethra-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Media Center</h1>
          <p className="max-w-3xl mx-auto text-lg text-white/80">
            Stay updated with the latest news, events, and resources from Nethra Security Services.
          </p>
        </div>
      </section>
      
      {/* Media Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="news" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 mb-12">
              <TabsTrigger value="news" className="text-center py-3">
                <FileText className="h-5 w-5 mr-2 inline-block" />
                <span>News & Updates</span>
              </TabsTrigger>
              <TabsTrigger value="events" className="text-center py-3">
                <Calendar className="h-5 w-5 mr-2 inline-block" />
                <span>Events</span>
              </TabsTrigger>
              <TabsTrigger value="gallery" className="text-center py-3">
                <Image className="h-5 w-5 mr-2 inline-block" />
                <span>Photo Gallery</span>
              </TabsTrigger>
              <TabsTrigger value="resources" className="text-center py-3">
                <FileText className="h-5 w-5 mr-2 inline-block" />
                <span>Resources</span>
              </TabsTrigger>
            </TabsList>
            
            {/* News & Updates Tab */}
            <TabsContent value="news" className="space-y-8">
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-nethra-navy mb-4">News & Updates</h3>
                <p className="text-nethra-gray text-lg">Content will be updated soon.</p>
              </div>
            </TabsContent>
            
            {/* Events Tab */}
            <TabsContent value="events" className="space-y-8">
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-nethra-navy mb-4">Upcoming Events</h3>
                <p className="text-nethra-gray text-lg">Event information will be updated soon.</p>
              </div>
            </TabsContent>
            
            {/* Gallery Tab */}
            <TabsContent value="gallery" className="space-y-8">
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-nethra-navy mb-4">Photo Gallery</h3>
                <p className="text-nethra-gray text-lg">Gallery content will be updated soon.</p>
              </div>
            </TabsContent>
            
            {/* Resources Tab */}
            <TabsContent value="resources" className="space-y-8">
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-nethra-navy mb-4">Resources</h3>
                <p className="text-nethra-gray text-lg">Resource materials will be updated soon.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Media Contact */}
      <section className="py-16 bg-nethra-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-nethra-navy mb-6">Media Contact</h2>
            <p className="text-lg text-nethra-gray mb-8">
              For media inquiries, interview requests, or additional information about Nethra Security Services, 
              please contact our media relations team.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-nethra-navy mb-4">Press and Media Relations</h3>
              <p className="text-nethra-gray mb-2">Contact information will be updated soon.</p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                <Button>Contact Media Team</Button>
                <Button variant="outline" className="border-nethra-navy text-nethra-navy">
                  Download Press Kit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-nethra-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="max-w-2xl mx-auto text-lg text-white/80 mb-8">
            Subscribe to our newsletter to receive the latest news, event announcements, and security insights.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="px-4 py-3 rounded-md flex-1 text-nethra-navy"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
            <p className="text-sm text-white/60 mt-3">
              By subscribing, you agree to receive our newsletter and marketing communications. 
              You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Media;
