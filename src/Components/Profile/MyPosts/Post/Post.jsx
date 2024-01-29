import React from "react";
import css from './Post.module.css'
const Post = (props) => {
  debugger
  return (
    <div className={css.item}>
      <img src="https://drawr.ru/media/picture_thumbnails/c2/d6f56fbcbb48c6add0d00abad92bbe.png" />
      {props.message}Post1
      <span> like </span>
      <span>dislike</span>
    </div>

  )
}
export default Post