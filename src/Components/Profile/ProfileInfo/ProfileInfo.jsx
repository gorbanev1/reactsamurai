import React from "react";
import MyPosts from "../MyPosts/MyPosts";
import css from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    debugger
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img width="600px"
                     src="https://fastly.syg.ma/imgproxy/C6pE6uquMRw5VYneV9rZ7jvPYS9LJZcNChIf0W1aEyk/aHR0cHM6Ly9mYXN0/bHkuc3lnLm1hL2F0/dGFjaG1lbnRzLzU5/ODk5OWFkNzcwY2I4/NGI3ZjJjNGM2YWNl/Mjg4ZWU0NmQ5YWQ3/MDcvc3RvcmUvMzYx/NjdkMWNhNWUyMDk3/YTg0ZWI4OGM3OTM4/NDA1Zjc1YzUyMjNm/MTUxYjgzODVmZWI3/MjE0ZTcxZjI2L2Zp/bGUuanBlZw"/>
            </div>
            <div className={css.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                Ava+ description
            </div>
        </div>
    )
}
export default ProfileInfo