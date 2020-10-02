// Type definitions for @chec/commerce.js
// Project: Commerce.js
// Definitions by: Robbie Averill <https://github.com/robbieaverill>

import { Product } from '../types/product';
import { PaginationMeta } from '../types/pagination';
import { Commerce } from '@chec/commerce.js';

interface ProductCollection {
  data: Product[],
  meta: PaginationMeta,
}

export class Products {
  constructor(commerce: Commerce);

  list(params: any): PromiseLike<ProductCollection>;
  retrieve(id: string, data: object): PromiseLike<Product>;
}

