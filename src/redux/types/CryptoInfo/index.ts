import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux';

export const FETCH_GETALL_CRYPTO_BEGIN = 'FETCH_GETALL_CRYPTO_BEGIN';
export const FETCH_GETALL_CRYPTO_SUCCESS = 'FETCH_GETALL_CRYPTO_SUCCESS';
export const FETCH_GETALL_CRYPTO_FAILURE = 'FETCH_GETALL_CRYPTO_FAILURE';


export type Dispatch = ReduxDispatch<Action<string>>;