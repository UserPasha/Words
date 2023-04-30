import React, {FC, useEffect, useState} from 'react';
//import style from './MatchReFlip.module.css'
import style from './Match.module.css'
import { IReFlip, IReFlipMatch, useMatchHook} from "../hooks/useMatch";

import cover from '../assets/images/match/logo.png'
import {MatchProgressBar} from "./MatchProgressBar/MatchProgressBar";
import {BackArrow} from "../Common/Components/BackArrow/BackArrow";
import {Timer} from "./Timer/Timer";
import {Modal} from "./Modal";


export const MatchReFlip: FC<IReFlipMatch>  = ({cardsToPlay, duration, path, description}) => {

    const shuffleCards = (array: IReFlip[]): IReFlip[] => {
        if (array) {
            const shuffledArray = [...array];
            for (let i = shuffledArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
            }
            return shuffledArray;
        } else {
            return []
        }
    }
    const {isLockBoard, setIsLockBoard, attempts, setAttempts,
        showModal, setShowModal, pairCounter, setPairCounter, isEndOfTime, setIsEndOfTime, running, setRunning} = useMatchHook()

    const [firstCard, setFirstCard] = useState<IReFlip | null >(null)
    const [secondCard, setSecondCard] = useState<IReFlip | null >(null)
    const [cards, setCards] = useState<IReFlip[]>(shuffleCards(cardsToPlay))
    const [timer, setTimer] = useState(duration);
    useEffect(() => {
        setCards(shuffleCards(cardsToPlay))
    }, [cardsToPlay])

    useEffect(()=>{
        if(pairCounter === cardsToPlay.length){
            setShowModal(true)
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
            if(firstCard?.isMatched && secondCard?.isMatched){
                if(card.secondName === firstCard?.secondName && card.secondName === secondCard?.secondName){
                    return {
                        ...card,
                        isTotallyMatched: true
                    }
                }
                else if (card.id === firstCard?.id || card.id === secondCard?.id){
                    return {
                        ...card,
                        isReFlipped: true
                    }
                }
                else{
                    return card
                }

            }
            else if (card.name === firstCard?.name && card.name === secondCard?.name) {
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


    const resetBoard = () => {
        setFirstCard(null);
        setSecondCard(null);
        setCards((cards) =>
            cards.map((card) =>
                card.isTotallyMatched
                    ? card
                    : {
                        ...card,
                        isFlipped: false,
                        isReFlipped: false,
                    }
            )
        );
    };

    const checkMates = () => {
        const clickedFirstCard = cards.find((card) => card.id === firstCard?.id);
        const clickedSecondCard = cards.find((card) => card.id === secondCard?.id);
        if(clickedFirstCard?.isMatched && clickedSecondCard?.isMatched){
            if (clickedFirstCard?.secondName === clickedSecondCard?.secondName){
                setIsLockBoard(true)
                setTimeout(() => {
                    setCards(cards.map(card => card.secondName === firstCard?.secondName && card.secondName === secondCard?.secondName ? {
                        ...card,
                        isTotallyMatched: true
                    } : card))
                    setFirstCard(null)
                    setSecondCard(null)
                    setIsLockBoard(false)
                    setPairCounter(pairCounter +1)
                }, 500)
            }
            else {
                setIsLockBoard(true)
                setTimeout(() => {
                    setIsLockBoard(false)
                    resetBoard()
                }, 1000)

            }


        }
        else if (firstCard?.name === secondCard?.name) {
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

    const addValueToState = (cardId: IReFlip) => {
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

    const restartGame = () => {
        setCards(shuffleCards(cardsToPlay))
        setAttempts(0)
        setPairCounter(0)
    }
    const isModal = isEndOfTime || showModal
    return (
        <>
            <BackArrow path={'/match'}/>
            <Timer
                timer={timer} setTimer={setTimer}
                duration={duration} setIsEndOfTime={setIsEndOfTime} running={running} setRunning={setRunning}
                cardsToPlayLengths={cardsToPlay.length*2} pairCounter={pairCounter}/>
            <section className={style.wrapper}>
                <div className={style.mode}>{description}</div>
                <MatchProgressBar currentMatches={pairCounter} totalMatches={cardsToPlay.length}/>

        <div  className={style.cardsContainer}>
            {cards.map((card, index)=> <button  className={ card.isReFlipped ? `${style.card} ${style.flipped}`: card.isFlipped ? `${style.card} ${style.flipped}` : style.card}
                key={index}
                                                onClick={()=>{addValueToState(card)}}
                                                 disabled={isLockBoard || card.isReFlipped}
            >
                <div  className={style.front}>

                    <img src={card.isTotallyMatched ? card.image[1] : card.isReFlipped ? card.image[1] : card.isMatched ? card.image[0] : card.isFlipped ? card.image[0] : cover}/>
                </div>
            </button>)}
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
    );
};

