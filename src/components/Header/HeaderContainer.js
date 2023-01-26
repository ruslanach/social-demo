import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import { logout} from "../../redux/authReducer";


class HeaderContainer extends React.Component{


    render() {
        return <Header {...this.props}/>
    }
}
let mapStateToProps =(state) =>{

    return {
        auth:state.auth,
        isFetching:state.auth.isFetching,
        isAuth: state.auth.isAuth

    }
}
export default  connect(mapStateToProps,  {logout})(HeaderContainer);
