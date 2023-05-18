import React, {FC} from 'react';
import style from './MatchBoard.module.css'
import {ICard} from "../../hooks/useMatch";
import {MatchCard} from "../MatchCard/MatchCard";

interface IMatchBoard {
    cards: ICard[]
    onClick: (card:ICard)=> void
    isLockBoard: boolean
}
export const MatchBoard:FC<IMatchBoard> = ({cards, isLockBoard, onClick}) => {
    return (
        <div className={style.cardsContainer}>
            {cards.map((card, index) => (
                <MatchCard key={index} card={card} onClick={()=>onClick(card)} isLockBoard={isLockBoard}/>
            ))}
        </div>
    );
};

