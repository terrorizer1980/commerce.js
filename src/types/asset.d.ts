// Type definitions for @chec/commerce.js
// Project: Commerce.js
// Definitions by: Robbie Averill <https://github.com/robbieaverill>

export interface Asset {
    id: string,
    url: string,
    is_image: boolean,
    filename: string,
    file_extension: string,
    file_size?: number,
    meta: any,
    created_at: number,
}
