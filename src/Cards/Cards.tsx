import React, {ChangeEvent, useState} from 'react';
import style from './Crards.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../Store/store";
import {CardType, saveWordsToRedux} from "../Store/cardsReducer";

export const Cards = () => {
    const cards = useSelector<RootState ,Array<CardType>>(state=>state.cards.card)
    const dispatch = useDispatch<AppDispatch>();
    const [showWord, setShowWord] = useState<boolean>(false)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [rusWord, setRusWord] = useState<string>('')
    const saveRusWord = (e:ChangeEvent<HTMLInputElement>) =>{
        setRusWord(e.currentTarget.value)
    }
    const [engWord, setEngWord] = useState<string>('')
    const saveEngWord = (e:ChangeEvent<HTMLInputElement>) =>{
        setEngWord(e.currentTarget.value)
    }
    const saveWords = (rusWord: string, engWord: string) =>{
        setShowWord(true)
        setShowModal(false)

        dispatch(saveWordsToRedux(rusWord, engWord))
    }
    return (
        <div className={style.wrapper}>
            {showModal &&  <div className={style.modal}>
                <div className={style.modalItem}>
                    {showWord ? rusWord : <p>Слово на русском</p>}
                </div>
                <input value={rusWord}
                       onChange={saveRusWord}/>
                <div className={style.modalItem}>
                    {showWord ? engWord : <p>Слово на английском</p>}

                </div>
                <input value={engWord}
                       onChange={saveEngWord}/>
                <button onClick={()=>saveWords(rusWord, engWord)}>Сохранить</button>
            </div>}
            <div className={style.addCard}
                 onClick={()=>setShowModal(true)}>+++</div>
            {cards.map(cards =>  <div className={style.cards} key={cards.id}>
                <div className={style.cardsItem}>
                    {cards.question}
                </div>
                <div className={style.cardsItem}>
                    {cards.answer}
                </div>


            </div>)}
            {/*<div className={style.cards}></div>*/}
            {/*<div className={style.cards}></div>*/}
            {/*<div className={style.cards}></div>*/}
            {/*<div className={style.cards}></div>*/}
        </div>
    );
};