import React, {FC} from 'react';
import style from './Row.module.css'
import {Link} from "react-router-dom";

interface IRow {
    number: number
    name: string
    difficult: string
    play: string
    description: string
}
export const Row:FC<IRow> = ({number, name, difficult, play, description}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.number}>
                    {number}
                </div>
                <div className={style.nameAndDescription}>
                    <div className={style.name}>{name}</div>
                    <div className={style.description}>{description}</div>

                </div>
                <div className={style.difficult}>
                    {difficult}
                </div>

                    <div className={style.play}>
                        <Link to={play}>
                      Играть
                        </Link>
                    </div>


            </div>
        </div>
    );
};

