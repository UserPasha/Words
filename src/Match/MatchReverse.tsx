 import React, {FC, useEffect, useState} from 'react';
 import {BackArrow} from "../Common/Components/BackArrow/BackArrow";
 import {Timer} from "../Timer/Timer";
 import {ICardMatch, IMatch, useMatchHook} from "../hooks/useMatch";
 import style from "./Match.module.css";
 import cover from "../assets/images/match/logo.png";
 import {Modal} from "./Modal";
 import {shuffleArray} from "./Match";

 // interface IMatchComponent {
 //     duration: number
 //     description: string
 //     cardsToPlay: ICardMatch[]
 //     path: string
 // }
export const MatchReverse:FC<IMatch> = (
    {duration,
        description,
        cardsToPlay,
        path}) => {


    const [timer, setTimer] = useState(duration);
    const {isLockBoard, setIsLockBoard, firstCard, setFirstCard, secondCard, setSecondCard,attempts, setAttempts,
        showModal, setShowModal, pairCounter, setPairCounter, isEndOfTime, setIsEndOfTime, running, setRunning} = useMatchHook()

    const [cards, setCards] = useState<ICardMatch[]>(shuffleArray(cardsToPlay))

    useEffect(() => {
        if (firstCard && secondCard) {
            checkMates();
        }
    }, [secondCard, firstCard]);

    useEffect(()=>{
        if(pairCounter === cardsToPlay.length/2){
            setShowModal(true)
        }
    }, [pairCounter, cardsToPlay])

    useEffect(() => {
        setSecondCard(secondCard)
    }, [secondCard])

    useEffect(() => {
        setCards(shuffleArray(cardsToPlay))
    }, [cardsToPlay])

    useEffect(() => {
            setCards(cards.map((card) => {
                if (card.name === firstCard?.name && card.name === secondCard?.name) {
                    return {
                        ...card,
                        isMatched: true
                    }
                } else if (card.id === firstCard?.id || card.id === secondCard?.id) {
                    return {
                        ...card,
                        isFlipped: true
                    }
                } else {
                    return card
                }
            }))
        }
        , [firstCard?.name, secondCard?.name])

    const addValueToState = (cardId: ICardMatch) => {

        if (firstCard !== null && firstCard.id !== cardId.id) {
            setSecondCard(cardId)
            setCards(cards.map(card => card.id === secondCard?.id ? {...card, isFlipped: true} : card))
            setAttempts(attempts +1)
        } else {
            setFirstCard(cardId)
            setCards(cards.map(card => card.id === firstCard?.id ? {...card, isFlipped: true} : card))
        }

    }

    const resetBoard = () => {
        setFirstCard(null)
        setSecondCard(null)
        setCards(cards.map(card => card.isFlipped ? {...card, isFlipped: false} : card))
    }

    const checkMates = () => {
        if (firstCard?.name !== secondCard?.name) {
            setIsLockBoard(true)
            setTimeout(() => {
                setCards(cards.map(card => card.id === firstCard?.id  ? {
                    ...card,
                    isMatched: true
                } : card))
                setCards(cards.map(card => card.id === secondCard?.id  ? {
                    ...card,
                    isMatched: true
                } : card))
                setFirstCard(null)
                setSecondCard(null)
                setIsLockBoard(false)
                setPairCounter(pairCounter +1)
            }, 500)


        } else {
            setIsLockBoard(true)
            setTimeout(() => {
                setIsLockBoard(false)
                resetBoard()
            }, 1000)

        }
    }

    const restartGame = () => {
        setCards(shuffleArray(cardsToPlay))
        setAttempts(0)
        setPairCounter(0)
    }

    const isModal = isEndOfTime || showModal

    return (
        <>
            <BackArrow path={'/match'}/>
            <Timer
                timer={timer} setTimer={setTimer}
                duration={duration} setIsEndOfTime={setIsEndOfTime} running={running} setRunning={setRunning} />
            <section className={style.wrapper}>
                <div className={style.mode}>{description}</div>
                <div className={style.cardsContainer}>
                    {cards.map((card, index) => <button className={ card.isFlipped ? `${style.card} ${style.flipped}` : style.card}
                                                        key={index}
                                                        onClick={() => {
                                                            addValueToState(card)
                                                        }} disabled={isLockBoard || card.isMatched}>
                            <div className={style.front}>
                                <img src={card.isMatched ? card.image : card.isFlipped ? card.image : cover}
                                />
                            </div>

                        </button>
                    )}
                </div>

                {isModal &&  <Modal setShowModal={setShowModal}
                                    attempts={attempts}
                                    isEndOfTime={isEndOfTime}
                                    setIsEndOfTime={setIsEndOfTime}
                                    setRunning={setRunning}
                                    duration={duration}
                                    setTimer={setTimer}
                                    restartGame={restartGame}
                                    path={path}
                />}

            </section>
        </>
    )
}
