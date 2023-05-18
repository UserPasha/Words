import React, {FC} from 'react';
import style from './MatchCard.module.css'
import {ICard} from "../../hooks/useMatch";
import cover from '../../assets/images/match/logo.png'

interface IMatchCard {
    card: ICard
    onClick: ()=> void
    isLockBoard: boolean
}
export const MatchCard:FC<IMatchCard> = ({ card, onClick, isLockBoard }) => {
    const { isMatched, isFlipped, image } = card;

    const handleClick = () => {
        if (!isMatched && !isFlipped) {
            onClick();
        }
    };

    return (
        <button
            className={`${style.card} ${isMatched ? style.matched : isFlipped ? style.flipped : ''}`}
            onClick={handleClick}
            disabled={isMatched || isFlipped || isLockBoard}
        >
            <div className={style.front}>
                <img src={isMatched || isFlipped ? image : cover} alt="Card" />
            </div>
        </button>
    );
};

