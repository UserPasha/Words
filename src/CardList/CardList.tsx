import React, {FC} from 'react';
import style from './CardList.module.css'

interface ICardList {
    question: string
    answer: string
}

export const CardList: FC<ICardList> = ({question, answer}) => {

    return (

        <div className={style.cards}>
            <div className={style.cardsItem}>
                {question}
            </div>
            <div className={style.cardsItem}>
                {answer}
            </div>
        </div>


    );
};

export default CardList;