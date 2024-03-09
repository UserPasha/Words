import React, {FC, useState} from 'react';
import style from './NewGame.module.css'
import {Song} from "./Song/Song";
import {BackArrow} from "../Common/Components/BackArrow/BackArrow";
import {Score} from "./Score";
import okIcon from '../Common/Assets/images/ok.svg'

type songType = {
    track: string
    original: string
}

export const NewGame: FC<songType> = ({track, original}) => {
    const [isCompleteSong, setIsCompleteSong] = useState<boolean>(false)
    const completeSong = () =>{
        setIsCompleteSong(true)
    }

    return (
        <div className={style.wrapper}>
            <BackArrow path={'../categories'}/>
          <div className={style.name}>
category name
          </div>
            <div className={style.categories}>
                <div className={isCompleteSong ? style.categoryCompleted : style.category}>
                    <div className={style.nameBox}>TRACK 1</div>
                    <Song track={track} original={original}/>
                    <button className={style.complete} onClick={completeSong}> <img src={okIcon}/></button>
                </div>
                <div className={style.category}>
                    <div className={style.nameBox}>TRACK 2</div>
                    <Song track={track} original={original}/>
                </div>
                <div className={style.category}>
                    <div className={style.nameBox}>TRACK 3</div>
                    <Song track={track} original={original}/>
                </div>
                <div className={style.category}></div>
                <div className={style.category}></div>
            </div>
            <div className={style.description}>
                Name and switch
                score
            </div>
            <Score/>
        </div>
    );
};
