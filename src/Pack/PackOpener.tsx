import React, {useState} from 'react';
import style from './PackOpener.module.css'
import cover from '../assets/images/match/logo.png'
import image from '../assets/images/match/bg/batteryRemBG.png'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../Store/store";
import {showProductPicture} from "../Store/machineReducer";
import {PATH} from "../AppRoutes/AppRoutes";
import {useNavigate} from "react-router-dom";
import {machineData} from "../Match/BonusMachine/bomusMachine.data";


export const PackOpener = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>()
    const categoryReward = useSelector<RootState, string>(state => state.rewards.category)
    const brandReward = useSelector<RootState, string>(state => state.rewards.brand)

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [category, setCategory] = useState<string>('')
    const [categoryBG, setCategoryBG] = useState<string>('')
    const [brandBG, setBrandBG] = useState<string>('')
    const [product, setProduct]= useState<string>('')
    const [isClicked, setIsClicked] = useState<boolean>(false)

    const handleOpenPack = () => {
        setIsClicked(true)
        setTimeout(()=>{
            setCategoryBG(categoryBGImage!)
        },500)
        setTimeout(()=>{
            setCategory(categoryReward)
        },1000)
        setTimeout(()=>{
            setBrandBG(brandPictureURL!)
        },2500)
        setTimeout(()=>{
            setProduct(brandReward)
        },3000)
        setIsOpen(true)

    };

    function getCategoryImageByCategoryName(categoryName: string): string | undefined {
        for (const category of machineData) {
            {
                if (category.name === categoryName) {
                    return category.bgImage;
                }
            }
        }
        return undefined;
    }

    function getBrandImageByNameByBrandName(brandNane: string): string | undefined {
        for (const category of machineData) {
            const brand = category.brands.find((brand) => brand.name === brandNane);
            if (brand) {
                return brand.pictureUrl;
            }
        }
        return undefined;
    }

    const categoryBGImage = getCategoryImageByCategoryName(categoryReward)
    const brandPictureURL = getBrandImageByNameByBrandName(brandReward)
    const savePrizeToRedux = () => {
        dispatch(showProductPicture(categoryReward, brandReward))

        navigate(PATH.SHOP)
    }
    return (
        <div className={style.wrapper}>
            {isOpen
                ?
                <>
                    <div className={isOpen ? `${style.container}` : `${style.container} ${style.opened}`}>
                        <button className={style.pack} onClick={handleOpenPack} disabled={isClicked}>


                            <div style={{backgroundImage: `url(${categoryBG})`}} className={style.backgroundContainer}>
                                <span className={style.categoryTitle}>{category}</span>
                            </div>
                            <div className={style.darkContainer}>
                                <div className={style.brandContainer}>
                                    <span className={style.brandTitle}>{product}</span>
                                    <img src={brandBG}/>
                                </div>

                            </div>




                        </button>

                    </div>
                    {isClicked && <button className={style.saveButton} onClick={savePrizeToRedux}>Сохранить</button>}
                </>
                :
                <>
                    <div className={isOpen ? `${style.container}` : `${style.container} ${style.opened}`}>
                        <button className={style.pack} onClick={handleOpenPack} disabled={isClicked}>


                        </button>

                    </div>


                </>
            }

        </div>

    );
};

// <div className={style.wrapper}>
//     <div className={isOpen ? `${style.container}` : `${style.container} ${style.opened}`}>
//         <button className={style.pack} onClick={handleOpenPack} disabled={isClicked}>
//
//
//             <div style={{backgroundImage: `url(${categoryBGImage})`}} className={style.backgroundContainer}>
//                 <span className={style.categoryTitle}>{categoryReward}</span>
//             </div>
//             <div className={style.darkContainer}>
//                 <div className={style.brandContainer}>
//                     <span className={style.brandTitle}>{brandReward}</span>
//                     <img src={brandPictureURL}/>
//                 </div>
//
//             </div>
//
//
//
//
//         </button>
//
//     </div>
//     {isClicked && <button className={style.saveButton} onClick={savePrizeToRedux}>Сохранить</button>}
// </div>