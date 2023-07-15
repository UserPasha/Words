import React, {FC, useState} from 'react';
import style from './Pack.module.css'
import okIcon from "../assets/images/match/ok.svg";
import cancelIcon from "../assets/images/match/cancel.svg";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../Store/store";
import {PointsAfterShop} from "../Store/profileReducer";
import { useNavigate } from 'react-router-dom';
import {PATH} from "../AppRoutes/AppRoutes";
import {saveCurrentReward} from "../Store/RewardsReducer";
interface IPack {
    lowPercent: number
    highPercent: number
}
export const Pack:FC<IPack> = ({lowPercent, highPercent}) => {

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isConfirmed, setConfirmed] = useState<boolean>(false)

    const handleOpenPack = () => {
        setConfirmed(true)
        GeneratePackDrop()
    };

    const openPack = () => {
        setConfirmed(false)
      //  dispatch(PointsAfterShop(1))
        dispatch(saveCurrentReward(categoryLoot, brandLoot))
        setIsOpen(true);
        navigate(PATH.PACKOPENER)
    }
    const cancelPack = () =>{
        setConfirmed(false)
    }
    const rewardsData = [

        {
            title: "Аккумулятор",
            brands: ['AutoPart', 'Exide', 'Bosch']
        },
        {
            title: "Масло",
            brands: ['Rosneft', 'Total', 'KroonOil']
        },
        {
            title: "Фильтр",
            brands: ['MeatDoria', 'Filtron', 'Mahle']
        },
        {
            title: "Диски",
            brands: ['LYNX', 'Metelli', 'Brembo']
        },
        {
            title: "Прокладки",
            brands: ['Glaser', 'VictorReinz', 'Elring']
        },
    ]
    const [categoryLoot, setCategoryLoot] = useState<string>("")
    const [brandLoot, setBrandLoot] = useState<string>("")

    // const GeneratePackDrop = () => {
    //     const randomNum = Math.random();
    //     const categoryRanges = [
    //         [0, 0.2],
    //         [0.2, 0.4],
    //         [0.4, 0.6],
    //         [0.6, 0.8],
    //         [0.8, 1],
    //     ];
    //     for (let i = 0; i < categoryRanges.length; i++) {
    //         const [rangeStart, rangeEnd] = categoryRanges[i];
    //         if (randomNum >= rangeStart && randomNum < rangeEnd) {
    //             const secondRandomNum = Math.random();
    //             const selectedCategory = rewardsData[i];
    //             let selectedBrandIndex;
    //             if (secondRandomNum < lowPercent) {
    //                 selectedBrandIndex = 0;
    //             } else if (secondRandomNum < highPercent) {
    //                 selectedBrandIndex = 1;
    //             } else if (secondRandomNum < newPercent) {
    //                 selectedBrandIndex = 2;
    //             } else {
    //                 selectedBrandIndex = 3;
    //             }
    //             setCategoryLoot(selectedCategory.title);
    //             setBrandLoot(selectedCategory.brands[selectedBrandIndex]);
    //             break;
    //         }
    //     }
    // };
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
            {/*{isOpen && <div className={style.shimmerEffect}>*/}

            {/*</div>}*/}
            {isOpen && <div className={style.glowEffect}>
                {categoryLoot}
                {brandLoot}
            </div>}
            {isConfirmed && <div className={style.confirmModal}>
                <div className={style.modalWindow}>
                    <div className={style.message}>
                        Вы хотите купить этот набор за 1 монет?
                    </div>
                    <div className={style.buttons}>
                        <img src={okIcon} alt={'ok'}
                             onClick={openPack}/>
                        <img src={cancelIcon} alt={'cancel'}
                             onClick={cancelPack}/>
                    </div>
                </div>




            </div>}
            {!isOpen && <button className={style.openPackButton} onClick={handleOpenPack}>
                Open Pack
            </button>
            }

        </div>
    );
};

