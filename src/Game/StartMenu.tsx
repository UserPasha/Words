import React, {useState} from 'react';
import style from './StartMenu.module.css'
import {Link} from "react-router-dom";
import {Score} from "./Score";
import {dataSongs} from "./songs.data";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../Store/store";
import {removePlayers} from "../Store/NewGameReducer";
import {resetGame} from "../Store/songsReducer";
import {roundType} from "./types";


export const StartMenu = () => {
    const dispatch = useDispatch<AppDispatch>()
    const gameRounds = useSelector<RootState, roundType[]>(state => state.songs)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [warning, setWarning] = useState<boolean>(false)

    const showWarningMessage = () => {
        setWarning(true)
    }
    const cancelWarningMessage = () => {
        setWarning(false)
    }
    const deletePlayerList = () => {
        dispatch(resetGame())
        setWarning(false)
    }

    return (
        <div className={style.wrapper}>
            <div className={style.roundsContainer}>


                {gameRounds.map((gr, index) =>
                    <div key={index}
                         className={gr.isCompletedRound ? style.levelBoxWrapperComplete : style.levelBoxWrapper}>
                        <Link to={gr.path}>
                            <div className={style.levelBox}>{gr.round}</div>
                        </Link>
                    </div>
                )}
            </div>
            {warning && <div className={style.warning}>
                <div className={style.warningContainer}>
                    <p className={style.warningMessage}>Вы уверены, что хотите начать игру заново?</p>
                    <button
                        className={style.warningButtonGreen}
                        onClick={() => deletePlayerList()}
                    >Подтвердить
                    </button>
                    <button
                        className={style.warningButtonRed}
                        onClick={() => cancelWarningMessage()}
                    >Отмена
                    </button>
                </div>
            </div>}
            <button className={style.resetButton}
            onClick={()=>showWarningMessage()}>
                НАЧАТЬ ЗАНОВО
            </button>
            <Score/>
        </div>
    );
};

