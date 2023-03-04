import React from "react";
import Button from "react-bootstrap/Button";
import classes from "./Messages.module.css";
import Message from "./Message/Message";
import { MessageType } from '../../../types/types';

type PropsType = {
    messageData: Array<MessageType>
    newMessageText: string
    currentUserId: number
    userId: number
    addMessage: (userId: number) => void
    updateNewMessageText: (text: string) => void
};

const Messages: React.FC<PropsType> = (props) => {
    let idUser = props.userId;
    let messageItems = props.messageData.filter((m) => m.idUser === idUser).map((message) => <Message message={message.message} key={message.id} />);

    let refMessageElement = React.createRef<HTMLTextAreaElement>();
    let onAddMessage = () => {
        props.addMessage(idUser);
    };
    let onMessageChange = () => {
        let text: string | undefined = refMessageElement.current?.value;
        if (text) {
            props.updateNewMessageText(text);
        }
    };

    return (
        <div>
            <div>
                <div>
                    <div>
                        <textarea
                            onChange={onMessageChange}
                            ref={refMessageElement}
                            cols={parseInt("60")}
                            className={classes.textMessage}
                            value={props.newMessageText}
                        ></textarea>
                    </div>
                    <div>
                        <Button variant="outline-success" onClick={onAddMessage}>
                            Add message
                        </Button>
                    </div>
                </div>
            </div>
            <div>{messageItems}</div>
        </div>
    );
};

export default Messages;
