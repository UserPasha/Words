import React from 'react';
import style from './GameBoard.module.css'
import {Link} from "react-router-dom";
import {PATH} from "../AppRoutes/AppRoutes";

export const GameBoard = () => {

    return (
        <div className={style.wrapper}>
            <Link to={PATH.ONE}>
                <div className={style.levelContainer}>1</div>
            </Link>
            <Link to={PATH.TWO}>
                <div className={style.levelContainer}>2</div>
            </Link>
            <Link to={PATH.THREE}>
                <div className={style.levelContainer}>3</div>
            </Link>
            <Link to={PATH.FOUR}>
                <div className={style.levelContainer}>4</div>
            </Link>
        </div>
    );
};

