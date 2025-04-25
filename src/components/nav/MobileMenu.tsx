
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { NavItem } from './NavLinks';
import { SocialIcons } from './SocialIcons';

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: NavItem[];
  activeDropdown: string | null;
  toggleDropdown: (menu: string) => void;
  onClose: () => void;
}

export const MobileMenu = ({
  isOpen,
  navLinks,
  activeDropdown,
  toggleDropdown,
  onClose
}: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
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
                  </button>
                  {activeDropdown === item.title && (
                    <div className="pl-4 space-y-2">
                      {item.dropdownItems?.map((dropItem) => (
                        <Link
                          key={dropItem.title}
                          to={dropItem.link}
                          className="block text-sm text-nethra-navy"
                          onClick={onClose}
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
                  onClick={onClose}
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <SocialIcons isScrolled={true} className="mt-6" />
        <div className="mt-4">
          <Button size="sm" className="w-full" asChild>
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
