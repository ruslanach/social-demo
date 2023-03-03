import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,  setFollowingInProgress,
    unfollow
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getAllUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../redux/usersSelectors";
import {UserType} from "../../types/types";
import { AppStateType } from '../../redux/reduxStore'
type MapSDispatchToPropsType={

    unfollow: (userId: number) => void
    follow: (userId: number) => void
    getUsers:(currentPage: number,pageSize:number) => void
    setCurrentPage:(page: number) => void
    setFollowingInProgress:(isFetching:boolean,userId: number) => void

}
type MapStateToPropsType={
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type PropsType=MapStateToPropsType & MapSDispatchToPropsType

class UsersContainer extends React.Component<PropsType> {
    // constructor(props) {
    //     super(props);
    //
    //
    // }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);

    }

    onChangePages = (page:number) => {
        this.props.setCurrentPage(page);

        this.props.getUsers(page,this.props.pageSize);
    }
    onShowMore = (action:number) => {
        if (this.props.currentPage === 1 && action === -1) {

        } else {
           let page=this.props.currentPage +action;
            this.props.setCurrentPage(this.props.currentPage + action);

            this.props.getUsers(page,this.props.pageSize);
        }
    }
    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader /> :null}


            <Users
                {...this.props}
                onChangePages={this.onChangePages}
                onShowMore={this.onShowMore}
              />
            </>
        )
    }

}

// let mapStateToProps =(state) =>{
//     return {
//         users:getAllUsers(state),
//         pageSize:state.users.pageSize,
//         totalUsersCount:state.users.totalUsersCount,
//         currentPage:state.users.currentPage,
//         isFetching:state.users.isFetching,
//         followingInProgress:state.users.followingInProgress
//     }
// }
let mapStateToProps =(state:AppStateType):MapStateToPropsType =>{
    return {
        // users:getUsersSuperSelector(state),
       users:getAllUsers(state),
        pageSize:getPageSize(state),
        totalUsersCount:getTotalUsersCount(state),
        currentPage:getCurrentPage(state),
        isFetching:getIsFetching(state),
        followingInProgress:getFollowingInProgress(state)
    }
}
// let mapDispatchToProps=(dispatch) => {
//     return {
//         follow:(userID)=>{dispatch(followAC(userID))},
//         unfollow:(userID)=>{dispatch(unfollowAC(userID))},
//         setUsers:(users)=>{dispatch(setUsersAC(users))},
//         setCurrentPage:(currentPage)=>{dispatch(setCurrentPageAC(currentPage))},
//         setTotalCount:(totalUsersCount)=>{dispatch(setTotalCountAC(totalUsersCount))},
//         setIsFetching:(isFetching)=>{dispatch(setIsFetchingAC(isFetching))}
//     }
// }
export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {follow,  unfollow,   setCurrentPage,    setFollowingInProgress,  getUsers   }    ),
    withAuthRedirect
)(UsersContainer)
