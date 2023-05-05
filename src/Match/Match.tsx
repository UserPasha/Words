import React, {FC, useEffect, useState} from 'react';
import style from './Match.module.css'
import cover from '../assets/images/match/logo.png'
import {BackArrow} from "../Common/Components/BackArrow/BackArrow";
import {Modal} from "./Modal";
import {ICardMatch, IMatch, IPattern, IReFlip} from "../hooks/useMatch";
import {useMatchHook} from "../hooks/useMatch";
import {Timer} from "./Timer/Timer";



export const shuffleArray = (array: ICardMatch[] | IPattern[]): ICardMatch[]| IPattern[] =>{
    if(array){
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

export const Match: FC<IMatch> = ({cardsToPlay, duration, path, description, bestLevel,setBestLevel, levelNumber}) => {

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
        , [firstCard, secondCard])


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


     //useEffect + modal
    //loading imitation + quotes
    // 8 cards - 12 att = perf, 14 - good, 14>bad 20> worst 1000pts + (perf =>bonus (att) 20%, good=< bonus 5%, bad -5%, worst - 20% )
    // 12 cards - 22 att = perf, 28 - good, 14>bad 1300pts + bonus (att)
    // 16 cards - 28 att = perf, 42 - good, 14>bad 1900pts + bonus (att)
    // progressBar?
    //rewrite triple logic without null


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

    return (
        <>
            <BackArrow path={'/match'}/>
            <Timer
                timer={timer} setTimer={setTimer}
                duration={duration} setIsEndOfTime={setIsEndOfTime} running={running} setRunning={setRunning}
            cardsToPlayLengths={cardsToPlay.length} pairCounter={pairCounter}/>

            <section className={style.wrapper}>
                <div className={style.mode}>{description}</div>

                <div className={style.cardsContainer}>
                    {cards.map((card, index) => <button className={ card.isFlipped ? `${style.card} ${style.flipped}` : style.card}
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

            {/*<DragMatch/>*/}
        </>

    );
};



