const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';
let initialState ={
    dialogsData: [
        {id: 1, name: 'Ruslana'},
        {id: 2, name: 'Mykola'},
        {id: 3, name: 'Andrii'},
        {id: 4, name: 'Diana'},

    ],
    messageData: [
        {id: 1, idUser: 1, message: 'Ruslana Hello'},
        {id: 2, idUser: 1, message: 'Ruslana 1'},
        {id: 3, idUser: 1, message: 'Ruslana 2'},
        {id: 4, idUser: 2, message: 'Mykola Hello'},
        {id: 5, idUser: 2, message: 'Mykola 1'},
        {id: 6, idUser: 3, message: 'Andrii 1'},
        {id: 7, idUser: 4, message: 'Diana 1'}],
    newMessageText: 'new message',
    currentUserId: null
};
export const dialogsReducer =(state=initialState, action)=>{
    let stateCopy ={...state};

if (action !== undefined) {
    switch (action.type) {


        case ADD_MESSAGE:

            let newMessage = {
                id: state.messageData.length + 1,
                message: state.newMessageText,
                idUser: 4
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
export const addMessage = () => ({type: ADD_MESSAGE})
export const updateNewMessageText = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text})
export const updateCurrentUser = (idUser) =>
    ({type: UPDATE_CURRENT_USER, idUser: idUser})