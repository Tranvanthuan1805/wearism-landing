import React from 'react';
import { Home, Zap } from 'lucide-react';

const Sidebar: React.FC = () => {
  const menuItems = [
    { name: 'HOME', icon: <Home size={18} />, active: false },
    { name: 'NEW IN', icon: <Zap size={18} />, active: true, color: 'purple' },
    { name: 'COATS', image: '/images/coat1.png', active: false },
    { name: 'TOPS', image: '/images/coat3.png', active: false },
    { name: 'KNITWEAR', image: '/images/coat4.png', active: false },
  ];

  return (
    <aside className="sidebar">
      <nav>
        <ul className="nav-list">
          {menuItems.map((item, idx) => (
            <li key={idx} className={`nav-item ${item.active ? 'active' : ''} ${item.color === 'purple' ? 'purple-bg' : ''}`}>
              <span className="item-name">{item.name}</span>
              <div className="item-visual">
                {item.icon && <span className="icon">{item.icon}</span>}
                {item.image && <img src={item.image} alt={item.name} className="nav-thumb" />}
              </div>
            </li>
          ))}
        </ul>
      </nav>

      <style>{`
        .sidebar {
          width: 260px;
          flex-shrink: 0;
        }
        .nav-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .nav-item {
          background: #fff;
          padding: 16px 20px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: var(--transition);
          cursor: pointer;
        }
        .nav-item:hover {
          transform: translateX(5px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .nav-item.active {
          font-weight: 700;
        }
        .nav-item.purple-bg {
          background: var(--primary);
          color: #fff;
        }
        .item-name {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        .nav-thumb {
          width: 32px;
          height: 40px;
          object-fit: cover;
          border-radius: 6px;
        }
        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 1024px) {
          .sidebar {
            width: 100%;
            margin-bottom: 24px;
          }
          .nav-list {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 10px;
          }
          .nav-item {
            flex-shrink: 0;
            padding: 10px 16px;
          }
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
