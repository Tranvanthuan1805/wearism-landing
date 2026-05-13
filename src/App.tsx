import Header from './components/Header'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import ProductGrid from './components/ProductGrid'

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <div className="container main-layout">
          <Sidebar />
          <ProductGrid />
        </div>
      </main>

      <footer className="footer container">
        <p>&copy; 2026 wearism. Designed for style.</p>
      </footer>

      <style>{`
        .app-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: #fdfdfd;
          padding-bottom: 60px;
        }
        .main-layout {
          display: flex;
          gap: 40px;
          align-items: flex-start;
        }
        .footer {
          margin-top: 80px;
          padding-top: 40px;
          border-top: 1px solid #eee;
          text-align: center;
          color: #9ca3af;
          font-size: 14px;
        }

        @media (max-width: 1024px) {
          .main-layout {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
    </div>
  )
}

export default App
