import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, MessageSquare, Star, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import SmartForm from '../components/Form/SmartForm';
import Button from '../components/Button';
import { useFormSubmit } from '../hooks/useFormSubmit';

const Consultation = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [consultationData, setConsultationData] = useState(null);
  const { submitPayment } = useFormSubmit();

  const consultationTypes = [
    {
      title: 'Video Marketing',
      price: '50,000',
      duration: '60 daqiqa',
      features: [
        'Video kontent strategiyasi',
        'Target auditoriya tahlili',
        'Platform bo\'yicha maslahatlar',
        'ROI hisoblash'
      ]
    },
    {
      title: 'SMM Strategiya',
      price: '75,000',
      duration: '90 daqiqa',
      features: [
        'Ijtimoiy media strategiyasi',
        'Kontent kalendar yaratish',
        'Engagement oshirish usullari',
        'Reklama kampaniyasi rejasi'
      ]
    },
    {
      title: 'Brend Rivojlantirish',
      price: '100,000',
      duration: '120 daqiqa',
      features: [
        'Brend identifikatsiya',
        'Vizual til yaratish',
        'Market pozitsiyalash',
        'Raqobatchilar tahlili'
      ]
    },
    {
      title: 'To\'liq Media Audit',
      price: '150,000',
      duration: '180 daqiqa',
      features: [
        'Barcha kanallar tahlili',
        'Performance metrikalari',
        'Yaxshilash takliflari',
        '3 oylik strategiya'
      ]
    }
  ];

  const consultationFormFields = [
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
      label: 'Email manzil',
      type: 'email',
      required: false,
      placeholder: 'email@example.com'
    },
    {
      name: 'consultation',
      label: 'Maslahat turi',
      type: 'select',
      required: true,
      placeholder: 'Maslahat turini tanlang',
      options: consultationTypes.map(c => c.title)
    },
    {
      name: 'company',
      label: 'Kompaniya nomi',
      type: 'text',
      required: false,
      placeholder: 'Kompaniya nomingiz'
    },
    {
      name: 'note',
      label: 'Maslahat mavzusi',
      type: 'textarea',
      required: true,
      placeholder: 'Qanday masalalar bo\'yicha maslahat kerak? Batafsil yozing...',
      fullWidth: true
    }
  ];

  const handleConsultationSubmit = (data) => {
    setConsultationData(data);
    setShowPayment(true);
  };

  const handlePayment = async (consultationType) => {
    const consultation = consultationTypes.find(c => c.title === consultationType);
    if (consultation) {
      try {
        const paymentResult = await submitPayment(
          consultation.price,
          `${consultation.title} maslahati`
        );
        
        if (paymentResult.success) {
          // Redirect to payment URL
          window.open(paymentResult.paymentUrl, '_blank');
        }
      } catch (error) {
        console.error('Payment error:', error);
      }
    }
  };

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Professional tajriba',
      description: '5+ yillik media va marketing tajribasi'
    },
    {
      icon: Clock,
      title: 'Samarali vaqt',
      description: 'Aniq vaqt ichida kerakli natijalar'
    },
    {
      icon: MessageSquare,
      title: 'Amaliy maslahatlar',
      description: 'Nazariya emas, faqat amaliy yechimlar'
    },
    {
      icon: Star,
      title: 'Individual yondashuv',
      description: 'Har bir mijoz uchun maxsus strategiya'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional Maslahat
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Media va marketing bo'yicha professional maslahat oling va biznesingizni rivojlantiring
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nima uchun bizdan maslahat olasiz?" 
            subtitle="Professional tajriba va natijaga yo'naltirilgan yondashuv"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl"
              >
                <benefit.icon className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Maslahat turlari" 
            subtitle="Sizning ehtiyojingizga mos maslahat turini tanlang"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {consultationTypes.map((consultation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 opacity-10 rounded-full transform translate-x-16 -translate-y-16" />
                
                <div className="relative">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {consultation.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                        <span className="flex items-center">
                          <Clock size={16} className="mr-1" />
                          {consultation.duration}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                        {consultation.price}
                      </div>
                      <div className="text-sm text-gray-500">so'm</div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {consultation.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handlePayment(consultation.title)}
                    className="w-full group"
                    variant="primary"
                  >
                    To'lov qilish
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      {!showPayment && (
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <SectionTitle 
                title="Maslahat uchun ariza" 
                subtitle="Quyidagi formani to'ldiring va biz siz bilan bog'lanamiz"
              />
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <SmartForm
                  title="Maslahat uchun ro'yxatdan o'tish"
                  fields={consultationFormFields}
                  onSubmit={handleConsultationSubmit}
                  submitText="Maslahat so'rash"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Payment Section */}
      {showPayment && consultationData && (
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-8"
              >
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Ariza qabul qilindi!
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Maslahat uchun to'lovni amalga oshiring va biz siz bilan bog'lanamiz.
                </p>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Tanlangan maslahat: {consultationData.consultation}
                  </h3>
                  <div className="text-2xl font-bold text-green-600">
                    {consultationTypes.find(c => c.title === consultationData.consultation)?.price || '50,000'} so'm
                  </div>
                </div>

                <Button
                  onClick={() => handlePayment(consultationData.consultation)}
                  size="lg"
                  className="group"
                >
                  To'lovni amalga oshirish
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Consultation;