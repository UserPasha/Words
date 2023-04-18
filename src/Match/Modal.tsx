import React, {FC} from 'react';
import style from './Modal.module.css'
import closeIcon from "../Common/Assets/images/close.svg";
import {Link} from "react-router-dom";

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
                                      path
                                  }) => {
    const createEndingOfWord = (attempts: number) => {
        setRunning(false)
        if (attempts > 4 && attempts < 20) {
            return `Поздравляем! Вы нашли все пары за ${attempts} попыток`
        } else if (attempts % 10 === 1) {
            return `Поздравляем! Вы нашли все пары за ${attempts} попытку`
        } else if (attempts % 10 > 1 && attempts % 10 < 5) {
            return `Поздравляем! Вы нашли все пары за ${attempts} попытки`
        } else return `Поздравляем! Вы нашли все пары за ${attempts} попыток`
    }
    const closeModal = () => {
        setShowModal(false)
        setIsEndOfTime(false)
    }
    const restartTimer = () => {
        setTimer(duration)
        closeModal()
        restartGame()
    }
    return (
        <div className={style.wrapper}>
            <div className={style.modal}>
                <div className={style.closeModal}>
                    <img src={closeIcon}
                         alt='close'
                         onClick={closeModal}/>
                </div>
                <div>{isEndOfTime ? `к сожалению вы не успели restart add time` : createEndingOfWord(attempts)}
                    <button onClick={restartTimer}>
                        ещё раз
                    </button>
                    <Link to={path}>
                        <button onClick={restartTimer}>
                            Далее
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

