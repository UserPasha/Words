import React, {FC, useEffect, useState} from 'react';
import style from './MatchProgressBar.module.css'

interface IMatchProgressBar {
    currentMatches: number
    totalMatches: number
}
export const MatchProgressBar:FC<IMatchProgressBar> = ({currentMatches, totalMatches}) => {
    const [progress, setProgress] = useState<number>(0);
    const percentage = (currentMatches / totalMatches) * 100;
    useEffect(() => {
        const percentage = (currentMatches / totalMatches) * 100;
        setProgress(percentage);
    }, [currentMatches, totalMatches]);

    return (
        <>
        <div className={style.percentageScaleWrapper}>
            <div className={style.percentageScale}
                style={{
                    width: `${percentage}%`,
                }}
            >
                {Math.floor(percentage)}%
            </div>
            {/*<div className={style.percentageScaleBack}></div>*/}
        </div>
        <div className={style.wrapper}>
            <div className={style.progressBar} style={{width: `${progress}%`}}
            >

            </div>
        </div>
        </>
    );
};

