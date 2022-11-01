import React from 'react';
import style from './BottomMenu.module.css'
import {Link} from "react-router-dom";
import homeIcon from "../Common/Assets/images/home.svg";
import plusIcon from "../Common/Assets/images/plus.svg";
import learnIcon from "../Common/Assets/images/Learn.svg";

export const BottomMenu = () => {
    return (
        <div className={style.bottomMenu}>
            <div className={style.bottomMenuItem}>
                <Link to={'/'}><img src={homeIcon} alt='Home'/></Link>
            </div>
            <div className={style.bottomMenuItem}>
                <Link to={"/cards"}><img src={plusIcon} alt='Add cards'/></Link>
            </div>
            <div className={style.bottomMenuItem}>
                <Link to={"/word"}><img src={learnIcon} alt='Learn words'/></Link>
            </div>
        </div>
    );
};

