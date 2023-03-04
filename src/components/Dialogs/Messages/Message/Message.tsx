import classes from "./Message.module.css";
import React from "react";
type PropsType ={

    message: string


}
const Message: React.FC<PropsType> =(props) =>{
    return (
        <div className={classes.message}>
            <p>{props.message}</p>
        </div>
    )
}
export default Message