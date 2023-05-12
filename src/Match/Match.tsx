import React, {FC, useEffect, useState} from 'react';
import style from './Match.module.css'
import cover from '../assets/images/match/logo.png'
import {BackArrow} from "../Common/Components/BackArrow/BackArrow";
import {Modal} from "./Modal";
import {ICard, IMatch, } from "../hooks/useMatch";
import {useMatchHook} from "../hooks/useMatch";
import {Timer} from "./Timer/Timer";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../Store/store";
import {saveBestLevel} from "../Store/pointsReducer";
import {shuffleArray} from "../Utils/shuffle";
import { createPointsToRedux, resetBoard} from "../Utils/matchFunctions";


export const Match: FC<IMatch> = ({
                                      cardsToPlay,
                                      duration,
                                      path,
                                      description,
                                      bestLevel,
                                      setBestLevel,
                                      levelNumber,
                                      defaultPoints,

                                  }) => {


    const {
        isLockBoard, setIsLockBoard, firstCard, setFirstCard, secondCard, setSecondCard, attempts, setAttempts,
        showModal, setShowModal, pairCounter, setPairCounter, isEndOfTime, setIsEndOfTime, running, setRunning
    } = useMatchHook()

    const dispatch = useDispatch<AppDispatch>();

    const [cards, setCards] = useState<ICard[]>(shuffleArray(cardsToPlay))

    const [timer, setTimer] = useState(duration);

    const [timeLeft, setTimeLeft] = useState(timer)



    useEffect(() => {
        if (firstCard && secondCard) {
            checkMates();
        }
    }, [secondCard, firstCard]);

    useEffect(() => {
        if (pairCounter === cardsToPlay.length / 2) {
            setShowModal(true)
            dispatch(saveBestLevel(levelNumber, createPointsToRedux(defaultPoints, timeLeft, attempts)))
            setBestLevel(bestLevel > levelNumber + 2 ? bestLevel : levelNumber + 2)
            localStorage.setItem("bestLevel", JSON.stringify(levelNumber + 2));
        }
    }, [pairCounter, cardsToPlay])

    useEffect(() => {
        setTimeLeft(timer)
    }, [timer])
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
        , [firstCard, secondCard])


    const addValueToState = (cardId: ICard) => {

        if (firstCard !== null && firstCard.id !== cardId.id) {
            setSecondCard(cardId)
            setCards(cards.map(card => card.id === secondCard?.id ? {...card, isFlipped: true} : card))
            setAttempts(attempts + 1)
        } else {
            setFirstCard(cardId)
            setCards(cards.map(card => card.id === firstCard?.id ? {...card, isFlipped: true} : card))
        }

    }
    const checkMates = () => {
        if (firstCard?.name === secondCard?.name) {
            setIsLockBoard(true)
            setTimeout(() => {
                setCards(cards.map(card => card.name === firstCard?.name && card.name === secondCard?.name ? {
                    ...card,
                    isMatched: true
                } : card))
                setFirstCard(null)
                setSecondCard(null)
                setIsLockBoard(false)
                setPairCounter(pairCounter + 1)
            }, 500)


        } else {
            setIsLockBoard(true)
            setTimeout(() => {
                setIsLockBoard(false)
                resetBoard(setFirstCard, setSecondCard,  setCards )
            }, 1000)

        }
    }





    const isModal = isEndOfTime || showModal

    return (
        <>
            <BackArrow path={'/match'}/>
            <Timer
                timer={timer} setTimer={setTimer}
                duration={duration} setIsEndOfTime={setIsEndOfTime} running={running} setRunning={setRunning}
                cardsToPlayLengths={cardsToPlay.length} pairCounter={pairCounter}
            />

            <section className={style.wrapper}>
                <div className={style.mode}>{description}</div>

                <div className={style.cardsContainer}>
                    {cards.map((card, index) => <button
                            className={card.isMatched ? `${style.card} ${style.matched}` : card.isFlipped ? `${style.card} ${style.flipped}` : style.card}
                            key={index}
                            onClick={() => {
                                addValueToState(card)
                            }} disabled={isLockBoard || card.isMatched}>
                            <div className={style.front}>
                                <img src={card.isMatched ? card.image : card.isFlipped ? card.image : cover }
                                />
                            </div>

                        </button>
                    )}
                </div>

                {isModal && <Modal setShowModal={setShowModal}
                                   attempts={attempts}
                                   isEndOfTime={isEndOfTime}
                                   setIsEndOfTime={setIsEndOfTime}
                                   setRunning={setRunning}
                                   duration={duration}
                                   setTimer={setTimer}
                                   path={path}
                                   timeLeft={timeLeft}
                                   defaultPoints={defaultPoints}

                                   setCards={setCards}
                                   setAttempts={setAttempts}
                                   setPairCounter={setPairCounter}
                                   cardsToPlay={cardsToPlay}
                />}

            </section>

            {/*<DragMatch/>*/}
        </>

    );
};



