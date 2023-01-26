import classes from "./ProfileInfo.module.css";
import backgroundBig from '../../../images/backgroundbig.jpg'
import userPicture from "../../../images/user.png";
import React from "react";
import Preloader from "../../common/preloader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faFacebook,  faGithub, faInstagram,faYoutube } from "@fortawesome/free-brands-svg-icons"
import {NavLink} from "react-router-dom";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



const ProfileInfo = (props) => {

    if (!props.userProfile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src={backgroundBig}
                    alt="main-content" className={classes.profileImg}/>
            </div>
            {/*<ProfileStatus {...props}/>*/}
            <ProfileStatusWithHooks {...props}/>
            <div className={classes.profileInfo}>
                <div>
                    <img className={classes.profileLogo} alt={'userPicture'}
                         src={props.userProfile.photos.large != null ? props.userProfile.photos.large : userPicture}/>



                </div>
                <div className={classes.info}>
                    <div className={classes.name}>{props.userProfile.fullName}</div>
                    <div className={classes.about}>{props.userProfile.aboutMe}</div>
                    <div>
                        <div className={classes.icons}>

                            <NavLink to={props.userProfile.contacts.facebook}><FontAwesomeIcon icon={faFacebook} style={{ color: 'blue' }}/></NavLink>
                            <NavLink to={props.userProfile.contacts.twitter}><FontAwesomeIcon icon={faTwitterSquare} style={{ color: 'blue' }}/></NavLink>
                            <NavLink to={props.userProfile.contacts.github}><FontAwesomeIcon icon={faGithub} style={{ color: 'darkviolet' }}/></NavLink>
                            <NavLink to={props.userProfile.contacts.instagram}><FontAwesomeIcon icon={faInstagram} style={{ color: 'red' }}/></NavLink>
                            <NavLink to={props.userProfile.contacts.youtube}><FontAwesomeIcon icon={faYoutube} style={{ color: 'red' }}/></NavLink>

                        </div>
                 </div>
                    {/*<img src={myAva} alt={'avatar'}*/}
                </div>
                {/*     className={classes.profileLogo}/>*/}
                {/*<p>About me</p>    */}

            </div>
        </div>
    )
}
export default ProfileInfo