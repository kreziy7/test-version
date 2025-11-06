import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Home, MessageCircle } from 'lucide-react';
import Button from '../components/Button';
import { useConfig } from '../contexts/ConfigContext';

const ThankYou = () => {
  const navigate = useNavigate();
  const { contact } = useConfig();

  useEffect(() => {
    // Optional: Redirect after some time
    const timer = setTimeout(() => {
      // Uncomment if you want auto-redirect
      // navigate('/');
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  const nextSteps = [
    {
      icon: MessageCircle,
      title: '24 soat ichida bog\'lanamiz',
      description: 'Mutaxassisimiz siz bilan bog\'lanib, loyihani batafsil muhokama qiladi'
    },
    {
      icon: CheckCircle,
      title: 'Taklif tayyorlaymiz',
      description: 'Sizning talablaringizga mos taklifni tayyorlaymiz'
    },
    {
      icon: CheckCircle,
      title: 'Ishni boshlaymiz',
      description: 'Kelishuvdan keyin loyiha ustida ishni boshlaymiz'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 0.2 
            }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Thank You Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Rahmat!
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Buyurtmangiz muvaffaqiyatli qabul qilindi. Biz tez orada siz bilan bog'lanib, 
              loyihangizni batafsil muhokama qilamiz.
            </p>
          </motion.div>

          {/* Order Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12 max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Keyingi qadamlar
            </h2>
            <div className="space-y-6">
              {nextSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-2xl p-8 mb-12"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Shoshilinch savol bo'lsa
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Agar sizda qo'shimcha savollar bo'lsa yoki biror narsa o'zgarsa, 
              biz bilan bog'lanishdan tortinmang
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a 
                href={`tel:${contact.phone}`}
                className="flex items-center space-x-2 text-lg font-semibold text-green-600 dark:text-green-400 hover:underline transition-colors"
              >
                <span>📞</span>
                <span>{contact.phone}</span>
              </a>
              
              <a 
                href={`https://t.me/${contact.telegram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline transition-colors"
              >
                <span>📱</span>
                <span>{contact.telegram}</span>
              </a>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => navigate('/')}
              size="lg"
              className="group"
            >
              <Home className="mr-2 w-5 h-5" />
              Bosh sahifaga qaytish
            </Button>
            
            <Button
              onClick={() => navigate('/portfolio')}
              variant="outline"
              size="lg"
            >
              Portfolio ko'rish
            </Button>
          </motion.div>

          {/* Additional Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-500 dark:text-gray-400 italic">
              "Sizning eng muhim daqiqalaringizni professional darajada saqlash - bizning vazifamiz"
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
              - Smart Media jamoasi
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;