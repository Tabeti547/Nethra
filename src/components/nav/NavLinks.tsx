import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export interface NavItem {
  title: string;
  link: string;
  dropdown: boolean;
  dropdownItems?: {
    title: string;
    link: string;
  }[];
}

interface NavLinksProps {
  navLinks: NavItem[];
  isScrolled: boolean;
  activeDropdown: string | null;
  toggleDropdown: (menu: string) => void;
  onNavClick?: () => void;
}

export const NavLinks = ({
  navLinks,
  isScrolled,
  activeDropdown,
  toggleDropdown,
  onNavClick
}: NavLinksProps) => {
  return (
    <ul className="flex space-x-8">
      {navLinks.map((item) => (
        <li key={item.title} className="relative group">
          {item.dropdown ? (
            <>
              <button 
                onClick={() => toggleDropdown(item.title)}
                className={`flex items-center ${
                  isScrolled ? 'text-nethra-navy' : 'text-white'
                } hover:text-nethra-accent transition-colors visible`}
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
                      className="block px-4 py-2 text-sm text-nethra-navy hover:bg-nethra-light visible"
                      onClick={() => {
                        toggleDropdown(item.title);
                        onNavClick?.();
                      }}
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
              } hover:text-nethra-accent visible`}
              onClick={onNavClick}
            >
              {item.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};
