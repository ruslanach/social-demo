import {authAPI, securityAPI} from "../api/api";
import {FORM_ERROR} from "final-form";
// import { stopSubmit } from "redux-form";
const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null

};
export const authReducer = (state = initialState, action) => {

    if (action !== undefined) {

        switch (action.type) {


            case SET_USER_DATA:

                return {...state, ...action.payload}
            case TOGGLE_IS_FETCHING:
                return {...state, isFetching: action.isFetching}
            case GET_CAPTCHA_URL:
                return {...state, captchaUrl: action.captchaUrl}
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
export const getICaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL, captchaUrl})
export const getAuth = () => async (dispatch) => {
    let response = await authAPI.getAuthMe();
    dispatch(setIsFetching(false));
    if (response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setUsersData(id, login, email, true));
    }
    // dispatch(setUsersData('27003', 'Ruslana Chaika', 'ruslanapt@gmail.com', true));
}
export const login = (email, password, rememberMe=false,captcha=null) => async (dispatch) => {

    dispatch(setIsFetching(true));

    let response = await authAPI.login(email, password, rememberMe,captcha);

    dispatch(setIsFetching(false));

    if (response.resultCode === 0) {

        dispatch(getAuth());
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = response.messages.length > 0 ? response.messages[0] : "Some error";
        return {[FORM_ERROR]: message};



    }


}
export const logout = () => async (dispatch) => {
    dispatch(setIsFetching(true));
    let response = await authAPI.logout()
    dispatch(setIsFetching(false));

    if (response.resultCode === 0) {

        dispatch(setUsersData(null, null, null, false));
    }

}
export const getCaptchaUrl = () => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(getICaptchaUrlSuccess(captchaUrl));
}

export default authReducer
