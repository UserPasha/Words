import React, {FC, useEffect, useState} from 'react';
import style from './Score.module.css'
interface IScore {
    score: number;
}

export const Score:FC<IScore> = ({score}) => {
    const [currentScore, setCurrentScore] = useState(0);

    useEffect(() => {
        setCurrentScore(score);
    }, [score]);
    return (
        <div className={style.animation}>
            {currentScore.toString().split('').map((digit, index) => (
                <div className={style.digit} key={index}>
                    {digit}
                </div>
            ))}
        </div>
    );
};

;