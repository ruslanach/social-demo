const ADD_MESSAGE = 'SN/DIALOGS/ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'SN/DIALOGS/UPDATE-NEW-MESSAGE-TEXT';
const UPDATE_CURRENT_USER = 'SN/DIALOGS/UPDATE_CURRENT_USER';
import {DialogType, MessageType} from "../types/types";



let initialState ={
    dialogsData: [
        {id: 1, name: 'Ruslana'},
        {id: 2, name: 'Mykola'},
        {id: 3, name: 'Andrii'},
        {id: 4, name: 'Diana'},

    ] as Array<DialogType>,
    messageData: [
        {id: 1, idUser: 1, message: 'Ruslana Hello'},
        {id: 2, idUser: 1, message: 'Ruslana 1'},
        {id: 3, idUser: 1, message: 'Ruslana 2'},
        {id: 4, idUser: 2, message: 'Mykola Hello'},
        {id: 5, idUser: 2, message: 'Mykola 1'},
        {id: 6, idUser: 3, message: 'Andrii 1'},
        {id: 7, idUser: 4, message: 'Diana 1'}] as Array<MessageType>,
    newMessageText: 'new message',
    currentUserId: null as number | null
};
export type InitialStateType = typeof initialState;
export const dialogsReducer =(state=initialState, action :any):InitialStateType=>{
    let stateCopy ={...state};

if (action !== undefined) {
    switch (action.type) {


        case ADD_MESSAGE:

            let newMessage = {
                id: state.messageData.length + 1,
                message: state.newMessageText,
                idUser: action.idUser
            };
            stateCopy.messageData = [...state.messageData,newMessage]
            stateCopy.newMessageText = '';


            break;

        case UPDATE_NEW_MESSAGE_TEXT:

            stateCopy.newMessageText = action.newMessageText;


            break;
        case UPDATE_CURRENT_USER:

            stateCopy.currentUserId = action.idUser;


            break;
        default:
            break;
    }
}
    return stateCopy;
}

type AddMessageTypeAC = {
    type: typeof ADD_MESSAGE
    idUser:number | null
}
export const addMessage = (idUser: number | null):AddMessageTypeAC => ({type: ADD_MESSAGE,idUser})

export const updateNewMessageText = (text:string) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text})
export const updateCurrentUser = (idUser: number | null) =>
    ({type: UPDATE_CURRENT_USER, idUser: idUser})