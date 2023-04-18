import React from 'react';
import style from './GameBoard.module.css'
import {Link} from "react-router-dom";
import {PATH} from "../AppRoutes/AppRoutes";
import {Row} from "./Row";

export const GameBoard = () => {

    return (
        <section className={style.wrapper}>
            <div className={style.rowContainer}>
                <div className={style.number}>
                    Номер
                </div>
                <div className={style.name}>
                    Название
                </div>
                <div className={style.difficult}>
                    Сложность
                </div>
                <div className={style.play}>
                    Играть
                </div>
            </div>
            <Row number={0} name={'Filtron'} difficult={"1"} play={PATH.FILTRON} description={'Найти пару'}/>
            <Row number={1} name={'Сборка'} difficult={"1"} play={PATH.ONE} description={'Найти пару'}/>
            <Row number={2} name={'Сборка'} difficult={"2"} play={PATH.TWO} description={'Найти пару'}/>
            <Row number={3} name={'Сборка'} difficult={"3"} play={PATH.THREE} description={'Найти пару'}/>
            <Row number={4} name={'Сборка'} difficult={"3"} play={PATH.FOUR} description={'Найти пару'}/>
            <Row number={5} name={'Сборка'} difficult={"1"} play={PATH.HALFONE} description={'Найти вторую половину'}/>

            <Row number={6} name={'Polmostrow'} difficult={"2"} play={PATH.POLMOONE} description={'Найти пару'}/>

            <Row number={7} name={'Сборка'} difficult={"2"} play={PATH.TRIPLEMATCHONE} description={'Найти три'}/>
            <Row number={8} name={'Сборка'} difficult={"3"} play={PATH.THREEMATCHESTWO} description={'Найти три'}/>

            <Row number={9} name={'Сборка'} difficult={"4"} play={PATH.THREEMATCHESTWOROTATEONE} description={'Найти три'}/>
            <Row number={10} name={'Сборка'} difficult={"5"} play={PATH.THREEMATCHESTWOROTATETWO} description={'Найти три'}/>


        </section>
    );
};

