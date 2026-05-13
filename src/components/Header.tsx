import React from 'react';
import { Search, Heart, ShoppingBag } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <h1>wearism</h1>
        </div>
        
        <div className="search-container">
          <div className="search-bar">
            <input type="text" placeholder="Search for items, brands and inspiration" />
            <Search size={18} className="search-icon" />
          </div>
        </div>

        <div className="header-actions">
          <button className="icon-btn">
            <Heart size={22} />
          </button>
          <button className="icon-btn cart-btn">
            <ShoppingBag size={22} />
            <span className="cart-count">0</span>
          </button>
          <button className="lang-selector">
            US
          </button>
        </div>
      </div>
      
      <style>{`
        .header {
          padding: 24px 0;
          background: #fff;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }
        .logo h1 {
          font-size: 32px;
          font-weight: 800;
          letter-spacing: -1.5px;
        }
        .search-container {
          flex: 1;
          max-width: 600px;
        }
        .search-bar {
          position: relative;
          display: flex;
          align-items: center;
        }
        .search-bar input {
          width: 100%;
          padding: 12px 20px;
          padding-right: 50px;
          background: #f3f4f6;
          border: none;
          border-radius: 12px;
          font-size: 14px;
          outline: none;
          transition: var(--transition);
        }
        .search-bar input:focus {
          background: #e5e7eb;
          box-shadow: 0 0 0 2px var(--primary-light);
        }
        .search-icon {
          position: absolute;
          right: 20px;
          color: #6b7280;
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .icon-btn {
          position: relative;
          color: #1f2937;
          transition: var(--transition);
        }
        .icon-btn:hover {
          color: var(--primary);
          transform: translateY(-2px);
        }
        .cart-btn {
          display: flex;
          align-items: center;
        }
        .cart-count {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #000;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
        .lang-selector {
          font-weight: 700;
          font-size: 12px;
          padding: 4px 8px;
          border: 1px solid #e5e7eb;
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .search-container {
            display: none;
          }
          .logo h1 {
            font-size: 24px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
