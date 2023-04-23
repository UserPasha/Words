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
            <Row number={2} name={'Сборка'} difficult={"1"} play={PATH.TWO} description={'Найти пару'}/>
            <Row number={3} name={'Сборка'} difficult={"2"} play={PATH.THREE} description={'Найти пару'}/>
            <Row number={4} name={'Сборка'} difficult={"3"} play={PATH.FOUR} description={'Найти пару'}/>
            <Row number={5} name={'Сборка'} difficult={"3"} play={PATH.FIVE} description={'Найти пару'}/>
            <Row number={6} name={'Сборка'} difficult={"1"} play={PATH.HALFONE} description={'Найти вторую половину'}/>
            <Row number={7} name={'Сборка'} difficult={"2"} play={PATH.HALFTWO} description={'Найти вторую половину'}/>

            <Row number={8} name={'Polmostrow'} difficult={"2"} play={PATH.POLMOONE} description={'Найти пару'}/>
            <Row number={9} name={'Polmostrow'} difficult={"2"} play={PATH.POLMOTWO} description={'Найти пару'}/>
            <Row number={10} name={'Polmostrow'} difficult={"3"} play={PATH.POLMOTHREE} description={'Найти пару'}/>

            <Row number={11} name={'Сборка'} difficult={"2"} play={PATH.TRIPLEMATCHONE} description={'Массовка'}/>
            <Row number={12} name={'Сборка'} difficult={"3"} play={PATH.THREEMATCHESTWO} description={'Массовка'}/>

            <Row number={13} name={'Сборка'} difficult={"2"} play={PATH.PATTERNONE} description={'Массовка по документу'}/>
            <Row number={14} name={'Сборка'} difficult={"4"} play={PATH.PATTERNTWO} description={'Массовка по документу'}/>

            <Row number={15} name={'Сборка'} difficult={"2"} play={PATH.THREEMATCHESTWOROTATEONE} description={'Пьяная масовка'}/>
            <Row number={16} name={'Сборка'} difficult={"3"} play={PATH.THREEMATCHESTWOROTATETWO} description={'Пьяная масовка'}/>

            {/*<Row number={11} name={'Tect'} difficult={"x"} play={PATH.TRIPLETSET} description={'Найти три'}/>*/}


        </section>
    );
};

