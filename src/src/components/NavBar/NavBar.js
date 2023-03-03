import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";
const NavBar =(props) =>{
    let navBarItems =props.sideBar.sideBarData.map(sidBarElement =><div className={classes.item} key={sidBarElement.id}>
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