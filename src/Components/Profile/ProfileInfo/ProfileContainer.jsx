import ProfileInfo from "./ProfileInfo";
import Profile from "../Profile";
import React from 'react'
import axios from "axios";
import {connect} from "react-redux";
import {getStatus, getUserProfile, setUserProfile, updateStatus} from "../../../redux/profile-reducer";
import {Navigate, useParams} from 'react-router-dom';
import {usersAPI} from "../../../api/api";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

export function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match={match}/>
    }
}

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 31066
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)

    }
    render(){

    return (
           <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
           )
    }
}
let mapStateToProps = (state)=>({
    profile: state.profilePage.profile,
    status: state.profilePage.status

})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
   //withAuthRedirect
)(ProfileContainer)





