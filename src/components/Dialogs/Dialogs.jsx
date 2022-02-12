import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Ben
                </div>
                <div className={s.dialog}>
                    Fred
                </div>
                <div className={s.dialog}>
                    Cris
                </div>
                <div className={s.dialog}>
                    Bill
                </div>
                <div className={s.dialog}>
                    Angelina
                </div>
                <div className={s.dialog}>
                    Bred
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