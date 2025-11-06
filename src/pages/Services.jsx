import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import SmartForm from '../components/Form/SmartForm';
import servicesData from '../data/services.json';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const serviceFormFields = [
    {
      name: 'name',
      label: 'Ism familiya',
      type: 'text',
      required: true,
      placeholder: 'Ismingizni kiriting'
    },
    {
      name: 'phone',
      label: 'Telefon raqam',
      type: 'tel',
      required: true,
      placeholder: '+998 (90) 123-45-67'
    },
    {
      name: 'service',
      label: 'Xizmat turi',
      type: 'select',
      required: true,
      placeholder: 'Xizmat turini tanlang',
      options: servicesData.map(s => s.title)
    },
    {
      name: 'date',
      label: 'Talab qilinadigan sana',
      type: 'date',
      required: false,
      placeholder: 'Sanani tanlang'
    },
    {
      name: 'note',
      label: 'Qo\'shimcha ma\'lumot',
      type: 'textarea',
      required: false,
      placeholder: 'Loyihangiz haqida batafsil yozing...',
      fullWidth: true
    }
  ];

  const handleServiceOrder = (service) => {
    setSelectedService(service);
  };

  const handleFormSubmit = (data) => {
    console.log('Service order submitted:', data);
    // Handle form submission success
    setSelectedService(null);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional Xizmatlar
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Video montaj, fotosessiya va reklama sohasida professional yondashuvda xizmat ko'rsatamiz
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Bizning xizmatlarimiz" 
            subtitle="Har bir loyihaga individual yondashuvda professional xizmat ko'rsatamiz"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onOrderClick={handleServiceOrder}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nima uchun bizni tanlaysiz?" 
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: '5 yillik tajriba',
                description: 'Media sohasida katta tajriba',
                icon: '🏆'
              },
              {
                title: 'Professional texnika',
                description: '4K video va professional foto',
                icon: '📷'
              },
              {
                title: 'Tez muddatlar',
                description: 'Qisqa muddatda yuqori sifat',
                icon: '⚡'
              },
              {
                title: '24/7 qo\'llab-quvvatlash',
                description: 'Har doim aloqada bo\'lamiz',
                icon: '💬'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Order Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && closeModal()}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedService.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedService.price}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-2xl"
                >
                  ×
                </button>
              </div>

              <SmartForm
                title={`${selectedService.title} uchun buyurtma`}
                fields={serviceFormFields}
                onSubmit={handleFormSubmit}
                submitText="Buyurtma yuborish"
                eventType={selectedService.title}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;