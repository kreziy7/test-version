import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 select-none">
            404
          </h1>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sahifa topilmadi
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto">
            Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan bo'lishi mumkin.
          </p>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, Math.random() * -200 - 100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 4,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
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
            onClick={() => navigate(-1)}
            variant="outline"
            size="lg"
            className="group"
          >
            <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Orqaga qaytish
          </Button>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 relative z-10"
        >
          <p className="text-gray-400 mb-4">Yoki quyidagi bo'limlardan birini tanlang:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'Xizmatlar', path: '/services' },
              { label: 'Portfolio', path: '/portfolio' },
              { label: 'Tadbirlar', path: '/events' },
              { label: 'Aloqa', path: '/contact' }
            ].map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className="text-gray-300 hover:text-white underline underline-offset-4 hover:underline-offset-8 transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 relative z-10"
        >
          <p className="text-gray-500 text-sm">
            Agar muammo davom etsa, biz bilan bog'laning: 
            <a 
              href="tel:+998983112028" 
              className="text-gray-300 hover:text-white ml-2 underline"
            >
              +998 98 311 20 28
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;