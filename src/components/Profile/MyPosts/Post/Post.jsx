import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src = "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/8e594f8b-10bb-479b-a972-07fa7c1d3fc3/1920x" alt="Avatar"/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>


        </div>
    )
}

export default Post;
