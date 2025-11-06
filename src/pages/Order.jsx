import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import SmartForm from '../components/Form/SmartForm';

const Order = () => {
  const navigate = useNavigate();

  const orderFormFields = [
    {
      name: 'name',
      label: 'Ism familiya',
      type: 'text',
      required: true,
      placeholder: 'To\'liq ismingizni kiriting'
    },
    {
      name: 'phone',
      label: 'Telefon raqam',
      type: 'tel',
      required: true,
      placeholder: '+998 (90) 123-45-67'
    },
    {
      name: 'event',
      label: 'Xizmat/Tadbir turi',
      type: 'select',
      required: true,
      placeholder: 'Xizmat turini tanlang',
      options: [
        'To\'y marosimi',
        'Love Story',
        'Tug\'ilgan kun',
        'Osh marosimi',
        'Video montaj',
        'Fotosessiya',
        'SMM va reklama',
        'Boshqa'
      ]
    },
    {
      name: 'date',
      label: 'Kerakli sana',
      type: 'date',
      required: false,
      placeholder: 'Sanani tanlang'
    },
    {
      name: 'location',
      label: 'Manzil/Joyi',
      type: 'text',
      required: false,
      placeholder: 'Tadbir joyi yoki manzil'
    },
    {
      name: 'budget',
      label: 'Taxminan byudjet',
      type: 'select',
      required: false,
      placeholder: 'Byudjet oralig\'ini tanlang',
      options: [
        '500,000 so\'m gacha',
        '500,000 - 1,000,000 so\'m',
        '1,000,000 - 2,000,000 so\'m',
        '2,000,000 so\'mdan yuqori',
        'Muhokama qilamiz'
      ]
    },
    {
      name: 'note',
      label: 'Qo\'shimcha ma\'lumot',
      type: 'textarea',
      required: false,
      placeholder: 'Loyihangiz haqida batafsil ma\'lumot bering: qanday natija kutayotganingiz, maxsus talablar va boshqa muhim tafsilotlar...',
      fullWidth: true
    }
  ];

  const handleOrderSubmit = (data) => {
    console.log('Order submitted:', data);
    navigate('/thank-you');
  };

  const orderSteps = [
    {
      step: 1,
      title: 'Formani to\'ldiring',
      description: 'Barcha kerakli ma\'lumotlarni to\'liq kiriting'
    },
    {
      step: 2,
      title: 'Biz bog\'lanamiz',
      description: '24 soat ichida mutaxassisimiz aloqaga chiqadi'
    },
    {
      step: 3,
      title: 'Batafsil muhokama',
      description: 'Loyihani batafsil muhokama qilamiz'
    },
    {
      step: 4,
      title: 'Ishni boshlaymiz',
      description: 'Kelishuvdan keyin ishni boshlaymiz'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-900 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Buyurtma Berish
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Professional xizmatlar uchun buyurtma bering va biz siz bilan tez orada bog'lanamiz
            </p>
          </motion.div>
        </div>
      </section>

      {/* Order Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Qanday buyurtma beraman?" 
            subtitle="Oddiy 4 bosqichda professional xizmat"
          />
          
          <div className="grid md:grid-cols-4 gap-8">
            {orderSteps.map((orderStep, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {orderStep.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {orderStep.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {orderStep.description}
                </p>
                
                {/* Connection Line */}
                {index < orderSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-orange-200 to-red-200 dark:from-orange-800 dark:to-red-800 transform -translate-x-8" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionTitle 
              title="Buyurtma formasi" 
              subtitle="Quyidagi formani diqqat bilan to'ldiring"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
            >
              <SmartForm
                title="Professional xizmat buyurtmasi"
                fields={orderFormFields}
                onSubmit={handleOrderSubmit}
                submitText="Buyurtma yuborish"
                showFileUpload={true}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Shoshilinch holatlarda
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Agar shoshilinch buyurtma berishingiz kerak bo'lsa, to'g'ridan-to'g'ri bog'laning
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a 
                href="tel:+998983112028"
                className="flex items-center space-x-2 text-lg font-semibold text-orange-600 dark:text-orange-400 hover:underline"
              >
                <span>📞</span>
                <span>+998 98 311 20 28</span>
              </a>
              
              <a 
                href="https://t.me/UM_COMPONY_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                <span>📱</span>
                <span>@UM_COMPONY_bot</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Order;