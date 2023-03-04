import {addMessage, updateCurrentUser, updateNewMessageText} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import DialogsComponent from "./DialogsComponent";
import {useParams} from "react-router-dom";
import React from "react";
import {DialogType, MessageType} from "../../types/types";
import {AppStateType} from "../../redux/reduxStore";

import { ComponentType } from "react";
import { withRouter } from '../../utilits/servisFunctions';

interface Props {
    [key: string]: any;
}

// function withRouter<T extends Props>(Children: ComponentType<T>) {
//     return (props: T) => {
//         const match = { params: useParams() };
//         return <Children {...props} match={match} />;
//     };
// }


type MapDispatchToPropsType={

    addMessage: (userId: number) => void
    updateNewMessageText: (text: string) => void
    updateCurrentUser: (userId: number) => void

}
type MapStateToPropsType={

    dialogsData:Array<DialogType>
    messageData:Array<MessageType>
    newMessageText:string
    currentUserId:number|null

}
type PropsType=MapStateToPropsType & MapDispatchToPropsType
let mapStateToProps =(state:AppStateType):MapStateToPropsType =>{
    return {

        dialogsData:state.dialogs.dialogsData,
        messageData:state.dialogs.messageData,
        newMessageText:state.dialogs.newMessageText,
        currentUserId:state.dialogs.currentUserId
    }
}

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps,    { addMessage, updateNewMessageText,updateCurrentUser }),
    withRouter,
    withAuthRedirect
)(DialogsComponent)
