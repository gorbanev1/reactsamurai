import React from "react";
import css from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, } from "../../../redux/store";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    const postsElements=props.posts.map(p => <Post message={p.message}/>)

    console.log(postsElements)
    let onAddPost=(values)=>{
        props.addPost(values.newPostText)
        // let text = newPostElement.current.value;
        // props.dispatch(addPostActionCreator());

    }

    let newPostElement=React.createRef();
    return (
        <div className={css.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={css.posts}>
                {postsElements}
            </div>
            Main content
        </div>

    )
}
let AddNewPostForm=(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component="textarea"/>

            </div>

        </form>
    )
}
AddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)


export default MyPosts