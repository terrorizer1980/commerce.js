// Type definitions for @chec/commerce.js
// Project: Commerce.js
// Definitions by: Robbie Averill <https://github.com/robbieaverill>

import { Commerce } from '@chec/commerce.js';

export class Services {
  constructor(commerce: Commerce);

  localeListCountries(): PromiseLike<any>;
  localeListShippingCountries(token: string): PromiseLike<any>;
  localeListShippingSubdivisions(token: string, countryCode: string): PromiseLike<any>;
  localeListSubdivisions(countryCode: string): PromiseLike<any>;
}

