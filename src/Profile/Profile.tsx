import React from 'react';
import style from './Profile.module.css'
import {BackArrow} from "../Common/Components/BackArrow/BackArrow";
import settingsIcon from '../assets/images/match/settings.svg'
import {useSelector} from "react-redux";
import {RootState} from "../Store/store";

export const Profile = () => {
    const currentPoints = useSelector<RootState, number>(state=> state.currentPoints.currentPoints)
    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <BackArrow path={'../../match'}/>
                <div className={style.pointsContainer}>
                    {currentPoints}
                </div>
                <button className={style.settings}>
                    <img src={settingsIcon} alt={'settings'}/>
                </button>
            </header>
            <div className={style.infoContainer}>
                <div className={style.avatarContainer}>
Avatar
                </div>
                <div className={style.nameContainer}>
Name
                </div>
            </div>
            <div className={style.bonusWrapper}>
Bonus Machine
            </div>
        </div>
    );
};

