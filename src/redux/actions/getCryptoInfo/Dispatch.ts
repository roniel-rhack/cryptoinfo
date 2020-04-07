import {
    FETCH_GETALL_CRYPTO_BEGIN,
    FETCH_GETALL_CRYPTO_FAILURE,
    FETCH_GETALL_CRYPTO_SUCCESS
} from "../../types/CryptoInfo";

export const fechGetCryptoInfoBegin = () => (
    {
        type: FETCH_GETALL_CRYPTO_BEGIN
    }
);


export const fechGetCryptoInfoSuccess = (payload: any) => ({
    type: FETCH_GETALL_CRYPTO_SUCCESS,
    payload
});

export const fechGetCryptoInfoFailure = (payload: any) => ({
    type: FETCH_GETALL_CRYPTO_FAILURE,
    payload
});

