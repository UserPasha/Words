import React, {useEffect, useState} from 'react';
import style from './GameBoard.module.css'
import {Link} from "react-router-dom";
import {PATH} from "../AppRoutes/AppRoutes";
import {Row} from "./Row";
import {Circle} from "./Circle";
import {circleLevel, thirdLevel} from "./Levels";


export const GameBoard = () => {
    const [bestLevel, setBestLevel] = useState<number>(0)
    //

    useEffect(() => {
        let bestLevelAsString = localStorage.getItem("bestLevel")
        if (bestLevelAsString) {
            let newValue = JSON.parse(bestLevelAsString)
            setBestLevel(newValue);
        }
    }, [])

    // useEffect(() => {
    //     localStorage.setItem("bestLevel", JSON.stringify(bestLevel));
    // }, [bestLevel])

    return (
        <section className={style.wrapper}>
            <div className={style.test}>
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
            <Row number={0} name={'Filtron'} difficult={"1"} play={PATH.FILTRON} description={'Найти пару'} day={'monday'} bestLevel={bestLevel}/>
            <Row number={1} name={'Сборка'} difficult={"1"} play={PATH.ONE} description={'Найти пару'} day={'wednesday'}  bestLevel={bestLevel}/>
            <Row number={2} name={'Сборка'} difficult={"1"} play={PATH.TWO} description={'Найти пару'} day={'friday'}  bestLevel={bestLevel}/>
            <Row number={3} name={'Сборка'} difficult={"2"} play={PATH.THREE} description={'Найти пару'} day={'additional'}  bestLevel={bestLevel}/>
            <Row number={4} name={'Сборка'} difficult={"3"} play={PATH.FOUR} description={'Найти пару'}  day={'monday'}  bestLevel={bestLevel}/>
            <Row number={5} name={'Сборка'} difficult={"3"} play={PATH.FIVE} description={'Найти пару'}  day={'wednesday'}  bestLevel={bestLevel}/>
            <Row number={6} name={'Сборка'} difficult={"1"} play={PATH.HALFONE} description={'Найти вторую половину'}  day={'friday'}  bestLevel={bestLevel}/>
            <Row number={7} name={'Сборка'} difficult={"2"} play={PATH.HALFTWO} description={'Найти вторую половину'}  day={'additional'}  bestLevel={bestLevel}/>

            <Row number={8} name={'Polmostrow'} difficult={"2"} play={PATH.POLMOONE} description={'Найти пару'}  day={'monday'}  bestLevel={bestLevel}/>
            <Row number={9} name={'Polmostrow'} difficult={"2"} play={PATH.POLMOTWO} description={'Найти пару'} day={'wednesday'}  bestLevel={bestLevel}/>
            <Row number={10} name={'Polmostrow'} difficult={"3"} play={PATH.POLMOTHREE} description={'Найти пару'} day={'friday'}  bestLevel={bestLevel}/>

            <Row number={11} name={'Сборка'} difficult={"2"} play={PATH.TRIPLEMATCHONE} description={'Массовка'} day={'additional'}  bestLevel={bestLevel}/>
            <Row number={12} name={'Сборка'} difficult={"3"} play={PATH.THREEMATCHESTWO} description={'Массовка'}   day={'monday'}  bestLevel={bestLevel}/>

            <Row number={13} name={'Сборка'} difficult={"2"} play={PATH.PATTERNONE} description={'Массовка по документу'}  day={'wednesday'}  bestLevel={bestLevel}/>
            <Row number={14} name={'Сборка'} difficult={"4"} play={PATH.PATTERNTWO} description={'Массовка по документу'}  day={'friday'}  bestLevel={bestLevel}/>

            <Row number={15} name={'Сборка'} difficult={"2"} play={PATH.THREEMATCHESTWOROTATEONE} description={'Пьяная масовка'} day={'additional'}  bestLevel={bestLevel}/>
            {/*<Row number={16} name={'Сборка'} difficult={"3"} play={PATH.THREEMATCHESTWOROTATETWO} description={'Пьяная масовка'}/>*/}

            {/*<Row number={17} name={'Сборка'} difficult={"4"} play={PATH.CRAZYONE} description={'Массовка по документу'}/>*/}
            {/*<Row number={18} name={'Сборка'} difficult={"2"} play={PATH.REFLIPONE} description={'Два документа'}/>*/}
            {/*<Row number={19} name={'Сборка'} difficult={"3"} play={PATH.REFLIPTWO} description={'Два документа'}/>*/}
            {/*<Row number={20} name={'Сборка'} difficult={"4"} play={PATH.CIRCLE} description={'Крутящий момент'}/>*/}

            {/*<Row number={11} name={'Tect'} difficult={"x"} play={PATH.TRIPLETSET} description={'Найти три'}/>*/}
            </div>



        </section>
    );
};

