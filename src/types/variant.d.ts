// Type definitions for @chec/commerce.js
// Project: Commerce.js
// Definitions by: Robbie Averill <https://github.com/robbieaverill>

import { VariantOption } from './variant-option';

export interface Variant {
    id: string,
    name: string,
    options: VariantOption[],
}
