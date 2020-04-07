import initialState, {iDispatch, iState} from "./initialState";
import {
    FETCH_GETALL_CRYPTO_BEGIN,
    FETCH_GETALL_CRYPTO_FAILURE,
    FETCH_GETALL_CRYPTO_SUCCESS
} from "../../types/CryptoInfo";

const CryptoInfo = (state:iState = initialState, {type, payload}: iDispatch) => {
    switch (type) {
        case FETCH_GETALL_CRYPTO_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_GETALL_CRYPTO_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                error: null
            };
        case FETCH_GETALL_CRYPTO_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload
            };
        default:
            return {...state}

    }
};

export default CryptoInfo