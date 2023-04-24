import React, {useState, useEffect, FC} from 'react';
import circleStyle from './Circle.module.css'
import {ICardMatch, IMatch, useMatchHook} from "../hooks/useMatch";
import {shuffleArray} from "./Match";
import {BackArrow} from "../Common/Components/BackArrow/BackArrow";
import {Timer} from "../Timer/Timer";
import style from "./Match.module.css";
import cover from "../assets/images/match/logo.png";
import {Modal} from "./Modal";

export const Circle: FC<IMatch> = ({cardsToPlay, duration, path, description})  => {
    const {isLockBoard, setIsLockBoard, firstCard, setFirstCard, secondCard, setSecondCard,attempts, setAttempts,
        showModal, setShowModal, pairCounter, setPairCounter, isEndOfTime, setIsEndOfTime, running, setRunning} = useMatchHook()
    const [cards, setCards] = useState<ICardMatch[]>(shuffleArray(cardsToPlay))
    const [timer, setTimer] = useState(duration);
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

    const resetBoard = () => {
        setFirstCard(null)
        setSecondCard(null)
        setCards(cards.map(card => card.isFlipped ? {...card, isFlipped: false} : card))
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
    const restartGame = () => {
        setCards(shuffleArray(cardsToPlay))
        setAttempts(0)
        setPairCounter(0)
    }
    // console.log('yo')
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
                duration={duration} setIsEndOfTime={setIsEndOfTime} running={running} setRunning={setRunning} />
            <div className={circleStyle.mode}>{description}</div>
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








