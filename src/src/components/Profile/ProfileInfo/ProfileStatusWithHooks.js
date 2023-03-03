
import React, {useEffect, useState} from "react";
import classes from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props)=> {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    useEffect(()=>(
        setStatus(props.status)
    ),[props.status])
    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.putUserStatus(status);
    }
    const onStatusChange =(e)=>{
        setStatus(e.currentTarget.value);

    }
    // console.log('props.status');
    // console.log(props.status);
    // console.log('status');
    // console.log(status);
    return (
        <div>
            {!editMode &&
                <div>
                    <b>Status: </b> <span className={classes.status} onDoubleClick={activateEditMode}>{props.status }</span>
                </div>
            }
            {editMode &&
                <div>
                    <input className={classes.statusEdit} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                           value={status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks