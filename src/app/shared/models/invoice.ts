import { Contact } from './contact';
import { Product } from './product';

export interface Invoice {
  supplier: Contact;
  buyer: Contact;
  products: Product[];
  sum?: number;
  paymentType: string;
  paymentTime: string;
}
