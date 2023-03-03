import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";

import React from "react";

import Messages from "./Messages/Messages";



const Dialogs=(props) =>{

    let dialogItems =props.dialogs.dialogsData.map(dialog=><Dialog name ={dialog.name} key={dialog.id} id={dialog.id} {...props}/>)
    // let messageItems =props.dialogs.messageData.map(message=><Message messageText ={message.message} key={message.id} idUser={message.idUser} id={message.id}/>)
    // console.log(messageItems);
    // let refMessageElement=React.createRef()
    //  let onAddMessage = () => {
    //
    //     props.addMessage();
    //
    // }
    // let onMessageChange = () => {
    //
    //     let text = refMessageElement.current.value;
    //
    //     props.updateNewMessageText(text);
    // }

    return (
        <div>
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogItems}
            </div>

            {/*<div>*/}
            {/*    <div>*/}
            {/*        <div>*/}
            {/*            <textarea onChange={onMessageChange} ref={refMessageElement} cols="60"*/}
            {/*                      value={props.dialogs.newMessageText}></textarea>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <button onClick={onAddMessage}>Add message</button>*/}
            {/*        </div>*/}


            {/*    </div>*/}

            {/*    {messageItems}*/}
            {/*</div>*/}
            <Messages {...props}/>

        </div>

        </div>
    )
}
export default Dialogs