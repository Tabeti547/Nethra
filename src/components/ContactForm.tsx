
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Calendar, FileText, ShieldCheck, Users } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  inquiryType: z.string().min(1, { message: "Please select an inquiry type." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  company: z.string().optional(),
  eventDate: z.string().optional(),
  eventType: z.string().optional(),
  businessType: z.string().optional(),
  consultingNeed: z.string().optional(),
});

const inquiryTypes = [
  { 
    value: "manpower", 
    label: "Manpower Guarding", 
    icon: Users,
    description: "Professional security personnel for your premises" 
  },
  { 
    value: "business", 
    label: "Business Security", 
    icon: Building,
    description: "Comprehensive security for corporate environments" 
  },
  { 
    value: "events", 
    label: "Event Security", 
    icon: Calendar,
    description: "Security for concerts, parties, and corporate events" 
  },
  { 
    value: "consultancy", 
    label: "Security Consultancy", 
    icon: FileText,
    description: "Expert risk assessment and security planning" 
  },
  { 
    value: "executive", 
    label: "Executive Protection", 
    icon: ShieldCheck,
    description: "Personalized security for executives and VIPs" 
  }
];

export function ContactForm() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("general");
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
      company: "",
      eventDate: "",
      eventType: "",
      businessType: "",
      consultingNeed: "",
    },
  });

  const selectedInquiryType = form.watch("inquiryType");

  // Change tab based on inquiry type selection
  React.useEffect(() => {
    if (!selectedInquiryType) return;
    
    if (["manpower", "business"].includes(selectedInquiryType)) {
      setActiveTab("business");
    } else if (selectedInquiryType === "events") {
      setActiveTab("event");
    } else if (selectedInquiryType === "consultancy") {
      setActiveTab("consulting");
    } else {
      setActiveTab("general");
    }
  }, [selectedInquiryType]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you shortly.",
    });
    form.reset();
    setActiveTab("general");
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-nethra-navy">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+91 12345 67890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="inquiryType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Inquiry Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value} className="flex items-center">
                            <div className="flex items-center gap-2">
                              <type.icon className="h-4 w-4" />
                              <span>{type.label}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {selectedInquiryType && (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="general">General</TabsTrigger>
                {["manpower", "business"].includes(selectedInquiryType) && (
                  <TabsTrigger value="business">Business Details</TabsTrigger>
                )}
                {selectedInquiryType === "events" && (
                  <TabsTrigger value="event">Event Details</TabsTrigger>
                )}
                {selectedInquiryType === "consultancy" && (
                  <TabsTrigger value="consulting">Consulting Needs</TabsTrigger>
                )}
                <TabsTrigger value="message">Message</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general" className="space-y-4">
                <p className="text-sm text-nethra-gray">
                  Please provide your general information and we'll get back to you as soon as possible.
                </p>
                {selectedInquiryType && (
                  <div className="bg-nethra-light p-4 rounded-md">
                    <h4 className="font-medium text-nethra-navy mb-2">
                      {inquiryTypes.find(t => t.value === selectedInquiryType)?.label}
                    </h4>
                    <p className="text-sm text-nethra-gray">
                      {inquiryTypes.find(t => t.value === selectedInquiryType)?.description}
                    </p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="business" className="space-y-4">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Company Ltd." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="businessType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Type</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select business type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="corporate">Corporate Office</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>
              
              <TabsContent value="event" className="space-y-4">
                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Type</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="concert">Concert/Performance</SelectItem>
                          <SelectItem value="social">Social Gathering</SelectItem>
                          <SelectItem value="exhibition">Exhibition/Trade Show</SelectItem>
                          <SelectItem value="sports">Sports Event</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="eventDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>
              
              <TabsContent value="consulting" className="space-y-4">
                <FormField
                  control={form.control}
                  name="consultingNeed"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Consulting Need</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select consulting need" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="risk-assessment">Risk Assessment</SelectItem>
                          <SelectItem value="security-audit">Security Audit</SelectItem>
                          <SelectItem value="policy-development">Security Policy Development</SelectItem>
                          <SelectItem value="technology-review">Security Technology Review</SelectItem>
                          <SelectItem value="training">Security Training Program</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>
              
              <TabsContent value="message" className="space-y-4">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please provide details about your security requirements..." 
                          className="min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>
            </Tabs>
          )}

          {!selectedInquiryType && (
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Please provide details about your security requirements..." 
                      className="min-h-[120px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm;
