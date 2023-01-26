
import React from "react";
import User from "./User";
import Paginator from "../common/Paginator/Pajinator";

let Users = (props) => {


    return (
        <div>
            <Paginator {...props}/>
            <User {...props}/>
        </div>
    )
}
export default Users