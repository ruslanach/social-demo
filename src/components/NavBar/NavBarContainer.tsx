
import NavBar from "./NavBar";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore"
import {SideBarDataType} from "../../types/types";
import React from "react";
type MapStateToPropsType = {
    sideBarData: Array<SideBarDataType>
}
let mapStateToProps =(state:AppStateType):MapStateToPropsType =>{
    return {
        sideBarData:state.sideBar.sideBarData
    }
}
let mapDispatchToProps=(dispatch:any) => {
    return {
            }
}
let NavBarContainer = connect<MapStateToPropsType, {}, {}, AppStateType>(mapStateToProps,mapDispatchToProps)(NavBar);
export default NavBarContainer;