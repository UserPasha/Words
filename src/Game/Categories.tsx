import React, {FC, useEffect} from 'react';
import style from './Categories.module.css'

import {Link} from "react-router-dom";
import {BackArrow} from "../Common/Components/BackArrow/BackArrow";
import {Score} from "./Score";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../Store/store";

import {completeCategory, completeRound} from "../Store/songsReducer";
import {log} from "util";
import {BackArrowCopy} from "./BackArrowCopy";
import {CategoryNameAndPathType} from "./types";


type categoriesNewType = {
    categoryName: string
    path: string
    roundNumber: number
}
type categoriesType = {
    CategoryNameAndPath: CategoryNameAndPathType[]
    roundNumber: number
}

export const Categories: FC<categoriesType> = ({CategoryNameAndPath, roundNumber}) => {
//completeCategory
    const dispatch = useDispatch<AppDispatch>()
    const isCompleteCategory = CategoryNameAndPath.map(c=>c.isCompletedCategory)

    useEffect(() => {
        if(isCompleteCategory[0] && isCompleteCategory[1] && isCompleteCategory[2] &&
            isCompleteCategory[3] && isCompleteCategory[4]){
            dispatch(completeRound(roundNumber))
        }
    }, [CategoryNameAndPath]);

    return (
        <div className={style.wrapper}>
            <BackArrowCopy path={'../startmenu'}/>
            <div className={style.name}>
                {roundNumber}
            </div>
            <div className={style.categories}>
                {CategoryNameAndPath.map((c,index) =>
                    <div key={index} className={c.isCompletedCategory ? style.categoryCompleted : style.category}>
                        <Link to={c.path}>
                        <div className={style.nameBox}>{c.name}</div>
                        </Link>
                    </div>)}

            </div>
            <Score/>
        </div>
    );
};

