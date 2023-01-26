import classes from "./Dialog.module.css";
import {NavLink} from "react-router-dom";



const Dialog=(props) =>{

    let path='/dialogs/'+props.id;
// const onClick =()=>{
//    props.updateCurrentUser(props.id);
//
// }
    return (
<div>


        <div className={classes.dialog}>

            <NavLink to={path}
                     style={({ isActive })  => ({
                         color: isActive ? "gold" : "black"
                     })}
            >{props.name} </NavLink>
        </div>
{/*<div>*/}
{/*    <Messages {...props}/>*/}
{/*</div>*/}
</div>
    )
}
export default Dialog