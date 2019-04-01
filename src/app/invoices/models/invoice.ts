import { Product } from './product';

export interface Invoice {
  date: string;
  number: string;
  supplier: number;
  supplierName?: string;
  buyer: number;
  buyerName?: string;
  products: Product[];
  sum?: number;
  paymentType: string;
  paymentTime: string;
}
