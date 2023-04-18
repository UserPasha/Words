import React, {FC, useEffect, useState} from 'react';
import style from '../Match/Match.module.css'
import {ICardMatch, IMatch, IPattern, useMatchHook} from "../hooks/useMatch";
import {BackArrow} from "../Common/Components/BackArrow/BackArrow";
import cover from "../assets/images/match/logo.png";
import {Modal} from "../Match/Modal";
import {shuffleArray} from "../Match/Match";
import {Timer} from "../Timer/Timer";
import {patternFirstLevel} from "../Match/Levels";

export const TripleMatchCopy: FC<IMatch> = ({cardsToPlay, duration, path, rotate, description}) => {
    const {
        isLockBoard, setIsLockBoard, firstCard, setFirstCard, secondCard, setSecondCard, attempts, setAttempts,
        showModal, setShowModal, pairCounter, setPairCounter, isEndOfTime, setIsEndOfTime, running, setRunning,
    } = useMatchHook()
    const [cards, setCards] = useState<IPattern[] | IPattern []>(shuffleArray(cardsToPlay))
    //console.log(cardsToPlay)
    const [thirdCard, setThirdCard] = useState<IPattern | null>({id: 0, name: '', isMatched: false, isFlipped: false, image: '', isColorful: false})
    const [timer, setTimer] = useState(duration);

    const [pattern, setPattern] = useState<IPattern[]>(shuffleArray(patternFirstLevel))
    const [patternIndex, setPatternindex] = useState<number>(0)

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
    // useEffect(()=>{
    //     setPattern(pattern.map(patt=> patt.name === firstCard?.name && patt.name === secondCard?.name && patt.name === thirdCard?.name
    //         ?
    //         {...patt, isColorful: true} : patt))
    // }, [pattern, firstCard, secondCard, thirdCard])


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
    if (thirdCard?.id !== 0 && secondCard !== null ) {
        setFirstCard(cardId);
        setCards(cards.map((card) => (card.id === firstCard?.id ? { ...card, isFlipped: true } : card)));
    } else if (thirdCard?.id !== 0 ) {
        setSecondCard(cardId);
        setCards(cards.map((card) => (card.id === secondCard?.id ? { ...card, isFlipped: true } : card)));
        setAttempts(attempts + 1);
    } else {
        setThirdCard(cardId);
        setCards(cards.map((card) => (card.id === thirdCard?.id ? { ...card, isFlipped: true } : card)));
    }
};

    //console.log('yo')
    const restartGame = () => {
        setCards(shuffleArray(cardsToPlay))
        setAttempts(0)
        setPairCounter(0)
    }
    const resetBoard = () => {
        setFirstCard(null)
        setSecondCard(null)
        setThirdCard({id: 0, name: '', isMatched: false, isFlipped: false, image: '', isColorful: false})
        setCards(cards.map(card => card.isFlipped ? {...card, isFlipped: false} : card))
    }
    const checkMates = () => {

        let patternName = pattern[patternIndex]
        if (firstCard?.name === secondCard?.name && firstCard?.name === thirdCard?.name && firstCard?.name === patternName.name) {
            setIsLockBoard(true)
            setTimeout(() => {
                setCards(cards.map(card => card.name === firstCard?.name && card.name === secondCard?.name && firstCard?.name === thirdCard?.name ? {
                    ...card,
                    isMatched: true
                } : card))
               //setPattern(pattern.filter(pattern=> pattern.name !== firstCard.name))
                setPattern(pattern.map(patt=> patt.name === firstCard.name
                    ?
                    {...patt, isColorful: true} : patt))
             setPatternindex(patternIndex+1)
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

    const [cardRotationAngle, setCardRotationAngle] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCardRotationAngle(cardRotationAngle + 1);
        }, 50);

        return () => clearInterval(intervalId);
    }, [cardRotationAngle]);

    const rotateStyle = {
        transform: `rotate(${cardRotationAngle}deg)`
    }
    const chooseStyle =  rotate ? rotateStyle : {}
    return (
        <>
            <BackArrow path={'/match'}/>
            <Timer
                timer={timer} setTimer={setTimer}
                duration={duration} setIsEndOfTime={setIsEndOfTime} running={running} setRunning={setRunning} />

            <section className={style.wrapper}
                // style={fieldStyle}
            >
                <div className={style.mode}>{description}</div>
                <div  className={style.cardsContainer}>{pattern.map((card, index)=>
                        <button className={card.isColorful ?  `${style.flipped} ${style.green}` : `${style.flipped} ${style.red}`}
                                                                                            key={index}>   <div className={style.front}> <img src={card.image}/>
                </div>

                </button>
                )}</div>

                {/*<span>Попытки: {attempts}</span>*/}
                {/*<span>Пары: {pairCounter}</span>*/}
                <div className={style.cardsContainer}
                    //style={chooseStyle}
                >
                    {cards.map((card, index) => <button className={card.isFlipped ? style.flipped : style.card}
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
                {/*<button className={style.restartButton} onClick={restartGame}>Restart</button>*/}
            </section>

            {/*<DragMatch/>*/}
        </>

    );
};

