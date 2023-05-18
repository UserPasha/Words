import React, {FC, useCallback, useEffect, useState} from 'react';
import style from './Match.module.css'
import {BackArrow} from "../Common/Components/BackArrow/BackArrow";
import {Modal} from "./Modal";
import {ICard, IMatch,} from "../hooks/useMatch";
import {useMatchHook} from "../hooks/useMatch";
import {Timer} from "./Timer/Timer";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../Store/store";
import {saveBestLevel} from "../Store/pointsReducer";
import {shuffleArray} from "../Utils/shuffle";
import {createPointsToRedux, isArraysEqual, resetBoard} from "../Utils/matchFunctions";
import {MatchBoard} from "./MatchBoard/MatchBoard";


export const Match: FC<IMatch> = ({
                                      cardsToPlay,
                                      duration,
                                      path,
                                      description,
                                      bestLevel,
                                      setBestLevel,
                                      levelNumber,
                                      defaultPoints,

                                  }) => {


    const {
        isLockBoard, setIsLockBoard, firstCard, setFirstCard, secondCard, setSecondCard, attempts, setAttempts,
        showModal, setShowModal, pairCounter, setPairCounter, isEndOfTime, setIsEndOfTime, running, setRunning
    } = useMatchHook()

    const dispatch = useDispatch<AppDispatch>();

    const [cards, setCards] = useState<ICard[]>(shuffleArray(cardsToPlay))

    const [timer, setTimer] = useState(duration);

    const [timeLeft, setTimeLeft] = useState(timer)


    useEffect(() => {
        if (firstCard && secondCard) {
            checkMates();
        }
    }, [secondCard, firstCard]);

    useEffect(() => {
        if (pairCounter === cardsToPlay.length / 2) {
            setShowModal(true)
            dispatch(saveBestLevel(levelNumber, createPointsToRedux(defaultPoints, timeLeft, attempts)))
            setBestLevel(bestLevel > levelNumber + 2 ? bestLevel : levelNumber + 2)
            localStorage.setItem("bestLevel", JSON.stringify(levelNumber + 2));
        }
    }, [pairCounter, cardsToPlay])

    useEffect(() => {
        setTimeLeft(timer)
    }, [timer])
    useEffect(() => {
        setSecondCard(secondCard)
    }, [secondCard])
    useEffect(() => {
        setCards(shuffleArray(cardsToPlay))
    }, [cardsToPlay])

    // useEffect(()=>{
    //     if(firstCard?.name === 'aa' || secondCard?.name === 'aa'){
    //         console.log("pat")
    //         setCards(cards.map((card)=>card.name === 'aa'? {...card, isMatched: true} : card ))
    //         setFirstCard(null)
    //         setSecondCard(null)
    //         setIsLockBoard(false)
    //       //  setTimeout(()=>setCards(shuffleArray(cards)), 100)
    //
    //     }
    // },[firstCard, secondCard] )

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


    // const addValueToState = (cardId: ICard) => {
    //
    //     if (firstCard !== null && firstCard.id !== cardId.id) {
    //         setSecondCard(cardId)
    //         setCards(cards.map(card => card.id === secondCard?.id ? {...card, isFlipped: true} : card))
    //         setAttempts(attempts + 1)
    //     } else {
    //         setFirstCard(cardId)
    //         setCards(cards.map(card => card.id === firstCard?.id ? {...card, isFlipped: true} : card))
    //     }
    //
    // }
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

    // const renderCard = (card: ICard, index: number) => (
    //     <button
    //         className={`${style.card} ${card.isMatched ? style.matched : card.isFlipped ? style.flipped : ''}`}
    //         key={index}
    //         onClick={() => addValueToState(card)}
    //         disabled={isLockBoard || card.isMatched}
    //     >
    //         <div className={style.front}>
    //             <img src={card.isMatched || card.isFlipped ? card.image : cover} />
    //         </div>
    //     </button>
    // );

    const isModal = isEndOfTime || showModal

    return (
        <>
            <BackArrow path={'/match'}/>
            <Timer
                timer={timer} setTimer={setTimer}
                duration={duration} setIsEndOfTime={setIsEndOfTime} running={running} setRunning={setRunning}
                cardsToPlayLengths={cardsToPlay.length} pairCounter={pairCounter}
            />

            <section className={style.wrapper}>
                <div className={style.mode}>{description}</div>

                <div className={style.cardsContainer}>


                    {/*{cards.map(renderCard)}*/}

                    <MatchBoard
                        cards={cards}
                        onClick={addValueToState}
                        isLockBoard={isLockBoard}
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


// export const Match: FC<IMatch> = ({
//                                       cardsToPlay,
//                                       duration,
//                                       path,
//                                       description,
//                                       bestLevel,
//                                       setBestLevel,
//                                       levelNumber,
//                                       defaultPoints,
//                                   }) => {
//     const {
//         isLockBoard,
//         setIsLockBoard,
//         firstCard,
//         setFirstCard,
//         secondCard,
//         setSecondCard,
//         attempts,
//         setAttempts,
//         showModal,
//         setShowModal,
//         pairCounter,
//         setPairCounter,
//         isEndOfTime,
//         setIsEndOfTime,
//         running,
//         setRunning
//     } = useMatchHook();
//
//     const dispatch = useDispatch<AppDispatch>();
//
//     const [cards, setCards] = useState<ICard[]>(shuffleArray(cardsToPlay));
//     const [timer, setTimer] = useState(duration);
//     const [timeLeft, setTimeLeft] = useState(timer);
//
//     useEffect(() => {
//         if (firstCard && secondCard) {
//             checkMates();
//         }
//         if (pairCounter === cardsToPlay.length / 2) {
//             setShowModal(true);
//             dispatch(saveBestLevel(levelNumber, createPointsToRedux(defaultPoints, timeLeft, attempts)));
//             setBestLevel(bestLevel > levelNumber + 2 ? bestLevel : levelNumber + 2);
//             localStorage.setItem("bestLevel", JSON.stringify(levelNumber + 2));
//         }
//         setTimeLeft(timer);
//         setSecondCard(secondCard);
//         setCards(shuffleArray(cardsToPlay));
//         setCards(cards.map((card) => {
//             if (card.name === firstCard?.name && card.name === secondCard?.name) {
//                 return {
//                     ...card,
//                     isMatched: true
//                 };
//             } else if (card.id === firstCard?.id || card.id === secondCard?.id) {
//                 return {
//                     ...card,
//                     isFlipped: true
//                 };
//             } else {
//                 return card;
//             }
//         }));
//     }, [secondCard, firstCard,
//     pairCounter, cardsToPlay,
//     timer]);
//
//     useEffect(() => {
//         if (isEndOfTime || showModal) {
//             setIsEndOfTime(true);
//             setRunning(false);
//             setTimer(duration);
//             setShowModal(true);
//             setCards(cardsToPlay);
//             setAttempts(0);
//             setPairCounter(0);
//         }
//     }, [isEndOfTime, showModal]);
//
//     const addValueToState = useCallback((cardId: ICard) => {
//         if (firstCard !== null && firstCard.id !== cardId.id) {
//             setSecondCard(cardId);
//             setCards((prevCards) =>
//                 prevCards.map((card) =>
//                     card.id === secondCard?.id ? { ...card, isFlipped: true } : card
//                 )
//             );
//             setAttempts((prevAttempts) => prevAttempts + 1);
//         } else {
//             setFirstCard(cardId);
//             setCards((prevCards) =>
//                 prevCards.map((card) =>
//                     card.id === firstCard?.id ? { ...card, isFlipped: true } : card
//                 )
//             );
//         }
//     }, [firstCard, secondCard]);
//
//     const checkMates = useCallback(() => {
//         if (firstCard?.name === secondCard?.name) {
//             setIsLockBoard(true);
//             setTimeout(() => {
//                 setCards((prevCards) =>
//                     prevCards.map((card) =>
//                         card.name === firstCard?.name && card.name === secondCard?.name
//                             ? { ...card, isMatched: true }
//                             : card
//                     )
//                 );
//                 setFirstCard(null);
//                 setSecondCard(null
//                 );
//                 setIsLockBoard(false);
//                 setPairCounter((prevPairCounter) => prevPairCounter + 1);
//             }, 500);
//         } else {
//             setIsLockBoard(true);
//             setTimeout(() => {
//                 setIsLockBoard(false);
//                 resetBoard(setFirstCard, setSecondCard, setCards);
//             }, 1000);
//         }
//     }, [firstCard, secondCard]);
//
//     const isModal = isEndOfTime || showModal;
//
//     return (
//         <>
//             <BackArrow path={'/match'} />
//             <Timer
//                 timer={timer}
//                 setTimer={setTimer}
//                 duration={duration}
//                 setIsEndOfTime={setIsEndOfTime}
//                 running={running}
//                 setRunning={setRunning}
//                 cardsToPlayLengths={cardsToPlay.length}
//                 pairCounter={pairCounter}
//             />
//             <section className={style.wrapper}>
//                 <div className={style.mode}>{description}</div>
//                 <div className={style.cardsContainer}>
//                     {cards.map((card, index) => (
//                         <button
//                             className={
//                                 card.isMatched
//                                     ? `${style.card} ${style.matched}`
//                                     : card.isFlipped
//                                         ? `${style.card} ${style.flipped}`
//                                         : style.card
//                             }
//                             key={index}
//                             onClick={() => {
//                                 addValueToState(card);
//                             }}
//                             disabled={isLockBoard || card.isMatched}
//                         >
//                             <div className={style.front}>
//                                 <img src={card.isMatched ? card.image : card.isFlipped ? card.image : cover} />
//                             </div>
//                         </button>
//                     ))}
//                 </div>
//                 {isModal && (
//                     <Modal
//                         setShowModal={setShowModal}
//                         attempts={attempts}
//                         isEndOfTime={isEndOfTime}
//                         setIsEndOfTime={setIsEndOfTime}
//                         setRunning={setRunning}
//                         duration={duration}
//                         setTimer={setTimer}
//                         path={path}
//                         timeLeft={timeLeft}
//                         defaultPoints={defaultPoints}
//                         setCards={setCards}
//                         setAttempts={setAttempts}
//                         setPairCounter={setPairCounter}
//                         cardsToPlay={cardsToPlay}
//                     />
//                 )}
//             </section>
//         </>
//     );
// };
