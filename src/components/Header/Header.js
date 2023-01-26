import classes from './Header.module.css';
import euro from '../../images/euro.png'
import { NavLink} from "react-router-dom";
import React from "react";

const Header=(props) =>{
    // console.log('login')
    // console.log(props)

    return(
        <header className={classes.header}>

            <img className={classes.img} src={euro} alt='logo'/>

<div className={classes.loginBlock}>

    {props.isAuth ? <div>
        <div>
            {props.auth.login}
        </div>
            <div>
                <button onClick={props.logout}>Logout</button>
                {/*<Navigate to={'/profile'}/>*/}
            </div>

    </div> :
        <NavLink to={'/login'}>Login</NavLink>

        // <NavLink to={'/login'}>Login</NavLink>

}


</div>

        </header>
    )
}
export default Header;