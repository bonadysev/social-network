import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://www.zastavki.com/pictures/1366x768/2014/_All_that_is_necessary_for_life_088569_24.jpg'
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
