import { useState, FormEvent } from 'react';
import { Send, CheckCircle, XCircle, Calendar, Users, User, Mail, Phone, DollarSign, MessageSquare, Sparkles, ChefHat } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { brands } from '../data/brands';
import { CateringFormData } from '../types';

interface CateringPageProps {
  selectedBrand?: string;
}

export default function CateringPage({ selectedBrand }: CateringPageProps) {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState<CateringFormData>({
    eventDate: '',
    numberOfPax: 0,
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    budgetPerPerson: '',
    message: '',
    brand: selectedBrand || '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          language,
          _subject: `New Catering Request - ${formData.contactName}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          eventDate: '',
          numberOfPax: 0,
          contactName: '',
          contactEmail: '',
          contactPhone: '',
          budgetPerPerson: '',
          message: '',
          brand: '',
        });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 via-teal-600 to-emerald-600 p-12 mb-12 shadow-2xl">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white/30">
                <ChefHat className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              {t('cateringTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('cateringDescription')}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/90">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5" />
                <span className="font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <ChefHat className="w-5 h-5" />
                <span className="font-medium">Expert Chefs</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span className="font-medium">Any Event Size</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Scheduling</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {language === 'en'
                      ? 'Book your event for any date. We accommodate both intimate gatherings and large celebrations with equal care and attention.'
                      : 'Κλείστε την εκδήλωσή σας για οποιαδήποτε ημερομηνία. Φιλοξενούμε τόσο οικείες συγκεντρώσεις όσο και μεγάλες εορτές με ίση φροντίδα και προσοχή.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <ChefHat className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Menus</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {language === 'en'
                      ? 'Choose from our diverse brand offerings or work with our chefs to create a bespoke menu tailored to your preferences and dietary requirements.'
                      : 'Επιλέξτε από τις ποικίλες προσφορές των brands μας ή συνεργαστείτε με τους σεφ μας για να δημιουργήσετε ένα προσαρμοσμένο μενού που ταιριάζει στις προτιμήσεις και τις διατροφικές σας απαιτήσεις.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Full Service</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {language === 'en'
                      ? 'From setup to cleanup, we handle everything. Our experienced team ensures your event runs smoothly so you can focus on your guests.'
                      : 'Από τη διαμόρφωση μέχρι τον καθαρισμό, φροντίζουμε για όλα. Η έμπειρη ομάδα μας διασφαλίζει ότι η εκδήλωσή σας θα διεξαχθεί ομαλά ώστε να επικεντρωθείτε στους καλεσμένους σας.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-3xl p-8 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                {[
                  language === 'en' ? 'Fresh, locally-sourced ingredients' : 'Φρέσκα, τοπικά υλικά',
                  language === 'en' ? 'Professional service staff' : 'Επαγγελματικό προσωπικό εξυπηρέτησης',
                  language === 'en' ? 'Competitive pricing packages' : 'Ανταγωνιστικά πακέτα τιμών',
                  language === 'en' ? 'Customizable to your needs' : 'Προσαρμόσιμο στις ανάγκες σας',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 lg:sticky lg:top-28 h-fit">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Request a Quote</h2>
              <p className="text-gray-600">
                {language === 'en'
                  ? 'Fill out the form below and we\'ll get back to you within 24 hours'
                  : 'Συμπληρώστε την παρακάτω φόρμα και θα επικοινωνήσουμε μαζί σας εντός 24 ωρών'}
              </p>
            </div>

            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-2xl flex items-center space-x-3 animate-fade-in">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <p className="text-green-800 font-medium">{t('formSuccess')}</p>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-2xl flex items-center space-x-3 animate-fade-in">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <p className="text-red-800 font-medium">{t('formError')}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="flex items-center space-x-2 text-sm font-bold text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <span>{t('formEventDate')} *</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-sm font-bold text-gray-700 mb-2">
                    <Users className="w-4 h-4 text-green-600" />
                    <span>{t('formNumberOfPax')} *</span>
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    placeholder="50"
                    value={formData.numberOfPax || ''}
                    onChange={(e) => setFormData({ ...formData, numberOfPax: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center space-x-2 text-sm font-bold text-gray-700 mb-2">
                  <ChefHat className="w-4 h-4 text-green-600" />
                  <span>{t('formBrand')}</span>
                </label>
                <select
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                >
                  <option value="">{t('formAllBrands')}</option>
                  {brands.map((brand) => (
                    <option key={brand.id} value={brand.id}>
                      {language === 'en' ? brand.name : brand.nameGr}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="flex items-center space-x-2 text-sm font-bold text-gray-700 mb-2">
                  <User className="w-4 h-4 text-green-600" />
                  <span>{t('formContactName')} *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="flex items-center space-x-2 text-sm font-bold text-gray-700 mb-2">
                    <Mail className="w-4 h-4 text-green-600" />
                    <span>{t('formContactEmail')} *</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.contactEmail}
                    onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-sm font-bold text-gray-700 mb-2">
                    <Phone className="w-4 h-4 text-green-600" />
                    <span>{t('formContactPhone')} *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+30 123 456 7890"
                    value={formData.contactPhone}
                    onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

             <div>
  <label className="flex items-center space-x-2 text-sm font-bold text-gray-700 mb-2">
    <span className="text-green-600">₹</span> {/* Replaced DollarSign icon with ₹ symbol */}
    <span>{t('formBudgetPerPerson')} *</span> {/* Updated in translation files to "Budget per Person (₹)" */}
  </label>
  <input
    type="number"
    step="0.01"
    min="0"
    placeholder="2500.00"
    value={formData.budgetPerPerson}
    onChange={(e) => setFormData({ ...formData, budgetPerPerson: e.target.value })}
    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
  />
</div>

              <div>
                <label className="flex items-center space-x-2 text-sm font-bold text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 text-green-600" />
                  <span>{t('formMessage')}</span>
                </label>
                <textarea
                  rows={4}
                  placeholder={language === 'en' ? 'Tell us about your event, special requests, dietary requirements...' : 'Πείτε μας για την εκδήλωσή σας, ειδικές απαιτήσεις, διατροφικές ανάγκες...'}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>{t('formSubmit')}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
