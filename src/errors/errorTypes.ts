import type { ErrorCode } from './errorCodes';

export interface NextFetchErrorData {
  message?: string;
  error?: string;
  detail?: string;
  [key: string]: unknown;
}

export interface NextFetchErrorResponse {
  data?: NextFetchErrorData;
  status: number;
  statusText: string;
  headers: Headers;
}

export interface NextFetchErrorOptions {
  response?: Response;
  request?: Request;
  data?: NextFetchErrorData;
  config?: RequestInit;
  code?: ErrorCode;
}

export interface NextFetchErrorInfo extends Error {
  readonly name: 'NextFetchError';
  readonly response?: NextFetchErrorResponse;
  readonly request?: Request;
  readonly config?: RequestInit;
  readonly code?: ErrorCode;
}
