import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";
import {ProfileType} from "../../types/types";
type PropsType = {
    userProfile: ProfileType | null
    isFetching: boolean
    status: string
    authId: number | null
    isAuth: boolean
    putUserProfile : (userId: number) => void
    getUserStatus : (userId: number) => void
    putUserStatus : (status: string) => void
    savePhoto : (photo: File) => void
    changeProfile : (profile: ProfileType) => void
    isOwner: boolean
}

const Profile: React.FC<PropsType>= (props) => {

    return (
        <div>
            <ProfileInfo {...props} />

            <MyPostsContainer />
        </div>
    )
}
export default Profile;