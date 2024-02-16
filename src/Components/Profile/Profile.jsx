import React from "react";
import css from './Profile.module.css'
/* import image from './img/hell.jpg' */
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
/* alert(image); */
const Profile = (props) => {
  return (
  
    <div>
<ProfileInfo />
      <MyPosts state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
      Main content
    </div>

  )
}
export default Profile