import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sideBarReducer} from "./sideBarReducer";
import {usersReducer} from "./usersReducer";
import authReducer from "./authReducer";
import  thunkMiddleWare from "redux-thunk";
import appReducer from "./appReducer";
// import { reducer as formReducer } from 'redux-form'


let rootReducer=combineReducers({
    profile:profileReducer,
    dialogs:dialogsReducer,
    sideBar:sideBarReducer,
    users:usersReducer,
    auth:authReducer,
    app:appReducer
})
type RootReducerType = typeof rootReducer; // (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>
let store = createStore(rootReducer,applyMiddleware(thunkMiddleWare));
// @ts-ignore
window.__store__ = store
export default store;
