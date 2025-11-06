import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import PortfolioCard from '../components/PortfolioCard';
import Lightbox from '../components/Lightbox';
import Loader from '../components/Loader';
import { useFetchPortfolio } from '../hooks/useFetchPortfolio';

const Portfolio = () => {
  const { portfolio, loading, error } = useFetchPortfolio();
  const [filteredPortfolio, setFilteredPortfolio] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filters = ['All', 'Video', 'Foto', 'Instagram'];

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredPortfolio(portfolio);
    } else {
      setFilteredPortfolio(portfolio.filter(item => item.category === activeFilter));
    }
  }, [portfolio, activeFilter]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleItemClick = (item) => {
    const index = filteredPortfolio.findIndex(p => p.id === item.id);
    setCurrentItem(item);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handleLightboxClose = () => {
    setLightboxOpen(false);
    setCurrentItem(null);
  };

  const handleLightboxPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : filteredPortfolio.length - 1;
    setCurrentIndex(newIndex);
    setCurrentItem(filteredPortfolio[newIndex]);
  };

  const handleLightboxNext = () => {
    const newIndex = currentIndex < filteredPortfolio.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setCurrentItem(filteredPortfolio[newIndex]);
  };

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader size="lg" />
          <p className="mt-4 text-gray-600 dark:text-gray-300">Portfolio yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bizning Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Mijozlarimiz uchun yaratgan eng yaxshi ishlarimizni ko'ring
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Bizning ishlarimiz" 
            subtitle="Professional yondashuvda yaratilgan eng yaxshi loyihalar"
          />

          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 bg-gray-100 dark:bg-gray-800 rounded-xl p-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilterChange(filter)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeFilter === filter
                      ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPortfolio.map((item) => (
                <PortfolioCard
                  key={item.id}
                  item={item}
                  onViewClick={handleItemClick}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredPortfolio.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Bu kategoriyada hali loyihalar yo'q
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Bajarilgan loyihalar' },
              { number: '100+', label: 'Xursand mijozlar' },
              { number: '5', label: 'Yillik tajriba' },
              { number: '24/7', label: 'Qo\'llab-quvvatlash' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={handleLightboxClose}
        item={currentItem}
        items={filteredPortfolio}
        currentIndex={currentIndex}
        onPrevious={handleLightboxPrevious}
        onNext={handleLightboxNext}
      />
    </div>
  );
};

export default Portfolio;