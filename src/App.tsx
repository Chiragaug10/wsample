import { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import HomePage from './pages/HomePage';
import BrandsPage from './pages/BrandsPage';
import BrandDetailPage from './pages/BrandDetailPage';
import CateringPage from './pages/CateringPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedBrandId, setSelectedBrandId] = useState<string | undefined>();

  const handleNavigate = (page: string, brandId?: string) => {
    setCurrentPage(page);
    setSelectedBrandId(brandId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />

        <main className="flex-grow">
          {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
          {currentPage === 'brands' && <BrandsPage onNavigate={handleNavigate} />}
          {currentPage === 'brand' && selectedBrandId && (
            <BrandDetailPage brandId={selectedBrandId} onNavigate={handleNavigate} />
          )}
          {currentPage === 'catering' && <CateringPage selectedBrand={selectedBrandId} />}
        </main>

        <Footer />
        <CookieBanner />
      </div>
    </LanguageProvider>
  );
}

export default App;
