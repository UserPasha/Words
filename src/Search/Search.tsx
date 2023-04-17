import React, {ChangeEvent, useEffect, useState} from 'react';
import style from './Search.module.css'
import {useSelector} from "react-redux";
import {RootState} from "../Store/store";
import {CardType} from "../Store/cardsReducer";
import {BottomMenu} from "../BottomMenu/BottomMenu";
import CardList from "../CardList/CardList";
import {BackArrow} from "../Common/Components/BackArrow/BackArrow";

export const Search = () => {
    const cards = useSelector<RootState, Array<CardType>>(state => state.cards.card)
    const [value, setValue] = useState<string>('')
    const [wordsResult, setWordsResult] = useState<Array<CardType>>([])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const searchWord = (value: string, arr: Array<CardType>) => {
        let array: Array<CardType> = []

        if (value.length) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].question.toLowerCase().startsWith(value.toLowerCase())
                    || arr[i].answer.toLowerCase().startsWith(value.toLowerCase())) {
                    array.push(arr[i])
                }
            }
        }
        if (value.length && !array.length) {
            array.push({id: '1', answer: 'no match', question: 'нет совпадений'})
        }
        return array
    }
    useEffect(() => {
        const searchResults = searchWord(value, cards)
        setWordsResult(searchResults)
    }, [value])

    console.log(wordsResult)
    return (
        <div className={style.wrapper}>
            <BackArrow  path={'/'}/>
            <input className={style.input}
                   placeholder={'введите слово...'}
                   value={value}
                   onChange={onChangeHandler}/>
            <div className={style.cardsWrapper}>
            {wordsResult.map(word=><CardList key={word.id}question={word.question} answer={word.answer}/>)}
            </div>
            <BottomMenu/>
        </div>
    );
};

