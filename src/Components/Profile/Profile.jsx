import React from "react";
import css from './Profile.module.css'
/* import image from './img/hell.jpg' */
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
/* alert(image); */
const Profile = (props) => {
    debugger
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
            />
            Main content
        </div>

    )
}
export default Profile