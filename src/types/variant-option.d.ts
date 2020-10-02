// Type definitions for @chec/commerce.js
// Project: Commerce.js
// Definitions by: Robbie Averill <https://github.com/robbieaverill>

import { Price } from './price';

export interface VariantOption {
  id: string,
  name: string,
  is: {
    quantity_limited: boolean,
  },
  price: Price,
  quantity: number,
}
