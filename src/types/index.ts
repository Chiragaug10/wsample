export interface Brand {
  id: string;
  name: string;
  nameGr: string;
  tagline: string;
  taglineGr: string;
  description: string;
  descriptionGr: string;
  color: string;
  image: string;
  menuPdf: string;
}

export interface CateringFormData {
  eventDate: string;
  numberOfPax: number;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  budgetPerPerson: string;
  message: string;
  brand?: string;
}

export type Language = 'en' | 'gr';
