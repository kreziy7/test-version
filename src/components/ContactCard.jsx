import React from 'react';
import { motion } from 'framer-motion';

const ContactCard = ({ icon: Icon, title, value, link, onClick }) => {
  const CardContent = () => (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 text-center group cursor-pointer"
    >
      <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
        <Icon className="w-8 h-8 text-gray-600 dark:text-gray-300" />
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
        {value}
      </p>
    </motion.div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <CardContent />
      </a>
    );
  }

  if (onClick) {
    return (
      <div onClick={onClick}>
        <CardContent />
      </div>
    );
  }

  return <CardContent />;
};

export default ContactCard;