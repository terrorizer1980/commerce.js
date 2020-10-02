// Type definitions for @chec/commerce.js
// Project: Commerce.js
// Definitions by: Robbie Averill <https://github.com/robbieaverill>

import { Price } from './price';

export interface ShippingMethod {
  id: string,
  description: string,
  price: Price,
}
