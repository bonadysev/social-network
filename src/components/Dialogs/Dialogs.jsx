import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Ben</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Fred</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Cris</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Bill</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Angelina</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Bred</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>How is you</div>
                <div className={s.dialog}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;