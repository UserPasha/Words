import React from 'react';
import style from './Profile.module.css'
import {BackArrow} from "../Common/Components/BackArrow/BackArrow";
import settingsIcon from '../assets/images/match/settings.svg'

export const Profile = () => {
    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <BackArrow path={'../../match'}/>
                <div className={style.pointsContainer}></div>
                <button className={style.settings}>
                    <img src={settingsIcon} alt={'settings'}/>
                </button>
            </header>
            <div className={style.infoContainer}>
                <div className={style.avatarContainer}>

                </div>
                <div className={style.nameContainer}>

                </div>
            </div>
            <div className={style.bonusWrapper}>

            </div>
        </div>
    );
};

