import {authAPI} from "../api/api";
// import { stopSubmit } from "redux-form";
const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false

};
export const authReducer = (state = initialState, action) => {

    if (action !== undefined) {

        switch (action.type) {


            case SET_USER_DATA:

                return {...state, ...action.payload}
            case TOGGLE_IS_FETCHING:
                return {...state, isFetching: action.isFetching}
            default:
                return state;


        }
    }

}

export const setUsersData = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, login, email, isAuth}
})
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getAuth = () => async (dispatch) => {
    let response = await authAPI.getAuthMe();
    dispatch(setIsFetching(false));
    if (response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setUsersData(id, login, email, true));
    }
    // dispatch(setUsersData('27003', 'Ruslana Chaika', 'ruslanapt@gmail.com', true));
}
export const login = (email, password, rememberMe) => async (dispatch) => {

    dispatch(setIsFetching(true));

    let response = await authAPI.login(email, password, rememberMe);

    dispatch(setIsFetching(false));

    if (response.resultCode === 0) {

        dispatch(getAuth());
    }
    // } else {
    //     let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
    //     dispatch(stopSubmit("login", {_error: message}));
    //
    // }


}
export const logout = () => async (dispatch) => {
    dispatch(setIsFetching(true));
    let response = await authAPI.logout()
    dispatch(setIsFetching(false));

    if (response.resultCode === 0) {

        dispatch(setUsersData(null, null, null, false));
    }

}

export default authReducer
