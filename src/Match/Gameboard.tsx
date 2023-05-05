import React, {Dispatch, FC, SetStateAction} from 'react';
import style from './GameBoard.module.css'
import {PATH} from "../AppRoutes/AppRoutes";
import {Row} from "./Row";


interface IGameBoard {
        bestLevel: number
        // setBestLevel: Dispatch<SetStateAction<number>>
}
export const GameBoard:FC<IGameBoard> = ({bestLevel}) => {


    return (
        <section className={style.wrapper}>

            <Row number={0} name={'Сборка'} difficult={"1"} play={PATH.ONE} description={'Найти пару'} day={'monday'}
                 bestLevel={bestLevel}/>
            <Row number={1} name={'Сборка'} difficult={"1"} play={PATH.TWO} description={'Найти пару'} day={'wednesday'}
                 bestLevel={bestLevel}/>
            <Row number={2} name={'Сборка'} difficult={"1"} play={PATH.THREE} description={'Найти пару'} day={'friday'}
                 bestLevel={bestLevel}/>
            <Row number={3} name={'Filtron'} difficult={"2"} play={PATH.FILTRON} description={'Найти пару'}
                 day={'additional'} bestLevel={bestLevel}/>
            <Row number={4} name={'Polmostrow'} difficult={"3"} play={PATH.POLMOONE} description={'Найти пару'}
                 day={'monday'} bestLevel={bestLevel}/>
            <Row number={5} name={'Polmostrow'} difficult={"3"} play={PATH.POLMOTWO} description={'Найти пару'}
                 day={'wednesday'} bestLevel={bestLevel}/>
            <Row number={6} name={'Polmostrow'} difficult={"1"} play={PATH.POLMOTHREE} description={'Найти пару'}
                 day={'friday'} bestLevel={bestLevel}/>
            <Row number={7} name={'Сборка'} difficult={"2"} play={PATH.HALFONE} description={'Найти вторую половину'}
                 day={'additional'} bestLevel={bestLevel}/>

            <Row number={8} name={'Сборка'} difficult={"2"} play={PATH.FOUR} description={'Найти пару'}
                 day={'monday'} bestLevel={bestLevel}/>
            <Row number={9} name={'Сборка'} difficult={"2"} play={PATH.FIVE} description={'Найти пару'}
                 day={'wednesday'} bestLevel={bestLevel}/>
            <Row number={10} name={'Два документа'} difficult={"3"} play={PATH.REFLIPONE} description={'Найти пару два раза'}
                 day={'friday'} bestLevel={bestLevel}/>

            <Row number={11} name={'Сборка'} difficult={"2"} play={PATH.HALFTWO} description={'Найти вторую половину'}
                 day={'additional'} bestLevel={bestLevel}/>
            <Row number={12} name={'Два документа'} difficult={"3"} play={PATH.REFLIPTWO} description={'Найти пару два раза'}
                 day={'monday'} bestLevel={bestLevel}/>

            <Row number={13} name={'Сборка'} difficult={"2"} play={PATH.CIRCLE} description={'Крутящий момент'}
                 day={'wednesday'} bestLevel={bestLevel}/>
            <Row number={14} name={'Массовка'} difficult={"4"} play={PATH.TRIPLEMATCHONE} description={'Найти три одинаковых'}
                 day={'friday'} bestLevel={bestLevel}/>

            <Row number={15} name={'Сборка'} difficult={"2"} play={PATH.CARSBYMODELSONE}
                 description={'Найти марку и модель автомобиля'} day={'additional'} bestLevel={bestLevel}/>
            <Row number={16} name={'Массовка'} difficult={"3"} play={PATH.THREEMATCHESTWO} description={'Найти три одинаковых'}
                 day={'monday'} bestLevel={bestLevel}/>

            <Row number={17} name={'Массовка по документу'} difficult={"4"} play={PATH.PATTERNONE}
                 description={'Найти три одинаковых в определенном порядке'} day={'wednesday'} bestLevel={bestLevel}/>
            <Row number={18} name={'Массовка по документу'} difficult={"2"} play={PATH.PATTERNTWO}
                 description={'Найти три одинаковых в определенном порядке'} day={'friday'} bestLevel={bestLevel}/>
            <Row number={19} name={'Сборка'} difficult={"3"} play={PATH.CARSBYMODELSTWO}
                 description={'Найти марку и модель автомобиля'} day={'additional'} bestLevel={bestLevel}/>
            <Row number={20} name={'Пьяная масовка'} difficult={"4"} play={PATH.THREEMATCHESTWOROTATEONE}
                 description={'Найти три одинаковых'} day={'monday'} bestLevel={bestLevel}/>
            <Row number={21} name={'Пьяная масовка'} difficult={"4"} play={PATH.THREEMATCHESTWOROTATETWO}
                 description={'Найти три одинаковых'} day={'wednesday'} bestLevel={bestLevel}/>
            <Row number={22} name={'Пьяная масовка по документу'} difficult={"4"} play={PATH.CRAZYONE}
                 description={'Найти три одинаковых в определенном порядке'} day={'friday'} bestLevel={bestLevel}/>

            {/*<Row number={11} name={'Tect'} difficult={"x"} play={PATH.TRIPLETSET} description={'Найти три'}/>*/}
            {/*</div>*/}
            {/*<ModalMenu isShown={isShown} setIsShown={setIsShown}/>*/}

        </section>
    );
};

