import {getAuth} from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
let initialState={
    initialized: false,
    isFetching: false

};
export const appReducer =(state=initialState, action)=>{

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

export const setInitialized= () =>  ({type: SET_INITIALIZED})
export const setIsFetching = (isFetching) =>  ({type: TOGGLE_IS_FETCHING,isFetching})
export const initializeApp =() => {
    return (dispatch) => {
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
