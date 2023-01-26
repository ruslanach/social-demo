import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
const MyPosts = React.memo((props) => {

    let refPostElement = React.createRef();

    let onAddPost = () => {

        props.addPost();

    }
    let onPostChange = () => {

        let text = refPostElement.current.value;

        props.updateNewPost(text);
    }
    // let postItem = props.posts.postsData.map(post => <Post message={post.post} likesCount={post.likesCount}
    //                                                       key={post.id} id={post.id} {...props}/>);
    let postItem = props.posts.postsData.map(post => <Post message={post.post} likesCount={post.likesCount}
                                                           key={post.id} id={post.id} deletePost={props.deletePost}/>);
    return (
        <div>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={refPostElement} cols="30" value={props.posts.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
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