import React, {useState, useEffect, FC, useCallback} from 'react';
import circleStyle from './Circle.module.css'
import {ICard, IMatch, useMatchHook} from "../hooks/useMatch";

import {BackArrow} from "../Common/Components/BackArrow/BackArrow";
import {Timer} from "./Timer/Timer";
import style from "./Match.module.css";
import cover from "../assets/images/match/logo.png";
import {Modal} from "./Modal";
import {shuffleArray} from "../Utils/shuffle";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../Store/store";
import {saveBestLevel} from "../Store/pointsReducer";
import {createPointsToRedux, isArraysEqual, resetBoard} from "../Utils/matchFunctions";
import {useBonus} from "../hooks/useBonus";

export const Circle: FC<IMatch> = ({
                                       cardsToPlay,
                                       duration,
                                       path,
                                       description,
                                       bestLevel,
                                       setBestLevel,
                                       levelNumber,
                                       defaultPoints})  => {

    const {isLockBoard, setIsLockBoard, firstCard, setFirstCard, secondCard, setSecondCard,attempts, setAttempts,
        showModal, setShowModal, pairCounter, setPairCounter, isEndOfTime, setIsEndOfTime, running, setRunning,} = useMatchHook()

    const dispatch = useDispatch<AppDispatch>();

    const {multiplyBonus} = useBonus()

    const [cards, setCards] = useState<ICard[]>(shuffleArray(cardsToPlay))
    const [timer, setTimer] = useState(duration);
    const [timeLeft, setTimeLeft] = useState(timer)
    useEffect(() => {
        if (firstCard && secondCard) {
            checkMates();
        }
    }, [secondCard, firstCard]);

    useEffect(()=>{
        if(pairCounter === cardsToPlay.length/2){
            setShowModal(true)
            dispatch(saveBestLevel(levelNumber,  createPointsToRedux(defaultPoints, timeLeft, attempts, multiplyBonus)))
            setTimeLeft(timer)
            setBestLevel(bestLevel>levelNumber+2 ? bestLevel : levelNumber +2)
            localStorage.setItem("bestLevel", JSON.stringify(levelNumber+2));
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

    const addValueToState = useCallback((cardId: ICard) => {
        if (firstCard !== null && firstCard.id !== cardId.id) {
            setSecondCard(cardId);
            setAttempts(prevAttempts => prevAttempts + 1);
            setCards(prevCards => {
                const newCards = prevCards.map(card =>
                    card.id === secondCard?.id ? {...card, isFlipped: true} : card
                );
                return isArraysEqual(prevCards, newCards) ? prevCards : newCards;
            });
        } else {
            setFirstCard(cardId);
            setCards(prevCards => {
                const newCards = prevCards.map(card =>
                    card.id === firstCard?.id ? {...card, isFlipped: true} : card
                );
                return isArraysEqual(prevCards, newCards) ? prevCards : newCards;
            });
        }
    }, [firstCard, secondCard]);
    const checkMates = useCallback(() => {
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
                setPairCounter(prevPairCounter => prevPairCounter + 1);
            }, 500)

        } else {
            setIsLockBoard(true)
            setTimeout(() => {
                setIsLockBoard(false)
                resetBoard(setFirstCard, setSecondCard, setCards)
            }, 1000)

        }
    }, [firstCard, secondCard])

    const isModal = isEndOfTime || showModal
    ////////////ROTATE BOARD 90//////////////
    const [rotationAngle, setRotationAngle] = useState(0);
    const fieldStyle = {
        transform: `rotate(${rotationAngle}deg)`,
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
            setRotationAngle(rotationAngle + 0.5);
        }, 50);

        return () => clearInterval(intervalId);
    }, [rotationAngle]);
    return (
        <>
            <BackArrow path={'/match'}/>
            <Timer
                timer={timer} setTimer={setTimer}
                duration={duration} setIsEndOfTime={setIsEndOfTime} running={running} setRunning={setRunning}
                cardsToPlayLengths={cardsToPlay.length} pairCounter={pairCounter}/>
            <div className={circleStyle.mode}>{description}</div>
            {isModal &&  <Modal setShowModal={setShowModal}
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
            <section className={circleStyle.wrapper} style={fieldStyle}>

                <div
                    className={style.cardsContainer}

                >
                    {cards.map((card, index) =>  (<div className={`container container${index + 1}`} key={index}>
                        <button className={ card.isFlipped ? `${circleStyle.card} ${circleStyle.flipped}` : circleStyle.card}
                                key={index}
                                onClick={() => {
                                    addValueToState(card)
                                }} disabled={isLockBoard || card.isMatched}>
                            <div className={circleStyle.front}>
                                <img src={card.isMatched ? card.image : card.isFlipped ? card.image : cover}
                                />
                            </div>

                        </button></div>)
                    )}
                </div>





            </section>
        </>
    )
}