import React, {FC, useEffect} from 'react';
import style from './Categories.module.css'

import {Link} from "react-router-dom";
import {BackArrow} from "../Common/Components/BackArrow/BackArrow";
import {Score} from "./Score";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../Store/store";

import {completeCategory, completeRound} from "../Store/songsReducer";

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

export const Categories: FC<categoriesType> = ({ CategoryNameAndPath, roundNumber }) => {
    const dispatch = useDispatch<AppDispatch>();

    const isAllCategoriesCompleted = CategoryNameAndPath.every(
        c => c.isCompletedCategory
    );

    const isRoundCompleted = useSelector(
        (state: RootState) =>
            state.songs.find(r => r.round === roundNumber)?.isCompletedRound
    );

    useEffect(() => {
        if (
            isAllCategoriesCompleted &&
            !isRoundCompleted
        ) {
            dispatch(completeRound(roundNumber));
        }
    }, [
        isAllCategoriesCompleted,
        isRoundCompleted,
        roundNumber,
        dispatch,
    ]);

    return (
        <div className={style.wrapper}>
            <BackArrowCopy path="/startmenu" />

            <div className={style.name}>
                Раунд {roundNumber}
            </div>

            <div className={style.categories}>
                {CategoryNameAndPath.map(c => (
                    <div
                        key={c.name}
                        className={
                            c.isCompletedCategory
                                ? style.categoryCompleted
                                : style.category
                        }
                    >
                        <Link to={`/round/${roundNumber}/category/${c.id}`}>
                            <div className={style.nameBox}>{c.name}</div>
                        </Link>
                    </div>
                ))}
            </div>

            <Score />
        </div>
    );
};


