import classes from './Users.module.css';
import React from "react";
import userPicture from '../../images/user.png'
import {NavLink} from "react-router-dom";


const User = (props) => {


    return (
        <div>
                      {
                props.users.users.map(user => (<div key={user.id}>
                    <div className={classes.user}>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img className={classes.avImg} alt={'userPicture'}
                                     src={user.photos.small != null ? user.photos.small : userPicture}/>
                            </NavLink>

                            {
                                user.followed
                                    ? <button disabled={props.followingInProgress.some(id=>id===user.id)} className={classes.follow}
                                              onClick={()=>{ props.unfollow(user.id);}}>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id=>id===user.id)} className={classes.follow}
                                               onClick={()=>{props.follow(user.id)}}>Follow</button>
                            }

                        </div>

                        <div className={classes.userName}>
                            <div>
                                <div className={classes.name}>{user.name}</div>
                                <div className={classes.info}>{user.status}</div>

                            </div>
                            <div>
                                <div className={classes.country}>{'user.location.country'}</div>
                                <div className={classes.city}>{'user.location.city'}</div>

                            </div>
                        </div>

                    </div>

                </div>))
            }
        </div>
    )
}
export default User