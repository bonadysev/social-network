let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: "It's, my first post?", likesCount: 11},
                {id: 3, message: "It's, my first post?", likesCount: 10}
            ],
            newPostText: "write text"
        },

        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is you it'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ],
            dialogs: [
                {id: 1, name: 'Ben'},
                {id: 2, name: 'Fred'},
                {id: 3, name: 'Cris'},
                {id: 4, name: 'Bill'},
                {id: 5, name: 'Angelina'},
                {id: 6, name: 'Bred'},
            ]
        }

    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed')
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);

    },
    subscribe(observer) {
        this._callSubscriber = observer; // patern nabludatel (observer)
    }
}

export default store;
window.state = store;