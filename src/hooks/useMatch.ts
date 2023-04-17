import React, {useState} from "react";
import {shuffleArray} from "../Match/Match";


export interface IMatch {
    cardsToPlay: ICardMatch[]
}

export interface ICardMatch {
    id: number,
    name: string,
    image: string,
    isFlipped: boolean,
    isMatched: boolean
}

export const useMatchHook = () => {
const [isLockBoard, setIsLockBoard] = useState<boolean>(false)
const [firstCared, setFirstCard] = useState<ICardMatch | null>(null)
const [secondCared, setSecondCard] = useState<ICardMatch | null>(null)
const [attempts, setAttempts] = useState<number>(0)

const [showModal, setShowModal] = useState<boolean>(false)
const [pairCounter, setPairCounter] = useState<number>(0)



    return {isLockBoard, setIsLockBoard, firstCared, setFirstCard, secondCared, setSecondCard,attempts, setAttempts,
        showModal, setShowModal, pairCounter, setPairCounter}
}