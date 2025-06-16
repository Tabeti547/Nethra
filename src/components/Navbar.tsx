
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { NavLinks } from './nav/NavLinks';
import { SocialIcons } from './nav/SocialIcons';
import { MobileMenu } from './nav/MobileMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const navLinks = [
    { 
      title: 'About', 
      link: '/about',
      dropdown: false
    },
    { 
      title: 'Services', 
      link: '/services',
      dropdown: false
    },
    { 
      title: 'Compliance', 
      link: '/compliance',
      dropdown: false
    },
    { 
      title: 'Resources', 
      link: '#',
      dropdown: true,
      dropdownItems: [
        { title: 'Certifications', link: '/certifications' },
        { title: 'Media', link: '/media' }
      ]
    },
    { 
      title: 'Contact', 
      link: '/contact',
      dropdown: false
    },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex flex-col items-start">
              <div className={`text-3xl font-bold ${isScrolled ? 'text-nethra-navy' : 'text-white'}`}>nss</div>
              <div className={`text-xs uppercase tracking-wider font-medium -mt-1 ${isScrolled ? 'text-nethra-navy' : 'text-white'}`}>
                NETHRA SECURITY SERVICES
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <NavLinks 
              navLinks={navLinks}
              isScrolled={isScrolled}
              activeDropdown={activeDropdown}
              toggleDropdown={toggleDropdown}
            />
            
            <div className="ml-8 flex items-center">
              <SocialIcons isScrolled={isScrolled} />
              <Button 
                size="sm" 
                variant={isScrolled ? "outline" : "secondary"} 
                className={`ml-4 ${!isScrolled && 'text-nethra-navy bg-white hover:bg-white/90'}`}
                asChild
              >
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${isScrolled ? 'text-nethra-navy' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMenuOpen}
        navLinks={navLinks}
        activeDropdown={activeDropdown}
        toggleDropdown={toggleDropdown}
        onClose={() => setIsMenuOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
