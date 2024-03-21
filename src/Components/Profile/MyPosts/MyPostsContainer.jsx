import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/store";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    // let state = props.store.getState()
    // const postsElements=props.state.posts.map(p => <Post message={p.message}/>)

    let newPostElement = React.createRef();

    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState()
                let addPost = () => {
                    // let text = newPostElement.current.value;
                    store.dispatch(addPostActionCreator());
                }
                let onPostChange = (text) => {
                    //let text = newPostElement.current.value;
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }
                return <MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}тз
                     posts={store.getState().profilePage.posts}
                     updateNewPostText={onPostChange}
                     newPostText={store.getState().profilePage.newPostText}/>
            }}
        </StoreContext.Consumer>


    )
}
debugger
export default MyPostsContainer