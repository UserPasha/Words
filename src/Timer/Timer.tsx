import React, {useEffect, Dispatch, SetStateAction, useState} from "react";
import style from './Timer.module.css'


interface TimerProps {
    duration: number;
    setIsEndOfTime: (value: boolean) => void
    running: boolean
    setRunning: (value: boolean) => void
    timer: number
    setTimer: Dispatch<SetStateAction<number>>
}



export const Timer: React.FC<TimerProps> = ({duration, setIsEndOfTime, running, setRunning, timer, setTimer}) => {

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (running) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
            if (timer === 0) {
                setIsEndOfTime(true)
                clearInterval(interval);
            }
        }
        return () => clearInterval(interval);
    }, [timer, running]);

    useEffect(() => {
        setTimer(duration);
        setRunning(true);
    }, [duration]);

   const middleValue = 20
    const criticalValue = 10
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    const middle = timer <= middleValue && timer >= criticalValue
    const short = timer < criticalValue
    const progress = ((duration - timer + 1) / duration) * 100;


    return (
        <div className={style.wrapper}>
            <div
                className={short ? `${style.progressBar} ${style.short}` : middle ? `${style.progressBar} ${style.medium}` : `${style.progressBar} ${style.full}`}>
                <div
                    className={style.progress}
                    style={{width: `${progress}%`, height: "10px"}}
                >

                </div>

            </div>
            <div className={short ? `${style.container} ${style.short}` : middle ? `${style.container} ${style.middle}` : `${style.container} ${style.full}`}>
                {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
            </div>
        </div>
    );
};


