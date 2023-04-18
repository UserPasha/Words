import React, {FC, useEffect, useState} from 'react';
import style from '../Match/Match.module.css'
import {ICardMatch, IMatch, useMatchHook} from "../hooks/useMatch";
import {BackArrow} from "../Common/Components/BackArrow/BackArrow";
import cover from "../assets/images/match/logo.png";
import {Modal} from "../Match/Modal";
import {shuffleArray} from "../Match/Match";
import {Timer} from "../Timer/Timer";

export const TripleMatch: FC<IMatch> = ({cardsToPlay, duration, path}) => {
    const {
        isLockBoard, setIsLockBoard, firstCard, setFirstCard, secondCard, setSecondCard, attempts, setAttempts,
        showModal, setShowModal, pairCounter, setPairCounter, isEndOfTime, setIsEndOfTime, running, setRunning,
    } = useMatchHook()
    const [cards, setCards] = useState<ICardMatch[]>(shuffleArray(cardsToPlay))
    //console.log(cardsToPlay)
    const [thirdCard, setThirdCard] = useState<ICardMatch | null>(null)
    const [timer, setTimer] = useState(duration);

    useEffect(() => {
        if (firstCard && secondCard && thirdCard) {
            checkMates();
            //handleRotateClick()
        }
    }, [secondCard, firstCard, thirdCard]);

    useEffect(() => {
        if (pairCounter === cardsToPlay.length / 3) {
            setShowModal(true)
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

    const addValueToState = (cardId: ICardMatch) => {

        if (firstCard !== null && !secondCard && firstCard.id !== cardId.id

        ) {
            setSecondCard(cardId)
            setCards(cards.map(card => card.id === secondCard!.id ? {...card, isFlipped: true} : card))
        } else if (firstCard !== null && secondCard !== null && firstCard.id !== cardId.id && secondCard.id !== cardId.id

        ) {
            setThirdCard(cardId)
            setCards(cards.map(card => card.id === thirdCard?.id ? {...card, isFlipped: true} : card))
            setAttempts(attempts + 1)
        } else {
            setFirstCard(cardId)
            setCards(cards.map(card => card.id === firstCard?.id ? {...card, isFlipped: true} : card))
        }

    }
    // const addValueToState = (cardId: ICardMatch) => {
    //     if (firstCard && !secondCard && firstCard?.id !== cardId?.id) {
    //         setSecondCard(cardId);
    //         setCards(cards.map((card) => (card.id === secondCard!.id ? { ...card, isFlipped: true } : card)));
    //     } else if (firstCard && secondCard && firstCard?.id !== cardId?.id && secondCard?.id !== cardId?.id) {
    //         setThirdCard(cardId);
    //         setCards(cards.map((card) => (card.id === thirdCard?.id ? { ...card, isFlipped: true } : card)));
    //         setAttempts(attempts + 1);
    //     } else {
    //         setFirstCard(cardId);
    //         setCards(cards.map((card) => (card.id === firstCard?.id ? { ...card, isFlipped: true } : card)));
    //     }
    // };
      const restartGame = () => {
        setCards(shuffleArray(cardsToPlay))
        setAttempts(0)
        setPairCounter(0)
    }
    const resetBoard = () => {
        setFirstCard(null)
        setSecondCard(null)
        setThirdCard(null)
        setCards(cards.map(card => card.isFlipped ? {...card, isFlipped: false} : card))
    }
    const checkMates = () => {
        if (firstCard?.name === secondCard?.name && firstCard?.name === thirdCard?.name) {
            setIsLockBoard(true)
            setTimeout(() => {
                setCards(cards.map(card => card.name === firstCard?.name && card.name === secondCard?.name && firstCard?.name === thirdCard?.name ? {
                    ...card,
                    isMatched: true
                } : card))
                setFirstCard(null)
                setSecondCard(null)
                setThirdCard(null)
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

    //////////////ROTATE BOARD 90//////////////
    // const [rotationAngle, setRotationAngle] = useState(0);
    // const fieldStyle = {
    //     transform: `rotate(${rotationAngle}deg)`,
    // };
    // const handleRotateClick = () => {
    //     setRotationAngle(rotationAngle + 90);
    // };

    ////////////ROTATE CARDS///////////////
    // const [cardRotationAngle, setCardRotationAngle] = useState(0);
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setCardRotationAngle(cardRotationAngle + 10);
    //     }, 1000);
    //
    //     return () => clearInterval(intervalId);
    // }, [cardRotationAngle]);
    return (
        <>
            <BackArrow path={'/match'}/>
            <Timer
                timer={timer} setTimer={setTimer}
                duration={duration} setIsEndOfTime={setIsEndOfTime} running={running} setRunning={setRunning} />
            <section className={style.wrapper}
                    // style={fieldStyle}
            >
                <span>Попытки: {attempts}</span>
                <span>Пары: {pairCounter}</span>
                <div className={style.cardsContainer}>
                    {cards.map((card, index) => <button className={card.isFlipped ? style.flipped : style.card}
                                                        key={index}
                                                       // style={{ transform: `rotate(${cardRotationAngle}deg)` }}
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
                { showModal && <Modal setShowModal={setShowModal}
                                      attempts={attempts}
                                      isEndOfTime={isEndOfTime}
                                      setIsEndOfTime={setIsEndOfTime}
                                      setRunning={setRunning}
                                      duration={duration}
                                      setTimer={setTimer}
                                      restartGame={restartGame}
                                      path={path}
                />}
                {isEndOfTime && <Modal setShowModal={setShowModal}
                                       attempts={attempts}
                                       isEndOfTime={isEndOfTime}
                                       setIsEndOfTime={setIsEndOfTime}
                                       setRunning={setRunning}
                                       duration={duration}
                                       setTimer={setTimer}
                                       restartGame={restartGame}
                                       path={path}
                />}
                <button className={style.restartButton} onClick={restartGame}>Restart</button>
            </section>

            {/*<DragMatch/>*/}
        </>

    );
};

