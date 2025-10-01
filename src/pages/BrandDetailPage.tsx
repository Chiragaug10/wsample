import { Download, ArrowLeft, Utensils } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { brands } from '../data/brands';

interface BrandDetailPageProps {
  brandId: string;
  onNavigate: (page: string) => void;
}

export default function BrandDetailPage({ brandId, onNavigate }: BrandDetailPageProps) {
  const { language, t } = useLanguage();
  const brand = brands.find((b) => b.id === brandId);

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Brand not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={brand.image}
          alt={brand.name}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${brand.color} opacity-70`}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="mb-6 flex justify-center">
              <div className={`w-20 h-20 bg-gradient-to-br ${brand.color} rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white/30`}>
                <Utensils className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">
              {language === 'en' ? brand.name : brand.nameGr}
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 font-light">
              {language === 'en' ? brand.tagline : brand.taglineGr}
            </p>
          </div>
        </div>
        <button
          onClick={() => onNavigate('brands')}
          className="absolute top-24 left-4 sm:left-8 flex items-center space-x-2 text-white hover:text-white/80 transition-colors bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {language === 'en' ? brand.description : brand.descriptionGr}
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            {language === 'en'
              ? 'Our commitment to excellence is reflected in every dish we serve. Using only the finest ingredients and traditional cooking techniques combined with modern innovation, we create memorable dining experiences that celebrate the rich culinary heritage of our cuisine.'
              : 'Η δέσμευσή μας για την αριστεία αντικατοπτρίζεται σε κάθε πιάτο που σερβίρουμε. Χρησιμοποιώντας μόνο τα καλύτερα υλικά και παραδοσιακές τεχνικές μαγειρέματος σε συνδυασμό με σύγχρονη καινοτομία, δημιουργούμε αξέχαστες γαστρονομικές εμπειρίες που γιορτάζουν την πλούσια γαστρονομική κληρονομιά της κουζίνας μας.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src={brand.image}
              alt="Restaurant ambiance"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src={brand.image}
              alt="Signature dishes"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('menu')}</h2>
          <p className="text-gray-600 mb-8 text-lg">
            {language === 'en'
              ? 'Explore our carefully curated menu featuring signature dishes and seasonal specialties.'
              : 'Εξερευνήστε το προσεκτικά επιμελημένο μενού μας με πιάτα υπογραφής και εποχιακές ειδικότητες.'}
          </p>
          <button
            onClick={() => window.open(brand.menuPdf, '_blank')}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            <span>{t('downloadMenu')}</span>
          </button>
          <div className="mt-8">
            <button
              onClick={() => onNavigate('catering')}
              className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-semibold"
            >
              <span>{t('requestCatering')}</span>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
