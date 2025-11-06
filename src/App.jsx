import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { ConfigProvider } from './contexts/ConfigContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Events from './pages/Events';
import Portfolio from './pages/Portfolio';
import Consultation from './pages/Consultation';
import Order from './pages/Order';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import NotFound from './pages/NotFound';
import { useScrollToTop } from './hooks/useScrollToTop';

const AppContent = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Events />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <ConfigProvider>
        <Router>
          <AppContent />
        </Router>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;