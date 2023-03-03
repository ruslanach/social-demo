import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utilits/objectHelper";
import {UserType} from '../types/types'
const FOLLOW = 'SN/USERS/FOLLOW';
const UNFOLLOW = 'SN/USERS/UNFOLLOW';
const SET_USERS = 'SN/USERS/SET_USERS';
const SET_CURRENT_PAGE = 'SN/USERS/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SN/USERS/SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'SN/USERS/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'SN/USERS/TOGGLE_IS_FOLLOWING';
let initialState={
    users: [  ] as Array<UserType>,
    pageSize:5,
    totalUsersCount:0,
    currentPage:1,
    isFetching: false,
    followingInProgress: [] as Array<number> //array of users ids
    // users: [
    //     {id: 1, name: 'RuslanaCh', info: 'Ruslana is a programmer', location:{country:'Ukraine', city:'Kyiv'},followed:true,photoUrl:'https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg'},
    //     {id: 2, name: 'Mykola', info: 'Mykola is a husband', location:{country:'Ukraine', city:'Kyiv'},followed:true,photoUrl:'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
    //     {id: 3, name: 'Oksana', info: 'Oksana is a friend', location:{country:'Ukraine', city:'Kyiv'},followed:false,photoUrl:'https://klike.net/uploads/posts/2019-03/medium/1551511789_7.jpg'},
    //     {id: 4, name: 'Diana', info: 'Diana is a daughter', location:{country:'USA', city:'Austin'},followed:true,photoUrl:'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
    //     {id: 5, name: 'Andrii', info: 'Andrii is a son', location:{country:'USA', city:'Austin'},followed:false,photoUrl:'https://klike.net/uploads/posts/2022-08/1661144189_10.jpg'}
    // ]
};
export type InitialState = typeof initialState
export const usersReducer =(state=initialState, action:any):InitialState=>{
       if (action !== undefined) {

        switch (action.type) {

            case FOLLOW:

                return {...state,
                    users:updateObjectInArray(state.users,action.userId,'id',{followed: true})
                };
                // return {...state,
                //     users:state.users.map(user=>{
                //         if (user.id===action.userId){
                //             return {...user, followed: true};
                //         } else { return user}
                //
                //     })
                // };
            case UNFOLLOW:
                return {...state,
                    users:updateObjectInArray(state.users,action.userId,'id',{followed: false})
                };
                // return {...state,
                //     users:state.users.map(user=>{
                //
                //         if (user.id===action.userId){
                //             return {...user, followed: false};
                //         } else { return user}
                //
                //     })
                // };

            case SET_USERS:
                // return {...state, users:[ ...action.users ,...state.users ]  }
                return {...state, users:[ ...action.users ]  }
            case SET_CURRENT_PAGE:

                return {...state, currentPage: action.currentPage}
            case SET_TOTAL_COUNT:
                return {...state, totalUsersCount: action.totalUsersCount}
            case TOGGLE_IS_FETCHING:
                return {...state, isFetching: action.isFetching}

            case TOGGLE_IS_FOLLOWING:

                return {
                    ...state,
                    followingInProgress:
                    action.isFetching ?  [...state.followingInProgress, action.userId]
                        : [state.followingInProgress.filter(id=>id!== action.userId)]
                }
            default:
                return state;


        }
    }
    return state;

}
type SetFollowTypeAC ={
    type: typeof FOLLOW
    userId:number
}
export const setFollow = (userId:number):SetFollowTypeAC => ({type: FOLLOW,userId})
type SetUnFollowTypeAC ={
    type: typeof UNFOLLOW
    userId:number
}
export const setUnFollow = (userId:number):SetUnFollowTypeAC =>  ({type: UNFOLLOW,userId})
type SetUsersTypeAC = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>):SetUsersTypeAC =>  ({type: SET_USERS,users})
type SetCurrentPageTypeAC={
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number):SetCurrentPageTypeAC =>  ({type: SET_CURRENT_PAGE,currentPage})
type SetTotalCountTypeAC={
    type: typeof SET_TOTAL_COUNT
    totalUsersCount: number
}
export const setTotalCount = (totalUsersCount: number):SetTotalCountTypeAC =>  ({type: SET_TOTAL_COUNT,totalUsersCount})
type SetIsFetchingTypeAC ={
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const setIsFetching = (isFetching:boolean):SetIsFetchingTypeAC =>  ({type: TOGGLE_IS_FETCHING,isFetching})
type SetFollowingInProgressTypeAC = {
    type: typeof TOGGLE_IS_FOLLOWING
    isFetching:boolean
    userId:number
}
export const setFollowingInProgress = (isFetching:boolean,userId: number):SetFollowingInProgressTypeAC =>  ({type: TOGGLE_IS_FOLLOWING,isFetching,userId})

export const getUsers =(currentPage: number,pageSize: number) => async (dispatch:any) => {

    dispatch(setIsFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setIsFetching(false));
    // dispatch(setUsers(data.items));
    dispatch(setUsers(data.items));

    dispatch(setTotalCount(data.totalCount));

          // let myUsers= [
        //     {id: 1, name: 'RuslanaCh', status: 'Ruslana is a programmer', location:{country:'Ukraine', city:'Kyiv'},followed:true,photos:{small:'https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg',large:null}},
        //     {id: 2, name: 'Mykola', status: 'Mykola is a husband', location:{country:'Ukraine', city:'Kyiv'},followed:true,photos:{small:'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',large:null}},
        //     {id: 3, name: 'Oksana', status: 'Oksana is a friend', location:{country:'Ukraine', city:'Kyiv'},followed:false,photos:{small:'https://klike.net/uploads/posts/2019-03/medium/1551511789_7.jpg',large:null}},
        //     {id: 4, name: 'Diana', status: 'Diana is a daughter', location:{country:'USA', city:'Austin'},followed:true,photos:{small:'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',large:null}},
        //     {id: 5, name: 'Andrii', status: 'Andrii is a son', location:{country:'USA', city:'Austin'},followed:false,photos:{small:'https://klike.net/uploads/posts/2022-08/1661144189_10.jpg',large:null}}
        // ];
        // dispatch(setUsers(myUsers));
        // dispatch(setTotalCount(5));

}
export const unfollow = (userId: number) => async (dispatch:any) => {
    dispatch(setFollowingInProgress(true, userId));
    let data = await usersAPI.deleteFollow(userId)
    if (data.resultCode === 0) {
        dispatch(setUnFollow(userId));
    }
    dispatch(setFollowingInProgress(false, userId));

}
export const follow = (userId: number) => async (dispatch:any) => {

    dispatch(setFollowingInProgress(true, userId));

    let data = await usersAPI.postFollow(userId)
    if (data.resultCode === 0) {
        dispatch(setFollow(userId));
    }
    dispatch(setFollowingInProgress(false, userId));

}