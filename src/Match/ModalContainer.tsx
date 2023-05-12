import React, {FC} from 'react';
import {useMatchHook} from "../hooks/useMatch";
import {Modal} from "./Modal";

interface ModalContainer{
    duration: number
}
export const ModalContainer: FC<ModalContainer> = ({duration}) => {


    const {
        isLockBoard, setIsLockBoard, firstCard, setFirstCard, secondCard, setSecondCard, attempts, setAttempts,
        showModal, setShowModal, pairCounter, setPairCounter, isEndOfTime, setIsEndOfTime, running, setRunning
    } = useMatchHook()

    const isModal = isEndOfTime || showModal

    return (
      <>
          {/*{isModal && <Modal setShowModal={setShowModal}*/}
          {/*                   attempts={attempts}*/}
          {/*                   isEndOfTime={isEndOfTime}*/}
          {/*                   setIsEndOfTime={setIsEndOfTime}*/}
          {/*                   setRunning={setRunning}*/}
          {/*                   duration={duration}*/}
          {/*                   setTimer={setTimer}*/}
          {/*                   path={path}*/}
          {/*                   timeLeft={timeLeft}*/}
          {/*                   defaultPoints={defaultPoints}*/}

          {/*                   setCards={setCards}*/}
          {/*                   setAttempts={setAttempts}*/}
          {/*                   setPairCounter={setPairCounter}*/}
          {/*                   cardsToPlay={cardsToPlay}*/}
          {/*/>}*/}
      </>
    );
};


