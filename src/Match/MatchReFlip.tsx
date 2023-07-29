import React, {FC, useEffect, useState} from 'react';
//import style from './MatchReFlip.module.css'
import style from './Match.module.css'
import {ICard, IMatch, useMatchHook} from "../hooks/useMatch";

import cover from '../assets/images/match/logo.png'
import {MatchProgressBar} from "./MatchProgressBar/MatchProgressBar";
import {BackArrow} from "../Common/Components/BackArrow/BackArrow";
import {Timer} from "./Timer/Timer";
import {Modal} from "./Modal";
import {shuffleArray} from "../Utils/shuffle";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../Store/store";
import {saveBestLevel} from "../Store/pointsReducer";
import {createPointsToRedux, resetBoard} from "../Utils/matchFunctions";
import {useBonus} from "../hooks/useBonus";


export const MatchReFlip: FC<IMatch> = ({
                                                  cardsToPlay,
                                                  duration,
                                                  path,
                                                  description,
                                                  bestLevel,
                                                  setBestLevel,
                                                  levelNumber,
                                                  defaultPoints

                                              }) => {


    const {
        isLockBoard, setIsLockBoard, attempts, setAttempts,
        showModal, setShowModal, pairCounter, setPairCounter, isEndOfTime, setIsEndOfTime, running, setRunning
    } = useMatchHook()

    const dispatch = useDispatch<AppDispatch>()

    const {multiplyBonus} = useBonus()

    const [firstCard, setFirstCard] = useState<ICard | null>(null)
    const [secondCard, setSecondCard] = useState<ICard | null>(null)
    const [cards, setCards] = useState<ICard[]>(shuffleArray(cardsToPlay))
    const [timer, setTimer] = useState(duration);
    const [timeLeft, setTimeLeft] = useState(timer)
    useEffect(() => {
        setCards(shuffleArray(cardsToPlay))
    }, [cardsToPlay])

    useEffect(() => {
        if (pairCounter === cardsToPlay.length) {
            setShowModal(true)
            dispatch(saveBestLevel(levelNumber, createPointsToRedux(defaultPoints, timeLeft, attempts, multiplyBonus)))
            setTimeLeft(timer)
            setBestLevel(bestLevel > levelNumber + 2 ? bestLevel : levelNumber + 2)
            localStorage.setItem("bestLevel", JSON.stringify(levelNumber + 2));
        }
    }, [pairCounter, cardsToPlay])
    useEffect(() => {

        if (firstCard && secondCard) {
            checkMates();
        }
    }, [secondCard, firstCard]);

    useEffect(() => {
        setSecondCard(secondCard)
    }, [secondCard])


    useEffect(() => {


        setCards(cards.map((card) => {
            if (firstCard?.isMatched && secondCard?.isMatched) {
                if (card.secondName === firstCard?.secondName && card.secondName === secondCard?.secondName) {
                    return {
                        ...card,
                        isTotallyMatched: true
                    }
                } else if (card.id === firstCard?.id || card.id === secondCard?.id) {
                    return {
                        ...card,
                        isReFlipped: true
                    }
                } else {
                    return card
                }

            } else if (card.name === firstCard?.name && card.name === secondCard?.name) {
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
    }, [firstCard, secondCard])

    const addValueToState = (cardId: ICard) => {
        const clickedCard = cards.find((card) => card.id === cardId.id);

        if (clickedCard?.isMatched) {
            if (firstCard !== null && firstCard.id !== cardId.id) {
                setSecondCard(clickedCard);
                setCards(
                    cards.map((card) =>
                        card.id === clickedCard.id ? { ...card, isReFlipped: true } : card
                    )
                );
            } else if (secondCard === null) {
                setFirstCard(clickedCard);
                setCards(
                    cards.map((card) =>
                        card.id === clickedCard.id ? { ...card, isReFlipped: true } : card
                    )
                );
                setAttempts(attempts + 1);
            }
        } else {
            if (firstCard !== null && firstCard.id !== cardId.id) {
                setSecondCard(cardId)
                setCards(cards.map(card => card.id === secondCard?.id ? {...card, isFlipped: true} : card))
                setAttempts(attempts +1)
            } else {
                setFirstCard(cardId)
                setCards(cards.map(card => card.id === firstCard?.id ? {...card, isFlipped: true} : card))
            }
        }
    };

    const checkMates = () => {
        const clickedFirstCard = cards.find((card) => card.id === firstCard?.id);
        const clickedSecondCard = cards.find((card) => card.id === secondCard?.id);
        if (clickedFirstCard?.isMatched && clickedSecondCard?.isMatched) {
            if (clickedFirstCard?.secondName === clickedSecondCard?.secondName) {
                setIsLockBoard(true)
                setTimeout(() => {
                    setCards(cards.map(card => card.secondName === firstCard?.secondName && card.secondName === secondCard?.secondName ? {
                        ...card,
                        isTotallyMatched: true
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
                    resetBoard(setFirstCard, setSecondCard, setCards)
                }, 1000)

            }


        } else if (firstCard?.name === secondCard?.name) {
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
                resetBoard(setFirstCard, setSecondCard, setCards)
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
                cardsToPlayLengths={cardsToPlay.length * 2} pairCounter={pairCounter}/>
            <section className={style.wrapper}>
                <div className={style.mode}>{description}</div>
                <MatchProgressBar currentMatches={pairCounter} totalMatches={cardsToPlay.length}/>

                <div className={style.cardsContainer}>
                    {cards.map((card, index) => <button
                        className={card.isReFlipped ? `${style.card} ${style.flipped}` : card.isFlipped ? `${style.card} ${style.flipped}` : style.card}
                        key={index}
                        onClick={() => {
                            addValueToState(card)
                        }
                        }
                        disabled={isLockBoard || card.isReFlipped}
                    >
                        <div className={style.front}>

                            <
                                img
                                src={
                                    card.isTotallyMatched
                                        ? card.images && card.images[1]
                                        : card.isReFlipped
                                            ? card.images && card.images[1]
                                            : card.isMatched
                                                ? card.images && card.images[0]
                                                : card.isFlipped
                                                    ? card.images && card.images[0]
                                                    : cover
                                }/>
                        </div>
                    </button>)}
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
        </>
    );
};

