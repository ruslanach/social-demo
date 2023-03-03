import {authAPI, securityAPI} from "../api/api";
import {FORM_ERROR} from "final-form";
// import { stopSubmit } from "redux-form";
const SET_USER_DATA = 'SN/AUTH/SET_USER_DATA';
const GET_CAPTCHA_URL = 'SN/AUTH/GET_CAPTCHA_URL';
const TOGGLE_IS_FETCHING = 'SN/AUTH/TOGGLE_IS_FETCHING';
// let initialState = {
//     userId: null,
//     email: null,
//     login: null,
//     isFetching: false,
//     isAuth: false,
//     captchaUrl: null
//
// };

let initialState = {
    userId: null as (number | null),
    email: null as string | null,
    login: null as string | null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null as string | null// if null, then captcha is not required
};
export type InitialStateType = typeof initialState;
export const authReducer = (state = initialState, action:any) => {

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
type setUsersDataPayloadActionType = {
    userId: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}
type SetUsersDataTypeAC = {
    type: typeof SET_USER_DATA,
    payload: setUsersDataPayloadActionType
}

export const setUsersData = (userId: number | null  ,email: string | null , login: string | null, isAuth: boolean):SetUsersDataTypeAC => ({
    type: SET_USER_DATA,
    payload: {userId, login, email, isAuth}
})

type SetIsFetchingTypeAC ={
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const setIsFetching = (isFetching: boolean):SetIsFetchingTypeAC => ({type: TOGGLE_IS_FETCHING, isFetching})

type GetICaptchaUrlSuccessTypeAC = {
    type: typeof GET_CAPTCHA_URL
    captchaUrl: string | null
}

export const getICaptchaUrlSuccess = (captchaUrl: string):GetICaptchaUrlSuccessTypeAC => ({type: GET_CAPTCHA_URL, captchaUrl})
export const getAuth = () => async (dispatch:any) => {
    let response = await authAPI.getAuthMe();
    dispatch(setIsFetching(false));
    if (response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setUsersData(id, login, email, true));
    }
    // dispatch(setUsersData('27003', 'Ruslana Chaika', 'ruslanapt@gmail.com', true));
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch:any) => {

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
export const logout = () => async (dispatch:any) => {
    dispatch(setIsFetching(true));
    let response = await authAPI.logout()
    dispatch(setIsFetching(false));

    if (response.resultCode === 0) {

        dispatch(setUsersData(null, null, null, false));
    }

}
export const getCaptchaUrl = () => async (dispatch:any) => {
    const data:any = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(getICaptchaUrlSuccess(captchaUrl));
}

export default authReducer
