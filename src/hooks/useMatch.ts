import {useState} from "react";


export interface IMatch {
    cardsToPlay: ICardMatch[]
    duration: number
    path: string
    rotate: boolean
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
    const [firstCard, setFirstCard] = useState<ICardMatch | null>(null)
    const [secondCard, setSecondCard] = useState<ICardMatch | null>(null)
    const [attempts, setAttempts] = useState<number>(0)

    const [showModal, setShowModal] = useState<boolean>(false)
    const [pairCounter, setPairCounter] = useState<number>(0)
    const [isEndOfTime, setIsEndOfTime] = useState<boolean>(false)
    const [running, setRunning] = useState(true);




    return {
        isLockBoard, setIsLockBoard, firstCard: firstCard, setFirstCard, secondCard: secondCard, setSecondCard, attempts, setAttempts,
        showModal, setShowModal, pairCounter, setPairCounter, isEndOfTime, setIsEndOfTime, running, setRunning,
    }
}