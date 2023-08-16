import React, {ChangeEvent, useState} from 'react';
import style from './Profile.module.css'
import {BackArrow} from "../Common/Components/BackArrow/BackArrow";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../Store/store";
import editIcon from '../assets/images/match/edit.svg'
import okIcon from '../assets/images/match/ok.svg'
import cancelIcon from '../assets/images/match/cancel.svg'
import settingsIcon from '../assets/images/match/settings.svg'
import {saveNewName} from "../Store/PlayerNameReducer";
import {ImagesData} from "./images.data";
import {saveNewAvatar} from "../Store/PlayerAvatarReducer";
import {ImageComponent} from "./ImageComponenet";
import {Accordion} from "../Match/BonusMachine/BonusMachine";
import shopIcon from '../assets/images/match/shop.svg'
import multiplyBonusBG from '../assets/images/match/bg/multiplyBonusBG.svg'
import profileBonusBG from '../assets/images/match/bg/ProfileCoinsBG.svg'
import timeBonusBG from '../assets/images/match/bg/timeBonusBG.svg'
import {Link} from "react-router-dom";
import {PATH} from "../AppRoutes/AppRoutes";
import {useBonus} from "../hooks/useBonus";



export const Profile = () => {
    const dispatch = useDispatch<AppDispatch>();
    const currentPoints = useSelector<RootState, number>(state => state.profile.currentPoints)


    const colorScheme = useSelector<RootState, string>(state => state.colorScheme.scheme)




    const {secondsBonus, multiplyBonus} = useBonus()



    return (
        <div className={`${style.wrapper} ${style[colorScheme]}`}>
            <header className={`${style.header} ${style[colorScheme]}`}>

                <div className={style.pointsContainer} style={{backgroundImage: `url(${profileBonusBG})`}}>
                    {currentPoints}
                </div>
                <BackArrow path={'../../match'}/>

                <Link to={PATH.SETTINGS}>
                    <div className={style.shop}>
                        <img src={settingsIcon} alt={'settings'}/>
                    </div>
                </Link>

                <Link to={PATH.SHOP}>
                    <div className={style.shop}>
                        <img src={shopIcon} alt={'shop'}/>
                    </div>
                </Link>


            </header>


            <div className={style.bonuses}>
                <div className={style.bonusItem} style={{backgroundImage: `url(${timeBonusBG})`}}>
                    Бонус времени: {secondsBonus} секунд
                </div>
                <div className={style.bonusItem}  style={{backgroundImage: `url(${multiplyBonusBG})`}}>
                    Бонус множителя очков: Х {multiplyBonus.toFixed(2)}
                </div>
            </div>
            <Accordion/>
        </div>
    );
};

