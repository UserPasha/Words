import {Dispatch, SetStateAction, useState} from "react";

export interface ICard {
    id: number;
    image: string
    isFlipped: boolean;
    isMatched: boolean;
    name: string;
    secondName?: string;
    isReFlipped?: boolean;
    isTotallyMatched?: boolean;
    isColorful?: boolean;
    images?:  string[];
}

export interface IMatch {
    cardsToPlay: ICard[]
    duration: number
    path: string
    rotate: boolean
    description: string
    bestLevel: number
    setBestLevel: Dispatch<SetStateAction<number>>
    levelNumber: number
    defaultPoints: number
    isPatrickMode: boolean
}

export interface ICardMatch {
    id: number,
    name: string,
    image: string,
    isFlipped: boolean,
    isMatched: boolean
    isTotallyMatched?: boolean
}

export interface IPattern extends ICardMatch{
    isColorful?: boolean
}


export interface IPatternCards extends IMatch{
    patternCards: IPattern[]
    isChangedSize: boolean
}


export const useMatchHook = () => {
    const [isLockBoard, setIsLockBoard] = useState<boolean>(false)
    const [firstCard, setFirstCard] = useState<null | ICard>(null)
    const [secondCard, setSecondCard] = useState< null | ICard>(null)
    const [attempts, setAttempts] = useState<number>(0)

    const [showModal, setShowModal] = useState<boolean>(false)
    const [pairCounter, setPairCounter] = useState<number>(0)
    const [isEndOfTime, setIsEndOfTime] = useState<boolean>(false)
    const [running, setRunning] = useState(true);



    return {
        isLockBoard, setIsLockBoard, firstCard: firstCard, setFirstCard, secondCard: secondCard, setSecondCard, attempts, setAttempts,
        showModal, setShowModal, pairCounter, setPairCounter, isEndOfTime, setIsEndOfTime, running, setRunning
    }
}