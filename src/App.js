import './App.css';
import {BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import NavBarContainer from "./components/NavBar/NavBarContainer";


import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/Login";
import React, {Component} from "react";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/preloader";
import store from "./redux/reduxStore";
 import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileForm from "./components/Profile/ProfileInfo/ProfileForm/ProfileForm";
import ErrorPage from "./components/common/ErrorPage";

// import {withSuspense} from './hoc/withSuspense'
// const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
// const SuspendedDialogs = withSuspense(DialogsContainer)

// import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
    catchAllUnhandledErrors =()=>{
        alert('Some error occured')
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (this.props.initialized) {
            return (
                // <div className="App">
                //   <header className="App-header">
                //     <img src={logo} className="App-logo" alt="logo" />
                //     <p>
                //       Edit <code>src/App.js</code> and save to reload.
                //     </p>
                //     <a
                //       className="App-link"
                //       href="https://reactjs.org"
                //       target="_blank"
                //       rel="noopener noreferrer"
                //     >
                //       Learn React
                //     </a>
                //   </header>
                // </div>

                <BrowserRouter basename={process.env.PUBLIC}>
                    {/*<BrowserRouter>                   */}
                        <div className='app-wrapper'>
                        <HeaderContainer/>
                        <NavBarContainer/>

                        <div className='app-wrapper-content'>
                            <Routes>
                                <Route exact path="/" element={<ProfileContainer/>}/>

                                <Route exact path="/profile/:userId" element={<ProfileContainer/>}/>
                                <Route exact path="/profile/*" element={<ProfileContainer/>}/>
                                <Route path="/dialogs/:userId" element={<DialogsContainer/>}/>
                                <Route exact path="/dialogs/*" element={<DialogsContainer/>}/>
                                {/*<Route path="/messages/:userId" element={<MessagesContainer/>}/>*/}
                                {/*<Route exact path="/messages/*" element={<MessagesContainer/>}/>*/}
                                {/*/!*<Route exact path="/dialogs/*" element={<DialogsContainer/>}/>*!/*/}
                                <Route path="/news/*" element={<News/>}/>
                                <Route path="/music/*" element={<Music/>}/>
                                <Route path="/settings/" element={<Settings/>}/>
                                <Route path="/users/*" element={<UsersContainer/>}/>
                                <Route path="/login/" element={<Login/>}/>
                                <Route path="/changeProfile/" element={<ProfileForm/>}/>
                                <Route path="*" element={<ErrorPage/>} />

                            </Routes>

                        </div>
                    </div>
                </BrowserRouter>
            );
        } else {return <Preloader />}
    }
}

let mapStateToProps =(state) =>{

    return {
        initialized:state.app.initialized


    }
}
// export default  connect(mapStateToProps,  {initializeApp})(App);;
const AppContainer=  connect(mapStateToProps,  {initializeApp})(App);;
const MainApp = (props) =>{
    return (
        <React.StrictMode>
            <Provider store={store}>
                <AppContainer />
            </Provider>

            {/*<App state={store.getState()}*/}
            {/*     addPost={store.addPost.bind(store)}*/}
            {/*     updateNewPostText={store.updateNewPostText.bind(store)}/>*/}
        </React.StrictMode>
    )
}
export default MainApp;
