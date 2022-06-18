import React from 'react';
// import preloader from "../../../assets/images/preloader.svg";
import {ReactComponent as Prel} from '../../../assets/images/preloader.svg'

export const Preloader = (props) => {
    return (
        <div style={{position: 'fixed', top: '33%', left: '50%'}}>
            {/*<img src={preloader} />*/}
            <Prel />
        </div>
    );
};
