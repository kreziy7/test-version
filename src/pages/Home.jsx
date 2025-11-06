import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Award } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import EventCard from '../components/EventCard';
import PortfolioCard from '../components/PortfolioCard';
import Button from '../components/Button';
import servicesData from '../data/services.json';
import eventsData from '../data/events.json';
import portfolioData from '../data/portfolio.json';

const Home = () => {
  const navigate = useNavigate();

  const heroProps = {
    title: 'Smart Media Professional',
    subtitle: 'Sizning eng muhim daqiqalaringizni professional darajada yozib olamiz. Video, foto va reklama xizmatlarida 5 yillik tajriba.',
    primaryAction: {
      label: 'Buyurtma berish',
      onClick: () => navigate('/order')
    },
    secondaryAction: {
      label: 'Portfolio ko\'rish',
      onClick: () => navigate('/portfolio')
    },
    backgroundImage: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
  };

  const stats = [
    { icon: Users, value: '500+', label: 'Mijozlar' },
    { icon: Award, value: '1000+', label: 'Loyihalar' },
    { icon: Star, value: '4.9', label: 'Reyting' },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Dilnoza Karimova',
      text: 'To\'yimizni juda professional darajada suratga olishdi. Natija kutganimdan ham yaxshi chiqdi!',
      rating: 5,
      event: 'To\'y marosimi'
    },
    {
      id: 2,
      name: 'Jasurbek Aliyev',
      text: 'Biznes uchun reklama video tayyorlashdi. Mijozlar soni sezilarli darajada oshdi.',
      rating: 5,
      event: 'Biznes reklama'
    },
    {
      id: 3,
      name: 'Kamila Nazarova',
      text: 'Love Story videomiz juda ajoyib chiqdi. Do\'stlarimiz hali ham hayron qolishadi.',
      rating: 5,
      event: 'Love Story'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero {...heroProps} />

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Bizning xizmatlar" 
            subtitle="Professional media xizmatlari bilan sizning ehtiyojlaringizni qondiramiz"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {servicesData.slice(0, 3).map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onOrderClick={() => navigate('/services')}
              />
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => navigate('/services')}
              variant="primary"
              size="lg"
            >
              Barcha xizmatlar
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Tadbir turlari" 
            subtitle="Har qanday muhim tadbiringizni professional darajada yozib olamiz"
          />
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {eventsData.slice(0, 4).map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onBookClick={() => navigate('/events')}
              />
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => navigate('/events')}
              variant="outline"
              size="lg"
            >
              Barcha tadbirlar
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Bizning ishlarimiz" 
            subtitle="Mijozlarimiz uchun yaratgan eng yaxshi ishlarimizni ko'ring"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {portfolioData.slice(0, 6).map((item) => (
              <PortfolioCard
                key={item.id}
                item={item}
                onViewClick={() => navigate('/portfolio')}
              />
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => navigate('/portfolio')}
              variant="primary"
              size="lg"
            >
              To'liq portfolio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Mijozlar fikrlari" 
            subtitle="Bizning ishimiz haqida mijozlarimiz nima deyishadi"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.event}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Loyihangizni muhokama qilaylikmi?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Professional maslahat olish va taklifimiz bilan tanishish uchun biz bilan bog'laning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/consultation')}
                variant="primary"
                size="lg"
              >
                Maslahat olish
              </Button>
              <Button 
                onClick={() => navigate('/contact')}
                variant="outline"
                size="lg"
              >
                Bog'lanish
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;