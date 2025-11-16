import React, {FC, useEffect, useState} from 'react';
import style from './NewGame.module.css'
import {Song} from "./Song/Song";
import {Score} from "./Score";
import okIcon from '../Common/Assets/images/ok.svg'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../Store/store";
import {completeCategory, completeSong} from "../Store/songsReducer";
import {BackArrowCopy} from "./BackArrowCopy";

export type CategorySongsType = {
    tractTitle: string
    track: string
    original: string
    trackName: string
    isComplete: boolean
}
type songType = {
    arraySongs: CategorySongsType[]
    categoryTitle: string
    backWay: string
    roundNumber: number
}
export const NewGame: FC<songType> = ({
                                          arraySongs, categoryTitle,
                                          backWay, roundNumber
                                      }) => {
    const dispatch = useDispatch<AppDispatch>()
    // const gameRounds = useSelector<RootState, roundType[]>(state => state.songs)
    // const allSongs = gameRounds.map(gr=>gr.categories.map(cat=>cat.tracks))
    // const roundZeroSongs = allSongs[0]
    // const roundZeroSummerSongs = roundZeroSongs[0]
    const isCompleteSongs = arraySongs.map(a=>a.isComplete)
    const [songsFromAppRo, setSongsFromAppRo] = useState<CategorySongsType[]>(arraySongs)

    useEffect(() => {
        setSongsFromAppRo(arraySongs);
    }, [arraySongs]);
    useEffect(() => {
       if(isCompleteSongs[0] && isCompleteSongs[1] && isCompleteSongs[2] &&
           isCompleteSongs[3] && isCompleteSongs[4]){
               dispatch(completeCategory(roundNumber, categoryTitle))
       }
    }, [arraySongs]);


    const [isShow, setIsShow] = useState<boolean>(false)
    const [trackName, setTrackName] = useState<string>('')
    const complete = (trackTitle: string) => {
        dispatch(completeSong(roundNumber, categoryTitle, trackTitle));
    };

    const showTrackName = () => {
        setIsShow(!isShow)
    }

    return (
        <div className={style.wrapper}>
            <BackArrowCopy path={backWay}/>
            <div className={style.name}>
                {categoryTitle}
            </div>
            <div className={style.categories}>
                {songsFromAppRo.map(s =>
                    <div key={s.tractTitle} className={s.isComplete ? style.categoryCompleted : style.category}>
                        <div className={style.nameBox}>{s.tractTitle}</div>
                        <Song track={s.track} original={s.original} setTrackName={setTrackName} trackTitle={s.trackName}/>
                        <button className={style.complete} onClick={() => complete(s.trackName)}><img
                            src={okIcon}/></button>
                    </div>
                )}

            </div>
            <div className={style.description}>
                {isShow ? <div className={style.showTitle}
                               onClick={showTrackName}
                    >
                        {trackName}
                    </div>
                    :
                    <button className={style.showButton}
                            onClick={showTrackName}
                    > ПОКАЗАТЬ </button>
                }

            </div>
            <Score/>
        </div>
    );
};


