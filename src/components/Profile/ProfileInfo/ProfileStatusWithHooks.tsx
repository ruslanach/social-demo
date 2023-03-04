
import React, {useEffect, useState} from "react";
import classes from "./ProfileInfo.module.css";
type PropsType = {
    status: string
    putUserStatus: (status: string) => void
}
const ProfileStatusWithHooks: React.FC<PropsType> = (props)=> {
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
    const onStatusChange =(e:any)=>{
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