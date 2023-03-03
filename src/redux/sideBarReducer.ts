type SideBarDataType = {
    id: number
    sideBarName: string
    sideBarPath: string
}
let initialState={
    sideBarData: [
        {id: 1, sideBarName: 'Profile', sideBarPath: '/profile'},
        {id: 2, sideBarName: 'Message', sideBarPath: '/dialogs'},
        {id: 6, sideBarName: 'Users', sideBarPath: '/users'},
        {id: 3, sideBarName: 'News', sideBarPath: '/news'},
        {id: 4, sideBarName: 'Music', sideBarPath: '/music'},
        {id: 5, sideBarName: 'Settings', sideBarPath: '/settings'}

    ] as Array<SideBarDataType>
};

export type InitialStateType = typeof initialState
export const sideBarReducer =(state=initialState, action:any):InitialStateType=>{

    return {...state};
}
