
export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  author: string;
  content: string;
  rating: number;
  location: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
