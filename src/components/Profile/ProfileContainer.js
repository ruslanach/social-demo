import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserStatus, putUserProfile, putUserStatus} from "../../redux/profileReducer";
import { useParams } from 'react-router-dom'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export function withRouter(Children){
    return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}
class ProfileContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            if(this.props.isAuth) {
                userId =this.props.authId;
            }else {userId='27003'}
            // else {this.props.history.push("/login")}
        //

        }
        this.props.putUserProfile(userId);
        this.props.getUserStatus(userId);


      }

    render() {
        // eslint-disable-next-line react-hooks/rules-of-hooks
// console.log(this.props)
        return (
            <div>
                <Profile {...this.props}  />

            </div>
        )

    }
}
// let mapStateToProps =(state) =>{
//     return {
//         userProfile:state.profile.userProfile,
//         isFetching:state.profile.isFetching,
//         status:state.profile.status,
//         authId:state.auth.userId,
//         isAuth:state.auth.isAuth
//     }
// }
let mapStateToProps =(state) =>{
    return {
        userProfile:state.profile.userProfile,
        isFetching:state.profile.isFetching,
        status:state.profile.status,
        authId:state.auth.userId,
        isAuth:state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {putUserProfile,getUserStatus,putUserStatus}),
    withRouter,
    withAuthRedirect)(ProfileContainer)
// export let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// export let WithUrlDataContainerComponent =withRouter(AuthRedirectComponent);
// // export default connect(mapStateToProps,{setUserProfile,setIsFetching}) (ProfileContainer)
// export default connect(mapStateToProps,{putUserProfile}) (WithUrlDataContainerComponent)
