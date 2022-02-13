import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props)=> {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Ben" id="1"/>
                <DialogItem name="Fred" id="2"/>
                <DialogItem name="Cris" id="3"/>
                <DialogItem name="Bill" id="4"/>
                <DialogItem name="Angelina" id="5"/>
                <DialogItem name="Bred" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How is you it"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
                <Message message="Yo"/>

            </div>
        </div>
    )
}

export default Dialogs;