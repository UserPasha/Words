import React, {FC, useCallback, useEffect, useState} from 'react';
import style from './Match.module.css'
import {BackArrow} from "../Common/Components/BackArrow/BackArrow";
import {Modal} from "./Modal";
import {ICard, IMatch, IPattern,} from "../hooks/useMatch";
import {useMatchHook} from "../hooks/useMatch";
import {Timer} from "./Timer/Timer";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../Store/store";
import {saveBestLevel} from "../Store/pointsReducer";
import {shuffleArray} from "../Utils/shuffle";
import {createPointsToRedux, isArraysEqual, resetBoard} from "../Utils/matchFunctions";
import {MatchBoard} from "./MatchBoard/MatchBoard";
import {useBonus} from "../hooks/useBonus";
import {UseRotate} from "../hooks/useRotate";
import patternGameBackGround from "../assets/images/match/bg/yellowBG.jpg";


export const Match: FC<IMatch> = ({
                                      cardsToPlay,
                                      duration,
                                      path,
                                      description,
                                      bestLevel,
                                      setBestLevel,
                                      levelNumber,
                                      defaultPoints,
                                      isPatrickMode,
                                      rotate,
                                      patternCards,
                                      isPattern
                                  }) => {


    const {
        isLockBoard, setIsLockBoard, firstCard, setFirstCard, secondCard, setSecondCard, attempts, setAttempts,
        showModal, setShowModal, pairCounter, setPairCounter, isEndOfTime, setIsEndOfTime, running, setRunning
    } = useMatchHook()

    const {multiplyBonus} = useBonus()

    const dispatch = useDispatch<AppDispatch>();

    const [cards, setCards] = useState<ICard[]>(shuffleArray(cardsToPlay))

    const [timer, setTimer] = useState(duration);

    const [timeLeft, setTimeLeft] = useState(timer)
    //////////PATTERN
    const [pattern, setPattern] = useState<IPattern[]>(shuffleArray(patternCards))

    const [patternIndex, setPatternIndex] = useState<number>(0)
    //////////PATRICK
    const cardsToPlayLength = isPatrickMode ? cardsToPlay.length - 2 : cardsToPlay.length;
    useEffect(() => {
        if (firstCard && secondCard) {
            isPattern? patternCheckMates() : checkMates();
        }
    }, [secondCard, firstCard]);

    useEffect(() => {

        if (pairCounter === cardsToPlayLength / 2) {
            setShowModal(true)
            dispatch(saveBestLevel(levelNumber, createPointsToRedux(defaultPoints, timeLeft, attempts, multiplyBonus)))
            setBestLevel(bestLevel > levelNumber + 2 ? bestLevel : levelNumber + 2)
            localStorage.setItem("bestLevel", JSON.stringify(levelNumber + 2));
        }
    }, [pairCounter, cardsToPlayLength])

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
        setPattern(shuffleArray(patternCards))
        setPatternIndex(0)
    }, [patternCards])

    useEffect(() => {
        if (firstCard?.name === 'manager') {

            setCards((cards) => cards.map(card => card.name === secondCard?.name ? {...card, isMatched: true} : card))
            setTimeout(() => {
                setCards((cards) => cards.map(card => card.name === 'manager' ? {
                    ...card,
                    isMatched: true
                } : card))
            }, 100)
        }
        if (secondCard?.name === 'manager') {
            setCards((cards) => cards.map(card => card.name === firstCard?.name ? {...card, isMatched: true} : card))
            setTimeout(() => {
                setCards((cards) => cards.map(card => card.name === 'manager' ? {
                    ...card,
                    isMatched: true
                } : card))
            }, 100)
        }
        if (firstCard?.name === 'patrick' || secondCard?.name === 'patrick') {
            setCards((cards) =>
                cards.map((card) =>
                    card.name === 'patrick' ? {...card, isMatched: true} : card
                )
            );
            setFirstCard(null);
            setSecondCard(null);
            setIsLockBoard(false);
            setTimeout(() => setCards((cards) => shuffleArray(cards)), 100);
            setTimeout(() => {
                setCards((cards) =>
                    cards.map((card) =>
                        card.name === 'patrick' ? {...card, isMatched: false} : card
                    )
                );
            }, 5000)
        } else {
            setCards((cards) =>
                cards.map((card) => {
                    if (
                        card.name === firstCard?.name &&
                        card.name === secondCard?.name
                    ) {
                        return {
                            ...card,
                            isMatched: true,
                        };
                    } else if (
                        card.id === firstCard?.id ||
                        card.id === secondCard?.id
                    ) {
                        return {
                            ...card,
                            isFlipped: true,
                        };
                    } else {
                        return card;
                    }
                })
            );
        }
    }, [firstCard, secondCard]);

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
    const patternCheckMates = useCallback(() => {

        let patternName = pattern[patternIndex]
        if (patternIndex === patternCards.length) {
            setPatternIndex(0)
        }

        if (firstCard?.name === secondCard?.name &&  firstCard?.name === patternName.name) {
            setIsLockBoard(true)
            setTimeout(() => {
                setCards(cards.map(card => card.name === firstCard?.name && card.name === secondCard?.name ? {
                    ...card,
                    isMatched: true
                } : card))
                setPattern(pattern.map(patt => patt.name === firstCard.name
                    ?
                    {...patt, isColorful: true} : patt))
                setPatternIndex(patternIndex + 1)
                setFirstCard(null)
                setSecondCard(null)

                setIsLockBoard(false)
                setPairCounter(pairCounter + 1)
            }, 500)


        } else {
            setIsLockBoard(true)
            setTimeout(() => {
                setIsLockBoard(false)
                setFirstCard(null)
                setSecondCard(null)
                setCards(cards.map(card => card.isFlipped ? {...card, isFlipped: false} : card))
            }, 1000)

        }
    },[firstCard, secondCard])
    const checkMates = useCallback(() => {
       if (secondCard?.name === 'manager') {
            setCards(cards.map(card => card.name === 'manager' ? {
                ...card,
                isMatched: true
            } : card))
            setCards(cards.map(card => card.name === firstCard?.name ? {
                ...card,
                isMatched: true
            } : card))
            setPairCounter(prevPairCounter => prevPairCounter + 1);
        }
        if (firstCard?.name === 'manager') {
            setCards(cards.map(card => card.name === 'manager' ? {
                ...card,
                isMatched: true
            } : card))
            setCards(cards.map(card => card.name === secondCard?.name ? {
                ...card,
                isMatched: true
            } : card))
            setPairCounter(prevPairCounter => prevPairCounter + 1);
        }
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
    //console.table(cards)
const patternStyle = {backgroundImage: `url(${patternGameBackGround})`}
    const additionalStyle = isPattern ? patternStyle : {}
    return (
        <>
            <BackArrow path={'/match'}/>
            <Timer
                timer={timer} setTimer={setTimer}
                duration={duration} setIsEndOfTime={setIsEndOfTime} running={running} setRunning={setRunning}
                cardsToPlayLengths={cardsToPlayLength} pairCounter={pairCounter}
            />

            <section className={style.wrapper} style={additionalStyle}>
                <div className={style.mode}>{description}</div>
                {isPattern &&  <div className={style.cardsContainer}>{pattern.map((card, index) =>
                    <button
                        className={patternIndex === index ? `${style.card} ${style.flipped} ${style.smaller} ${style.red} ${style.scale}` : card.isColorful ? `${style.card} ${style.flipped} ${style.smaller} ${style.green}` : `${style.card} ${style.flipped} ${style.smaller} ${style.red}`}
                        key={index}>
                        <div className={style.front}><img src={card.image}/>
                        </div>

                    </button>
                )}</div>
                }
                <div className={style.cardsContainer}>


                    <MatchBoard
                        cards={cards}
                        onClick={addValueToState}
                        isLockBoard={isLockBoard}
                        isRotate={rotate}
                        isPattern={isPattern}
                    />

                </div>

                {isModal &&
                    <Modal setShowModal={setShowModal}
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
                    />

                }

            </section>

            {/*<DragMatch/>*/}
        </>

    );
};

