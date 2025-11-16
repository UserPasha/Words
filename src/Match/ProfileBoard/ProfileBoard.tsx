import React, {useState} from 'react';
import style from './ProfileBoard.module.css'
import {useSelector} from "react-redux";
import {RootState} from "../../Store/store";
import {Link} from "react-router-dom";
import {PATH} from "../../AppRoutes/Path";
import profileBonusBG from '../../assets/images/match/bg/ProfileCoinsBG.svg'
export const ProfileBoard = () => {

    const currentPoints = useSelector<RootState, number>(state=> state.profile.currentPoints)
    const [isClicked, setIsClicked] = useState(true)
    const playerAvatar = useSelector<RootState, string>(state => state.playerAvatar.avatar)
     const playerName = useSelector<RootState, string>(state=>state.playerName.name)
    return (
        <div className={style.wrapper}>
            <div className={style.avatar}>
                <img src={playerAvatar} alt={'avatar'}/>
            </div>
            <div className={style.name}>{playerName}</div>
            {/*<div>*/}
            {/*motex coin*/}
            <div className={style.currentPoints} style={{backgroundImage: `url(${profileBonusBG})`}} >{currentPoints}</div>
            {/*</div>*/}
            <Link to={PATH.PROFILE}>
            <button className={isClicked? `${style.menu}`: `${style.menu} ${style.clicked}`} onClick={()=>setIsClicked(!isClicked)}>
                {/*<div className={style.stripe}></div>*/}
                <div className={style.stripe}></div>
                {/*<div className={style.stripe}></div>*/}
            </button>
            </Link>
        </div>
    );
};

