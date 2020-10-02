// Type definitions for @chec/commerce.js
// Project: Commerce.js
// Definitions by: Robbie Averill <https://github.com/robbieaverill>

import { Category } from '../types/category';
import { PaginationMeta } from '../types/pagination';
import { Commerce } from '@chec/commerce.js';

interface CategoryCollection {
  data: Category[],
  meta: PaginationMeta,
}

export class Categories {
  constructor(commerce: Commerce);

  list(params: any): PromiseLike<CategoryCollection>;
  retrieve(id: string, data: object): PromiseLike<Category>;
}

