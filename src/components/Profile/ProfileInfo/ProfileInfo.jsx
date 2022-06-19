import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

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
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
