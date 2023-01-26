import classes from "./Post.module.css";

import circle from '../../../../images/circle.jpg'
import React from "react";

const Post =(props) => {
    let deletePost = () => {

        props.deletePost(props.id);

    }
    return (
        <div>
        <div className={classes.post}>
            <div>
              <img className={classes.postImg} src={circle} alt={'postPicture'} />

            </div>

            <p>{props.message}</p>
            <div>
                <button onClick={deletePost}>Delete</button>
            </div>
        </div>
            <div className={classes.postLike}>
                <span>like</span> { props.likesCount }
            </div>
        </div>

    )
}
export default Post