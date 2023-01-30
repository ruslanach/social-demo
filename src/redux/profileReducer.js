import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE ='SET_USER_PROFILE';
const SET_USER_STATUS ='SET_USER_STATUS';
const TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING'
const DELETE_POST='DELETE_POST'
const SAVE_PHOTO_SUCCESS='SAVE_PHOTO_SUCCESS'
let initialState ={
    userProfile: null,
    isFetching: false,
    postsData: [
        {id: 1, post: 'Post1', likesCount: 5},
        {id: 2, post: 'Post2', likesCount: 7},
        {id: 3, post: 'Post3', likesCount: 12}
    ],
    newPostText: 'new post',
    status:''
};
export const profileReducer = (state=initialState, action) => {
    let stateCopy ={...state};
    if (action !== undefined) {

        switch (action.type) {

            case ADD_POST:
                stateCopy.postsData =[...state.postsData];
                let newPost = {
                    id: stateCopy.postsData.length + 1,
                    post: stateCopy.newPostText,
                    likesCount: 0
                };
                stateCopy.postsData.push(newPost);
                stateCopy.newPostText = '';
                break;
            case DELETE_POST:
                stateCopy.postsData =[...state.postsData].filter(p=>p.id!==action.idPost);


                break;


            case SET_USER_STATUS:
                if (action.status===null || action.status==='' ) {
                    stateCopy.status = 'my status';
                } else {
                    stateCopy.status = action.status;
                }
                break;
            case UPDATE_NEW_POST_TEXT:

                    stateCopy.newPostText = action.newPostText;
                  break;
            case SET_USER_PROFILE:

                stateCopy.userProfile = {...action.userProfile}
                break;
                case SAVE_PHOTO_SUCCESS:

                stateCopy.userProfile = {...state.userProfile,photos:action.photos}
                break;
            case TOGGLE_IS_FETCHING:
                stateCopy.isFetching=action.isFetching;
        }
    }
    return stateCopy;
}

export const addPost = () => ({type: ADD_POST})
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE,userProfile})
export const deletePost = (idPost) => ({type: DELETE_POST,idPost})
export const setUserStatus = (status) => ({type: SET_USER_STATUS,status})
export const updateNewPost = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: text})
export const setIsFetching = (isFetching) =>  ({type: TOGGLE_IS_FETCHING,isFetching})
export const savePhotoSuccess = (photos) =>  ({type: SAVE_PHOTO_SUCCESS,photos})
export const putUserProfile =(userId) => async (dispatch) =>{

    dispatch(setIsFetching(true));
    let data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
    dispatch(setIsFetching(false));


}

export const changeProfile = (userProfile) => async (dispatch) => {

    dispatch(setIsFetching(true));

    let response = await profileAPI.saveProfile(userProfile);

    dispatch(setIsFetching(false));

    if (response.resultCode === 0) {
        const userId = userProfile.userId;
        dispatch(putUserProfile(userId));
        dispatch(setIsFetching(false));
    }



}
export const putUserStatus = (status) => async (dispatch) => {
    dispatch(setIsFetching(true));
    let data = await profileAPI.putStatus(status);
    dispatch(setUserStatus(data));
    dispatch(setIsFetching(false));

}
export const getUserStatus = (userId) => async (dispatch) => {

    let data = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(data));
    // dispatch(setIsFetching(false));

}
export const savePhoto = (fileName) => async (dispatch) => {

    let data = await profileAPI.savePhotoFromFile(fileName);

    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos));
    }




}