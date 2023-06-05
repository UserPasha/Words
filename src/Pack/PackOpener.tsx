import React, {useState} from 'react';
import style from './PackOpener.module.css'
import cover from '../assets/images/match/logo.png'
import image from '../assets/images/match/ok.svg'
import {useDispatch} from "react-redux";
import {AppDispatch} from "../Store/store";
import {showProductPicture} from "../Store/machineReducer";
import {PATH} from "../AppRoutes/AppRoutes";
import {useNavigate} from "react-router-dom";


export const PackOpener = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>()
    const arrayCategory = ['Аккумултор', 'Масло', 'Фильтр', 'Диски', 'Прокладки']
const loot = [
    ['Aa', 'Ab', 'Ac'],
    ['Ma', 'Mb', 'Mc'],
    ['Fa', 'Fb', 'Fc'],
    ['Da', 'Db', 'Dc'],
    ['Pa', 'Pb', 'Pc'],
]
    const randomNumber = (number: number) => {
        return Math.floor(Math.random() * number)
    }
    const secondRandomNumber = (number: number) => {
        return Math.floor(Math.random() * number)
    }
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [category, setCategory] = useState<string>('')
    const [product, setProduct]= useState<string>('')
    const [isClicked, setIsClicked] = useState<boolean>(false)

    const handleOpenPack = () => {
        setIsClicked(true)
        const firstNumber = randomNumber(arrayCategory.length)
        const secondNumber = secondRandomNumber(loot[0].length)
        setTimeout(()=>{
            setCategory(arrayCategory[firstNumber])
        },1000)
        setTimeout(()=>{
            setProduct(loot[firstNumber][secondNumber])
        },2000)
        setIsOpen(true)

    };

    const savePrizeToRedux = () => {
//dispatch(showProductPicture(category, product))

         navigate(PATH.SHOP)
    }
    return (
        <div className={style.wrapper}>
            <div className={isOpen ? `${style.container}` : `${style.container} ${style.opened}`}>
                <button className={style.pack} onClick={handleOpenPack} disabled={isClicked}>
                    <img src={isOpen  ? image : cover} alt="Card" />
                    <div>{category}</div>
                    <div>{product}</div>
                    frontSide-backSide animation close icon, save to reducer
                    math random category 20-20-20-20-20
                    math random item


                </button>

            </div>
            {isClicked && <button className={style.saveButton} onClick={savePrizeToRedux}>Сохранить</button>}
        </div>
    );
};

