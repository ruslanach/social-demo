import {profileAPI} from "../api/api";
import {FORM_ERROR} from "final-form";
import {PhotosType, PostType, ProfileType} from '../types/types';

const ADD_POST = 'SN/PROFILE/ADD-POST';
const UPDATE_NEW_POST_TEXT = 'SN/PROFILE/UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE ='SN/PROFILE/SET_USER_PROFILE';
const SET_USER_STATUS ='SN/PROFILE/SET_USER_STATUS';
const TOGGLE_IS_FETCHING='SN/PROFILE/TOGGLE_IS_FETCHING'
const DELETE_POST='SN/PROFILE/DELETE_POST'
const SAVE_PHOTO_SUCCESS='SN/PROFILE/SAVE_PHOTO_SUCCESS'


let initialState ={
    userProfile: null as ProfileType | null,
    isFetching: false,
    postsData: [
        {id: 1, post: 'Post1', likesCount: 5},
        {id: 2, post: 'Post2', likesCount: 7},
        {id: 3, post: 'Post3', likesCount: 12}
    ] as Array<PostType>,
    newPostText: 'new post',
    status:''
};
export type InitialStateType = typeof initialState
export const profileReducer = (state=initialState, action:any):InitialStateType => {

    if (action !== undefined) {

        switch (action.type) {

            case ADD_POST:

                let newPost = {
                    id: state.postsData.length + 1,
                    post: state.newPostText,
                    likesCount: 0
                };

                return {
                    ...state,
                    postsData: [...state.postsData, newPost],
                    newPostText : ''
                };

            case DELETE_POST:

                return {...state, postsData: state.postsData.filter(p => p.id !== action.idPost)}



            case SET_USER_STATUS:
                if (action.status===null || action.status==='' ) {

                    return {
                        ...state,
                        status: 'my status'
                    }
                } else {
                    return {
                        ...state,
                        status: action.status
                    }
                }

            case UPDATE_NEW_POST_TEXT:
                return {...state, newPostText: action.newPostText}


            case SET_USER_PROFILE:
                return {...state, userProfile: action.userProfile}

                case SAVE_PHOTO_SUCCESS:
                    return {...state, userProfile: {...state.userProfile, photos: action.photos} as ProfileType}

            case TOGGLE_IS_FETCHING:

                return {...state, isFetching:action.isFetching}

        }
    }
    return state;
}
type AddPostTypeAC ={
    type: typeof ADD_POST
}
export const addPost = ():AddPostTypeAC => ({type: ADD_POST})
type SetUserProfileTypeAC = {
    type: typeof SET_USER_PROFILE
    userProfile:ProfileType
}
export const setUserProfile = (userProfile:ProfileType):SetUserProfileTypeAC => ({type: SET_USER_PROFILE,userProfile})
type DeletePostTypeAC ={
    type: typeof DELETE_POST
    idPost:number|null
}
export const deletePost = (idPost:number|null):DeletePostTypeAC => ({type: DELETE_POST,idPost})
type SetUserStatusTypeAC={
    type: typeof SET_USER_STATUS
    status:string
}
export const setUserStatus = (status:string):SetUserStatusTypeAC => ({type: SET_USER_STATUS,status})
type UpdateNewPostTypeAC = {
    type: typeof UPDATE_NEW_POST_TEXT
    newPostText: string
}
export const updateNewPost = (text:string):UpdateNewPostTypeAC =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: text})
type SetIsFetchingTypeAC ={
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const setIsFetching = (isFetching:boolean):SetIsFetchingTypeAC =>  ({type: TOGGLE_IS_FETCHING,isFetching})
type SavePhotoSuccessTypeAC = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos:PhotosType
}
export const savePhotoSuccess = (photos:PhotosType):SavePhotoSuccessTypeAC =>  ({type: SAVE_PHOTO_SUCCESS,photos})

export const putUserProfile =(userId:number) => async (dispatch:any) =>{

    dispatch(setIsFetching(true));
    const data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
    dispatch(setIsFetching(false));


}
// export const submitError = (message) => {
//     return message;
// }
export const changeProfile = (userProfile:ProfileType) => async (dispatch:any) => {

    dispatch(setIsFetching(true));

    let response = await profileAPI.saveProfile(userProfile);

    dispatch(setIsFetching(false));

    if (response.resultCode === 0) {
        const userId = userProfile.userId;
        dispatch(putUserProfile(userId));
        dispatch(setIsFetching(false));

    }
    else {
        let message = response.messages.length > 0 ? response.messages[0] : "Some error";
        return { [FORM_ERROR]: message}

    }


}
export const putUserStatus = (status:string) => async (dispatch:any) => {
    dispatch(setIsFetching(true));
    await profileAPI.putStatus(status);
    dispatch(setUserStatus(status));
    dispatch(setIsFetching(false));

}
export const getUserStatus = (userId:number) => async (dispatch:any) => {

    const data = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(data));
    // dispatch(setIsFetching(false));

}
export const savePhoto = (fileName:File) => async (dispatch:any) => {

    const data = await profileAPI.savePhotoFromFile(fileName);

    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos));
    }

}