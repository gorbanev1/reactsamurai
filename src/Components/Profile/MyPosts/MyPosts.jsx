import React from "react";
import css from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
/*    let posts = [
        {id: 1, message: 'блядь ебучая', likescount: 12},
        {id: 2, message: 'падаль', likescount: 12},
        {id: 3, message: 'сука', likescount: 12},
        {id: 4, message: 'иди нахуй чмо'},
        {id: 5, message: 'Osel'},
        {id: 6, message: 'idiot'},
    ]*/
    const postsElements=props.state.posts.map(p => <Post message={p.message}/>)
    let addPost=()=>{
        debugger
        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator());
        // props.updateNewPostText('')
    }
    let onPostChange=()=>{
        debugger
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);

        // props.updateNewPostText(text);

    }
    let newPostElement=React.createRef();
    return (
        <div className={css.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.state.newPostText} />
                </div>
                <div>
                    <button onClick={addPost} >Add Post</button>
                </div>
            </div>
            <div className={css.posts}>
                {postsElements}
            </div>
            Main content
        </div>

    )
}
export default MyPosts