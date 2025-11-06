import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Video, Phone, MessageCircle, Instagram, MapPin } from 'lucide-react';
import { useConfig } from '../contexts/ConfigContext';

const Footer = () => {
  const { company, contact } = useConfig();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Xizmatlar': [
      { label: 'Video montaj', path: '/services' },
      { label: 'Fotosessiya', path: '/services' },
      { label: 'SMM va reklama', path: '/services' }
    ],
    'Tadbirlar': [
      { label: 'To\'y marosimi', path: '/events' },
      { label: 'Love Story', path: '/events' },
      { label: 'Tug\'ilgan kun', path: '/events' }
    ],
    'Kompaniya': [
      { label: 'Portfolio', path: '/portfolio' },
      { label: 'Maslahat', path: '/consultation' },
      { label: 'Aloqa', path: '/contact' }
    ]
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold mb-4">
              <Video className="w-8 h-8" />
              <span>{company.name}</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              {company.description}. Professional xizmatlar va yuqori sifat kafolati bilan 
              sizning eng muhim daqiqalaringizni abadiy saqlab qolamiz.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <motion.a
                href={`tel:${contact.phone}`}
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span>{contact.phone}</span>
              </motion.a>
              
              <motion.a
                href={`https://t.me/${contact.telegram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle size={18} />
                <span>{contact.telegram}</span>
              </motion.a>
              
              <motion.a
                href={`https://instagram.com/${contact.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Instagram size={18} />
                <span>@{contact.instagram}</span>
              </motion.a>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-300"
              >
                <MapPin size={18} />
                <span>{contact.address}</span>
              </motion.div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 text-lg">{title}</h4>
              <ul className="space-y-2">
                {links.map(({ label, path }) => (
                  <li key={label}>
                    <Link
                      to={path}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} {company.name}. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;