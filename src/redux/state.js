import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'


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
            dialogsData: [
                {id: 1, name: 'Piska'},
                {id: 2, name: 'chert'},
                {id: 3, name: 'Mraz'},
                {id: 4, name: 'Suka'},
                {id: 5, name: 'Osel'},
                {id: 6, name: 'idiot'},
            ],
            messagesData: [
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
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        // if (action.type === ADD_POST) {
        //     let newPost = {
        //         id: 5,
        //         message: this._state.profilePage.newPostText,
        //         likesCount: 0
        //     }
        //
        //     this._state.profilePage.posts.push(newPost)
        //     this._state.profilePage.newPostText = ""
        //     this._callSubscriber(this.getState())
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this._state.profilePage.newPostText = action.newText
        //     this._callSubscriber(this._state)
        // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        //     this._state.dialogsPage.newMessageBody = action.body
        //     this._callSubscriber(this._state)
        // } else if (action.type === SEND_MESSAGE) {
        //     let body = this._state.dialogsPage.newMessageBody
        //     debugger
        //     this._state.dialogsPage.newMessageBody = ''
        //     this._state.dialogsPage.messagesData.push({id: 7, message: body},
        //     )
        this._callSubscriber(this._state)
        // }
    }

}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default store
window.store = store