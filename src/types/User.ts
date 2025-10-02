export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address?: {
    street: string;
    city: string;
    suite: string;
    zipcode: string;
  };
}
