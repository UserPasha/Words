import React, {ChangeEvent, useState} from 'react';
import style from './Crards.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../Store/store";
import {CardType, saveWordsToRedux} from "../Store/cardsReducer";
import plusIcon from './../Common/Assets/images/plus.svg'
import rusFlacIcon from './../Common/Assets/images/russianFlag.svg'
import usaFlagIcon from './../Common/Assets/images/USAFlag.svg'
import closeIcon from './../Common/Assets/images/close.svg'
import {BottomMenu} from "../BottomMenu/BottomMenu";
import CardList from "../CardList/CardList";
import {BackArrow} from "../Common/Components/BackArrow/BackArrow";

export const Cards = () => {
    const cards = useSelector<RootState, Array<CardType>>(state => state.cards.card)
    const dispatch = useDispatch<AppDispatch>();
    const CARD_QUANTITY = 4
    const showCardQuantity = (arr: Array<CardType>, count: number) => {
        if (arr.length > count) {
            let array = []
            for (let i = 0; i < count; i++) {
                array.push(arr[i])
            }
            return array
        } else {
            return arr
        }

    }
    const firstFiveCards = showCardQuantity(cards, CARD_QUANTITY)
    const [showWord, setShowWord] = useState<boolean>(false)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [rusWord, setRusWord] = useState<string>('')
    const saveRusWord = (e: ChangeEvent<HTMLInputElement>) => {
        setRusWord(e.currentTarget.value)
    }
    const [engWord, setEngWord] = useState<string>('')
    const saveEngWord = (e: ChangeEvent<HTMLInputElement>) => {
        setEngWord(e.currentTarget.value)
    }
    const closeModal = () => {
        setShowModal(false)
    }
    const saveWords = (rusWord: string, engWord: string) => {
        setShowWord(true)
        setShowModal(false)
        setRusWord('')
        setEngWord('')

        dispatch(saveWordsToRedux(rusWord, engWord))
    }

    return (
        <div className={style.wrapper}>
            <BackArrow/>
            {showModal && <div className={style.modal}>
                <div className={style.closeModal}>
                    <img src={closeIcon}
                         alt='close'
                         onClick={closeModal}/>
                </div>
                <div className={style.greeting}>
                    ВВЕДИТЕ НОВОЕ СЛОВО
                </div>
                <div className={style.modalItem}>
                    <img src={rusFlacIcon} alt='russian word'/>
                    {showWord ? rusWord : <p>Слово на русском</p>}

                </div>
                <input value={rusWord}
                       onChange={saveRusWord}/>
                <div className={style.modalItem}>
                    <img src={usaFlagIcon} alt='english word'/>
                    {showWord ? engWord : <p>Слово на английском</p>}

                </div>
                <input value={engWord}
                       onChange={saveEngWord}/>
                <button onClick={() => saveWords(rusWord, engWord)}
                        className={style.saveButton}>Сохранить
                </button>
            </div>}
            <div className={style.addCard}><img src={plusIcon}
                                                alt='add card'
                                                onClick={() => setShowModal(true)}/></div>
            <div className={style.cardsWrapper}>
                {firstFiveCards.map(cards => <CardList key={cards.id}
                                                       answer={cards.answer}
                                                       question={cards.question}/>)}
            </div>

            <BottomMenu/>
        </div>
    );
};