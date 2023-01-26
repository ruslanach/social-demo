import {addPost, deletePost, profileReducer, updateNewPost} from "./profileReducer";
let state ={

    postsData: [
        {id: 1, post: 'Post1', likesCount: 5},
        {id: 2, post: 'Post2', likesCount: 7},
        {id: 3, post: 'Post3', likesCount: 12}
    ],
    newPostText: 'test post',

};

test('new post should be added', () => {
    let action = addPost();
    let newState = profileReducer(state,action);
    expect(newState.postsData.length).toBe(3);

});
test('after delete', () => {
    let action=deletePost(1);


    let newState = profileReducer(state,action);
     expect(newState.postsData.length).toBe(2);

});
