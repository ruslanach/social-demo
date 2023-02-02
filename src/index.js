import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import store from "./redux/reduxStore";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import {Provider} from "react-redux";
import MainApp from "./App";

const root = ReactDOM.createRoot(document.getElementById('root')); // ВОТ ЭТА СТРОКА
// let rerenderEntireTree = () =>{

    root.render(
        // <React.StrictMode>
        //     <Provider store={store}>
        //         <App />
        //     </Provider>
        //
        //     {/*<App state={store.getState()}*/}
        //     {/*     addPost={store.addPost.bind(store)}*/}
        //     {/*     updateNewPostText={store.updateNewPostText.bind(store)}/>*/}
        // </React.StrictMode>
        <MainApp />

    );
// }
// rerenderEntireTree();
// store.subscribe(rerenderEntireTree); it's do connect in component


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
