// Type definitions for @chec/commerce.js
// Project: Commerce.js
// Definitions by: Robbie Averill <https://github.com/robbieaverill>

import { WebhookMessage } from './webhook-message';

export interface Webhook {
  id: string,
  merchant_id: number,
  url: string,
  subscribed_events: string[],
  active: boolean,
  history: {
    data: WebhookMessage[],
  },
  created: number,
  updated: number,
}
