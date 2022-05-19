import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='http://dgdesign.ru/uploads/posts/2016-09/1475063436_kartinka-dlya-shapki-sayta-tematiki-internet-jf6.jpg'
                    style={{'width': '100%'}}
                    alt={'header'}
                />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
