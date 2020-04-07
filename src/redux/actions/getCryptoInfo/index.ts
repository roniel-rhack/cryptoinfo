import {fechGetCryptoInfoBegin, fechGetCryptoInfoFailure, fechGetCryptoInfoSuccess} from './Dispatch';
import {Dispatch} from "../../types/CryptoInfo";



export const getCryptoInfoAction = () => {
    console.log('pepesdfds');
    return (dispatch:Dispatch) => {
        dispatch(fechGetCryptoInfoBegin());
        console.log('pepe');

        fetch('https://api.nomics.com/v1/currencies/ticker?key=d5bd0ab0be058269da1ae8c3a59bd899&ids=BTC,ETH,XRP,USDT,BCH,BSV&convert=USD')
            .then(res => {
                return res.json()
            })
            .then(json => {
                dispatch(fechGetCryptoInfoSuccess(json));
                return json;
            })
            .catch((reason => {
                dispatch(fechGetCryptoInfoFailure(reason));
                return reason;
            }))
    }
};