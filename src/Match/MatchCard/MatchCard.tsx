import React, {FC, memo} from 'react';
import style from './MatchCard.module.css'
import {ICard} from "../../hooks/useMatch";
import cover from '../../assets/images/match/logo.png'
import {UseRotate} from "../../hooks/useRotate";

interface IMatchCard {
    card: ICard
    onClick: () => void
    isLockBoard: boolean
    isRotate: boolean
    isPattern: boolean
}

export const MatchCard: FC<IMatchCard> = memo (
    ({card, onClick, isLockBoard, isRotate,isPattern}) => {
    const {isMatched, isFlipped, image} = card;

    const handleClick = () => {
        if (!isMatched && !isFlipped) {
            onClick();
        }
    };

    const {rotateStyle} = UseRotate()
    const chooseStyle = isRotate ? rotateStyle : {}
    const defaultCardsStyle = `${style.card} ${isMatched ? style.matched : isFlipped ? style.flipped : ''}`
    const patternCardsStyle = isFlipped ? `${style.card} ${style.flipped} ${style.smaller}` : `${style.card} ${style.smaller} `
    const currentCardStyle = isPattern ? patternCardsStyle : defaultCardsStyle

    return (
        <button
            className={currentCardStyle}
            onClick={handleClick}
            style={chooseStyle}
            disabled={isMatched || isFlipped || isLockBoard}
        >
            <div className={style.front}>
                <img src={isMatched || isFlipped ? image : cover} alt="Card"/>
            </div>
        </button>
    );
});

