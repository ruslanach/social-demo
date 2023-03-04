import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import {SideBarDataType} from "../../types/types";
import React from "react";
type PropsType ={
    sideBarData: Array<SideBarDataType>
}
const NavBar: React.FC<PropsType> =(props) =>{
    let navBarItems =props.sideBarData.map(sidBarElement =><div className={classes.item} key={sidBarElement.id}>
        <NavLink to={sidBarElement.sideBarPath} key={sidBarElement.id} style={({ isActive })  => ({
            color: isActive ? "gold" : "white"
        })}>{sidBarElement.sideBarName}</NavLink>

    </div>);

    return (
        <nav className={classes.nav}>
            {navBarItems}

        </nav>
    )
}
export default NavBar;