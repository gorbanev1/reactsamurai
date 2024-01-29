import React from "react";
import css from './MyPosts.module.css'
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div>My Posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>

      <div className={css.posts}>
        <Post message="sosi hui"/>
        <Post message="анус лизать"/>
        <Post />
        <Post />

      </div>
      Main content
    </div>

  )
}
export default MyPosts