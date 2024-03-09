import React, {ChangeEvent, useEffect, useState} from 'react';
import style from './Header.module.css'
import plusIcon from './../../Common/Assets/images/plus.svg'
import okIcon from './../../Common/Assets/images/ok.svg'
import closeIcon from './../../Common/Assets/images/close.svg'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../Store/store";
import {addPlayer, addPointToPlayer, removePlayers} from "../../Store/NewGameReducer";

export  type PlayerType = {
    name: string
    score: number
}

export const Header = () => {

    const dispatch = useDispatch<AppDispatch>();
    const currentPlayerList = useSelector<RootState, PlayerType[]>(state => state.newGame)

    const [player, setPlayer] = useState<Array<PlayerType>>(currentPlayerList)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [warning, setWarning] = useState<boolean>(false)
    const [playerName, setPlayerName] = useState<string>('')
    const saveName = (e: ChangeEvent<HTMLInputElement>) => {
        setPlayerName(e.currentTarget.value)
    }

    const savePlayerName = (name: string) => {
        dispatch(addPlayer(name))
        setShowModal(false)
        setPlayerName('')
    }
    const addPoint = (name: string) => {
        dispatch(addPointToPlayer(name))
    }
    const showWarningMessage = () => {
        setWarning(true)
    }
    const cancelWarningMessage = () => {
        setWarning(false)
    }
    const deletePlayerList = () => {
        dispatch(removePlayers())
        setWarning(false)
    }
    useEffect(() => {
        setPlayer(currentPlayerList)
    }, [currentPlayerList])

    // useEffect(()=>{
    //     setWarning(!warning)
    // },[warning])

    return (
        <div className={style.wrapper}>
            <img className={style.add}
                 src={plusIcon} alt={'add player'}
                 onClick={() => setShowModal(true)}/>
            {warning && <div className={style.warning}>
                <div className={style.warningContainer}>
                    <p className={style.warningMessage}>Вы уверены, что хотите список игроков?</p>
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
            {showModal && <div className={style.modal}>
                <input value={playerName}
                       onChange={saveName}/>
                <img src={okIcon} alt={'ok'} onClick={() => savePlayerName(playerName)} className={style.button}/>
                {/*<button onClick={()=>savePlayerName(playerName)}>SAvE</button>*/}
            </div>}
            <div className={style.playersContainer}>
                {player.map((player, index) => <div key={index} className={style.playersItem}>
                    <div className={style.name}> {player.name}</div>
                    <div className={style.score}>{player.score}</div>
                    <button className={style.button} onClick={() => addPoint(player.name)}>+</button>
                </div>)}
            </div>
            <img className={style.remove}
                 src={closeIcon} alt={'remove players'}
                 onClick={() => showWarningMessage()}/>

        </div>
    );
};


