import {addPost, profileReducer} from "./profileReducer";
import {addMessage, dialogsReducer, updateNewMessageText} from "./dialogsReducer";

let state ={
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
    newMessageText: 'new message'
};
test('new massage should be added', () => {
    let action = updateNewMessageText ('new massage');
    let newState = dialogsReducer(state,action);
    let action1 = addMessage ();
    let newState1 = dialogsReducer(newState,action1);
    expect(newState1.messageData.length).toBe(7);

});