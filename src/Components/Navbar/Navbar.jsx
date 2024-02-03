import React from "react";
import css from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={css.nav}>
        <div className={css.item}>

            <NavLink to="/profile" className = { navD => navD.isActive ? css.active : css.item }>Profile</NavLink>
        </div>
        <div className={css.item}>
            <NavLink to="/dialogs" className = { navD => navD.isActive ? css.active : css.item }> Messages</NavLink>
        </div>
        <div className={css.item}>
            <NavLink to="/news" className = { navD => navD.isActive ? css.active : css.item }> News</NavLink>
        </div>
        <div className={css.item}>
            <NavLink to='/music' className = { navD => navD.isActive ? css.active : css.item }> Music</NavLink>
        </div>
        <div className={css.item}>
            <NavLink to="/settings" className = { navD => navD.isActive ? css.active : css.item }> Settings</NavLink>
        </div>
    </nav>
}
export default Navbar