import React, {FC, useEffect, useState} from 'react';
import style from './Match.module.css'
import front from '../assets/images/1.png'
import cover from '../assets/images/2.png'

interface ICardMatch {
    id: number,
    name: string,
    image: string,
    isFlipped: boolean,
    isMatched: boolean

}

export const Match: FC = () => {

    const [cards, setCards] = useState<ICardMatch[]>([
            {
                id: 1,
                image: cover,
                isFlipped: false,
                name: 'a',
                isMatched: false
            },
            {
                id: 2,
                image: cover,
                isFlipped: false,
                name: 'b',
                isMatched: false
            },
            {
                id: 3,
                image: cover,
                isFlipped: false,
                name: 'a',
                isMatched: false
            },
            {
                id: 4,
                image: cover,
                isFlipped: false,
                name: 'b',
                isMatched: false
            }
        ]
    )
    const [isLockBoard, setIsLockBoard] = useState<boolean>(false)
    const [firstCared, setFirstCard] = useState<ICardMatch | null>(null)
    const [secondCared, setSecondCard] = useState<ICardMatch | null>(null)

    useEffect(() => {
        if (firstCared && secondCared) {
            checkMates();
        }
    }, [secondCared]);

    useEffect(()=>{
        console.log('eff  :  ' +secondCared)
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
            setCards(cards.map(card => card.name === firstCared?.name && card.name === secondCared?.name ? {
                ...card,
                isMatched: true
            } : card))

            resetBoard()
        } else {
            console.log('n '+firstCared?.name)
            console.log('n '+secondCared?.name)
            setIsLockBoard(true)
            setTimeout(() => {
                setIsLockBoard(false)
                resetBoard()
            }, 1000)

        }
    }

    const addValueToState = (cardId: ICardMatch) => {
        if (firstCared !==null) {
            setSecondCard(cardId)
            setCards(cards.map(card => card.id===secondCared?.id ? {...card, isFlipped: true}: card ))
            //checkMates()
        } else {

            setFirstCard(cardId)
            setCards(cards.map(card => card.id===firstCared ? {...card, isFlipped: true}: card ))
        }
    }

    return (
        <section className={style.wrapper}>
            <div className={style.cardsContainer}>
                {cards.map((card, index) => <button className={style.card}
                                                    key={index}
                                                    onClick={() => {
                                                        addValueToState(card)
                                                    }} disabled={isLockBoard || card.isMatched}>
                        <img src={card.isMatched ? front : card.isFlipped ? front : cover}/>
                    </button>
                )}
            </div>
        </section>

    );
};



