import React from "react";
import css from './Profile.module.css'
/* import image from './img/hell.jpg' */
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
/* alert(image); */
const Profile = () => {
    debugger
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                // store={props.store}
                              // posts={props.profilePage.posts}
                              // newPostText={props.profilePage.newPostText}
                              // // state={props.state}
                     // dispatch={props.dispatch}
            />
            Main content
        </div>

    )
}
export default Profile