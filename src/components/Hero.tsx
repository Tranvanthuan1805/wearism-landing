import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="hero-section container">
      <motion.div 
        className="hero-banner"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="banner-content">
          <motion.div 
            className="text-center"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2>$20 OFF $100 PLUS,</h2>
            <h2>GET FREE NEXT-DAY DELIVERY</h2>
            <p className="code-text">With code: 20100</p>
            <button className="ok-btn">OK</button>
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        .hero-section {
          margin-top: 20px;
          margin-bottom: 40px;
        }
        .hero-banner {
          height: 340px;
          border-radius: 40px;
          background-image: url('/images/hero.png');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .banner-content {
          z-index: 2;
          text-align: center;
        }
        .text-center h2 {
          font-size: 32px;
          font-weight: 900;
          color: #000;
          line-height: 1.1;
          margin-bottom: 4px;
          text-transform: uppercase;
        }
        .code-text {
          font-weight: 600;
          font-size: 14px;
          margin: 15px 0;
        }
        .ok-btn {
          background: #000;
          color: #fff;
          padding: 12px 48px;
          border-radius: 12px;
          font-weight: 800;
          font-size: 14px;
          transition: var(--transition);
        }
        .ok-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        @media (max-width: 768px) {
          .hero-banner {
            height: 250px;
            border-radius: 20px;
          }
          .text-center h2 {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
