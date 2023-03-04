import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";

import React from "react";

import Messages from "./Messages/Messages";
import {useParams} from "react-router-dom";
import {DialogType, MessageType} from "../../types/types";
interface DialogsProps {
    dialogsData: Array<DialogType>
    updateCurrentUser: (userId: number) => void
    match: {
        params: {
            userId: string;
        };
    }
    messageData: Array<MessageType>
    newMessageText: string
    currentUserId: number
    addMessage: (userId: number) => void
    updateNewMessageText: (text: string) => void

}


class DialogsComponent extends React.Component<DialogsProps> {
    refreshMessage() {
        let userId = parseInt(this.props.match.params.userId);
        if (userId) {
            this.props.updateCurrentUser(userId);
        }
    }

    componentDidMount() {
        this.refreshMessage();
    }

    componentDidUpdate(prevProps: DialogsProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshMessage();
        }
    }

    render() {
        let dialogItems = this.props.dialogsData.map((dialog) => (
            <Dialog
                name={dialog.name}
                key={dialog.id}
                id={dialog.id}

            />
        ));

        return (
            <div>
                <div className={classes.dialogs}>
                    <div className={classes.dialogsItems}>{dialogItems}</div>
                    <Messages
                        messageData={this.props.messageData}
                        newMessageText={this.props.newMessageText}
                        currentUserId={this.props.currentUserId}
                        addMessage={this.props.addMessage}
                        updateNewMessageText={this.props.updateNewMessageText}
                        userId={parseInt(this.props.match.params.userId)} />
                </div>
            </div>
        );
    }
}

export default DialogsComponent;
