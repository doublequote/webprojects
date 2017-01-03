import {Product} from './Product';

export class Ad {
  id: String;
  title: String;
  description: String;
  participants: Array<String>;
  email: String;
  shipping: Shipping;
  products: Array<Product>;

  constructor() {
    this.participants = new Array<String>();
    this.shipping = new Shipping();
    this.products = new Array<Product>();
  }
}

export class Shipping {
  title: String;
  place: String;
  date: Date;
  producer: String;
}
