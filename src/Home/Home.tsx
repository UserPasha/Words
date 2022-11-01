import React from 'react';
import {Link} from "react-router-dom";
import style from './Home.module.css'
import homeIcon from './../Common/Assets/images/home.svg'
import plusIcon from './../Common/Assets/images/plus.svg'
import learnIcon from './../Common/Assets/images/Learn.svg'
import {BottomMenu} from "../BottomMenu/BottomMenu";

export const Home = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.mainMenu}>
                <div className={style.menuItem}>
                    <Link to={"/cards"}>МОИ СЛОВА</Link>
                </div>
                <div className={style.menuItem}>
                    <Link to={"/word"}>ПРОВЕРКА</Link>
                </div>
            </div>

           <BottomMenu/>

        </div>
    );
};

