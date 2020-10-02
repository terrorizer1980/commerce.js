// Type definitions for @chec/commerce.js
// Project: Commerce.js
// Definitions by: Robbie Averill <https://github.com/robbieaverill>

declare enum ExtrafieldType {
  Text = 'text',
}

export interface Extrafield {
  id: string,
  name: string,
  type: ExtrafieldType,
  required: boolean,
  options: any, // todo
}
