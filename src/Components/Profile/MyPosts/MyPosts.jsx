import React from "react";
import css from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/store";

const MyPosts = (props) => {

    const postsElements=props.state.posts.map(p => <Post message={p.message}/>)
    let addPost=()=>{

        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator());

    }
    let onPostChange=()=>{

        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
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
debugger
export default MyPosts