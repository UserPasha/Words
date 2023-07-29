import {FC, useState} from "react";
import {ImageComponent} from "../../Profile/ImageComponenet";
import style from './BonusMachine.module.css';
import okIcon from "../../assets/images/match/ok.svg";
import cancelIcon from "../../assets/images/match/cancel.svg";
import {BrandType, CategoryType, machineData} from "./bomusMachine.data";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../Store/store";
import {changeActiveBrand} from "../../Store/machineReducer";

interface ICategory {
    name: string
    bgImage: string
    brands: BrandType[]
    onClickBrand: (image: string) => void
    selectedBrand: string
    index: number
    activeBrands: BrandType
}

export const Category: FC<ICategory> = ({name, bgImage, brands, onClickBrand, selectedBrand, activeBrands, index}) => {


    //verstka current brand, description
    const machineData = useSelector<RootState, CategoryType[]>(state => state.machine)

    const dispatch = useDispatch<AppDispatch>()

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const findBrandDescriptionByPictureUrl = (pictureUrl: string): string | undefined => {
        for (const category of machineData) {
            const brand = category.brands.find((brand) => brand.pictureUrl === pictureUrl);
            if (brand) {
                return brand.description;
            }
        }
        return undefined;
    };


    const findBrandNameByPictureUrl = (pictureUrl: string): string | undefined => {
        for (const category of machineData) {
            const brand = category.brands.find((brand) => brand.pictureUrl === pictureUrl);
            if (brand) {
                return brand.name;
            }
        }
        return undefined;
    };

    const findBrandShowPictureByPictureUrl = (pictureUrl: string): boolean | undefined => {
        for (const category of machineData) {
            const brand = category.brands.find((brand) => brand.pictureUrl === pictureUrl);
            if (brand) {
                return brand.showPicture;
            }
        }
        return undefined;
    };

    function getCategoryNameByPictureUrl(pictureUrl: string): string | undefined {
        for (const category of machineData) {
            for (const brand of category.brands) {
                if (brand.pictureUrl === pictureUrl) {
                    return category.name;
                }
            }
        }
        return undefined;
    }


    const saveBrandToRedux = () => {
        dispatch(changeActiveBrand(getCategoryNameByPictureUrl(selectedBrand)!, findBrandNameByPictureUrl(selectedBrand)!))
    }

    const selectDescription = findBrandDescriptionByPictureUrl(selectedBrand)

    return (
        <div className={style.bonusItem}>
            <div className={style.bonusItemTitle} onClick={() => handleClick(index)}>
                {name}
                <span className={style.arrowIcon}>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
                <div className={style.bonusItemContent} style={{backgroundImage: `url(${bgImage})`}}>
                    <div className={style.bonusItemContentDark}>

                        <div className={style.title}>АКТИВНЫЙ ЭЛЕМЕНТ</div>

                        <img src={activeBrands.pictureUrl} className={style.selectedImage}/>

                        <div className={style.description}>{selectDescription}</div>
                        )

                        <div className={style.imageWrapper}>
                            {brands.map((brand, index) =>
                                // brand.showPicture &&
                                (
                                    <ImageComponent
                                        key={index}
                                        onClick={() => onClickBrand(brand.pictureUrl)}
                                        isSelected={selectedBrand === brand.pictureUrl}
                                        image={brand.showPicture ? brand.pictureUrl : brand.draft}
                                    />
                                )
                            )}
                        </div>


                        {findBrandShowPictureByPictureUrl(selectedBrand)
                            ?
                            <div className={style.buttons} onClick={() => {
                            saveBrandToRedux()
                        }}> Применить бонус
                            <img src={okIcon} alt={'ok'}/>

                        </div>
                            :
                            <div className={style.buttons}> Этот бонус недоступен


                            </div> }


                    </div>

                </div>
            )}
        </div>
    );
}