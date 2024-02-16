import {renderEntireTree} from "../render";


let state = {
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

}
export let addPost =()=>{
    debugger
    let newPost={
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost)
    renderEntireTree(state)
}
export let updateNewPostText=(newText)=>{
    state.profilePage.newPostText=newText
    renderEntireTree(state)
}
export default state