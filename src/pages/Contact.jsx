import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Instagram, MapPin, Mail, Clock } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ContactCard from '../components/ContactCard';
import SmartForm from '../components/Form/SmartForm';
import { useConfig } from '../contexts/ConfigContext';

const Contact = () => {
  const { contact } = useConfig();
  const [mapLoaded, setMapLoaded] = useState(false);

  const contactFormFields = [
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
      name: 'email',
      label: 'Email (ixtiyoriy)',
      type: 'email',
      required: false,
      placeholder: 'email@example.com'
    },
    {
      name: 'subject',
      label: 'Mavzu',
      type: 'select',
      required: true,
      placeholder: 'Mavzuni tanlang',
      options: [
        'Umumiy savollar',
        'Xizmat haqida',
        'Narx so\'rash',
        'Hamkorlik',
        'Shikoyat',
        'Boshqa'
      ]
    },
    {
      name: 'message',
      label: 'Xabar',
      type: 'textarea',
      required: true,
      placeholder: 'Xabaringizni yozing...',
      fullWidth: true
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefon',
      value: contact.phone,
      description: 'Dushanba-Yakshanba, 9:00-22:00',
      link: `tel:${contact.phone}`,
      color: 'text-green-600'
    },
    {
      icon: MessageCircle,
      title: 'Telegram',
      value: contact.telegram,
      description: '24/7 tez javob',
      link: `https://t.me/${contact.telegram.replace('@', '')}`,
      color: 'text-blue-600'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: `@${contact.instagram}`,
      description: 'Portfolio va yangiliklarimiz',
      link: `https://instagram.com/${contact.instagram}`,
      color: 'text-pink-600'
    },
    {
      icon: MapPin,
      title: 'Manzil',
      value: contact.address,
      description: 'Bizni topishingiz mumkin',
      color: 'text-gray-600'
    }
  ];

  const workingHours = [
    { day: 'Dushanba - Juma', hours: '9:00 - 20:00' },
    { day: 'Shanba', hours: '10:00 - 18:00' },
    { day: 'Yakshanba', hours: '10:00 - 16:00' }
  ];

  const handleContactSubmit = (data) => {
    console.log('Contact form submitted:', data);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-900 to-cyan-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Biz bilan bog'laning
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Savollaringiz bo'lsa yoki loyihangizni muhokama qilishni istasangiz - biz bilan bog'laning
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Aloqa usullari" 
            subtitle="Sizga qulay bo'lgan usulda biz bilan bog'laning"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ContactCard
                  icon={method.icon}
                  title={method.title}
                  value={method.value}
                  link={method.link}
                />
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {method.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Xabar yuborish
              </h2>
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
                <SmartForm
                  title=""
                  fields={contactFormFields}
                  onSubmit={handleContactSubmit}
                  submitText="Xabar yuborish"
                />
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Working Hours */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Clock className="mr-3 text-teal-600" />
                  Ish vaqti
                </h3>
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                      <span className="text-gray-600 dark:text-gray-300">{schedule.day}</span>
                      <span className="font-semibold text-gray-900 dark:text-white">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Tez javob olish
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Shoshilinch holatlarda to'g'ridan-to'g'ri telefon qiling yoki Telegram orqali yozing.
                  Biz 15 daqiqa ichida javob beramiz.
                </p>
                <div className="flex flex-col space-y-3">
                  <a 
                    href={`tel:${contact.phone}`}
                    className="flex items-center space-x-3 text-green-600 dark:text-green-400 font-semibold hover:underline"
                  >
                    <Phone size={20} />
                    <span>{contact.phone}</span>
                  </a>
                  <a 
                    href={`https://t.me/${contact.telegram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                  >
                    <MessageCircle size={20} />
                    <span>{contact.telegram}</span>
                  </a>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Tez-tez so'raladigan savollar
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      q: "Qancha vaqt oladi?",
                      a: "Loyiha murakkabligiga qarab 3-10 kun"
                    },
                    {
                      q: "Narxlar qancha?",
                      a: "Har bir loyiha uchun individual hisoblash"
                    },
                    {
                      q: "Oldindan to'lov kerakmi?",
                      a: "Ha, umumiy summaning 50% oldindan to'lanadi"
                    }
                  ].map((faq, index) => (
                    <div key={index} className="border-l-4 border-teal-500 pl-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {faq.q}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Bizning joylashuvimiz" 
            subtitle="Tashkentda biz bilan uchrashishingiz mumkin"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl bg-gray-200 dark:bg-gray-700"
          >
            {!mapLoaded && (
              <div 
                className="h-96 flex items-center justify-center cursor-pointer"
                onClick={() => setMapLoaded(true)}
              >
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 mb-2">Xaritani yuklash</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {contact.address}
                  </p>
                </div>
              </div>
            )}
            
            {mapLoaded && (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.5491748037!2d69.11455842578123!3d41.28275094056334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1625650116489!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Smart Media Location"
              />
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;