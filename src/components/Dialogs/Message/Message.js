import classes from "./Message.module.css";
const Message =(props) =>{
    return (
        <div className={classes.message}>
            <p>{props.messageText}</p>
        </div>
    )
}
export default Message