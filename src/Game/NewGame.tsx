import React, { FC, useEffect, useState } from 'react';
import style from './NewGame.module.css';
import { Song } from "./Song/Song";
import { Score } from "./Score";
import okIcon from '../Common/Assets/images/ok.svg';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Store/store";
import { completeCategory, completeSong } from "../Store/songsReducer";
import { BackArrowCopy } from "./BackArrowCopy";
import { roundType } from "./types";
import { useParams, useNavigate } from "react-router-dom";

export type CategorySongsType = {

    tractTitle: string;
    track: string;
    original: string;
    trackName: string;
    isComplete: boolean;
}


type songType = {
    arraySongs: CategorySongsType[];
    categoryTitle: string;
    backWay: string;
    roundNumber: number;

}




export const NewGame = () => {
    const { round, categoryId } = useParams<{ round: string; categoryId: string }>();
    const dispatch = useDispatch<AppDispatch>();

    const roundNumber = Number(round);

    const category = useSelector((state: RootState) =>
        state.songs
            .find(r => r.round === roundNumber)
            ?.categories.find(c => String(c.id) === categoryId)
    );

    const [isShow, setIsShow] = useState(false);
    const [trackName, setTrackName] = useState('');

    const isCompleteSongs = category?.tracks.map(t => t.isComplete) ?? [];

    useEffect(() => {
        if (!category) return;

        if (
            isCompleteSongs.length > 0 &&
            isCompleteSongs.every(Boolean) &&
            !category.isCompletedCategory
        ) {
            dispatch(completeCategory(roundNumber, category.name));
        }
    }, [
        isCompleteSongs,
        category?.isCompletedCategory,
        roundNumber,
        category?.name,
        dispatch,
    ]);


    if (!category) {
        return <div>Категория не найдена</div>;
    }

    const complete = (trackTitle: string) => {
        dispatch(completeSong(roundNumber, category.name, trackTitle));
    };

    return (
        <div className={style.wrapper}>
            <BackArrowCopy path={`/round/${roundNumber}`} />

            <div className={style.name}>{category.name}</div>

            <div className={style.categories}>
                {category.tracks.map(s => (
                    <div
                        key={s.tractTitle}
                        className={s.isComplete ? style.categoryCompleted : style.category}
                    >
                        <div className={style.nameBox}>{s.tractTitle}</div>

                        <Song
                            track={s.track}
                            original={s.original}
                            setTrackName={setTrackName}
                            trackTitle={s.trackName}
                        />

                        <button
                            className={style.complete}
                            onClick={() => complete(s.trackName)}
                        >
                            <img src={okIcon} />
                        </button>
                    </div>
                ))}
            </div>

            <div className={style.description}>
                {isShow ? (
                    <div
                        className={style.showTitle}
                        onClick={() => setIsShow(false)}
                    >
                        {trackName}
                    </div>
                ) : (
                    <button
                        className={style.showButton}
                        onClick={() => setIsShow(true)}
                    >
                        ПОКАЗАТЬ
                    </button>
                )}
            </div>

            <Score />
        </div>
    );
};
