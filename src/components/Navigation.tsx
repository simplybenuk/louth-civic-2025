
import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavigationProps {
  closeMenu: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ closeMenu }) => {
  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'GET INVOLVED', path: '/get-involved' },
    { name: 'NEWS', path: '/news' },
    { name: 'EVENTS', path: '/events' },
    { name: 'CONTACT & LINKS', path: '/contact' },
  ];

  return (
    <nav className="py-4">
      <ul className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-6">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) => 
                `block text-center py-2 px-4 text-lg no-underline hover:bg-white hover:bg-opacity-20 transition-all duration-200 ${
                  isActive ? 'bg-white bg-opacity-20 font-bold' : ''
                }`
              }
              aria-current={({ isActive }) => isActive ? 'page' : undefined}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
