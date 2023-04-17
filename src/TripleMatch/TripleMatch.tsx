import React, {FC, useEffect, useState} from 'react';
import style from '../Match/Match.module.css'
import {ICardMatch, IMatch, useMatchHook} from "../hooks/useMatch";
import {BackArrow} from "../Common/Components/BackArrow/BackArrow";
import cover from "../assets/images/match/logo.png";
import {Modal} from "../Match/Modal";
import {shuffleArray} from "../Match/Match";

export const TripleMatch: FC<IMatch> = ({cardsToPlay}) => {
    const {
        isLockBoard, setIsLockBoard, firstCared, setFirstCard, secondCared, setSecondCard, attempts, setAttempts,
        showModal, setShowModal, pairCounter, setPairCounter
    } = useMatchHook()
    const [cards, setCards] = useState<ICardMatch[]>(shuffleArray(cardsToPlay))
    const [thirdCard, setThirdCard] = useState<ICardMatch | null>(null)
    useEffect(() => {
        if (firstCared && secondCared && thirdCard) {
            checkMates();
        }
    }, [secondCared, firstCared, thirdCard]);

    useEffect(() => {
        if (pairCounter === cardsToPlay.length / 3) {
            setShowModal(true)
        }
    }, [pairCounter, cardsToPlay])

    useEffect(() => {
        setSecondCard(secondCared)
    }, [secondCared])

    useEffect(() => {
        setThirdCard(thirdCard)
    }, [thirdCard])
    // useEffect(() => {
    //     setFirstCard(firstCared)
    // }, [firstCared])

    useEffect(() => {
            setCards(cards.map((card) => {
                if (card.name === firstCared?.name && card.name === secondCared?.name && card.name === thirdCard?.name) {
                    return {
                        ...card,
                        isMatched: true
                    }
                } else if (card.id === firstCared?.id || card.id === secondCared?.id || card.id === thirdCard?.id) {
                    return {
                        ...card,
                        isFlipped: true
                    }
                } else {
                    return card
                }
            }))
        }
        , [firstCared?.name, secondCared?.name, thirdCard?.name])

    console.log(firstCared, secondCared, thirdCard)
    const addValueToState = (cardId: ICardMatch) => {


        if (firstCared !== null && secondCared === null  && firstCared.id !== cardId.id

            ) {
            setSecondCard(cardId)
            setCards(cards.map(card => card.id === secondCared!.id ? {...card, isFlipped: true} : card))
        }
        else if(firstCared !== null && secondCared!==null && firstCared.id !== cardId.id && secondCared.id !== cardId.id

    ){
            setThirdCard(cardId)
            setCards(cards.map(card => card.id === thirdCard?.id ? {...card, isFlipped: true} : card))
            setAttempts(attempts + 1)
        }
        else {
            setFirstCard(cardId)
            setCards(cards.map(card => card.id === firstCared?.id ? {...card, isFlipped: true} : card))
        }

    }
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
        if (firstCared?.name === secondCared?.name && firstCared?.name === thirdCard?.name) {
            setIsLockBoard(true)
            setTimeout(() => {
                setCards(cards.map(card => card.name === firstCared?.name && card.name === secondCared?.name && firstCared?.name === thirdCard?.name ? {
                    ...card,
                    isMatched: true
                } : card))
                setFirstCard(null)
                setSecondCard(null)
                setThirdCard(null)
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

    return (
        <>
            <BackArrow path={'/match'}/>
            <section className={style.wrapper}>
                <span>Попытки: {attempts}</span>
                <span>Пары: {pairCounter}</span>
                <div className={style.cardsContainer}>
                    {cards.map((card, index) => <button className={card.isFlipped ? style.flipped : style.card}
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
                {showModal && <Modal closeModal={setShowModal} attempts={attempts}/>}
                <button className={style.restartButton} onClick={restartGame}>Restart</button>
            </section>

            {/*<DragMatch/>*/}
        </>

    );
};

