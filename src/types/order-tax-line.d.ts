// Type definitions for @chec/commerce.js
// Project: Commerce.js
// Definitions by: Robbie Averill <https://github.com/robbieaverill>

import { Price } from './price';

export interface OrderTaxLine {
  amount: Price,
  rate: number,
  rate_percentage: string,
  type: string,
}
