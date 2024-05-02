import React from "react";
import css from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/store";

const MyPosts = (props) => {
    debugger
    const postsElements=props.posts.map(p => <Post message={p.message}/>)

    console.log(postsElements)
    let onAddPost=()=>{
        props.addPost()
        // let text = newPostElement.current.value;
        // props.dispatch(addPostActionCreator());

    }
    let onPostChange=()=>{

        let text = newPostElement.current.value;
        props.updateNewPostText(text)
        // let action = updateNewPostTextActionCreator(text);
        // props.dispatch(action);
    }
    let newPostElement=React.createRef();
    return (
        <div className={css.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost} >Add Post</button>
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