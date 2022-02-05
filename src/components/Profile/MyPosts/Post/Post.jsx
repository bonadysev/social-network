import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src = "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4adf61aa-3cb7-4381-9245-523971e5b4c8/600x900" alt="Avatar"/>
            post 1
            <div>
                <span>like</span>
            </div>


        </div>
    )
}

export default Post;
