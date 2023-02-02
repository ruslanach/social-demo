
import '../Message/Message'
import Message from "../Message/Message";
import React from "react";
import Button from "react-bootstrap/Button";
// import {useParams} from "react-router-dom";
const Messages=(props) => {
    // const match  = {params: useParams()};
    let idUser = Number(props.match.params.userId);

    // let [currentUserId, setCurrentUserId] = useState(idUser);
    // useEffect(()=>(
    //     setCurrentUserId(props.currentUserId)
    // ),[props.currentUserId])
   // let messageItems =props.dialogs.messageData.map(message=><Message messageText ={message.message} key={message.id} idUser={message.idUser} id={message.id}/>)
    let messageItemsFilter =props.dialogs.messageData.filter(m=>m.idUser===idUser)
    let messageItems =props.dialogs.messageData.filter(m=>m.idUser===idUser).map(message=><Message messageText ={message.message} key={message.id} idUser={message.idUser} id={message.id}/>)
    let refMessageElement=React.createRef()
    let onAddMessage = () => {

        props.addMessage(idUser);

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
                        <Button variant="outline-success" onClick={onAddMessage}>Add message</Button>
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