import React, {FC, useEffect, useState} from 'react';
import style from './Match.module.css'
import cover from '../assets/images/match/logo.png'
import {BackArrow} from "../Common/Components/BackArrow/BackArrow";
import {Modal} from "./Modal";
import {ICardMatch, IMatch} from "../hooks/useMatch";
import {useMatchHook} from "../hooks/useMatch";



export const shuffleArray = (array: ICardMatch[]): ICardMatch[] =>{
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

export const Match: FC<IMatch> = ({cardsToPlay}) => {

  const {isLockBoard, setIsLockBoard, firstCared, setFirstCard, secondCared, setSecondCard,attempts, setAttempts,
      showModal, setShowModal, pairCounter, setPairCounter} = useMatchHook()
    const [cards, setCards] = useState<ICardMatch[]>(shuffleArray(cardsToPlay))

    useEffect(() => {
        if (firstCared && secondCared) {
            checkMates();
        }
    }, [secondCared, firstCared]);

    useEffect(()=>{
        if(pairCounter === cardsToPlay.length/2){
            setShowModal(true)
        }
    }, [pairCounter, cardsToPlay])

    useEffect(() => {
        setSecondCard(secondCared)
    }, [secondCared])

    useEffect(() => {
            setCards(cards.map((card) => {
                if (card.name === firstCared?.name && card.name === secondCared?.name) {
                    return {
                        ...card,
                        isMatched: true
                    }
                } else if (card.id === firstCared?.id || card.id === secondCared?.id) {
                    return {
                        ...card,
                        isFlipped: true
                    }
                } else {
                    return card
                }
            }))
        }
        , [firstCared?.name, secondCared?.name])

    const resetBoard = () => {
        setFirstCard(null)
        setSecondCard(null)
        setCards(cards.map(card => card.isFlipped ? {...card, isFlipped: false} : card))
    }
    const checkMates = () => {
        if (firstCared?.name === secondCared?.name) {
            setIsLockBoard(true)
            setTimeout(() => {
                setCards(cards.map(card => card.name === firstCared?.name && card.name === secondCared?.name ? {
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


     //useEffect + modal
    //loading imitation + quotes
    // 8 cards - 12 att = perf, 14 - good, 14>bad 20> worst 1000pts + (perf =>bonus (att) 20%, good=< bonus 5%, bad -5%, worst - 20% )
    // 12 cards - 22 att = perf, 28 - good, 14>bad 1300pts + bonus (att)
    // 16 cards - 28 att = perf, 42 - good, 14>bad 1900pts + bonus (att)
    // progressBar?
    //rewrite triple logic without null


    const addValueToState = (cardId: ICardMatch) => {

        if (firstCared !== null && firstCared.id !== cardId.id) {
            setSecondCard(cardId)
            setCards(cards.map(card => card.id === secondCared?.id ? {...card, isFlipped: true} : card))
            setAttempts(attempts +1)
        } else {
            setFirstCard(cardId)
            setCards(cards.map(card => card.id === firstCared?.id ? {...card, isFlipped: true} : card))
        }

    }
    const restartGame = () => {
        setCards(shuffleArray(cardsToPlay))
        setAttempts(0)
        setPairCounter(0)
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
                {showModal &&  <Modal closeModal={setShowModal} attempts={attempts}/>}
                <button className={style.restartButton} onClick={restartGame}>Restart</button>
            </section>

            {/*<DragMatch/>*/}
        </>

    );
};



