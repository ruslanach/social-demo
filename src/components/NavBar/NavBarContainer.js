
import NavBar from "./NavBar";
import {connect} from "react-redux";
let mapStateToProps =(state) =>{
    return {
        sideBar:state.sideBar
    }
}
let mapDispatchToProps=(dispatch) => {
    return {
            }
}
let NavBarContainer = connect(mapStateToProps,mapDispatchToProps)(NavBar);
export default NavBarContainer;