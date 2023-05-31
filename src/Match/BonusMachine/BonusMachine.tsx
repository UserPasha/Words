import React, {useState} from 'react';
import style from './BonusMachine.module.css';
import {bonusMachineData} from "./bomusMachine.data";
import {ImageComponent} from "../../Profile/ImageComponenet";
import okIcon from "../../assets/images/match/ok.svg";
import cancelIcon from "../../assets/images/match/cancel.svg";


export const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [selectedImage, setSelectedImage] = useState<string>('')

    const saveTemporaryBrand = (image: string) => {
        // setNewAvatar(image)
        setSelectedImage(image);
    };


    const handleClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={style.bonusWrapper}>
            {bonusMachineData.map((item, index) => (
                <div key={index} className={style.bonusItem}>
                    <div className={style.bonusItemTitle} onClick={() => handleClick(index)}>
                        {item.title}
                        <span className={style.arrowIcon}>{activeIndex === index ? '-' : '+'}</span>
                    </div>
                    {activeIndex === index && (
                        <div className={style.bonusItemContent} style={{backgroundImage: `url(${item.background})`}}>
                            <div className={style.bonusItemContentDark}>
                            {item.brands.map((brand, index) =>
                                    <ImageComponent key={index}
                                                    onClick={() => saveTemporaryBrand(brand)}
                                                    isSelected={selectedImage === brand}
                                                    image={brand}
                                    />

                            )}

                            <div className={style.buttons}>
                                <img src={okIcon} alt={'ok'}
                                     onClick={() => {
                                     }}/>
                                <img src={cancelIcon} alt={'cancel'}
                                     onClick={() => {
                                     }}/>
                            </div>

                            <div>!!!!!!!!!!!!!!!!!!!!!!!DESCRIRT</div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};