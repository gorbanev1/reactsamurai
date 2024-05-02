import ProfileInfo from "./ProfileInfo";
import Profile from "../Profile";
import React from 'react'
import axios from "axios";
import {connect} from "react-redux";

class ProfileContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response=>{
                debugger
            this.props.setUserProfile(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.toggleIsFetching(false)
        })
    }

    render(){
    return (
           <Profile {...this.props}/>
           )
    }
}
let mapStateToProps = (state)=>({
    a: 13
})
export default connect(mapStateToProps,  ProfileContainer