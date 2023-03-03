import {addMessage, updateCurrentUser, updateNewMessageText} from "../../../redux/dialogsReducer";
import {connect} from "react-redux";
import Messages from "./Messages";

let mapStateToProps =(state) =>{
    return {
        messages:state.dialogs.messageData,
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
export default
    connect(mapStateToProps,    { addMessage, updateNewMessageText,updateCurrentUser })
    (Messages)
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