export interface Guitarra {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  cantidad?: number;
}

export declare const db: Guitarra[];
