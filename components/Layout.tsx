import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Home, Info, Briefcase, Zap, Phone as PhoneIcon } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white text-primary sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img 
                src="https://i.ibb.co/XfRFxx6n/Slem-Multi-Service.png" 
                alt="SLEM Multi Service"
                className="h-16 w-auto object-contain"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'bg-accent text-white font-bold'
                      : 'text-primary hover:text-accent'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                className="ml-4 px-4 py-2 bg-accent text-white rounded-md text-sm font-semibold hover:bg-orange-500 transition-colors duration-200"
              >
                Book Service
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-accent hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white pb-6 shadow-lg border-t border-gray-200">
          <style>{`
            @keyframes slideInDown {
              from {
                opacity: 0;
                transform: translateY(-10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .mobile-menu-item {
              animation: slideInDown 0.3s ease-out forwards;
            }
          `}</style>
          
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Home */}
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`mobile-menu-item flex items-center px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 group ${
                location.pathname === '/'
                  ? 'bg-accent text-primary shadow-lg'
                  : 'text-primary hover:bg-gray-100'
              }`}
            >
              <div className={`p-2 rounded-lg mr-3 transition-all duration-200 ${
                location.pathname === '/'
                  ? 'bg-primary'
                  : 'bg-primary bg-opacity-10 group-hover:bg-opacity-20'
              }`}>
                <Home size={20} className={location.pathname === '/' ? 'text-white' : 'text-primary'} />
              </div>
              Home
            </Link>

            {/* About */}
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`mobile-menu-item flex items-center px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 group ${
                location.pathname === '/about'
                  ? 'bg-accent text-primary shadow-lg'
                  : 'text-primary hover:bg-gray-100'
              }`}
              style={{ animationDelay: '0.05s' }}
            >
              <div className={`p-2 rounded-lg mr-3 transition-all duration-200 ${
                location.pathname === '/about'
                  ? 'bg-primary'
                  : 'bg-primary bg-opacity-10 group-hover:bg-opacity-20'
              }`}>
                <Info size={20} className={location.pathname === '/about' ? 'text-white' : 'text-primary'} />
              </div>
              About
            </Link>

            {/* Services */}
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className={`mobile-menu-item flex items-center px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 group ${
                location.pathname === '/services'
                  ? 'bg-accent text-primary shadow-lg'
                  : 'text-primary hover:bg-gray-100'
              }`}
              style={{ animationDelay: '0.1s' }}
            >
              <div className={`p-2 rounded-lg mr-3 transition-all duration-200 ${
                location.pathname === '/services'
                  ? 'bg-primary'
                  : 'bg-primary bg-opacity-10 group-hover:bg-opacity-20'
              }`}>
                <Briefcase size={20} className={location.pathname === '/services' ? 'text-white' : 'text-primary'} />
              </div>
              Services
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`mobile-menu-item flex items-center px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 group ${
                location.pathname === '/contact'
                  ? 'bg-accent text-primary shadow-lg'
                  : 'text-primary hover:bg-gray-100'
              }`}
              style={{ animationDelay: '0.2s' }}
            >
              <div className={`p-2 rounded-lg mr-3 transition-all duration-200 ${
                location.pathname === '/contact'
                  ? 'bg-primary'
                  : 'bg-primary bg-opacity-10 group-hover:bg-opacity-20'
              }`}>
                <PhoneIcon size={20} className={location.pathname === '/contact' ? 'text-white' : 'text-primary'} />
              </div>
              Contact
            </Link>

            {/* Divider */}
            <div className="my-4 border-t border-gray-200" style={{ animationDelay: '0.25s' }}></div>

            {/* CTA Button */}
            <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="mobile-menu-item block w-full px-4 py-3 bg-gradient-to-r from-accent to-yellow-300 text-primary font-bold rounded-lg text-center hover:shadow-lg transition-all duration-200 transform hover:scale-105 mx-auto"
              style={{ animationDelay: '0.3s' }}
            >
              Book Service
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="font-heading text-lg font-bold text-accent mb-4">SLEM MULTI SERVICE LTD</h3>
            <p className="text-gray-400 text-sm mb-4">
              Leading provider of premium construction materials and logistics services in Nigeria.
            </p>
            <p className="text-gray-500 text-xs">RC: {COMPANY_INFO.rcNumber}</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-accent transition"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-accent transition font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-accent transition font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-accent transition font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-accent transition font-medium">
                  Book Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-accent transition font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition font-medium">
                  Granite Supply
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition font-medium">
                  Asphalt Supply
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition font-medium">
                  Base Materials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition font-medium">
                  Hardcore Stones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition font-medium">
                  Truck Hiring
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition font-medium">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent transition font-medium">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start">
                <MapPin size={16} className="mr-3 mt-1 text-accent flex-shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="space-y-2">
                {COMPANY_INFO.phone.map(p => (
                  <div key={p} className="flex items-center">
                    <Phone size={16} className="mr-3 text-accent flex-shrink-0" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-3 text-accent flex-shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Copyright */}
        <div className="mt-8 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <p className="mt-2">Built with excellence for construction logistics in Nigeria.</p>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-surface font-sans">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};