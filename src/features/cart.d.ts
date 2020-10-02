// Type definitions for @chec/commerce.js
// Project: Commerce.js
// Definitions by: Robbie Averill <https://github.com/robbieaverill>

import { Commerce } from '@chec/commerce.js';
import { LineItem } from '../types/line-item';

declare enum RequestMethod {
  Get = 'get',
  Post = 'post',
  Put = 'put',
  Patch = 'patch',
  Delete = 'delete',
}

export class Cart {
  constructor(commerce: Commerce);

  refresh(): PromiseLike<Cart>;
  id(): string|null;
  request(endpoint: string, method: RequestMethod, data: object|null, returnFullRequest: boolean): PromiseLike<any>;
  add(productId: string, quantity: number, variant: object|null): PromiseLike<any>;
  retrieve(productId: string): PromiseLike<Cart>;
  remove(lineId: string): PromiseLike<any>;
  delete(): PromiseLike<any>;
  update(lineId: string, data: object): PromiseLike<any>;
  contents(): PromiseLike<LineItem[]>
  empty(): PromiseLike<any>;
}

