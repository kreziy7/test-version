import React, { createContext, useContext } from 'react';

// 1️⃣ Context yaratamiz
const ConfigContext = createContext(null);

// 2️⃣ Hook — istalgan joyda config dan foydalanish uchun
export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};

// 3️⃣ Provider — butun ilova uchun config qiymatlarini beradi
export const ConfigProvider = ({ children }) => {
  const config = {
    company: {
      name: 'Smart Media',
      description: 'Professional media va marketing xizmatlari',
    },
    contact: {
      phone: '+998983112028',
      telegram: '@UM_COMPONY_bot',
      instagram: 'smart_media.uz',
      address: "Tashkent, O'zbekiston",
    },
    api: {
      telegram: import.meta.env.VITE_TELEGRAM_API ?? 'https://api.telegram.org/bot',
      payment: import.meta.env.VITE_PAYMENT_API ?? '/api/payment',
    },
  };

  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );
};
