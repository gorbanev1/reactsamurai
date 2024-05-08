import React from 'react'
import cssheader from './Header.module.css'
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return <header className={cssheader.header}>
        <img src='https://sun9-64.userapi.com/impg/IRFYJFgpFK8yx8A26iDUKsPcFHnBZRBJdSEang/Q9xQnu4uGCk.jpg?size=1539x1539&quality=95&sign=43741dcb064b6bc41f587d581fafeef2&type=album' />
    <div className={cssheader.loginBlock}>
        {props.isAuth?props.login
            : <NavLink to={'/login'}>Login</NavLink>}
    </div>
    </header>
}
export default Header