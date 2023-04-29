import React, {FC, useEffect, useState} from 'react';
import style from './MatchProgressBar.module.css'

interface IMatchProgressBar {
    currentMatches: number
    totalMatches: number
}
export const MatchProgressBar:FC<IMatchProgressBar> = ({currentMatches, totalMatches}) => {
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        const percentage = (currentMatches / totalMatches) * 100;
        setProgress(percentage);
    }, [currentMatches, totalMatches]);

    return (
        <div className={style.wrapper}>
            <div className={style.progressBar} style={{width: `${progress}%`}}
            >

            </div>
        </div>
    );
};

