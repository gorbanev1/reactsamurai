import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
/* alert(image); */
const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer
            />
            Main content
        </div>

    )
}
export default Profile