import React from 'react';
import {Link} from "react-router-dom";
import style from './Home.module.css'

export const Home = () => {
    return (
        <div className={style.wrapper}>
            HOME
            <div className={style.menuItem}>
                <Link to={"/cards"}>MY CARDS</Link>
            </div>
            <div  className={style.menuItem}>
                <Link to={"/word"}>Words</Link>
            </div>

        </div>
    );
};

