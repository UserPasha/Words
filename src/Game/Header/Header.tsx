import React, {ChangeEvent, useState} from 'react';
import style from './Header.module.css'
import plusIcon from './../../Common/Assets/images/plus.svg'
import okIcon from './../../Common/Assets/images/ok.svg'

export const Header = () => {
    type PlayerType = {
        name: string
        score: number
    }

    const [player, setPlayer] = useState<Array<PlayerType>>([])
    const [showModal, setShowModal] = useState<boolean>(false)
    const [playerName, setPlayerName] = useState<string>('')
    const saveName = (e: ChangeEvent<HTMLInputElement>)=>{
        setPlayerName(e.currentTarget.value)
    }

    const savePlayerName = (name:string)=>{
        setPlayer([...player, {name, score: 0}])
        setShowModal(false)
        setPlayerName('')
    }
    const addPoint = (name:string, score:number) =>{
       const newScore = player.map(player=>player.name===name? {...player, score: score+1}: player)
        setPlayer(newScore)
    }
    return (
        <div className={style.wrapper}>
            <img className={style.add}
                 src={plusIcon} alt={'add player'}
                 onClick={() => setShowModal(true)}/>

            {showModal && <div className={style.modal}>
                <input value={playerName}
                onChange={saveName}/>
                <img src={okIcon} alt={'ok'} onClick={()=>savePlayerName(playerName)} className={style.button}/>
                {/*<button onClick={()=>savePlayerName(playerName)}>SAvE</button>*/}
            </div>}
            <div  className={style.playersContainer}>
                {player.map((player, index)=> <div key={index} className={style.playersItem}>
                    <div className={style.name}> {player.name}</div>
                    <div className={style.score}>{player.score}</div>
                    <button className={style.button} onClick={()=>addPoint(player.name, player.score)}>+</button>
                </div>)}
            </div>


        </div>
    );
};

