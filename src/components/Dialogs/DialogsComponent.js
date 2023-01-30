import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";

import React from "react";

import Messages from "./Messages/Messages";
import {useParams} from "react-router-dom";



class DialogsComponent extends React.Component {
    refreshMessage ()  {
        let userId = this.props.match.params.userId;
        if (userId) {
            this.props.updateCurrentUser(userId);
        }


    }
    componentDidMount() {
        this.refreshMessage ();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !==prevProps.match.params.userId) {
            this.refreshMessage ();
        }
    }

    render() {

        let dialogItems = this.props.dialogs.dialogsData.map(dialog => <Dialog name={dialog.name} key={dialog.id}
                                                                               id={dialog.id} {...this.props}/>)


        return (
            <div>
                <div className={classes.dialogs}>
                    <div className={classes.dialogsItems}>
                        {dialogItems}
                    </div>


                    <Messages {...this.props} userId={this.props.match.params.userId}/>

                </div>

            </div>
        )
    }
}

export default DialogsComponent