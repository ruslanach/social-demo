import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {changeProfile, getUserStatus, putUserProfile, putUserStatus, savePhoto} from "../../redux/profileReducer";
import {useParams} from 'react-router-dom'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import { withRouter } from '../../utilits/servisFunctions';
import {DialogType, MessageType,  ProfileType} from "../../types/types";
import {AppStateType} from "../../redux/reduxStore";

// export function withRouter(Children) {
//     return (props) => {
//
//         const match = {params: useParams()};
//         return <Children {...props} match={match}/>
//     }
// }

type MapDispatchToPropsType={

    putUserProfile : (userId: number) => void
    getUserStatus : (userId: number) => void
    putUserStatus : (status: string) => void
    savePhoto : (photo: File) => void
    changeProfile : (profile: ProfileType) => void

}
type MapStateToPropsType={

    userProfile: ProfileType | null
    isFetching: boolean
    status: string
    authId: number | null
    isAuth: boolean

}
type OwnPropsType={
    match: {
        params: {
            userId: string;
        };
    }}

type PropsType=MapStateToPropsType & MapDispatchToPropsType & OwnPropsType
class ProfileContainer extends React.Component<PropsType> {
    // constructor(props) {
    //     super(props);
    // }
    refreshProfile ()  {

type userIdType = number | null
        let userId:userIdType = parseInt(this.props.match.params.userId);
        if (!userId) {
            if (this.props.isAuth) {
                userId = this.props.authId;
            } else {
                // userId = '27003'
            }
            // else {this.props.history.push("/login")}
            //

        }
        if (userId) {
            this.props.putUserProfile(userId);
            this.props.getUserStatus(userId);
        }
    }

    componentDidMount() {

        this.refreshProfile ();

    }

    componentDidUpdate(prevProps:PropsType, prevState:AppStateType, snapshot:any) {
        if (parseInt(this.props.match.params.userId)!==parseInt(prevProps.match.params.userId)) {
            this.refreshProfile ();
        }

    }

    render() {
        // eslint-disable-next-line react-hooks/rules-of-hooks
// console.log(this.props)
        return (
            <div>
                <Profile {...this.props} isOwner ={!parseInt(this.props.match.params.userId)} />

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
let mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        userProfile: state.profile.userProfile,
        isFetching: state.profile.isFetching,
        status: state.profile.status,
        authId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {putUserProfile, getUserStatus, putUserStatus,savePhoto,changeProfile}),
    withRouter,
    withAuthRedirect)(ProfileContainer)
// export let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// export let WithUrlDataContainerComponent =withRouter(AuthRedirectComponent);
// // export default connect(mapStateToProps,{setUserProfile,setIsFetching}) (ProfileContainer)
// export default connect(mapStateToProps,{putUserProfile}) (WithUrlDataContainerComponent)
