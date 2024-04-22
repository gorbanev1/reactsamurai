import React from "react";
import styles from './Users.module.css'
import  axios from "axios"
import userPhoto from '../../assets/images/user.png'

let Usersold = (props) => {
    function getUsers () {

    if (props.users.length===0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
            debugger;
            props.setUsers(response.data.items)
        })
/*
        props.setUsers([
        {id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg', followed: true, fullName: 'блядь ебучая', status: 'kal', location: {city:"Minsk", country: "Belarus"}},
        {id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',followed: false, fullName: 'блядь ебучая', status: 'kal', location: {city:"Moscow", country: "Belarus"}},
        {id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',followed: true, fullName: 'блядь ебучая', status: 'kal', location: {city:"Huevsk", country: "Belarus"}},
        {id: 4, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',followed: false, fullName: 'блядь ебучая', status: 'kal', location: {city:"Minsk", country: "Belarus"}},
        {id: 5, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg', followed: false, fullName: 'блядь ебучая', status: 'kal', location: {city:"Minsk", country: "Belarus"}},
    ])
* */

    }
    }

    return <div>
        <button onClick={getUsers}>Загрузить</button>
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
        export default Usersold