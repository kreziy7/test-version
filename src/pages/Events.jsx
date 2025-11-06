import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import EventCard from '../components/EventCard';
import SmartForm from '../components/Form/SmartForm';
import eventsData from '../data/events.json';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventFormFields = [
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
      name: 'date',
      label: 'Tadbir sanasi',
      type: 'date',
      required: true,
      placeholder: 'Sanani tanlang'
    },
    {
      name: 'location',
      label: 'Tadbir joyi',
      type: 'text',
      required: false,
      placeholder: 'Manzilni kiriting'
    },
    {
      name: 'guests',
      label: 'Mehmonlar soni',
      type: 'number',
      required: false,
      placeholder: 'Taxminan mehmonlar soni'
    },
    {
      name: 'note',
      label: 'Qo\'shimcha ma\'lumot',
      type: 'textarea',
      required: false,
      placeholder: 'Tadbiringiz haqida batafsil ma\'lumot bering...',
      fullWidth: true
    }
  ];

  const handleEventBook = (event) => {
    setSelectedEvent(event);
  };

  const handleFormSubmit = (data) => {
    console.log('Event booking submitted:', data);
    // Handle form submission success
    setSelectedEvent(null);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-pink-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Tadbir Turlari
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Hayotingizning eng muhim daqiqalarini professional darajada yozib olamiz
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Bizning xizmatlarimiz" 
            subtitle="Har qanday muhim tadbiringiz uchun professional yozuv xizmati"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventsData.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onBookClick={handleEventBook}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Qanday ishlaydi?" 
            subtitle="Oddiy 4 bosqichda professional xizmat"
          />
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Buyurtma berish',
                description: 'Formani to\'ldiring va tadbir haqida ma\'lumot bering'
              },
              {
                step: '02',
                title: 'Maslahat',
                description: 'Mutaxassisimiz siz bilan bog\'lanib, batafsil ma\'lumot beradi'
              },
              {
                step: '03',
                title: 'Tadbir yozuvi',
                description: 'Professional jamoamiz tadbiringizni yozib oladi'
              },
              {
                step: '04',
                title: 'Natija',
                description: 'Montaj qilingan materiallarni vaqtida olib kelasiz'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {process.description}
                </p>
                
                {/* Connection Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 transform -translate-x-8" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Booking Modal */}
      <AnimatePresence>
        {selectedEvent && (
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
                    {selectedEvent.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedEvent.description}
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
                title={`${selectedEvent.title} uchun buyurtma`}
                fields={eventFormFields}
                onSubmit={handleFormSubmit}
                submitText="Buyurtma yuborish"
                showFileUpload={true}
                eventType={selectedEvent.title}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;