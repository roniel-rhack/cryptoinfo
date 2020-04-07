export interface iDispatch {
    type: string,
    payload: any

}

export interface iState {
   loading: boolean,
   data: [any?],
    error: string | null
}

const initialState:iState = {
    loading: false,
    data: [],
    error: null
};

export default initialState
