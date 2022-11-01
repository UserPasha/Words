import React, {ChangeEvent, useEffect, useState} from 'react';
import style from './CurrentCard.module.css'
import {useSelector} from "react-redux";
import {RootState} from "../Store/store";
import {CardType} from "../Store/cardsReducer";

export const CurrentCard = () => {
    const currentCardsFromRedux = useSelector<RootState, CardType[]>(state=>state.cards.card)
    //let currentCard = currentCardsFromRedux[0]
    let [currentWord, setCurrentWord] = useState<CardType>(currentCardsFromRedux[0])

    const [showWord, setShowWord] = useState<boolean>(false)
    const showCurrentWord = () => {
        setShowWord(!showWord)
    }
    const [showInput, setShowInput] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const showInputForCurrentWord = () => {
        setShowInput(true)
    }
    const [greenBox, setGreenBox] = useState<boolean>(false)
    const [redBox, setRedBox] = useState<boolean>(false)
    const checkValue = (value: string)=>{
        if (value.toLowerCase() === currentWord.answer.toLowerCase()){
            setGreenBox(true)
        }else{
            setRedBox(true)
        }
    }

    const showNextWord = () =>{
        setCurrentWord(currentCardsFromRedux[1])

    }
//useEffect()
    return (
        <div className={style.wrapper}>
            <div className={style.currentCard}>
                <div className={style.currentWord}>
                    {currentWord.question}
                </div>
                {showWord && <div className={style.currentWord}>
                    {currentWord.answer}
                </div>}
                {showInput && <><input value={value}
                                       onChange={onChangeHandler}/>
                    <div onClick={()=>checkValue(value)}>Проверить</div>
                </>}
            </div>
            <div className={style.buttons}>
                <div className={style.button}
                     onClick={showInputForCurrentWord}>Ввести слово
                </div>
                <div className={style.button}
                     onClick={showCurrentWord}>Показать слово
                </div>
                <div className={style.button}
                onClick={showNextWord}>Следующее слово</div>
            </div>
            {greenBox && <div className={style.greenBox}>
                ВЕРНО!
            </div>}
            {redBox && <div className={style.redBox}>
                НЕВЕРНО (
            </div>}

        </div>
    );
};

