import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { brands } from '../data/brands';

interface BrandsPageProps {
  onNavigate: (page: string, brandId?: string) => void;
}

export default function BrandsPage({ onNavigate }: BrandsPageProps) {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {t('ourBrands')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-rose-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('welcomeDescription')}
          </p>
        </div>

        <div className="space-y-16">
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500`}
            >
              <div className="lg:w-1/2 h-80 lg:h-96 relative overflow-hidden">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-50`}></div>
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  {language === 'en' ? brand.name : brand.nameGr}
                </h2>
                <p className="text-amber-600 font-semibold mb-6">
                  {language === 'en' ? brand.tagline : brand.taglineGr}
                </p>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {language === 'en' ? brand.description : brand.descriptionGr}
                </p>
                <button
                  onClick={() => onNavigate('brand', brand.id)}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <span>{t('viewBrand')}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
