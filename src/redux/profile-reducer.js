const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
const profileReducer = (state = initialState, action) => {

    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        }
        let stateCopy = {...state,
            posts : [...state.posts, newPost],
            newPostText: ""

        }

        return stateCopy

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        let stateCopy = {...state}

        stateCopy.newPostText = action.newText
        return stateCopy

    } else return state

}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer