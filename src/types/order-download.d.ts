// Type definitions for @chec/commerce.js
// Project: Commerce.js
// Definitions by: Robbie Averill <https://github.com/robbieaverill>

import { OrderDownloadItem } from './order-download-item';

declare enum Period {
  Days = 'days',
  Weeks = 'weeks',
  Months = 'months',
}

export interface OrderDownload {
  provider: string,
  provider_type: string,
  line_item_id: string,
  product_id: string,
  product_name: string,
  packages: OrderDownloadItem,
  lifespan: {
    expires: boolean,
    expiry_date: number,
    is_expired: boolean,
    is_access_revoked: boolean,
    duration: number,
    period: Period,
    download_limit: number | null,
    human: string,
  },
}
