import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Video } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useConfig } from '../contexts/ConfigContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { company } = useConfig();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Bosh sahifa' },
    { path: '/services', label: 'Xizmatlar' },
    { path: '/events', label: 'Tadbirlar' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/consultation', label: 'Maslahat' },
    { path: '/contact', label: 'Aloqa' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold text-gray-900 dark:text-white"
          >
            <Video className="w-8 h-8" />
            <span>{company.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`relative px-3 py-2 transition-colors ${
                  isActive(path)
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {label}
                {isActive(path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-current"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Theme Toggle and Order Button */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link 
              to="/order"
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Buyurtma berish
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-900 dark:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700"
          >
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-4 transition-colors ${
                  isActive(path)
                    ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/order"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-4 mx-4 text-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Buyurtma berish
            </Link>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;