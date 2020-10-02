// Type definitions for @chec/commerce.js
// Project: Commerce.js
// Definitions by: Robbie Averill <https://github.com/robbieaverill>

declare module '@chec/commerce.js' {
  import { Cart } from './features/cart';
  import { Categories } from './features/categories';
  import { Checkout } from './features/checkout';
  import { Merchants } from './features/merchants';
  import { Products } from './features/products';
  import { Services } from './features/services';

  export class Commerce {
    constructor(publicKey: string, debug: boolean, config?: CommerceConfig);

    cart: Cart;
    categories: Categories;
    checkout: Checkout;
    merchants: Merchants;
    products: Products;
    services: Services;
  }

  export interface CommerceConfig {
    // todo
  }
}
