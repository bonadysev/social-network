import React from "react";
import styles from "./users.module.css"
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
            props.setUsers(response.data.items)
            // props.setUsers([
            //         {
            //             id: 1,
            //             photoUrl: "data:image/jpeg;base64,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",
            //             followed: true,
            //             fullName: 'Zoe Saldana',
            //             status: "gold",
            //             location: {city: "Minsk", country: "BY"}
            //         },
            //         {
            //             id: 2,
            //             photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2GIkashCkyFYCE17tyoLEG0VfWCgWDbMPbN9IUtbZIN-NoW0PBaAr&usqp=CAE&s",
            //             followed: false,
            //             fullName: 'Sam Worthington',
            //             status: "gold",
            //             location: {city: "Minsk", country: "BY"}
            //         },
            //         {
            //             id: 3,
            //             photoUrl: "data:image/jpeg;base64,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",
            //             followed: true,
            //             fullName: 'Sigourney Weaver',
            //             status: "gold",
            //             location: {city: "Brest", country: "BY"}
            //         }
            //     ]
        });
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
             <span>
                 <div>
                     <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                 </div>
                 <div>
                     {u.followed
                         ? <button onClick={ () => {props.unfollow(u.id) } }>UnFollow</button>
                         : <button onClick={ () => {props.follow(u.id) } }>Follow</button>}

                 </div>
             </span>
                <span>
                 <span>
                     <div>{u.name}</div>
                     <div>{u.status}</div>
                 </span>
                 <span>
                     <div>{"u.location.country"}</div>
                     <div>{"u.location.city"}</div>
                 </span>
             </span>
            </div>)
        }
    </div>
}

export default Users;
