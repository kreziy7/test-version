import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Button from './Button';

const EventCard = ({ event, onBookClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
    >
      {/* Event Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        {/* Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1">
            {event.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {event.description}
        </p>

        {/* Book Button */}
        <Button
          onClick={() => onBookClick(event)}
          variant="primary"
          className="w-full group"
        >
          <Calendar className="mr-2 w-4 h-4" />
          Buyurtma berish
        </Button>
      </div>
    </motion.div>
  );
};

export default EventCard;