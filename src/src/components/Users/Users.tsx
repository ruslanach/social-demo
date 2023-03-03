
import React from "react";
import User from "./User";
import PaginatorNew from "../common/Paginator/Pajinator";
import {UserType} from "../../types/types";
type PropsType={
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    getUsers:(currentPage: number,pageSize:number) => void
    setCurrentPage:(page: number) => void
    onChangePages:(page: number) => void
    onShowMore:(action:number) => void
}
let Users : React.FC<PropsType>= (props) => {


    return (
        <div>
            <PaginatorNew {...props}/>
            <User {...props}/>
        </div>
    )
}
export default Users