import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContextDelete from "../../../StoreContext-delete";
import {connect} from "react-redux"


const MyPostsContainer1 = () => {
    // let state = props.store.getState()
    // const postsElements=props.state.posts.map(p => <Post message={p.message}/>)

    let newPostElement = React.createRef();

    return (
        <StoreContextDelete.Consumer>{
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
                                addPost={addPost}
                                posts={store.getState().profilePage.posts}
                                updateNewPostText={onPostChange}
                                newPostText={store.getState().profilePage.newPostText}/>
            }}
        </StoreContextDelete.Consumer>


    )
}
const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }

}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer