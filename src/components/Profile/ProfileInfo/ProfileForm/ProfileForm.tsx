import {Form, Field} from 'react-final-form'
import classes from "./ProfileForm.module.css";
import {connect} from "react-redux";
import React from "react";
import {changeProfile} from "../../../../redux/profileReducer";
import {faFacebook, faGithub, faInstagram, faTwitterSquare, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from 'react-bootstrap/Button';
import {ProfileFormType, ProfileType} from "../../../../types/types";
type PropsType = {
    userProfile: ProfileType | null
    isFetching: boolean
    status: string
    authId: number | null
    isAuth: boolean
    onSubmit: (value: ProfileFormType) => void
    putUserProfile : (userId: number) => void
    getUserStatus : (userId: number) => void
    putUserStatus : (status: string) => void
    savePhoto : (photo: File) => void
    changeProfile : (profile: ProfileType) => void
    isOwner: boolean
}
const ProfileFormData: React.FC<PropsType> = (props) => {
   // console.log(props)
    const initialProfile = {
        userId: props.authId,
        fullName: props.userProfile.fullName,
        aboutMe: props.userProfile.aboutMe,
        lookingForAJob: props.userProfile.lookingForAJob,
        lookingForAJobDescription: props.userProfile.lookingForAJobDescription,
        facebook:props.userProfile.contacts.facebook,
        github:props.userProfile.contacts.github,
        twitter:props.userProfile.contacts.twitter,
        instagram:props.userProfile.contacts.instagram,
        youtube:props.userProfile.contacts.youtube


    }
   // console.log(initialProfile)


    // const onSubmit = (value) => {
    //     const userProfile = {
    //         userId: props.authId,
    //         fullName: value.fullName,
    //         aboutMe: value.aboutMe,
    //         lookingForAJob: value.lookingForAJob,
    //         lookingForAJobDescription: value.lookingForAJobDescription,
    //         contacts: {
    //             facebook:value.facebook,
    //             github:value.github,
    //             twitter:value.twitter,
    //             instagram:value.instagram,
    //             youtube:value.youtube
    //         }
    //     }
    //     props.changeProfile(userProfile);
    //     // onEdit();
    // }
    const validate = (value:ProfileFormType) => {
type ErrorsType = {
    fullName?: undefined | string| null
    aboutMe?: undefined | string| null
}
        const errors:ErrorsType= {};
        if (!value.fullName) {
            errors.fullName = 'Required'
        }
        if (!value.aboutMe) {
            errors.aboutMe = 'Required'
        }
        return errors;
    }
    return (
        <Form
            onSubmit={props.onSubmit}
            validate={validate}
            initialValues={initialProfile}
            render={({
                         submitError,
                         handleSubmit,
                         form,
                         submitting,
                         pristine,
                         values
                     }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        {/*<button type="submit">Save</button>*/}
                        <Button variant="outline-success" type="submit" color="info"  size="lg">
                            Save
                        </Button>
                    </div>

                    {submitError && (
                        <div className={classes.error}>{submitError}</div>
                    )}
                    <div className={classes.line}>
                        <label className={classes.label}>Name</label>
                        <Field name="fullName">
                            {({input, meta}) => (
                                <div>
                                    <input type="text" {...input} placeholder="Full name"/>
                                    {meta.touched && meta.error && <span className={classes.error}>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div className={classes.line}>
                        <label className={classes.label}>Looking for a job</label>
                        <Field name="lookingForAJob">
                            {({input, meta}) => (
                                <div>
                                    <input type="checkbox" {...input} placeholder="Looking for a job"/>

                                </div>
                            )}
                        </Field>

                    </div>
                    <div className={classes.line}>
                        <label className={classes.label}>My professional skills</label>
                        <Field name="lookingForAJobDescription">
                            {({input, meta}) => (
                                <div className={classes.textArea}>
                                    <textarea rows={parseInt("5")} cols={parseInt("50")} {...input} placeholder="My professional skills"/>

                                </div>
                            )}
                        </Field>
                    </div>

                    <div className={classes.line}>
                        <label className={classes.label}>About me</label>
                        <Field name="aboutMe">
                            {({input, meta}) => (
                                <div>
                                    <textarea rows={parseInt("5")} cols={parseInt("50")} type="text" {...input} placeholder="About me"/>
                                    {meta.touched && meta.error && <span className={classes.error}>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>

                        {<label>Contacts</label>}
                        <div className={classes.line}>
                            <label className={classes.label}><FontAwesomeIcon icon={faFacebook} style={{color: 'blue'}}/> Facebook</label>

                            <Field name="facebook">
                                {({input, meta}) => (
                                    <div>
                                        <input type="text" {...input}  placeholder="facebook"/>
                                     </div>
                                )}
                            </Field>
                        </div>
                        <div className={classes.line}>
                            <label className={classes.label}><FontAwesomeIcon icon={faTwitterSquare} style={{color: 'blue'}}/> Twitter</label>
                            <Field name="twitter">
                                {({input, meta}) => (
                                    <div>
                                        <input type="text" {...input}  placeholder="twitter"/>
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div className={classes.line}>
                            <label className={classes.label}><FontAwesomeIcon icon={faGithub} style={{color: 'darkviolet'}}/> Github</label>
                            <Field name="github">
                                {({input, meta}) => (
                                    <div>
                                        <input type="text" {...input}  placeholder="github"/>
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div className={classes.line}>
                            <label className={classes.label}><FontAwesomeIcon icon={faInstagram} style={{color: 'red'}}/> Instagram</label>
                            <Field name="instagram">
                                {({input, meta}) => (
                                    <div>
                                        <input type="text" {...input}  placeholder="instagram"/>
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div className={classes.line}>
                            <label className={classes.label}><FontAwesomeIcon icon={faYoutube} style={{color: 'red'}}/> Youtube</label>
                            <Field name="youtube">
                                {({input, meta}) => (
                                    <div>
                                        <input type="text" {...input}  placeholder="youtube"/>
                                    </div>
                                )}
                            </Field>
                        </div>
                        {/*{Object.keys(props.userProfile.contacts).map(key => {*/}
                        {/*    console.log({key});*/}
                        {/*    console.log(props.userProfile.contacts[key]);*/}

                        {/*    return <div key={key} className={classes.contact}>*/}
                        {/*        /!* todo: create some solution for embedded objects *!/*/}
                        {/*        <label className={classes.label}> {key}*/}
                        {/*            <Field name= {key}>*/}
                        {/*                {({input, meta}) => (*/}
                        {/*                    <div>*/}
                        {/*                        <input type="text" {...input} value={props.userProfile.contacts[key]}  placeholder={key}/>*/}

                        {/*                    </div>*/}
                        {/*                )}*/}
                        {/*            </Field>*/}
                        {/*        </label>*/}
                        {/*    </div>*/}
                        {/*})}*/}



                </form>
            )}
        />
    )
}

const ChangeProfile = (props) => {

    return (
        <div>
            <h1>Change profile</h1>
            <ProfileFormData {...props}/>
        </div>

    )
}
let mapStateToProps = (state) => {
    return {
        userProfile: state.profile.userProfile,
        isFetching: state.profile.isFetching,
        authId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {changeProfile})(ChangeProfile);