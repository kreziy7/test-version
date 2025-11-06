import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

const ServiceCard = ({ service, onOrderClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
    >
      {/* Service Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900 dark:text-white">
            {service.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {service.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {service.description}
        </p>

        {/* Features */}
        {service.features && (
          <ul className="space-y-2 mb-6">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Action Button */}
        <Button
          onClick={() => onOrderClick(service)}
          variant="primary"
          className="w-full group"
        >
          Buyurtma berish
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;