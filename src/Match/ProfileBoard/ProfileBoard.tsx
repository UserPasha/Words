import React from 'react';
import style from './ProfileBoard.module.css'
import {useSelector} from "react-redux";
import {RootState} from "../../Store/store";
import {Link} from "react-router-dom";
import {PATH} from "../../AppRoutes/AppRoutes";
export const ProfileBoard = () => {

    const currentPoints = useSelector<RootState, number>(state=> state.currentPoints.currentPoints)
    // const playerAvater
    // const playerName
    return (
        <div className={style.wrapper}>
            <div className={style.avatar}>ava</div>
            <div className={style.name}>name</div>
            {/*<div>*/}
            {/*motex coin*/}
            <div className={style.currentPoints}>{currentPoints}</div>
            {/*</div>*/}
            <Link to={PATH.PROFILE}>
            <button className={style.menu}>
                {/*<div className={style.stripe}></div>*/}
                <div className={style.stripe}></div>
                {/*<div className={style.stripe}></div>*/}
            </button>
            </Link>
        </div>
    );
};

