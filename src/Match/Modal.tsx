import React, {Dispatch, FC, memo, SetStateAction, useEffect, useRef, useState} from 'react';
import style from './Modal.module.css'
import {Link} from "react-router-dom";
import smile from '../assets/images/match/smile.svg'
import sad from '../assets/images/match/sad.svg'
import {PATH} from "../AppRoutes/Path";
import {Score} from "./Score/Score";
import {restartGame} from "../Utils/matchFunctions";
import {ICard} from "../hooks/useMatch";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../Store/store";
import {saveCurrentPoints} from "../Store/profileReducer";
import {useBonus} from "../hooks/useBonus";


interface IModal {
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

export const Modal: FC<IModal> = memo(({
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
                                      setCards, setAttempts, setPairCounter, cardsToPlay
                                  }) => {

    const dispatch = useDispatch<AppDispatch>();
    const {multiplyBonus} = useBonus()

    const createPoints2 = (defaultPoints: number, timeLeft: number, realAttempts: number) => {
        const pointsForAttempts = 60 - realAttempts;
        const temporyPoints = defaultPoints + timeLeft * 2 + pointsForAttempts;

        const totalPoints = Math.round(temporyPoints * multiplyBonus);
        return totalPoints
    }
   // const totalPoints = createPoints2(defaultPoints, timeLeft, attempts)


    //const [score, setScore] = useState(0);
   // const [lastScore, setLastScore] = useState(0)


    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setScore((prevScore) => prevScore + 1);
    //     }, 3);
    //     if (score === totalPoints) {
    //         clearInterval(interval);
    //         setLastScore(score)
    //     }
    //
    //     return () => {
    //         clearInterval(interval);
    //
    //     };
    //
    // }, [score, lastScore]);


    const createPoints = (defaultPoints: number, timeLeft: number, realAttempts: number) => {


        const pointsForAttempts = 60 - realAttempts;
        const temporyPoints = defaultPoints + timeLeft * 2 + pointsForAttempts;

        const totalPoints = Math.round(temporyPoints * multiplyBonus);
        console.log(totalPoints)
        setRunning(false)

        dispatch(saveCurrentPoints(totalPoints))

        if (totalPoints > 4 && totalPoints < 20) {
            return `Поздравляем! Вы приняли ${totalPoints} единиц`
        } else if (totalPoints % 10 === 1) {
            return `Поздравляем! Вы приняли ${totalPoints} единицу`
        } else if (totalPoints % 10 > 1 && totalPoints % 10 < 5) {
            return `Поздравляем! Вы приняли ${totalPoints} единицы`
        } else return `Поздравляем! приняли ${totalPoints} единиц`

    }
    const bonusScore = (defaultPoints: number, timeLeft: number, realAttempts: number): number => {
        let pointsForAttempts = 60 - realAttempts
        const temporyPoints = defaultPoints + timeLeft * 2 + pointsForAttempts
        const temporyPoints2 = temporyPoints * (+multiplyBonus.toFixed(2)) - temporyPoints
        const bonus = Math.round(temporyPoints2)
        return bonus
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
                            <h2>РАСЧЁТНИК</h2>
                            <img src={smile} alt={'fun smile'}/>
                            <div className={style.awards}>
                                <div className={style.awardsItem}>
                                    <div className={style.infoItem}>
                                        Количество единиц в приходе:
                                    </div>
                                    <div className={style.score}>
                                        {defaultPoints}
                                    </div>

                                </div>
                                <div className={style.awardsItem}>
                                    <div className={style.infoItem}>
                                        Бонус за строки:
                                    </div>
                                    <div className={style.score}>
                                        {60 - attempts}
                                    </div>

                                </div>
                                <div className={style.awardsItem}>
                                    <div className={style.infoItem}>
                                        Бонус за время:
                                    </div>
                                    <div className={style.score}>
                                        {timeLeft * 2}
                                    </div>
                                </div>

                                <div className={style.awardsItem}>
                                    <div className={style.infoItem}>
                                        Мотекс Бонус: X {+multiplyBonus.toFixed(2)}
                                    </div>
                                    <div className={style.score}>
                                        {bonusScore(defaultPoints, timeLeft, attempts)}
                                    </div>
                                </div>

                                {/*<div className={style.awardsItem}>*/}
                                {/*    <div className={style.infoItem}>*/}
                                {/*        Итого:*/}
                                {/*    </div>*/}
                                {/*    <div className={style.score}>*/}
                                {/*        /!*<Score score={score}/>*!/*/}
                                {/*        {createPoints(defaultPoints, timeLeft, attempts)}*/}
                                {/*    </div>*/}
                                {/*</div>*/}

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
});

