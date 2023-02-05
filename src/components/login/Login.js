import {Form, Field} from 'react-final-form'
import classes from "./Login.module.css";
import {connect} from "react-redux";
import {login, logout} from "../../redux/authReducer";
import React from "react";
import {Navigate} from "react-router-dom";



// const MyForm = () => (
//     <Form
//         onSubmit={onSubmit}
//         validate={validate}
//         render={({ handleSubmit }) => (
//             <form onSubmit={handleSubmit}>
//                 <h2>Simple Default Input</h2>
//                 <div>
//                     <label>First Name</label>
//                     <Field name="firstName" component="input" placeholder="First Name" />
//                 </div>
//
//                 <h2>An Arbitrary Reusable Input Component</h2>
//                 <div>
//                     <label>Interests</label>
//                     {/*<Field name="interests" component={InterestPicker} />*/}
//                 </div>
//
//                 <h2>Render Function</h2>
//                 <Field
//                     name="bio"
//                     render={({ input, meta }) => (
//                         <div>
//                             <label>Bio</label>
//                             <textarea {...input} />
//                             {meta.touched && meta.error && <span>{meta.error}</span>}
//                         </div>
//                     )}
//                 />
//
//                 <h2>Render Function as Children</h2>
//                 <Field name="phone">
//                     {({ input, meta }) => (
//                         <div>
//                             <label>Phone</label>
//                             <input type="text" {...input} placeholder="Phone" />
//                             {meta.touched && meta.error && <span>{meta.error}</span>}
//                         </div>
//                     )}
//                 </Field>
//
//                 <button type="submit">Submit</button>
//             </form>
//         )}
//     />
// )
// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
//
// const onSubmit = async values => {
//     // await sleep(300)
//     // if (values.login !== 'erikras') {
//     //     return { login: 'Unknown username' }
//     // }
//     // if (values.password !== 'finalformrocks') {
//     //     return { [FORM_ERROR]: 'Login Failed' }
//     // }
//     // window.alert('LOGIN SUCCESS!')
// }
const LoginForm = (props) => {
     // console.log(props)
    const initialData = {
        email: 'aaaaa@gmail.com'
    }
    const onSubmit = async (value) => {
        let promice = await props.login(value.email, value.password, value.rememberMe, value.captcha);

        if (promice !== undefined) {
            return promice
        }
        // else {  return <Navigate to={'/profile'}/> }
    }
    const validate = (value) => {

        const errors = {};
        if (!value.email) {
            errors.email = 'Required'
        }
        if (!value.password) {
            errors.password = 'Required'
        }
        return errors;
    }
    if (props.isAuth) {return <Navigate to={'/profile'}/> }
    return (

        <Form
            onSubmit={onSubmit}
            validate={validate}
            initialValues={initialData}
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

                        <label>Login</label>

                        {/*<Field name="login" component="input" placeholder="Login" />*/}
                        {/*<Field*/}
                        {/*    name="login"*/}
                        {/*    render={({ input, meta }) => (*/}
                        {/*        <div>*/}
                        {/*            <input {...input} />*/}
                        {/*            {meta.touched && meta.error && <div>{meta.error}</div>}*/}
                        {/*        </div>*/}
                        {/*    )}*/}
                        {/*/>*/}
                        <Field name="email">
                            {({input, meta}) => (
                                <div>
                                    <input type="text" {...input} placeholder="Email"/>
                                    {meta.touched && meta.error && <span className={classes.error}>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div>
                        {/*<label>Passwords</label>*/}
                        <Field name="password">
                            {({input, meta}) => (
                                <div>
                                    <input type="password" {...input} placeholder="Password"/>
                                    {meta.touched && meta.error && <span className={classes.error}>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                    </div>
                    <div>
                        <label>remember me</label>
                        <Field name="rememberMe" component="input" type="checkbox"/>

                    </div>
                    {props.captchaUrl && (
                        <img className={classes.captcha} src={props.captchaUrl} alt={'captcha'}/>
                    )}
                    {props.captchaUrl && (
                        <Field name="captcha">
                            {({input, meta}) => (
                                <div>
                                    <input type="text" {...input} placeholder="symbols from picture"/>
                                    {meta.touched && meta.error && <span className={classes.error}>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    )}
                    {submitError && (
                        <div className={classes.error}>{submitError}</div>
                    )}
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            )}
        />
    )
}

const Login = (props) => {

    return (
        <div>
            <h1>Login</h1>
            <LoginForm {...props}/>
        </div>

    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl:state.auth.captchaUrl
})
export default connect(mapStateToProps, {login, logout})(Login);