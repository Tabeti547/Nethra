
import { Instagram, Facebook, Linkedin } from 'lucide-react';

interface SocialIconsProps {
  isScrolled: boolean;
  className?: string;
}

export const SocialIcons = ({ isScrolled, className = '' }: SocialIconsProps) => {
  return (
    <div className={`flex space-x-4 items-center ${className}`}>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`${isScrolled ? 'text-nethra-navy' : 'text-white'} hover:text-nethra-accent transition-colors`}>
        <Instagram size={18} />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`${isScrolled ? 'text-nethra-navy' : 'text-white'} hover:text-nethra-accent transition-colors`}>
        <Facebook size={18} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`${isScrolled ? 'text-nethra-navy' : 'text-white'} hover:text-nethra-accent transition-colors`}>
        <Linkedin size={18} />
      </a>
    </div>
  );
};
