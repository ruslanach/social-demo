import {addPost, deletePost, updateNewPost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
let mapStateToProps =(state) =>{
    return {
        posts:state.profile,
        newPostText:state.profile.newPostText

    }
}
// let mapDispatchToProps=(dispatch) => {
//     return {
//         addPost:()=>{dispatch(addPostActionCreator())},
//         updateNewPost:(text)=>{dispatch(updateNewPostTextActionCreator(text))}
//     }
// }
const MyPostsContainer=connect(mapStateToProps,{  addPost, updateNewPost,deletePost})(MyPosts);
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