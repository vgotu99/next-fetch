export const ERROR_CODES = {
  ERR_NETWORK: 'ERR_NETWORK',
  ERR_TIMEOUT: 'ERR_TIMEOUT',
  ERR_CANCELED: 'ERR_CANCELED',
  ERR_BAD_RESPONSE: 'ERR_BAD_RESPONSE',
  ERR_BAD_REQUEST: 'ERR_BAD_REQUEST',
  ERR_UNKNOWN: 'ERR_UNKNOWN',
  ERR_INVALID_URL: 'ERR_INVALID_URL',
  ERR_UNAUTHORIZED: 'ERR_UNAUTHORIZED',
  ERR_FORBIDDEN: 'ERR_FORBIDDEN',
  ERR_NOT_FOUND: 'ERR_NOT_FOUND',
  ERR_RATE_LIMITED: 'ERR_RATE_LIMITED',
  ERR_SERVER: 'ERR_SERVER',
} as const;

export type ErrorCode = (typeof ERROR_CODES)[keyof typeof ERROR_CODES];
