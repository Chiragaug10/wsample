import { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    home: 'Home',
    ourBrands: 'Our Brands',
    catering: 'Catering',
    menu: 'Menu',
    downloadMenu: 'Download Menu',
    requestCatering: 'Request Catering',
    viewBrand: 'View',

    welcomeTitle: 'Tropical Food',
    welcomeSubtitle: 'A Culinary Journey Through Five Distinctive Experiences',
    welcomeDescription: 'Discover our collection of five unique dining concepts, each offering authentic flavors and exceptional service.',
    exploreBrands: 'Explore Our Brands',

    formEventDate: 'Event Date',
    formNumberOfPax: 'Number of Guests',
    formContactName: 'Your Name',
    formContactEmail: 'Email Address',
    formContactPhone: 'Phone Number',
    formBudgetPerPerson: 'Budget per Person (€)',
    formMessage: 'Additional Requirements',
    formBrand: 'Select Brand',
    formAllBrands: 'All Brands',
    formSubmit: 'Submit Request',
    formSuccess: 'Thank you! Your catering request has been submitted successfully.',
    formError: 'There was an error submitting your request. Please try again.',

    cateringTitle: 'Catering Services',
    cateringDescription: 'Let us bring exceptional dining experiences to your special events. Fill out the form below and we will contact you shortly.',

    cookieMessage: 'We use cookies to enhance your browsing experience. By continuing to use this site, you agree to our use of cookies.',
    cookieAccept: 'Accept',
    cookieDecline: 'Decline',
  },
  gr: {
    home: 'Αρχική',
    ourBrands: 'Τα Brands μας',
    catering: 'Catering',
    menu: 'Μενού',
    downloadMenu: 'Λήψη Μενού',
    requestCatering: 'Αίτημα Catering',
    viewBrand: 'Προβολή',

    welcomeTitle: 'Tropical Food',
    welcomeSubtitle: 'Ένα Γαστρονομικό Ταξίδι Μέσα από Πέντε Διακριτικές Εμπειρίες',
    welcomeDescription: 'Ανακαλύψτε τη συλλογή μας με πέντε μοναδικές γαστρονομικές έννοιες, καθεμία προσφέροντας αυθεντικές γεύσεις και εξαιρετική εξυπηρέτηση.',
    exploreBrands: 'Εξερευνήστε τα Brands μας',

    formEventDate: 'Ημερομηνία Εκδήλωσης',
    formNumberOfPax: 'Αριθμός Ατόμων',
    formContactName: 'Το Όνομά σας',
    formContactEmail: 'Email',
    formContactPhone: 'Τηλέφωνο',
    formBudgetPerPerson: 'Προϋπολογισμός ανά Άτομο (€)',
    formMessage: 'Πρόσθετες Απαιτήσεις',
    formBrand: 'Επιλέξτε Brand',
    formAllBrands: 'Όλα τα Brands',
    formSubmit: 'Υποβολή Αιτήματος',
    formSuccess: 'Ευχαριστούμε! Το αίτημά σας υποβλήθηκε με επιτυχία.',
    formError: 'Υπήρξε σφάλμα κατά την υποβολή του αιτήματός σας. Παρακαλώ δοκιμάστε ξανά.',

    cateringTitle: 'Υπηρεσίες Catering',
    cateringDescription: 'Αφήστε μας να φέρουμε εξαιρετικές γαστρονομικές εμπειρίες στις ειδικές εκδηλώσεις σας. Συμπληρώστε την παρακάτω φόρμα και θα επικοινωνήσουμε μαζί σας σύντομα.',

    cookieMessage: 'Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία περιήγησής σας. Συνεχίζοντας να χρησιμοποιείτε αυτόν τον ιστότοπο, συμφωνείτε με τη χρήση των cookies.',
    cookieAccept: 'Αποδοχή',
    cookieDecline: 'Απόρριψη',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
