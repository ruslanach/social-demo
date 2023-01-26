
import '../Message/Message'
import Message from "../Message/Message";
import React from "react";
// import {useParams} from "react-router-dom";
const Messages=(props) => {
    // const match  = {params: useParams()};
    // let idUser = match.params.idUser;

    // let [currentUserId, setCurrentUserId] = useState(idUser);
    // useEffect(()=>(
    //     setCurrentUserId(props.currentUserId)
    // ),[props.currentUserId])
    let messageItems =props.dialogs.messageData.map(message=><Message messageText ={message.message} key={message.id} idUser={message.idUser} id={message.id}/>)
    // let messageItems =props.messages.filter(m=>m.idUser===idUser).map(message=><Message messageText ={message.message} key={message.id} idUser={message.idUser} id={message.id}/>)
    let refMessageElement=React.createRef()
    let onAddMessage = () => {

        props.addMessage();

    }
    let onMessageChange = () => {

        let text = refMessageElement.current.value;

        props.updateNewMessageText(text);
    }

    return (
        <div>
            <div>
                <div>
                    <div>
                        <textarea onChange={onMessageChange} ref={refMessageElement} cols="60"
                                  value={props.newMessageText}></textarea>
                    </div>
                    <div>
                        <button onClick={onAddMessage}>Add message</button>
                    </div>


                </div>
                {/*<Messages messages ={props.messages} match={match}/>*/}
                {/*{messageItems}*/}
            </div>
            <div>
                {messageItems }
            </div>
        </div>


    )
}
export default Messages