import classes from "./ProfileInfo.module.css";
import React from "react";


class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        // this.activateEditMode = this.activateEditMode.bind(this);
        this.deativateEditMode = this.deativateEditMode.bind(this);
    }
// statusInputRef= React.createRef();
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode:true
        });
    }
    deativateEditMode (){
        this.setState({
            editMode:false
        });
        // this.props.putUserStatus(this.statusInputRef.current.value);
        this.props.putUserStatus(this.state.status);
    }
    onStatusChange =(e)=>{
        this.setState({
            status:e.currentTarget.value
        });

    }
    componentDidUpdate(prevProps,prevState) {
if (prevProps.status !== this.props.status) {
    this.setState({
        status:this.props.status
    });
}
    }
    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={()=>{this.activateEditMode()}} className={classes.userStatus}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={()=>{this.deativateEditMode()}} value={this.state.status}/>
                </div>
                }
            </>
        )
    }
}

export default ProfileStatus