// Type definitions for @chec/commerce.js
// Project: Commerce.js
// Definitions by: Robbie Averill <https://github.com/robbieaverill>

import { Price } from './price';

export interface Giftcard {
  id: string,
  code: string,
  balance: Price,
  initial_value: Price,
  note: string,
  created: number,
  last_updated: number,
}
