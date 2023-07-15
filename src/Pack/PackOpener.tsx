import React, {useState} from 'react';
import style from './PackOpener.module.css'
import cover from '../assets/images/match/logo.png'
import image from '../assets/images/match/bg/batteryRemBG.png'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../Store/store";
import {showProductPicture} from "../Store/machineReducer";
import {PATH} from "../AppRoutes/AppRoutes";
import {useNavigate} from "react-router-dom";


export const PackOpener = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>()
    const categoryReward = useSelector<RootState, string>(state => state.rewards.category)
    const brandReward = useSelector<RootState, string>(state => state.rewards.brand)

    const [isOpen, setIsOpen] = useState<boolean>(false)
    // const [category, setCategory] = useState<string>('')
    // const [product, setProduct]= useState<string>('')
    const [isClicked, setIsClicked] = useState<boolean>(false)

    const handleOpenPack = () => {
        setIsClicked(true)

        // setTimeout(()=>{
        //     setCategory(arrayCategory[firstNumber])
        // },1000)
        // setTimeout(()=>{
        //     setProduct(loot[firstNumber][secondNumber])
        // },2000)
        setIsOpen(true)

    };

    const savePrizeToRedux = () => {
dispatch(showProductPicture(categoryReward, brandReward))

         navigate(PATH.SHOP)
    }
    return (
        <div className={style.wrapper}>
            <div className={isOpen ? `${style.container}` : `${style.container} ${style.opened}`}>
                <button className={style.pack} onClick={handleOpenPack} disabled={isClicked}>
                    {/*<div className={style.imageWrapper}>*/}
                    {/*    <img*/}
                    {/*        // className={style.image}*/}
                    {/*        src={isOpen  ? image : cover} alt="Card" />*/}
                    {/*</div>*/}

                    <div>{categoryReward}</div>
                    <div>{brandReward}</div>
                    frontSide-backSide animation close icon, save to reducer
                    math random category 20-20-20-20-20
                    math random item


                </button>

            </div>
            {isClicked && <button className={style.saveButton} onClick={savePrizeToRedux}>Сохранить</button>}
        </div>
    );
};

