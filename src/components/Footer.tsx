import React from 'react';
import { Instagram, Twitter, Facebook, Youtube, Send, CreditCard, ShieldCheck, Truck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer-premium">
      <div className="container footer-grid">
        {/* Brand Section */}
        <div className="footer-section brand-col">
          <h2 className="footer-logo">wearism</h2>
          <p className="brand-desc">
            Elevating your everyday style with curated collections and next-gen streetwear. Join the movement.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon"><Instagram size={20} /></a>
            <a href="#" className="social-icon"><Twitter size={20} /></a>
            <a href="#" className="social-icon"><Facebook size={20} /></a>
            <a href="#" className="social-icon"><Youtube size={20} /></a>
          </div>
        </div>

        {/* Links Sections */}
        <div className="footer-section">
          <h3>Shop</h3>
          <ul className="footer-links">
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">Coats & Jackets</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Sale</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul className="footer-links">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Size Guide</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section newsletter-col">
          <h3>Join the Club</h3>
          <p className="newsletter-text">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-btn">
              <Send size={18} />
            </button>
          </div>
          <div className="trust-badges">
            <div className="badge"><Truck size={16} /> <span>Fast Shipping</span></div>
            <div className="badge"><ShieldCheck size={16} /> <span>Secure Payment</span></div>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <div className="bottom-content">
          <p className="copyright">&copy; 2026 wearism Inc. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
          <div className="payment-methods">
            <CreditCard size={20} />
            <span className="payment-label">SECURE CHECKOUT</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-premium {
          background: #fff;
          padding-top: 100px;
          padding-bottom: 40px;
          border-top: 1px solid #f0f0f0;
          margin-top: auto;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
          gap: 60px;
          margin-bottom: 80px;
        }
        .footer-logo {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 24px;
        }
        .brand-desc {
          color: #6b7280;
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 30px;
          max-width: 300px;
        }
        .social-links {
          display: flex;
          gap: 16px;
        }
        .social-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #f9fafb;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #374151;
          transition: var(--transition);
        }
        .social-icon:hover {
          background: var(--primary);
          color: #fff;
          transform: translateY(-5px);
        }

        .footer-section h3 {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 24px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-links a {
          color: #6b7280;
          font-size: 14px;
          font-weight: 500;
          transition: var(--transition);
        }
        .footer-links a:hover {
          color: var(--primary);
          padding-left: 5px;
        }

        .newsletter-text {
          color: #6b7280;
          font-size: 14px;
          margin-bottom: 20px;
        }
        .newsletter-form {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
        }
        .newsletter-form input {
          flex: 1;
          padding: 14px 20px;
          background: #f3f4f6;
          border: none;
          border-radius: 12px;
          font-size: 14px;
          outline: none;
        }
        .subscribe-btn {
          background: #000;
          color: #fff;
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }
        .subscribe-btn:hover {
          background: var(--primary);
          transform: scale(1.05);
        }

        .trust-badges {
          display: flex;
          gap: 20px;
        }
        .badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          color: #374151;
        }

        .footer-bottom {
          padding-top: 40px;
          border-top: 1px solid #f0f0f0;
        }
        .bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        .copyright {
          font-size: 13px;
          color: #9ca3af;
        }
        .legal-links {
          display: flex;
          gap: 24px;
        }
        .legal-links a {
          font-size: 13px;
          color: #9ca3af;
          transition: var(--transition);
        }
        .legal-links a:hover {
          color: var(--text);
        }
        .payment-methods {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #374151;
        }
        .payment-label {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .bottom-content {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
