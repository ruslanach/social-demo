import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import Button from "react-bootstrap/Button";
import {PostDataType} from "../../../types/types";
type PropsType = {
    postsData:Array<PostDataType>
    newPostText:string
    addPost: () => void
    updateNewPost: (text: string) => void
    deletePost: (userId: number) => void

}
const MyPosts: React.FC<PropsType> = React.memo((props) => {

    let refPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {

        props.addPost();

    }
    let onPostChange = () => {
        let text: string | undefined = refPostElement.current?.value;
        if (text) {
            props.updateNewPost(text);
        }

    }
    // let postItem = props.posts.postsData.map(post => <Post message={post.post} likesCount={post.likesCount}
    //                                                       key={post.id} id={post.id} {...props}/>);
    let postItem = props.postsData.map(post => <Post message={post.post} likesCount={post.likesCount}
                                                           key={post.id} id={post.id} deletePost={props.deletePost}/>);
    return (
        <div>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={refPostElement} cols={parseInt("70")} value={props.newPostText}/>
                </div>
                <div>
                    <Button variant="outline-success" onClick={onAddPost}>Add post</Button>
                </div>


            </div>

            <div className={classes.ava}>
                <p>My posts</p>
                <div className={classes.posts}>
                    {postItem}
                </div>
            </div>
        </div>
    )
})
export default MyPosts