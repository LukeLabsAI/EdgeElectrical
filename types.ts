
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  serviceType: string;
  description: string;
}
