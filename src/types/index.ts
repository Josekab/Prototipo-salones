export interface Salon {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  image: string;
  location: string;
  services: string[];
  price: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userImage: string;
  rating: number;
  comment: string;
  date: string;
  images?: string[];
}

export interface Service {
  id: string;
  name: string;
  duration: string;
  price: number;
  description: string;
}