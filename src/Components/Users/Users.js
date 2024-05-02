import react from "react"
import styles from "./Users.module.css";
import React from "react";
import axios from "axios";

let Users = (props)=> {
        let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize)
        let pages=[]

        for (let i=0; i<=pagesCount; i++){
            pages.push(i)
        }
        debugger
        return <div>
            <div>
                {pages.map(p=>{
                    return <span className={props.currentPage===p&&styles.selectedPage}
                                 onClick={(e)=>{props.onPageChanged(p)}}>{p}</span>})
                }
            </div>
            {
                props.users.map(u => <div key={u.id}>
        <span>
              <div>
                  <img src={u.photoUrl} className={styles.userPhoto}/>
              </div>
        <div>
            {u.followed
                ?<button onClick={ ()=>{
                    props.unfollow(u.id)
                }}>Unfollow</button>
                :<button onClick={()=>{
                    props.follow(u.id)
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
export default Users