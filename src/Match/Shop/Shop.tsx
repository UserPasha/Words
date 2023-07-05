import React from 'react';
import style from './Shop.module.css'
import {BackArrow} from "../../Common/Components/BackArrow/BackArrow";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../Store/store";
import {Pack} from "../../Pack/Pack";

export const Shop = () => {
    const dispatch = useDispatch<AppDispatch>();
    const currentPoints = useSelector<RootState, number>(state => state.profile.currentPoints)
    return (
        <div className={style.wrapper}>
            <BackArrow path={'/profile'}/>
            <div className={style.pointsContainer}>
                {currentPoints}
            </div>
           <div className={style.packsContainer}>
               <Pack lowPercent={0.6} highPercent={0.9}/>
               <Pack lowPercent={0.5} highPercent={0.85}/>
               <Pack lowPercent={0.4} highPercent={0.8}/>


           </div>

            link to Pack (60 - 30 - 10)
            link to Pack (50 - 35 - 15)
            link to Pack (40 - 40 - 20)
        </div>
    );
};

