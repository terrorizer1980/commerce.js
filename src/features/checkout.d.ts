// Type definitions for @chec/commerce.js
// Project: Commerce.js
// Definitions by: Robbie Averill <https://github.com/robbieaverill>

import { Commerce } from '@chec/commerce.js';
import { Order } from '../types/order';
import { Live } from '../types/live';

declare enum IdentifierType {
  ProductID = 'product_id',
  Cart = 'cart',
  Permalink = 'permalink',
}

export class Checkout {
  constructor(commerce: Commerce);

  protect(token: string): PromiseLike<any>;
  generateToken(identifier: string, data: object): PromiseLike<Checkout>;
  generateTokenFrom(type: IdentifierType, identifier: string): PromiseLike<Checkout>;
  capture(token: string, data: object): PromiseLike<Order>;
  receipt(token: string): PromiseLike<Order>;

  checkPayWhatYouWant(token: string, data: object): PromiseLike<any>;
  fields(identifier: string): PromiseLike<any>;
  setTaxZene(identifier: string): PromiseLike<any>;
  getLocationFromIP(token: string, ipAddress: string): PromiseLike<any>;
  isFree(token: string): PromiseLike<any>;
  checkVariant(token: string, lineItemId: string, data: object): PromiseLike<any>;
  checkDiscount(token: string, data: object): PromiseLike<any>;
  checkShippingOption(token: string, data: object): PromiseLike<any>;
  getShippingOptions(token: string, data: object): PromiseLike<any>;
  checkQuantity(token: string, lineItem: string, data: object): PromiseLike<any>;
  helperValidation(token: string): PromiseLike<any>;
  getLive(token: string): PromiseLike<Live>
  getToken(token: string): PromiseLike<Checkout>
  checkGiftcard(token: string, data: object): PromiseLike<any>;
}

