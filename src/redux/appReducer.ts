import {getAuth} from "./authReducer";

const SET_INITIALIZED = 'SN/APP/SET_INITIALIZED';
const TOGGLE_IS_FETCHING = 'SN/APP/TOGGLE_IS_FETCHING';
type InitialStateType={
    initialized: boolean
    isFetching: boolean
}

let initialState:InitialStateType={
    initialized: false,
    isFetching: false

};

// export type InitialStateType = typeof initialState

export const appReducer =(state=initialState, action:any) =>{

       if (action !== undefined) {

        switch (action.type) {


            case SET_INITIALIZED:

                return {...state, initialized: true}
            case TOGGLE_IS_FETCHING:
                return {...state, isFetching: action.isFetching}
            default:
                return state;


        }
    }

}
type InitializedTypeAC ={
    type: typeof SET_INITIALIZED
};
export const setInitialized= ():InitializedTypeAC =>  ({type: SET_INITIALIZED})
type SetIsFetchingTypeAC = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching:boolean
}
export const setIsFetching = (isFetching:boolean):SetIsFetchingTypeAC =>  ({type: TOGGLE_IS_FETCHING,isFetching})
export const initializeApp =() => {
    return (dispatch:any) => {
        let promiseResult =dispatch(getAuth());
        // all promises
        Promise.all([promiseResult])
        .then(()=> {
                dispatch(setInitialized())
        }
        )
    }
}

export default appReducer
