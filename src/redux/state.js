import {rerenderEntireTree} from "../render";

let state = {

    profilePage:{
        posts: [
            {id:1, message: 'Hi, how are you?', likesCount:12},
            {id:2, message: "It's, my first post?", likesCount:11},
            {id:3, message: "It's, my first post?", likesCount:10}
        ]

    },

    dialogsPage:{
        messages:  [
            {id:1, message: 'Hi'},
            {id:2, message: 'How is you it'},
            {id:3, message: 'Yo'},
            {id:4, message: 'Yo'},
            {id:5, message: 'Yo'},
        ],
        dialogs: [
            {id:1, name: 'Ben'},
            {id:2, name: 'Fred'},
            {id:3, name: 'Cris'},
            {id:4, name: 'Bill'},
            {id:5, name: 'Angelina'},
            {id:6, name: 'Bred'},
        ]
    }

}
export let addPost = (postMessage)=> {
    let newPost = {
        id:5,
        message:postMessage,
        likesCount:0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;