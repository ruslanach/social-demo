import classes from "./ProfileInfo.module.css";
import backgroundBig from '../../../images/backgroundbig.jpg'
import userPicture from "../../../images/user.png";
import React, {useState} from "react";
import Preloader from "../../common/preloader";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitterSquare, faFacebook, faGithub, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {ExternalLink} from 'react-external-link';
import ProfileForm from "./ProfileForm/ProfileForm";

import Button from "react-bootstrap/Button";


const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);
    // console.log(props.userProfile)
    if (!props.userProfile) {
        return <Preloader/>
    }
    const mainPhotoSelected = (e) => {

        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }


    }
    const onSubmit = async (value) => {
        const userProfile = {
            userId: props.authId,
            fullName: value.fullName,
            aboutMe: value.aboutMe,
            lookingForAJob: value.lookingForAJob,
            lookingForAJobDescription: value.lookingForAJobDescription,
            contacts: {
                facebook:value.facebook,
                github:value.github,
                twitter:value.twitter,
                instagram:value.instagram,
                youtube:value.youtube
            }
        }
      let promice =await props.changeProfile(userProfile)
if (promice===undefined) { setEditMode(false) }
else {
    return promice
}


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

                    {props.isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}
                    {/*{props.isOwner && <NavLink to={'/changeProfile'}>Change profile</NavLink>}*/}


                </div>
                { editMode
                    ? <ProfileForm {...props}  onSubmit={onSubmit}/>
                    : <ProfileData {...props} goToEditMode={() => {setEditMode(true)} } /> }


                {/*     className={classes.profileLogo}/>*/}
                {/*<p>About me</p>    */}

            </div>
        </div>
    )
}
const ProfileData =(props) =>{
return (

        <div className={classes.info}>
            <div className={classes.name}>{props.userProfile.fullName}</div>
            {/*{props.isOwner && <button onClick={props.goToEditMode}>Change profile</button>}*/}

            {props.isOwner && <Button variant="outline-success" color="info"  onClick={props.goToEditMode}>Change profile</Button>}

            <div className={classes.about}>{props.userProfile.aboutMe}</div>
            <div className={classes.job}>
                <b>Looking for a job</b>: {props.userProfile.lookingForAJob ? "yes" : "no"}
            </div>
            {props.userProfile.lookingForAJob &&
                <div className={classes.job}>
                    <b>My professional skills</b>: {props.userProfile.lookingForAJobDescription}
                </div>
            }

            <div>
                <div className={classes.icons}>
                    {/*<a href='www.facebook.com'  target="_blank">*/}
                    {/*    <FontAwesomeIcon icon={faFacebook} style={{ color: 'blue' }}/>*/}
                    {/*</a>*/}
                    {/*<a href={props.userProfile.contacts.facebook!==null ?props.userProfile.contacts.facebook:'www.facebook.com'}  target="_blank">*/}
                    {/*    <FontAwesomeIcon icon={faFacebook} style={{ color: 'blue' }}/>*/}
                    {/*</a>   */}
                    {!!props.userProfile.contacts.facebook &&
                        <div>
                            <ExternalLink href={props.userProfile.contacts.facebook}>
                                <FontAwesomeIcon icon={faFacebook} style={{color: '#1877f2'}}/>
                            </ExternalLink>
                        </div>
                    }
                    {!!props.userProfile.contacts.twitter &&
                        <div>
                            <ExternalLink href={props.userProfile.contacts.twitter}>
                                <FontAwesomeIcon icon={faTwitterSquare} style={{color: '#1da1f2'}}/>
                            </ExternalLink>
                        </div>
                    }
                    {!!props.userProfile.contacts.github &&
                        <div>
                            <ExternalLink href={props.userProfile.contacts.github}>
                                <FontAwesomeIcon icon={faGithub} style={{color: '#6e5494'}}/>
                            </ExternalLink>
                        </div>

                    }
                    {!!props.userProfile.contacts.instagram &&
                        <div>
                            <ExternalLink href={props.userProfile.contacts.instagram}>
                                <FontAwesomeIcon icon={faInstagram} style={{color: '#e1306c'}}/>
                            </ExternalLink>
                        </div>
                    }
                    {!!props.userProfile.contacts.youtube &&
                        <div>
                            <ExternalLink href={props.userProfile.contacts.youtube}>
                                <FontAwesomeIcon icon={faYoutube} style={{color: '#ff0000'}}/>
                            </ExternalLink>
                        </div>
                    }

                       {/*  <NavLink to={props.userProfile.contacts.facebook!==null ?'https://'+props.userProfile.contacts.facebook:'https://'+'www.facebook.com'} target="_blank"><FontAwesomeIcon icon={faFacebook} style={{ color: 'blue' }}/></NavLink>*/}
                    {/*<NavLink to={props.userProfile.contacts.twitter}><FontAwesomeIcon icon={faTwitterSquare} style={{ color: 'blue' }}/></NavLink>*/}
                    {/* <NavLink to={props.userProfile.contacts.github}><FontAwesomeIcon icon={faGithub} style={{ color: 'darkviolet' }}/></NavLink>*/}
                    {/* <NavLink to={props.userProfile.contacts.instagram}><FontAwesomeIcon icon={faInstagram} style={{ color: 'red' }}/></NavLink>*/}
                    {/* <NavLink to={props.userProfile.contacts.youtube}><FontAwesomeIcon icon={faYoutube} style={{ color: 'red' }}/></NavLink>*/}

                </div>
            </div>


        </div>


)
}
export default ProfileInfo