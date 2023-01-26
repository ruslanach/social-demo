import classes from "../login/Login.module.css";

const Input =({...props},meta) =>(

    <div>
        <label>{props.label}</label>
        <input {...props}/>

        {meta.touched && meta.error && <span className={classes.error}>{meta.error}</span>}
    </div>
)
export default Input

