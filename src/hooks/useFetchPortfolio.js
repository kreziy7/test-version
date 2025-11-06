import { useState, useEffect } from 'react';
import portfolioData from '../data/portfolio.json';

export const useFetchPortfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setPortfolio(portfolioData);
        setLoading(false);
      } catch (err) {
        setError('Portfolio ma\'lumotlarini yuklashda xatolik');
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  return { portfolio, loading, error };
};