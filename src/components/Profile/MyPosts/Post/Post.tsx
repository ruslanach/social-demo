import classes from "./Post.module.css";

import circle from '../../../../images/circle.jpg'
import React from "react";
import Button from "react-bootstrap/Button";
import {PostDataType} from "../../../../types/types";
type PropsType = {

    message:string
    likesCount:number
    id:number
    deletePost: (userId: number) => void

}
const Post: React.FC<PropsType> =(props) => {
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
                <Button variant="outline-danger" onClick={deletePost}  size="sm">Delete</Button>
            </div>
        </div>
            <div className={classes.postLike}>
                <span>like</span> { props.likesCount }
            </div>
        </div>

    )
}
export default Post