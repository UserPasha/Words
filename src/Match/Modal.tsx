import React, {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import style from './Modal.module.css'
import {Link} from "react-router-dom";
import smile from '../assets/images/match/smile.svg'
import sad from '../assets/images/match/sad.svg'
import {PATH} from "../AppRoutes/AppRoutes";
import {Score} from "./Score/Score";
import {restartGame} from "../Utils/matchFunctions";
import {ICard} from "../hooks/useMatch";



interface IModal{
    setShowModal: (value: boolean) => void
    attempts: number
    isEndOfTime: boolean
    setIsEndOfTime: (value: boolean) => void
    setRunning: (value: boolean) => void
    duration: number
    setTimer: (value: number) => void

    path: string
    timeLeft: number
    defaultPoints: number
    setCards: Dispatch<SetStateAction<ICard[]>>,
    setAttempts: Dispatch<SetStateAction<number>>,
    setPairCounter: Dispatch<SetStateAction<number>>,
    cardsToPlay: ICard[]
}

export const Modal: FC<IModal> = ({
                                      setShowModal,
                                      attempts,
                                      isEndOfTime,
                                      setIsEndOfTime,
                                      setRunning,
                                      duration,
                                      setTimer,

                                      path,
                                      timeLeft,
                                      defaultPoints,
    setCards, setAttempts, setPairCounter , cardsToPlay
                                  }) => {
    const createPoints2 = (defaultPoints: number, timeLeft: number, realAttempts: number) => {
        let pointsForAttempts = 60 - realAttempts
        const totalPoints = defaultPoints + timeLeft * 2 + pointsForAttempts
        return totalPoints
    }
    const totalPoints = createPoints2(defaultPoints, timeLeft, attempts)
    const [score, setScore] = useState(0);
    const [baseScore, setBaseScore] = useState(0);
    const [StringScore, setStringScore] = useState(0);
    const [TimeScore, setTimeScore] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setScore((prevScore) => prevScore + 1);
        }, 10);
        if (score === totalPoints) {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [score]);
    useEffect(() => {
        const interval = setInterval(() => {
            setBaseScore((prevScore) => prevScore + 1);
        }, 10);
        if (baseScore === defaultPoints) {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [baseScore]);
    useEffect(() => {
        const interval = setInterval(() => {
            setStringScore((prevScore) => prevScore + 1);
        }, 10);
        if (StringScore === 60 - attempts) {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [StringScore]);
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeScore((prevScore) => prevScore + 1);
        }, 10);
        if (TimeScore === timeLeft * 2) {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [TimeScore]);


    const createPoints = (defaultPoints: number, timeLeft: number, realAttempts: number) => {
        let pointsForAttempts = 60 - realAttempts
        const totalPoints = defaultPoints + timeLeft * 2 + pointsForAttempts
        setRunning(false)
        if (totalPoints > 4 && totalPoints < 20) {
            return `Поздравляем! Вы приняли ${totalPoints} единиц`
        } else if (totalPoints % 10 === 1) {
            return `Поздравляем! Вы приняли ${totalPoints} единицу`
        } else if (totalPoints % 10 > 1 && totalPoints % 10 < 5) {
            return `Поздравляем! Вы приняли ${totalPoints} единицы`
        } else return `Поздравляем! приняли ${totalPoints} единиц`

    }

    const closeModal = () => {
        setShowModal(false)
        setIsEndOfTime(false)
    }
    const restartTimer = () => {
        closeModal()
        setTimer(duration)
        restartGame(setCards, setAttempts, setPairCounter, cardsToPlay,)
    }
    return (
        <div className={style.wrapper}>


                {isEndOfTime ?
                    <div className={style.failed}>
                    <div className={style.message}>
                        <img src={sad} alt={'fun smile'}/>
                        K сожалению вы не успели

                        <button onClick={restartTimer} className={style.button}>
                            Заново
                        </button>
                        <Link to={PATH.MATCH}>
                            <button onClick={restartTimer} className={style.button}> Выйти</button>
                        </Link>
                        </div>
                    </div> : <>
                        <div className={style.modal}>
                        <div className={style.message}>
                            <img src={smile} alt={'fun smile'}/>
                            <div className={style.awards}>
                                <div className={style.awardsItem}>
                                    <div className={style.infoItem}>
                                        Количество единиц в приходе:
                                    </div>
                                    <div className={style.score}>
                                        <Score score={defaultPoints}/>
                                    </div>

                                </div>
                                <div className={style.awardsItem}>
                                    <div className={style.infoItem}>
                                        Бонус за строки:
                                    </div>
                                    <div className={style.score}>
                                        <Score score={60 - attempts}/>
                                    </div>

                                </div>
                                <div className={style.awardsItem}>
                                    <div className={style.infoItem}>
                                        Бонус за время:
                                    </div>
                                    <div className={style.score}>
                                        <Score score={timeLeft * 2}/>
                                    </div>
                                </div>

                                <div className={style.awardsItem}>
                                    <div className={style.infoItem}>
                                        Итого:
                                    </div>
                                    <div className={style.score}>
                                        <Score score={score}/>
                                    </div>
                                </div>

                            </div>
                            <div className={style.congratulation}>
                                {createPoints(defaultPoints, timeLeft, attempts)}
                            </div>

                            <Link to={path}>
                                <button onClick={restartTimer} className={style.button}> Далее</button>
                            </Link>
                            <Link to={PATH.MATCH}>
                                <button onClick={restartTimer} className={style.button}> Выйти</button>
                            </Link>
                        </div>
                    </div>
                    </>
                }

        </div>
    );
};

