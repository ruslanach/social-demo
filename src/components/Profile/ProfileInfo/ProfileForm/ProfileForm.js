import {Form, Field} from 'react-final-form'
import classes from "./ProfileForm.module.css";
import {connect} from "react-redux";
import React from "react";
import {changeProfile} from "../../../../redux/profileReducer";


const ProfileFormData = (props) => {
    // console.log(props)

    const onSubmit = (value) => {
        const userProfile = {
            userId: props.authId,
            fullName: value.fullName,
            aboutMe: value.aboutMe,
            lookingForAJob: value.lookingForAJob,
            lookingForAJobDescription: value.lookingForAJobDescription,
            contacts: {
                facebook:value.facebook,
                github:value.github
            }
        }
        props.changeProfile(userProfile);

    }
    const validate = (value) => {

        const errors = {};
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
            onSubmit={onSubmit}
            validate={validate}
            initialValues={props.userProfile}
            render={({
                         submitError,
                         handleSubmit,
                         form,
                         submitting,
                         pristine,
                         values
                     }) => (
                <form onSubmit={handleSubmit}>
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
                                    <textarea rows="5" cols="50" {...input} placeholder="My professional skills"/>

                                </div>
                            )}
                        </Field>
                    </div>

                    <div className={classes.line}>
                        <label className={classes.label}>About me</label>
                        <Field name="aboutMe">
                            {({input, meta}) => (
                                <div>
                                    <textarea rows="5" cols="50" type="text" {...input} placeholder="About me"/>
                                    {meta.touched && meta.error && <span className={classes.error}>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div >
                        {<label>Contacts</label>}
                        {Object.keys(props.userProfile.contacts).map(key => {
                            // console.log({key});
                            // console.log(props.userProfile.contacts[{key}]);

                            return <div key={key} className={classes.contact}>
                                {/* todo: create some solution for embedded objects */}
                                <label className={classes.label}> {key}
                                    <Field name= {key}>
                                        {({input, meta}) => (
                                            <div>
                                                <input value={props.userProfile.contacts[{key}]} type="text" {...input} placeholder={key}/>

                                            </div>
                                        )}
                                    </Field>
                                </label>
                            </div>
                        })}

                    </div>
                    <div>
                        <button type="submit">Save</button>
                    </div>
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