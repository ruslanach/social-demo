import {addPost, deletePost, updateNewPost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import React from "react";
import {AppStateType} from "../../../redux/reduxStore";
import {DialogType, MessageType, PostDataType} from "../../../types/types";
type MapDispatchToPropsType={
    addPost: () => void
    updateNewPost: (text: string) => void
    deletePost: (userId: number) => void
}
type MapStateToPropsType={

    postsData:Array<PostDataType>
    newPostText:string


}
type PropsType=MapStateToPropsType & MapDispatchToPropsType
let mapStateToProps =(state:AppStateType):MapStateToPropsType =>{
    return {
        postsData:state.profile.postsData,
        newPostText:state.profile.newPostText

    }
}
// let mapDispatchToProps=(dispatch) => {
//     return {
//         addPost:()=>{dispatch(addPostActionCreator())},
//         updateNewPost:(text)=>{dispatch(updateNewPostTextActionCreator(text))}
//     }
// }
const MyPostsContainer=connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
    {  addPost, updateNewPost,deletePost})(MyPosts);
// const MyPostsContainer1 = (props) => {
// let state =props.store.getState();
//     let addPost = () => {
//
//         props.store.dispatch(addPostActionCreator());
//
//     }
//     let updateNewPost = (text) => {
//
//          props.store.dispatch(updateNewPostTextActionCreator(text));
//     }
//     return(
//     <MyPosts posts={state.profile} addPost ={addPost} updateNewPost={updateNewPost} />
//     )
// }
export default MyPostsContainer