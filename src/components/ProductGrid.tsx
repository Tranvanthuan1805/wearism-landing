import React from 'react';
import { Heart, ChevronDown, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductGrid: React.FC = () => {
  const products = [
    { id: 1, name: 'Grey Bomber', image: '/images/coat1.png' },
    { id: 2, name: 'Beige Trench', image: '/images/coat2.png' },
    { id: 3, name: 'Tie-Dye Jacket', image: '/images/coat3.png' },
    { id: 4, name: 'White Blazer', image: '/images/coat4.png' },
  ];

  const filters = ['Sort', 'Product type', 'Style', 'Size', 'Colour', 'Price Range'];

  return (
    <div className="product-content">
      <div className="content-header">
        <div className="title-area">
          <h2>COATS</h2>
          <a href="#" className="view-more">View more</a>
        </div>
        
        <div className="filter-bar">
          <div className="filters-scroll">
            {filters.map((filter, idx) => (
              <button key={idx} className="filter-btn">
                {filter === 'Sort' && <Filter size={14} style={{marginRight: 8}} />}
                {filter}
              </button>
            ))}
          </div>
          <button className="filter-icon-btn">
            <ChevronDown size={18} />
          </button>
        </div>
      </div>

      <div className="grid-container">
        {products.map((product) => (
          <motion.div 
            key={product.id} 
            className="product-card"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.name} className="product-img" />
              <button className="wishlist-btn">
                <Heart size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .product-content {
          flex: 1;
        }
        .content-header {
          margin-bottom: 30px;
        }
        .title-area {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 20px;
        }
        .title-area h2 {
          font-size: 36px;
          font-weight: 900;
          letter-spacing: -1px;
        }
        .view-more {
          font-size: 13px;
          font-weight: 700;
          color: #6b7280;
        }
        .filter-bar {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .filters-scroll {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 4px;
        }
        .filter-btn {
          white-space: nowrap;
          padding: 10px 20px;
          background: #fff;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 600;
          display: flex;
          align-items: center;
          border: 1px solid transparent;
          transition: var(--transition);
        }
        .filter-btn:hover {
          border-color: var(--gray-medium);
          background: var(--gray-light);
        }
        .filter-icon-btn {
          background: #000;
          color: #fff;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          flex-shrink: 0;
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 20px;
        }
        .product-card {
          position: relative;
          cursor: pointer;
        }
        .product-image-wrapper {
          position: relative;
          aspect-ratio: 3/4;
          border-radius: 30px;
          overflow: hidden;
          background: #f0f0f0;
        }
        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .product-card:hover .product-img {
          transform: scale(1.05);
        }
        .wishlist-btn {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: #fff;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          transition: var(--transition);
        }
        .wishlist-btn:hover {
          background: var(--primary);
          color: #fff;
        }

        @media (max-width: 640px) {
          .grid-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .title-area h2 {
            font-size: 24px;
          }
          .product-image-wrapper {
            border-radius: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductGrid;
