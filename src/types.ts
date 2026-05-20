export interface Product {
  id: string;
  name: string;
  category: 'Tops' | 'Bottoms' | 'Outerwear' | 'Accessories' | 'Bags';
  condition: 'Like New' | 'Excellent' | 'Good' | 'Fair';
  price: number;
  image: string;
  size: string;
  brand: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  stars: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
