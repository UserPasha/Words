import React, {FC} from 'react';
import style from './Categories.module.css'
import {CategoryNameAndPathType} from "../AppRoutes/AppRoutes";
import {Link} from "react-router-dom";
import {BackArrow} from "../Common/Components/BackArrow/BackArrow";
import {Score} from "./Score";


type categoriesType = {
    CategoryNameAndPath: CategoryNameAndPathType[]
}

export const Categories: FC<categoriesType> = ({CategoryNameAndPath}) => {

    return (
        <div className={style.wrapper}>
            <BackArrow path={'../startmenu'}/>
            <div className={style.name}>
                round number
            </div>
            <div className={style.categories}>
                {CategoryNameAndPath.map(c =>
                    <div className={style.category}>
                        <Link to={c.path}>
                        <div className={style.nameBox}>{c.categoryName}</div>
                        </Link>
                    </div>)}

            </div>
            <div className={style.description}>
                Name and switch

            </div>
            <Score/>
        </div>
    );
};

