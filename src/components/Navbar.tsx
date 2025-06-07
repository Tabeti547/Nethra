
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left side - Logo (only on non-home pages) */}
          <div className="flex items-center">
            {!isHomePage && (
              <Link to="/" className="flex items-center">
                <span className={`text-2xl font-bold ${isScrolled ? 'text-nethra-navy' : 'text-white'}`}>
                  NSS
                </span>
              </Link>
            )}
          </div>

          {/* Right side - Quote button */}
          <div className="flex items-center">
            <Button 
              size="sm" 
              variant={isScrolled ? "outline" : "secondary"} 
              className={`${!isScrolled && 'text-nethra-navy bg-white hover:bg-white/90'}`}
              asChild
            >
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button - kept for potential future use */}
          <button
            className={`lg:hidden hidden ${isScrolled ? 'text-nethra-navy' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
