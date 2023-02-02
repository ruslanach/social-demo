
import React from "react";
import User from "./User";
import PaginatorNew from "../common/Paginator/PajinatorNew";

let Users = (props) => {


    return (
        <div>
            <PaginatorNew {...props}/>
            <User {...props}/>
        </div>
    )
}
export default Users