// Type definitions for @chec/commerce.js
// Project: Commerce.js
// Definitions by: Robbie Averill <https://github.com/robbieaverill>

import { Merchant } from '../types/merchant';
import { Commerce } from '@chec/commerce.js';

export class Merchants {
  constructor(commerce: Commerce);

  about(): PromiseLike<Merchant>;
}

