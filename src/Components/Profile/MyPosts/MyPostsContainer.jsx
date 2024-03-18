import React from "react";
import css from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/store";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state=props.store.getState()
    // const postsElements=props.state.posts.map(p => <Post message={p.message}/>)
    let addPost=()=>{
        // let text = newPostElement.current.value;
        props.store.dispatch(addPostActionCreator());

    }

    let onPostChange=(text)=>{
        //let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }
    let newPostElement=React.createRef();

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={state.profilePage.posts}
                 updateNewPostText={onPostChange}
                 newPostText={state.profilePage.newPostText}/>

    )
}
debugger
export default MyPostsContainer