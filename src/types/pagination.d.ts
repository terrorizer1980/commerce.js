// Type definitions for @chec/commerce.js
// Project: Commerce.js
// Definitions by: Robbie Averill <https://github.com/robbieaverill>

export interface PaginationMeta {
  pagination: {
    count: number,
    current_page: number,
    links: any[],
    per_page: number,
    total: number,
    total_pages: number,
  },
}
