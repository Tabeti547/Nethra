
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
        { title: 'CSR Policies', link: '/csr' },
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
            <ul className="flex space-x-8">
              {navLinks.map((item) => (
                <li key={item.title} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button 
                        onClick={() => toggleDropdown(item.title)}
                        className={`flex items-center text-nethra-navy hover:text-nethra-accent transition-colors ${
                          isScrolled ? 'text-nethra-navy' : 'text-white'
                        }`}
                      >
                        {item.title}
                        <ChevronDown size={16} className="ml-1" />
                      </button>
                      {activeDropdown === item.title && (
                        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                          {item.dropdownItems?.map((dropItem) => (
                            <Link
                              key={dropItem.title}
                              to={dropItem.link}
                              className="block px-4 py-2 text-sm text-nethra-navy hover:bg-nethra-light"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link 
                      to={item.link} 
                      className={`transition-colors ${
                        isScrolled ? 'text-nethra-navy' : 'text-white'
                      } hover:text-nethra-accent`}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            
            <div className="ml-8 flex space-x-4 items-center">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`${isScrolled ? 'text-nethra-navy' : 'text-white'} hover:text-nethra-accent transition-colors`}>
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`${isScrolled ? 'text-nethra-navy' : 'text-white'} hover:text-nethra-accent transition-colors`}>
                <Facebook size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`${isScrolled ? 'text-nethra-navy' : 'text-white'} hover:text-nethra-accent transition-colors`}>
                <Linkedin size={18} />
              </a>
              <Button size="sm" variant="outline" className={`ml-4 ${!isScrolled && 'border-white text-white hover:bg-white hover:text-nethra-navy'}`}>
                Get a Quote
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-nethra-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {navLinks.map((item) => (
                <li key={item.title} className="relative">
                  {item.dropdown ? (
                    <div className="space-y-2">
                      <button 
                        onClick={() => toggleDropdown(item.title)}
                        className="flex items-center text-nethra-navy"
                      >
                        {item.title}
                        <ChevronDown size={16} className="ml-1" />
                      </button>
                      {activeDropdown === item.title && (
                        <div className="pl-4 space-y-2">
                          {item.dropdownItems?.map((dropItem) => (
                            <Link
                              key={dropItem.title}
                              to={dropItem.link}
                              className="block text-sm text-nethra-navy"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {dropItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      to={item.link} 
                      className="block text-nethra-navy"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex space-x-6 items-center">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-nethra-navy">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-nethra-navy">
                <Facebook size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-nethra-navy">
                <Linkedin size={20} />
              </a>
            </div>
            <div className="mt-4">
              <Button size="sm" className="w-full">Get a Quote</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
