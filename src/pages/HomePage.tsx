import { ArrowRight, Utensils } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { brands } from '../data/brands';

interface HomePageProps {
  onNavigate: (page: string, brandId?: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Fine dining"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <Utensils className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            {t('welcomeTitle')}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-4 font-light">
            {t('welcomeSubtitle')}
          </p>
          <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
            {t('welcomeDescription')}
          </p>
          <button
            onClick={() => onNavigate('brands')}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <span>{t('exploreBrands')}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('ourBrands')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${brand.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">
                      {language === 'en' ? brand.name : brand.nameGr}
                    </h3>
                    <p className="text-sm text-white/90">
                      {language === 'en' ? brand.tagline : brand.taglineGr}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {language === 'en' ? brand.description : brand.descriptionGr}
                  </p>
                  <button
                    onClick={() => onNavigate('brand', brand.id)}
                    className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold text-sm group/btn"
                  >
                    <span>{t('viewBrand')}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
