import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {

    const getNavLinkClass = ({isActive}) => {
        return isActive ? s.activeLink : s.item
    }

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={getNavLinkClass}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={getNavLinkClass}>Messages</NavLink>
            </div><div className={s.item}>
                <NavLink to="/users" className={getNavLinkClass}>Users</NavLink>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;