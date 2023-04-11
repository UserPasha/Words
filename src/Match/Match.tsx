import React, {FC, useEffect, useState} from 'react';
import style from './Match.module.css'
import cover from '../assets/images/2.png'
import totalOil from '../assets/images/match/total.png'
import mannFilter from '../assets/images/match/mann-filter.jpg'
import bluePrint from '../assets/images/match/Blue Print.png'
import asMetal from '../assets/images/match/asmetal.png'
import {DragMatch} from "../DragMatch/DragMatch";




interface ICardMatch {
    id: number,
    name: string,
    image: string,
    isFlipped: boolean,
    isMatched: boolean
}

export const Match: FC = () => {
    function shuffleArray(array: ICardMatch[]): ICardMatch[] {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }

    const [cards, setCards] = useState<ICardMatch[]>(shuffleArray([
            {
                id: 1,
                image: totalOil,
                isFlipped: false,
                name: 'a',
                isMatched: false
            },
            {
                id: 2,
                image: mannFilter,
                isFlipped: false,
                name: 'b',
                isMatched: false
            },
            {
                id: 3,
                image: totalOil,
                isFlipped: false,
                name: 'a',
                isMatched: false
            },
            {
                id: 4,
                image: mannFilter,
                isFlipped: false,
                name: 'b',
                isMatched: false
            },
        {
            id: 5,
            image: bluePrint,
            isFlipped: false,
            name: 'c',
            isMatched: false
        },
        {
            id: 6,
            image: asMetal,
            isFlipped: false,
            name: 'd',
            isMatched: false
        },
        {
            id: 7,
            image: bluePrint,
            isFlipped: false,
            name: 'c',
            isMatched: false
        },
        {
            id: 8,
            image: asMetal,
            isFlipped: false,
            name: 'd',
            isMatched: false
        }
        ])
    )
    const [isLockBoard, setIsLockBoard] = useState<boolean>(false)
    const [firstCared, setFirstCard] = useState<ICardMatch | null>(null)
    const [secondCared, setSecondCard] = useState<ICardMatch | null>(null)


    useEffect(() => {
        if (firstCared && secondCared) {
            checkMates();
        }
    }, [secondCared, firstCared]);

    useEffect(()=>{
        setSecondCard(secondCared)
    },[secondCared])

    useEffect(()=>{
        setCards(cards.map((card) => {
            if (card.name === firstCared?.name && card.name === secondCared?.name){
                return {
                    ...card,
                    isMatched: true
                }}
                else if(card.id === firstCared?.id || card.id === secondCared?.id) {
                    return {
                    ...card,
                        isFlipped: true
                    }
                } else {
                    return card
                }
            }))
        }
    , [firstCared?.name, secondCared?.name])

    const resetBoard = () => {
        setFirstCard(null)
        setSecondCard(null)
        setCards(cards.map(card => card.isFlipped ? {...card, isFlipped: false} : card))
    }
    const checkMates = () => {
        if (firstCared?.name === secondCared?.name) {
            setIsLockBoard(true)
            setTimeout(()=>{
                setCards(cards.map(card => card.name === firstCared?.name && card.name === secondCared?.name ? {
                    ...card,
                    isMatched: true
                } : card))
                setFirstCard(null)
                setSecondCard(null)
                setIsLockBoard(false)
            }, 500)



        } else {
            setIsLockBoard(true)
            setTimeout(() => {
                setIsLockBoard(false)
                resetBoard()
            }, 1000)

        }
    }

    const addValueToState = (cardId: ICardMatch) => {
        if (firstCared !==null && firstCared.id !== cardId.id) {
            setSecondCard(cardId)
            setCards(cards.map(card => card.id===secondCared?.id ? {...card, isFlipped: true}: card ))
        } else {

            setFirstCard(cardId)
            setCards(cards.map(card => card.id===firstCared?.id ? {...card, isFlipped: true}: card ))
        }
    }

    return (
        <>
        <section className={style.wrapper}>
            <div className={style.cardsContainer}>
                {cards.map((card, index) => <button className={ card.isFlipped ? style.flipped : style.card  }
                                                    key={index}
                                                    onClick={() => {
                                                        addValueToState(card)
                                                    }} disabled={isLockBoard || card.isMatched}>
                    <div  className={style.front}>
                        <img src={card.isMatched ? card.image : card.isFlipped ? card.image  : cover}
                            />
                    </div>

                    </button>
                )}
            </div>
        </section>
            <DragMatch/>
        </>

    );
};



