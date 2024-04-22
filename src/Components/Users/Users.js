import react from "react"
import styles from "./Users.module.css";
import React from "react";
import axios from "axios";

class Users extends  React.Component {
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
        return <div>
            <div>
                {pages.map(p=>{
                    return <span className={this.props.currentPage===p&&styles.selectedPage}
                                 onClick={(e)=>{this.onPageChanged(p)}}>{p}</span>})
                }
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
        <span>
              <div>
                  <img src={u.photoUrl} className={styles.userPhoto}/>
              </div>
        <div>
            {u.followed
                ?<button onClick={ ()=>{
                    this.props.unfollow(u.id)
                }}>Unfollow</button>
                :<button onClick={()=>{
                    this.props.follow(u.id)
                }}>Follow</button>

            }

        </div>
        </span>
                    <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
        </span>
                    <span>
            <div>{"u.location.city"}</div>
            <div>{"u.location.country"}</div>
        </span>
                </div>)
            }
        </div>

    }
}
export default Users