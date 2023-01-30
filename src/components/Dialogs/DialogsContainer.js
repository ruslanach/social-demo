import {addMessage, updateCurrentUser, updateNewMessageText} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import DialogsComponent from "./DialogsComponent";
import {useParams} from "react-router-dom";
import React from "react";
export function withRouter(Children) {
    return (props) => {

        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}
let mapStateToProps =(state) =>{
    return {
        dialogs:state.dialogs,
        newMessageText:state.dialogs.newMessageText,
        currentUserId:state.dialogs.currentUserId
    }
}
// let mapDispatchToProps=(dispatch) => {
//     return {
//         addMessage: ()=>{dispatch(addMessageActionCreator())},
//         updateNewMessageText: (text)=>{dispatch(updateNewMessageTextActionCreator(text))}
//     }
// }
export default compose(
    connect(mapStateToProps,    { addMessage, updateNewMessageText,updateCurrentUser }),
    withRouter,
    withAuthRedirect
)(DialogsComponent)
// export let AuthRedirectComponent = withAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStateToProps,
//     { addMessage, updateNewMessageText })(Dialogs);
// const DialogsContainer1=(props) =>{
// let state = props.store.getState();
//      let addMessage = () => {
//
//         props.store.dispatch(addMessageActionCreator());
//
//     }
//     let updateNewMessageText = (text) => {
//
//         props.store.dispatch(updateNewMessageTextActionCreator(text));
//     }
//     return(
//    <Dialogs state={state} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>
//     )
// }
// export default DialogsContainer