
export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  category: 'course' | 'dive' | 'experience';
  imageUrl: string;
}

export interface DiveSpot {
  name: string;
  depth: string;
  level: string;
  description: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
