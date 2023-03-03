import { AppStateType } from './reduxStore'
export const getAllUsers = (state: AppStateType) => {
     return state.users.users;
}
// export const getUsersSuperSelector= createSelectorHook (getAllUsers,
//     (users)=>{
//         return users;
//     }
// )
// export const getUsersSuperSelector2= createSelectorHook (getAllUsers,getPageSize,
//     (users,pageSize)=>{
//         return users;
//     }
// )


export const getPageSize = (state: AppStateType) => {
    return state.users.pageSize;
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.users.totalUsersCount;
}
export const getCurrentPage = (state: AppStateType) => {
    return state.users.currentPage;
}
export const getIsFetching = (state: AppStateType) => {
    return state.users.isFetching;
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.users.followingInProgress;
}