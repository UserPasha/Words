import React, { FC, useEffect, useState} from 'react';
import style from '../Match/Match.module.css'
import {ICard, IPattern, IPatternCards, useMatchHook} from "../hooks/useMatch";
import {BackArrow} from "../Common/Components/BackArrow/BackArrow";
import cover from "../assets/images/match/logo.png";
import {Modal} from "../Match/Modal";

import {Timer} from "../Match/Timer/Timer";
import patternGameBackGround from '../assets/images/match/bg/yellowBG.jpg'
import {shuffleArray} from "../Utils/shuffle";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../Store/store";
import {saveBestLevel} from "../Store/pointsReducer";
import { createPointsToRedux} from "../Utils/matchFunctions";
import {useBonus} from "../hooks/useBonus";
import {UseRotate} from "../hooks/useRotate";


export const TripleMatchCopy: FC<IPatternCards> = ({
                                                       cardsToPlay,
                                                       duration,
                                                       path,
                                                       rotate,
                                                       description,
                                                       patternCards,
                                                       isChangedSize,
                                                       setBestLevel,
                                                       levelNumber,
                                                       bestLevel,
                                                       defaultPoints
                                                   }) => {

    const {
        isLockBoard, setIsLockBoard, firstCard, setFirstCard, secondCard, setSecondCard, attempts, setAttempts,
        showModal, setShowModal, pairCounter, setPairCounter, isEndOfTime, setIsEndOfTime, running, setRunning,
    } = useMatchHook()

    const {multiplyBonus} = useBonus()

    const dispatch = useDispatch<AppDispatch>();

    const [cards, setCards] = useState<ICard[]>(shuffleArray(cardsToPlay))

    const [thirdCard, setThirdCard] = useState<ICard | null>({
        id: 0,
        name: '',
        isMatched: false,
        isFlipped: false,
        image: '',
        isColorful: false
    })
    const [timer, setTimer] = useState(duration);

    const [pattern, setPattern] = useState<IPattern[]>(shuffleArray(patternCards))
    const [patternIndex, setPatternIndex] = useState<number>(0)

    const [timeLeft, setTimeLeft] = useState(timer)

    useEffect(() => {
        if (firstCard && secondCard && thirdCard) {
            checkMates();
        }
    }, [secondCard, firstCard, thirdCard]);

    useEffect(() => {
        if (pairCounter === cardsToPlay.length / 3) {
            setShowModal(true)
            dispatch(saveBestLevel(levelNumber, createPointsToRedux(defaultPoints, timeLeft, attempts, multiplyBonus)))
            setTimeLeft(timer)
            setBestLevel(bestLevel > levelNumber + 2 ? bestLevel : levelNumber + 2)
            localStorage.setItem("bestLevel", JSON.stringify(levelNumber + 2));
        }
    }, [pairCounter, cardsToPlay])

    useEffect(() => {
        setSecondCard(secondCard)
    }, [secondCard])

    useEffect(() => {
        setThirdCard(thirdCard)
    }, [thirdCard])
    useEffect(() => {
        setCards(shuffleArray(cardsToPlay))
    }, [cardsToPlay])

    useEffect(() => {
        setPattern(shuffleArray(patternCards))
        setPatternIndex(0)
    }, [patternCards])

    //console.log(patternIndex)
    useEffect(() => {
            setCards(cards.map((card) => {
                if (card.name === firstCard?.name && card.name === secondCard?.name && card.name === thirdCard?.name) {
                    return {
                        ...card,
                        isMatched: true
                    }
                } else if (card.id === firstCard?.id || card.id === secondCard?.id || card.id === thirdCard?.id) {
                    return {
                        ...card,
                        isFlipped: true
                    }
                } else {
                    return card
                }
            }))
        }
        , [firstCard?.name, secondCard?.name, thirdCard?.name])

    const addValueToState = (cardId: ICard) => {
        if (thirdCard?.id !== 0 && secondCard !== null && thirdCard?.id !== cardId.id && secondCard.id !== cardId.id) {
            setFirstCard(cardId);
            setCards(cards.map((card) => (card.id === firstCard?.id ? {...card, isFlipped: true} : card)));
        } else if (thirdCard?.id !== 0 && thirdCard?.id !== cardId.id) {
            setSecondCard(cardId);
            setCards(cards.map((card) => (card.id === secondCard?.id ? {...card, isFlipped: true} : card)));
            setAttempts(attempts + 1);
        } else {
            setThirdCard(cardId);
            setCards(cards.map((card) => (card.id === thirdCard?.id ? {...card, isFlipped: true} : card)));
        }
    };
    const resetBoard = () => {
        setFirstCard(null)
        setSecondCard(null)
        setThirdCard({id: 0, name: '', isMatched: false, isFlipped: false, image: '', isColorful: false})
        setCards(cards.map(card => card.isFlipped ? {...card, isFlipped: false} : card))
    }

    const checkMates = () => {

        let patternName = pattern[patternIndex]
        if (patternIndex === patternCards.length) {
            setPatternIndex(0)
        }

        if (firstCard?.name === secondCard?.name && firstCard?.name === thirdCard?.name && firstCard?.name === patternName.name) {
            setIsLockBoard(true)
            setTimeout(() => {
                setCards(cards.map(card => card.name === firstCard?.name && card.name === secondCard?.name && firstCard?.name === thirdCard?.name ? {
                    ...card,
                    isMatched: true
                } : card))
                setPattern(pattern.map(patt => patt.name === firstCard.name
                    ?
                    {...patt, isColorful: true} : patt))
                setPatternIndex(patternIndex + 1)
                setFirstCard(null)
                setSecondCard(null)
                setThirdCard({id: 0, name: '', isMatched: false, isFlipped: false, image: '', isColorful: false})
                setIsLockBoard(false)
                setPairCounter(pairCounter + 1)
            }, 500)


        } else {
            setIsLockBoard(true)
            setTimeout(() => {
                setIsLockBoard(false)
                resetBoard()
            }, 1000)

        }
    }

    const {rotateStyle} = UseRotate()


    const chooseStyle = rotate ? rotateStyle : {}
    const isModal = isEndOfTime || showModal


    return (
        <>
            <BackArrow path={'/match'}/>
            <Timer
                timer={timer} setTimer={setTimer}
                duration={duration} setIsEndOfTime={setIsEndOfTime} running={running} setRunning={setRunning}
                cardsToPlayLengths={cardsToPlay.length} pairCounter={pairCounter}/>


            <section className={style.wrapper}
                     style={{backgroundImage: `url(${patternGameBackGround})`}}
            >
                <div className={style.mode}>{description}</div>
                <div className={style.cardsContainer}>{pattern.map((card, index) =>
                    <button
                        className={patternIndex === index ? `${style.card} ${style.flipped} ${style.smaller} ${style.red} ${style.scale}` : card.isColorful ? `${style.card} ${style.flipped} ${style.smaller} ${style.green}` : `${style.card} ${style.flipped} ${style.smaller} ${style.red}`}
                        key={index}>
                        <div className={style.front}><img src={card.image}/>
                        </div>

                    </button>
                )}</div>


                <div className={style.cardsContainer}
                >
                    {cards.map((card, index) => <button
                            className={card.isFlipped ? `${style.card} ${style.flipped} ${style.smaller}` : `${style.card} ${style.smaller} `}
                            key={index}
                            style={chooseStyle}
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

