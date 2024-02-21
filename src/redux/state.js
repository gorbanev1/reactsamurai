let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'блядь ебучая', likescount: 12},
                {id: 2, message: 'падаль', likescount: 12},
                {id: 3, message: 'сука', likescount: 12},
                {id: 4, message: 'иди нахуй чмо'},
                {id: 5, message: 'Osel'},
                {id: 6, message: 'idiot'},
            ],
            newPostText: "fdsafsf"
        }
        ,
        dialogsPage: {
            dialogsData : [
                {id: 1, name: 'Piska'},
                {id: 2, name: 'chert'},
                {id: 3, name: 'Mraz'},
                {id: 4, name: 'Suka'},
                {id: 5, name: 'Osel'},
                {id: 6, name: 'idiot'},
            ],
            messagesData : [
                {id: 1, message: 'Piska'},
                {id: 2, message: 'chert'},
                {id: 3, message: 'Mraz'},
                {id: 4, message: 'Suka'},
                {id: 5, message: 'Osel'},
                {id: 6, message: 'idiot'},
            ]
        }

    },
    _callSubscriber() {
        console.log("State was changed")
    },
    getState(){
        return this._state
    },
    addPost() {
        debugger
        let newPost={
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText=""
        this._callSubscriber(this.getState())
    },
    updateNewPostText(newText){
        debugger
        this._state.profilePage.newPostText=newText
        debugger
        this._callSubscriber(this._state)
            // this.renderEntireTree(this._state)
    },
    subscribe (observer) {
        this._callSubscriber=observer
    }
}

export default store
window.store=store