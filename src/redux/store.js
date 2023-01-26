import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sideBarReducer} from "./sideBarReducer";


let store1 = {
    _state: {
        profile: {
            postsData: [
                {id: 1, post: 'Post1', likesCount: 5},
                {id: 2, post: 'Post2', likesCount: 7},
                {id: 3, post: 'Post3', likesCount: 12}
            ],
            newPostText: 'new post'
        },
        dialogs: {
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
        },

        sideBar: {
            sideBarData: [
                {id: 1, sideBarName: 'Profile', sideBarPath: '/profile'},
                {id: 2, sideBarName: 'Message', sideBarPath: '/dialogs'},
                {id: 3, sideBarName: 'News', sideBarPath: '/news'},
                {id: 4, sideBarName: 'Music', sideBarPath: '/music'},
                {id: 5, sideBarName: 'Settings', sideBarPath: '/settings'}
            ]
        }
    },
    _callSubscriber() {

    },
    getState() {
        return this._state;
    },
    // addPost(){
    //     let newPost = {
    //         id: this._state.profile.postsData.length+1,
    //         post:  this._state.profile.newPostText,
    //         likesCount:0
    //     };
    //     this._state.profile.postsData.push(newPost);
    //     this._state.profile.newPostText='';
    //
    //     this._callSubscriber();
    // },
    // updateNewPostText(newPostText){
    //     this._state.profile.newPostText=newPostText;
    //     this._callSubscriber();
    // } ,
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
// console.log(action);

        this._state.profile=profileReducer(this._state.profile,action);
        this._state.dialogs=dialogsReducer(this._state.dialogs,action);
        this._state.sideBar=sideBarReducer(this._state.sideBar,action);
        this._callSubscriber();

    }

}


export default store1
window.store1 = store1;