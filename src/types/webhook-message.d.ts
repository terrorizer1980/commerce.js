// Type definitions for @chec/commerce.js
// Project: Commerce.js
// Definitions by: Robbie Averill <https://github.com/robbieaverill>

export interface WebhookMessage {
  webhook_id: string | null,
  event: string,
  url: string,
  response_code: number,
  created: number,
}
