import React from 'react';
import style from './StartMenu.module.css'
import {Link} from "react-router-dom";
import {Score} from "./Score";

type gameLevelsType = {
    levelNumber: number
    path: string
}

const gameLevels: gameLevelsType[] = [
    {
        levelNumber: 0,
        path: ''
    },
    {
        levelNumber: 1,
        path: ''
    },
    {
        levelNumber: 2,
        path: ''
    },
    {
        levelNumber: 3,
        path: ''
    },
    {
        levelNumber: 4,
        path: '/categories'
    },
]
export const StartMenu = () => {
    return (
        <div className={style.wrapper}>
            {gameLevels.map(gl =>
                <div className={style.levelBoxWrapper}>
                <Link to={gl.path}>
                    <div className={style.levelBox}>{gl.levelNumber}</div>
                </Link>
                </div>
            )}
            <Score/>
            score and mark sucses track
        </div>
    );
};

