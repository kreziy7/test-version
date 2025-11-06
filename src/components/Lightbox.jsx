import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Lightbox = ({ 
  isOpen, 
  onClose, 
  item, 
  items = [], 
  currentIndex, 
  onPrevious, 
  onNext 
}) => {
  if (!isOpen || !item) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        onClick={handleBackdropClick}
      >
        {/* Close Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-colors"
        >
          <X size={24} />
        </motion.button>

        {/* Navigation Buttons */}
        {items.length > 1 && (
          <>
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={onPrevious}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-colors"
            >
              <ChevronLeft size={24} />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={onNext}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-colors"
            >
              <ChevronRight size={24} />
            </motion.button>
          </>
        )}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="relative max-w-5xl max-h-[90vh] w-full"
        >
          {item.type === 'video' ? (
            <div className="relative bg-gray-900 rounded-lg overflow-hidden">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center text-white">
                  <Play size={64} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Video Player</p>
                  <p className="text-sm opacity-75">Mock video player for demo</p>
                </div>
              </div>
            </div>
          ) : (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain rounded-lg"
            />
          )}

          {/* Item Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white"
          >
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <div className="flex items-center justify-between">
              <span className="text-lg text-gray-300">{item.category}</span>
              {items.length > 1 && (
                <span className="text-sm text-gray-400">
                  {currentIndex + 1} / {items.length}
                </span>
              )}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;