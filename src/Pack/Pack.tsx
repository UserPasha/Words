import React, {FC, useEffect, useState} from 'react';
import style from './Pack.module.css'
import okIcon from "../assets/images/match/ok.svg";
import cancelIcon from "../assets/images/match/cancel.svg";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../Store/store";
import {PointsAfterShop} from "../Store/profileReducer";
import {useNavigate} from 'react-router-dom';
import {PATH} from "../AppRoutes/AppRoutes";
import {saveCurrentReward} from "../Store/RewardsReducer";
import {addToken} from "../Store/bonusReducer";


interface IPack {
    lowPercent: number
    highPercent: number
    cover: string
    price: number
    title: string
    bestLootInPercent: number
    goodLootInPercent: number
    badLootInPercent: number
}


export const Pack: FC<IPack> = ({
                                    lowPercent,
                                    highPercent,
                                    cover,
                                    price,
                                    title,
                                    bestLootInPercent,
                                    goodLootInPercent,
                                    badLootInPercent
                                }) => {


    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isConfirmed, setConfirmed] = useState<boolean>(false)

    const [isEnoughBalance, setIsEnoughBalance] = useState<boolean>(false)

    const currentPoints = useSelector<RootState, number>(state => state.profile.currentPoints)


    const checkBalance = () => {
        setIsEnoughBalance(currentPoints < price);
    };
    useEffect(() => {
        if (currentPoints < price) {
            setIsEnoughBalance(true)
        }
    }, [isEnoughBalance])

    const handleOpenPack = () => {
        setConfirmed(true)
        GeneratePackDrop()
    };

    const openPack = (price: number) => {
        checkBalance();
        if (isEnoughBalance) {
            return;
        }

        setConfirmed(false)
        dispatch(PointsAfterShop(price))
        dispatch(saveCurrentReward(categoryLoot, brandLoot, cover))
        setIsOpen(true);
        navigate(PATH.PACKOPENER)
    }
    const cancelPack = () => {
        setConfirmed(false)
    }
    const rewardsData = [

        {
            title: "Аккумулятор",
            brands: ['AutoPart', 'Exide', 'Bosch']
        },
        {
            title: "Масло",
            brands: ['Rosneft', 'Total', 'Kroon Oil']
        },
        {
            title: "Фильтр",
            brands: ['Meat & Doria', 'Filtron', 'Mahle']
        },
        {
            title: "Диски",
            brands: ['LYNX', 'Metelli', 'Brembo']
        },
        {
            title: "Прокладки",
            brands: ['Glaser', 'Victor Reinz', 'Elring']
        },
    ]
    const [categoryLoot, setCategoryLoot] = useState<string>("")
    const [brandLoot, setBrandLoot] = useState<string>("")


    const GeneratePackDrop = () => {
        const randomNum = Math.random();
        const categoryRanges = [
            [0, 0.2],
            [0.2, 0.4],
            [0.4, 0.6],
            [0.6, 0.8],
            [0.8, 1],
        ];
        for (let i = 0; i < categoryRanges.length; i++) {
            const [rangeStart, rangeEnd] = categoryRanges[i];
            if (randomNum >= rangeStart && randomNum < rangeEnd) {
                const secondRandomNum = Math.random();
                const selectedCategory = rewardsData[i];
                const selectedBrandIndex =
                    secondRandomNum < lowPercent
                        ? 0
                        : secondRandomNum < highPercent
                            ? 1
                            : 2;
                setCategoryLoot(selectedCategory.title);
                setBrandLoot(selectedCategory.brands[selectedBrandIndex]);
                break;
            }
        }
    };


    return (
        <div className={style.wrapper}>

            <div className={isOpen ? `${style.pack} ${style.open}` : `${''}`} onClick={() => setIsOpen(false)}>

            </div>
            {isOpen && <div className={style.glowEffect}>
                {categoryLoot}
                {brandLoot}
            </div>}
            {isConfirmed && <div className={style.confirmModal}>
                <div className={style.modalWindow}>
                    <div className={style.packTitle}>
                        {title}
                    </div>
                    <div className={style.packDescription}>
                        <p>Проценты выпадения бонусов:</p>
                        <p>Обычный: {badLootInPercent} %</p>
                        <p>Хороший: {goodLootInPercent} %</p>
                        <p>Отличный: {bestLootInPercent} %</p>
                    </div>
                    <div className={style.message}>
                        Вы хотите купить этот набор за <span>{price}</span> монет?
                    </div>
                    <div className={style.buttons}>
                        <img src={okIcon} alt={'ok'}
                             onClick={() => openPack(price)}/>
                        <img src={cancelIcon} alt={'cancel'}
                             onClick={cancelPack}/>
                    </div>

                </div>
                {isEnoughBalance && <div className={style.isNotEnoughCoins}>
                    У вас недостаточно монет
                </div>}


            </div>}
            {!isOpen && <button className={style.openPackButton}
                                onClick={handleOpenPack}
                                style={{backgroundImage: `url(${cover})`}}>

            </button>
            }

        </div>
    );
};

