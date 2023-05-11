import React, {FC} from 'react';
import style from './Modal.module.css'
import closeIcon from "../Common/Assets/images/close.svg";
import {Link} from "react-router-dom";
import smile from '../assets/images/match/smile.svg'
import sad from '../assets/images/match/sad.svg'
import {PATH} from "../AppRoutes/AppRoutes";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../Store/store";


interface IModal {
    setShowModal: (value: boolean) => void
    attempts: number
    isEndOfTime: boolean
    setIsEndOfTime: (value: boolean) => void
    setRunning: (value: boolean) => void
    duration: number
    setTimer: (value: number) => void
    restartGame: () => void
    path: string
    timeLeft: number
    defaultPoints: number
}

export const Modal: FC<IModal> = ({
                                      setShowModal,
                                      attempts,
                                      isEndOfTime,
                                      setIsEndOfTime,
                                      setRunning,
                                      duration,
                                      setTimer,
                                      restartGame,
                                      path,
                                      timeLeft,
                                      defaultPoints
                                  }) => {


    const createPoints = (defaultPoints: number, timeLeft: number, realAttempts: number) => {
        let pointsForAttempts = 60 - realAttempts
        const totalPoints = defaultPoints + timeLeft * 2 + pointsForAttempts
        console.log(totalPoints, timeLeft)
        setRunning(false)
        if (totalPoints > 4 && totalPoints < 20) {
            return `Поздравляем! Вы приняли ${totalPoints} единиц`
        } else if (totalPoints % 10 === 1) {
            return `Поздравляем! Вы приняли ${totalPoints} единицу`
        } else if (totalPoints % 10 > 1 && totalPoints % 10 < 5) {
            return `Поздравляем! Вы приняли ${totalPoints} единицы`
        } else return `Поздравляем! приняли ${totalPoints} единиц`

    }


    // const createEndingOfWord = (attempts: number) => {
    //     setRunning(false)
    //     if (attempts > 4 && attempts < 20) {
    //         return `Поздравляем! Вы нашли все пары за ${attempts} попыток ${timeLeft}`
    //     } else if (attempts % 10 === 1) {
    //         return `Поздравляем! Вы нашли все пары за ${attempts} попытку  ${timeLeft}`
    //     } else if (attempts % 10 > 1 && attempts % 10 < 5) {
    //         return `Поздравляем! Вы нашли все пары за ${attempts} попытки  ${timeLeft}`
    //     } else return `Поздравляем! Вы нашли все пары за ${attempts} попыток  ${timeLeft} `
    // }
    const closeModal = () => {
        setShowModal(false)
        setIsEndOfTime(false)
    }
    const restartTimer = () => {
        closeModal()
        setTimer(duration)
        restartGame()
    }
    return (
        <div className={style.wrapper}>
            <div className={style.modal}>

                {isEndOfTime ?
                    <div className={style.message}>
                        <img src={sad} alt={'fun smile'}/>
                        K сожалению вы не успели

                        <button onClick={restartTimer} className={style.button}>
                            Заново
                        </button>
                        <Link to={PATH.MATCH}>
                            <button onClick={restartTimer} className={style.button}> Выйти</button>
                        </Link>
                    </div> : <>
                        <div className={style.message}>
                            <img src={smile} alt={'fun smile'}/>
                            <div>
                                {createPoints(defaultPoints, timeLeft, attempts)}
                            </div>

                            <Link to={path}>
                                <button onClick={restartTimer} className={style.button}> Далее</button>
                            </Link>
                            <Link to={PATH.MATCH}>
                                <button onClick={restartTimer} className={style.button}> Выйти</button>
                            </Link>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

