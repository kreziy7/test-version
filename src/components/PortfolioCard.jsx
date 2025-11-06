import React from 'react';
import { motion } from 'framer-motion';
import { Play, Eye } from 'lucide-react';

const PortfolioCard = ({ item, onViewClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden cursor-pointer"
      onClick={() => onViewClick(item)}
    >
      {/* Portfolio Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
        
        {/* Play/View Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
          >
            {item.type === 'video' ? (
              <Play className="w-6 h-6 text-white ml-1" />
            ) : (
              <Eye className="w-6 h-6 text-white" />
            )}
          </motion.div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
            {item.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
          {item.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {item.category}
          </span>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            {item.type === 'video' ? <Play size={14} /> : <Eye size={14} />}
            <span className="ml-1">Ko'rish</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;