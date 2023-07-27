import React, {useState} from 'react';
import style from './BonusMachine.module.css';
//import {machineData} from "./bomusMachine.data";
import {ImageComponent} from "../../Profile/ImageComponenet";
import okIcon from "../../assets/images/match/ok.svg";
import cancelIcon from "../../assets/images/match/cancel.svg";
import {useSelector} from "react-redux";
import {RootState} from "../../Store/store";
import {CategoryType} from "./bomusMachine.data";
import {Category} from "./Category";


export const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [selectedImage, setSelectedImage] = useState<string>('')

    const saveTemporaryBrand = (image: string) => {
        // setNewAvatar(image)
        setSelectedImage(image);
    };
const machineData = useSelector<RootState, CategoryType[]>(state=>state.machine)
    const activeBrands = machineData.map(category=> category.active)

    //console.log(machineData)
    const handleClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (

        <div className={style.bonusWrapper}>


            {/*{machineData.map((item, index) => (*/}
            {/*    <div key={index} className={style.bonusItem}>*/}
            {/*        <div className={style.bonusItemTitle} onClick={() => handleClick(index)}>*/}
            {/*            {item.name}*/}
            {/*            <span className={style.arrowIcon}>{activeIndex === index ? '-' : '+'}</span>*/}
            {/*        </div>*/}
            {/*        {activeIndex === index && (*/}
            {/*            <div className={style.bonusItemContent} style={{backgroundImage: `url(${item.bgImage})`}}>*/}
            {/*                <div className={style.bonusItemContentDark}>*/}
            {/*                    {item.brands.map((brand, index) =>*/}
            {/*                            brand.showPicture && ( // display image only if showPicture is true*/}
            {/*                                <ImageComponent*/}
            {/*                                    key={index}*/}
            {/*                                    onClick={() => saveTemporaryBrand(brand.pictureUrl)}*/}
            {/*                                    isSelected={selectedImage === brand.pictureUrl}*/}
            {/*                                    image={brand.pictureUrl}*/}
            {/*                                />*/}
            {/*                            )*/}
            {/*                    )}*/}

            {/*                    <div className={style.buttons}>*/}
            {/*                        <img src={okIcon} alt={'ok'}*/}
            {/*                             onClick={() => {*/}
            {/*                             }}/>*/}
            {/*                        <img src={cancelIcon} alt={'cancel'}*/}
            {/*                             onClick={() => {*/}
            {/*                             }}/>*/}
            {/*                    </div>*/}

            {/*                    <div>!!!!!!!!!!!!!!!!!!!!!!!DESCRIRT</div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        )}*/}
            {/*    </div>*/}
            {/*))}*/}
            {machineData.map((item, index) => (
                <Category
                    key={index}
                    name={item.name}
                    bgImage={item.bgImage}
                    brands={item.brands}
                    onClickBrand={saveTemporaryBrand}
                    selectedBrand={selectedImage}
                    index={index}
                    activeBrands={item.active}
                />
            ))}
        </div>
    );
};