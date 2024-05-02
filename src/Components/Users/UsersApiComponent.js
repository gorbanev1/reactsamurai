import react from "react"
import styles from "./Users.module.css";
import React from "react";
import axios from "axios";


class UsersApiComponent extends  React.Component {
    componentDidMount() {
            alert("new")
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response=>{
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)

            })
    }
    onPageChanged = (pageNumber)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response=>{
            this.props.setUsers(response.data.items)
            debugger;
        })

    }
    render(){
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize)
        let pages=[]
        for (let i=0; i<=pagesCount; i++){
            pages.push(i)
        }
        return <Users totalUserCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />

    }
}
export default UsersApiComponent