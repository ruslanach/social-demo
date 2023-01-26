import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sideBarReducer} from "./sideBarReducer";
import {usersReducer} from "./usersReducer";
import authReducer from "./authReducer";
import  thunkMiddleWare from "redux-thunk";
import appReducer from "./appReducer";
// import { reducer as formReducer } from 'redux-form'


let reducers=combineReducers({
    profile:profileReducer,
    dialogs:dialogsReducer,
    sideBar:sideBarReducer,
    users:usersReducer,
    auth:authReducer,
    app:appReducer
})
let store = createStore(reducers,applyMiddleware(thunkMiddleWare));

export default store;
window.store = store;