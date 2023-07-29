import {shuffleArray} from "./shuffle";
import {Dispatch, SetStateAction} from "react";
import {ICard} from "../hooks/useMatch";



export const createPointsToRedux = (defaultPoints: number, timeLeft: number, realAttempts: number, multiplyBonus:number) => {
    const pointsForAttempts = 60 - realAttempts;
    const temporyPoints = defaultPoints + timeLeft * 2 + pointsForAttempts;

    const totalPoints = Math.round(temporyPoints * multiplyBonus);
    return totalPoints
}

export const restartGame = (setCards: Dispatch<SetStateAction<ICard[]>>,
                            setAttempts: Dispatch<SetStateAction<number>>,
                            setPairCounter: Dispatch<SetStateAction<number>>,
                            cardsToPlay: ICard[]) => {
    setCards(shuffleArray(cardsToPlay))
    setAttempts(0)
    setPairCounter(0)
}

export const CardForThirdState: ICard = {
    id: 0, name: '', isMatched: false, isFlipped: false, image: ''
}


export const resetBoard = <T extends ICard>(
    setFirstCard: Dispatch<SetStateAction<T | null>>,
    setSecondCard: Dispatch<SetStateAction<T | null>>,
    setCards: Dispatch<SetStateAction<T[]>>,
    setThirdCard?: Dispatch<SetStateAction<T | null>>,
    CardForThirdState?: T
) => {
    setFirstCard(null);
    setSecondCard(null);
    if (setThirdCard && CardForThirdState) {
        setThirdCard(CardForThirdState);
    }
    setCards((cards) =>
        cards.map((card) => {
            if (card.isTotallyMatched) {
                return card;
            }
            return {
                ...card,
                isFlipped: false,
                isReFlipped: false,
            };
        })
    );
};

export const  isArraysEqual = (a: ICard[], b: ICard[]) => {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

// export const addValueToState = (
//     cardId: ICard,
//     cards: ICard[],
//     firstCard: ICard | null,
//     secondCard: ICard | null,
//     setFirstCard: Dispatch<SetStateAction<ICard | null>>,
//     setSecondCard: Dispatch<SetStateAction<ICard | null>>,
//     setCards: Dispatch<SetStateAction<ICard[]>>,
//     attempts: number,
//     setAttempts: Dispatch<SetStateAction<number>>,
//     thirdCard?: ICard | null,
//     setThirdCard?: Dispatch<SetStateAction<ICard | null>>
// ) => {
//     //debugger
//     if (thirdCard) {
//         if (
//             thirdCard.id !== 0 &&
//             secondCard !== null &&
//             thirdCard.id !== cardId.id &&
//             secondCard.id !== cardId.id
//         ) {
//             setFirstCard(cardId);
//             setCards(
//                 cards.map((card) =>
//                     card.id === firstCard?.id ? { ...card, isFlipped: true } : card
//                 )
//             );
//         } else if (thirdCard.id !== 0 && thirdCard.id !== cardId.id) {
//             setSecondCard(cardId);
//             setCards(
//                 cards.map((card) =>
//                     card.id === secondCard?.id ? { ...card, isFlipped: true } : card
//                 )
//             );
//             setAttempts(attempts + 1);
//         } else {
//             if (setThirdCard) {
//                 setThirdCard(cardId);
//             }
//             setCards(
//                 cards.map((card) =>
//                     card.id === thirdCard?.id ? { ...card, isFlipped: true } : card
//                 )
//             );
//         }
//     }
//     if ('isMatched' in cardId) {
//         const clickedCard = cards.find((card) => card.id === cardId.id);
//
//         if (clickedCard?.isMatched) {
//             if (firstCard !== null && firstCard.id !== cardId.id) {
//                 setSecondCard(clickedCard);
//                 setCards(
//                     cards.map((card) =>
//                         card.id === clickedCard.id ? { ...card, isReFlipped: true } : card
//                     )
//                 );
//             } else if (secondCard === null) {
//                 setFirstCard(clickedCard);
//                 setCards(
//                     cards.map((card) =>
//                         card.id === clickedCard.id ? { ...card, isReFlipped: true } : card
//                     )
//                 );
//                 setAttempts(attempts + 1);
//             }
//         } else {
//             if (firstCard !== null && firstCard.id !== cardId.id) {
//                 setSecondCard(cardId);
//                 setCards(
//                     cards.map((card) =>
//                         card.id === secondCard?.id ? { ...card, isFlipped: true } : card
//                     )
//                 );
//                 setAttempts(attempts + 1);
//             } else {
//                 setFirstCard(cardId);
//                 setCards(
//                     cards.map((card) =>
//                         card.id === firstCard?.id ? { ...card, isFlipped: true } : card
//                     )
//                 );
//             }
//         }
//     }
// };



