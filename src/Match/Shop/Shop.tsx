import React from 'react';
import style from './Shop.module.css'
import {BackArrow} from "../../Common/Components/BackArrow/BackArrow";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../Store/store";
import {Pack} from "../../Pack/Pack";
import BronzeCoverPack from '../../assets/images/match/bg/BronzePackCover.jpg'
import GoldPCoverPack from '../../assets/images/match/bg/GoldPackCover.jpg'
import PlatinumCoverPack from '../../assets/images/match/bg/PlatinumPackCover.jpg'

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
               <Pack lowPercent={0.6}
                     highPercent={0.9}
                     cover={BronzeCoverPack}
                     price={5}
                     title={'Бронзовый набор'}
                     bestLootInPercent={10}
                     goodLootInPercent={30}
                     badLootInPercent={60}
               />
               <Pack lowPercent={0.5}
                     highPercent={0.85}
                     cover={GoldPCoverPack}
                     price={80}
                     title={'Золотой набор'}
                     bestLootInPercent={15}
                     goodLootInPercent={35}
                     badLootInPercent={50}
               />
               <Pack lowPercent={0.4}
                     highPercent={0.8}
                     cover={PlatinumCoverPack}
                     price={120}
                     title={'Платиновый набор'}
                     bestLootInPercent={20}
                     goodLootInPercent={40}
                     badLootInPercent={40}
               />


           </div>

        </div>
    );
};

