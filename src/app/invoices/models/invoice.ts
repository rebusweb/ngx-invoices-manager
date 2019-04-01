import { Contact } from '../../contacts/models/contact';
import { Product } from './product';

export interface Invoice {
  date: string;
  number: string;
  supplier: Contact;
  buyer: Contact;
  products: Product[];
  sum?: number;
  paymentType: string;
  paymentTime: string;
}
