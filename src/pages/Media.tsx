
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, FileText, Image, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Media data (placeholder)
const newsData = [
  {
    id: 1,
    title: "Nethra Security launches AI-Powered Surveillance System",
    date: "April 15, 2025",
    excerpt: "Nethra Security Services has unveiled its latest AI-powered surveillance system designed to enhance security monitoring capabilities while reducing false alarms.",
    category: "Press Release",
  },
  {
    id: 2,
    title: "Nethra Security Recognized for Excellence in Corporate Security",
    date: "March 22, 2025",
    excerpt: "Nethra Security Services has been awarded the prestigious Security Excellence Award for its innovative approach to corporate security solutions.",
    category: "Awards",
  },
  {
    id: 3,
    title: "Partnership Announcement: Nethra Security and Tech Innovators",
    date: "February 18, 2025",
    excerpt: "Nethra Security Services announces strategic partnership with Tech Innovators to develop next-generation security solutions integrating advanced AI capabilities.",
    category: "Partnership",
  },
  {
    id: 4,
    title: "Nethra Security Expands Operations to Southern Region",
    date: "January 10, 2025",
    excerpt: "Nethra Security Services has announced the expansion of its operations to the southern region, establishing a new regional headquarters in Chennai.",
    category: "Company News",
  },
];

const eventsData = [
  {
    id: 1,
    title: "Security Tech Expo 2025",
    date: "May 25-27, 2025",
    location: "Hyderabad International Convention Center",
    description: "Join us at the Security Tech Expo where we will be showcasing our latest AI-integrated security solutions. Visit our booth #A42 for live demonstrations.",
  },
  {
    id: 2,
    title: "Corporate Security Conference",
    date: "July 12-14, 2025",
    location: "The Grand Hotel, Bangalore",
    description: "Our security experts will be presenting on 'The Integration of AI in Modern Security Practices' at this year's Corporate Security Conference.",
  },
  {
    id: 3,
    title: "Security Training Workshop",
    date: "August 8, 2025",
    location: "Nethra Security Training Center, Hyderabad",
    description: "Open to security professionals and corporate security managers, this workshop will cover advanced security protocols and technology integration.",
  },
];

const galleryData = [
  { id: 1, type: "image", title: "Annual Security Conference" },
  { id: 2, type: "image", title: "Community Safety Workshop" },
  { id: 3, type: "image", title: "Security Technology Exhibition" },
  { id: 4, type: "image", title: "Team Training Session" },
  { id: 5, type: "video", title: "AI Security Solutions Overview" },
  { id: 6, type: "image", title: "Corporate Client Meeting" },
  { id: 7, type: "video", title: "Security System Demonstration" },
  { id: 8, type: "image", title: "CSR Initiative: Tree Plantation" },
];

const resourcesData = [
  {
    id: 1,
    title: "Modern Security Practices Guide",
    type: "PDF",
    description: "A comprehensive guide to implementing modern security practices in corporate environments.",
  },
  {
    id: 2,
    title: "AI in Security: Whitepaper",
    type: "PDF",
    description: "Detailed analysis of how artificial intelligence is transforming the security industry.",
  },
  {
    id: 3,
    title: "Event Security Checklist",
    type: "Checklist",
    description: "Essential security considerations for planning and executing secure events of all sizes.",
  },
  {
    id: 4,
    title: "Corporate Security Assessment Template",
    type: "Template",
    description: "A structured template for conducting thorough security assessments of corporate facilities.",
  },
];

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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {newsData.map((news) => (
                  <div key={news.id} className="bg-nethra-light p-6 rounded-lg">
                    <div className="text-sm text-nethra-gray mb-2 flex items-center justify-between">
                      <span className="px-3 py-1 bg-nethra-navy/10 rounded-full text-nethra-navy text-xs font-medium">
                        {news.category}
                      </span>
                      <span>{news.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-nethra-navy mb-3">{news.title}</h3>
                    <p className="text-nethra-gray mb-4">{news.excerpt}</p>
                    <Button variant="outline" size="sm" className="border-nethra-navy text-nethra-navy">
                      Read More
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button variant="outline" className="border-nethra-navy text-nethra-navy">
                  View All News
                </Button>
              </div>
            </TabsContent>
            
            {/* Events Tab */}
            <TabsContent value="events" className="space-y-8">
              <div className="space-y-6">
                {eventsData.map((event) => (
                  <div key={event.id} className="bg-nethra-light p-6 rounded-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-nethra-navy">{event.title}</h3>
                      <div className="flex items-center text-nethra-gray mt-2 md:mt-0">
                        <Calendar size={16} className="mr-2" />
                        <span>{event.date}</span>
                      </div>
                    </div>
                    <p className="text-nethra-navy font-medium mb-3">{event.location}</p>
                    <p className="text-nethra-gray mb-4">{event.description}</p>
                    <div className="flex space-x-4">
                      <Button size="sm">Register</Button>
                      <Button variant="outline" size="sm" className="border-nethra-navy text-nethra-navy">
                        Learn More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button variant="outline" className="border-nethra-navy text-nethra-navy">
                  View All Events
                </Button>
              </div>
            </TabsContent>
            
            {/* Gallery Tab */}
            <TabsContent value="gallery" className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {galleryData.map((item) => (
                  <div key={item.id} className="group relative overflow-hidden rounded-lg bg-nethra-light">
                    <div className="h-60 bg-nethra-navy/20 flex items-center justify-center">
                      {item.type === "video" ? (
                        <Video size={40} className="text-nethra-navy opacity-50 group-hover:opacity-70 transition-opacity" />
                      ) : (
                        <Image size={40} className="text-nethra-navy opacity-50 group-hover:opacity-70 transition-opacity" />
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-nethra-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <div>
                        <h4 className="text-white font-medium">{item.title}</h4>
                        <Button variant="secondary" size="sm" className="mt-2">
                          View {item.type === "video" ? "Video" : "Image"}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button variant="outline" className="border-nethra-navy text-nethra-navy">
                  View Full Gallery
                </Button>
              </div>
            </TabsContent>
            
            {/* Resources Tab */}
            <TabsContent value="resources" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resourcesData.map((resource) => (
                  <div key={resource.id} className="bg-nethra-light p-6 rounded-lg flex">
                    <div className="w-14 h-14 bg-nethra-navy/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <FileText size={24} className="text-nethra-navy" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-nethra-navy mb-1">{resource.title}</h3>
                      <p className="text-nethra-gray text-sm mb-2">{resource.type}</p>
                      <p className="text-nethra-gray mb-3">{resource.description}</p>
                      <Button size="sm">Download</Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button variant="outline" className="border-nethra-navy text-nethra-navy">
                  View All Resources
                </Button>
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
              <p className="text-nethra-gray mb-2">Email: media@nethrasecurity.com</p>
              <p className="text-nethra-gray mb-6">Phone: +91-40-6706 9999 (ext. 123)</p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
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
