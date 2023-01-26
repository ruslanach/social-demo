import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utilits/objectHelper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FFOLLOWING = 'TOGGLE_IS_FFOLLOWING';
let initialState={
    users: [  ],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1,
    isFetching: false,
    followingInProgress: []
    // users: [
    //     {id: 1, name: 'RuslanaCh', info: 'Ruslana is a programmer', location:{country:'Ukraine', city:'Kyiv'},followed:true,photoUrl:'https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg'},
    //     {id: 2, name: 'Mykola', info: 'Mykola is a husband', location:{country:'Ukraine', city:'Kyiv'},followed:true,photoUrl:'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
    //     {id: 3, name: 'Oksana', info: 'Oksana is a friend', location:{country:'Ukraine', city:'Kyiv'},followed:false,photoUrl:'https://klike.net/uploads/posts/2019-03/medium/1551511789_7.jpg'},
    //     {id: 4, name: 'Diana', info: 'Diana is a daughter', location:{country:'USA', city:'Austin'},followed:true,photoUrl:'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
    //     {id: 5, name: 'Andrii', info: 'Andrii is a son', location:{country:'USA', city:'Austin'},followed:false,photoUrl:'https://klike.net/uploads/posts/2022-08/1661144189_10.jpg'}
    // ]
};
export const usersReducer =(state=initialState, action)=>{
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

            case TOGGLE_IS_FFOLLOWING:

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

}
export const setFollow = (userId) => ({type: FOLLOW,userId})
export const setUnFollow = (userId) =>  ({type: UNFOLLOW,userId})
export const setUsers = (users) =>  ({type: SET_USERS,users})
export const setCurrentPage = (currentPage) =>  ({type: SET_CURRENT_PAGE,currentPage})
export const setTotalCount = (totalUsersCount) =>  ({type: SET_TOTAL_COUNT,totalUsersCount})
export const setIsFetching = (isFetching) =>  ({type: TOGGLE_IS_FETCHING,isFetching})
export const setFollowingInProgress = (isFetching,userId) =>  ({type: TOGGLE_IS_FFOLLOWING,isFetching,userId})

export const getUsers =(currentPage,pageSize) => async (dispatch) => {

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
export const unfollow = (userId) => async (dispatch) => {
    dispatch(setFollowingInProgress(true, userId));
    let data = await usersAPI.deleteFollow(userId)
    if (data.resultCode === 0) {
        dispatch(setUnFollow(userId));
    }
    dispatch(setFollowingInProgress(false, userId));

}
export const follow = (userId) => async (dispatch) => {

    dispatch(setFollowingInProgress(true, userId));

    let data = await usersAPI.postFollow(userId)
    if (data.resultCode === 0) {
        dispatch(setFollow(userId));
    }
    dispatch(setFollowingInProgress(false, userId));

}