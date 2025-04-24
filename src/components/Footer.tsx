
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-nethra-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <div className="flex flex-col items-start">
                <div className="text-3xl font-bold text-white">nss</div>
                <div className="text-xs uppercase tracking-wider text-white font-medium -mt-1">
                  NETHRA SECURITY SERVICES
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Pioneering the future of security by integrating advanced AI and technology with expert human oversight.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-nethra-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-nethra-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-nethra-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/compliance" className="text-gray-300 hover:text-white transition-colors">Compliance</Link>
              </li>
              <li>
                <Link to="/certifications" className="text-gray-300 hover:text-white transition-colors">Certifications</Link>
              </li>
              <li>
                <Link to="/csr" className="text-gray-300 hover:text-white transition-colors">CSR Policies</Link>
              </li>
              <li>
                <Link to="/media" className="text-gray-300 hover:text-white transition-colors">Media</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#manpower" className="text-gray-300 hover:text-white transition-colors">Manpower Guarding</Link>
              </li>
              <li>
                <Link to="/services#business" className="text-gray-300 hover:text-white transition-colors">Security for Businesses</Link>
              </li>
              <li>
                <Link to="/services#events" className="text-gray-300 hover:text-white transition-colors">Event Security</Link>
              </li>
              <li>
                <Link to="/services#consultancy" className="text-gray-300 hover:text-white transition-colors">Security Consultancy</Link>
              </li>
              <li>
                <Link to="/services#training" className="text-gray-300 hover:text-white transition-colors">Training</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4 text-gray-300">
              <p className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>2nd Floor, Corporate Office, 7-1-25, Marigold Hotel Premises, Begumpet, Hyderabad, Secunderabad, Telangana, India, 500016</span>
              </p>
              <p className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>+91-40-6706 9999</span>
              </p>
              <p className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="mailto:nsservicesllp@gmail.com" className="hover:text-white transition-colors">nsservicesllp@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>LLPIN: ACN-4795 | PAN # AAYFN0579K</p>
              <p>&copy; {new Date().getFullYear()} Nethra Security Services. All rights reserved.</p>
            </div>
            <div className="text-gray-400 text-sm">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="mx-2">|</span>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
