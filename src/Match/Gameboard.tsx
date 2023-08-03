import React, {FC} from 'react';
import style from './GameBoard.module.css'
import {PATH} from "../AppRoutes/AppRoutes";
import {Row} from "./Row";
import {useSelector} from "react-redux";
import {RootState} from "../Store/store";
import {InitialStatePointsType} from "../Store/pointsReducer";
import {ProfileBoard} from "./ProfileBoard/ProfileBoard";


interface IGameBoard {
    bestLevel: number
}

export const GameBoard: FC<IGameBoard> = ({bestLevel}) => {
    const bestPoints = useSelector<RootState, InitialStatePointsType[]>(state => state.points)

    return (
        <section className={style.wrapper}>
            <ProfileBoard/>
            <Row number={3} name={'Filtron'} difficult={"2"} play={PATH.FILTRON} description={'Найти пару'}
                 day={'additional'} bestLevel={bestLevel} bestPoints={bestPoints[3].bestPoints}/>



            <Row number={0} name={'Сборка'} difficult={"1"} play={PATH.ONE} description={'Найти пару'} day={'monday'}
                 bestLevel={bestLevel} bestPoints={bestPoints[0].bestPoints}/>
            <Row number={1} name={'Сборка'} difficult={"1"} play={PATH.TWO} description={'Найти пару'} day={'wednesday'}
                 bestLevel={bestLevel} bestPoints={bestPoints[1].bestPoints}/>
            <Row number={2} name={'Polmostrow'} difficult={"3"} play={PATH.POLMOONE} description={'Найти пару'}
                 day={'friday'} bestLevel={bestLevel} bestPoints={bestPoints[2].bestPoints}/>


            <Row number={3} name={'Filtron'} difficult={"2"} play={PATH.FILTRON} description={'Найти пару'}
                 day={'additional'} bestLevel={bestLevel} bestPoints={bestPoints[3].bestPoints}/>
            <Row number={4} name={'Сборка'} difficult={"1"} play={PATH.THREE} description={'Найти пару'} day={'monday'}
                 bestLevel={bestLevel} bestPoints={bestPoints[4].bestPoints}/>
            <Row number={5} name={'Сборка'} difficult={"2"} play={PATH.FOUR} description={'Найти пару'}
                 day={'wednesday'} bestLevel={bestLevel} bestPoints={bestPoints[5].bestPoints}/>

            <Row number={6} name={'Polmostrow'} difficult={"3"} play={PATH.POLMOTWO} description={'Найти пару'}
                 day={'friday'} bestLevel={bestLevel} bestPoints={bestPoints[6].bestPoints}/>

            <Row number={7} name={'Сборка'} difficult={"2"} play={PATH.HALFONE} description={'Найти вторую половину'}
                 day={'additional'} bestLevel={bestLevel} bestPoints={bestPoints[7].bestPoints}/>


            <Row number={8} name={'Сборка'} difficult={"2"} play={PATH.FIVE} description={'Найти пару'}
                 day={'monday'} bestLevel={bestLevel} bestPoints={bestPoints[8].bestPoints}/>
            <Row number={9} name={'Два документа'} difficult={"3"} play={PATH.REFLIPONE}
                 description={'Найти пару два раза'}
                 day={'wednesday'} bestLevel={bestLevel} bestPoints={bestPoints[9].bestPoints}/>
            <Row number={10} name={'Polmostrow'} difficult={"1"} play={PATH.POLMOTHREE} description={'Найти пару'}
                 day={'friday'} bestLevel={bestLevel} bestPoints={bestPoints[10].bestPoints}/>
            <Row number={11} name={'Сборка'} difficult={"2"} play={PATH.HALFTWO} description={'Найти вторую половину'}
                 day={'additional'} bestLevel={bestLevel} bestPoints={bestPoints[11].bestPoints}/>
            <Row number={12} name={'Два документа'} difficult={"3"} play={PATH.REFLIPTWO}
                 description={'Найти пару два раза'}
                 day={'monday'} bestLevel={bestLevel} bestPoints={bestPoints[12].bestPoints}/>

            <Row number={13} name={'Сборка'} difficult={"2"} play={PATH.CIRCLE} description={'Крутящий момент'}
                 day={'wednesday'} bestLevel={bestLevel} bestPoints={bestPoints[13].bestPoints}/>
            <Row number={14} name={'Массовка'} difficult={"4"} play={PATH.TRIPLEMATCHONE}
                 description={'Найти три одинаковых'}
                 day={'friday'} bestLevel={bestLevel} bestPoints={bestPoints[14].bestPoints}/>

            <Row number={15} name={'Сборка'} difficult={"2"} play={PATH.CARSBYMODELSONE}
                 description={'Найти марку и модель автомобиля'} day={'additional'} bestLevel={bestLevel}
                 bestPoints={bestPoints[15].bestPoints}/>
            <Row number={16} name={'Массовка'} difficult={"3"} play={PATH.THREEMATCHESTWO}
                 description={'Найти три одинаковых'}
                 day={'monday'} bestLevel={bestLevel} bestPoints={bestPoints[16].bestPoints}/>

            <Row number={17} name={'Массовка по документу'} difficult={"4"} play={PATH.PATTERNONE}
                 description={'Найти три одинаковых в определенном порядке'} day={'wednesday'} bestLevel={bestLevel}
                 bestPoints={bestPoints[17].bestPoints}/>
            <Row number={18} name={'Массовка по документу'} difficult={"2"} play={PATH.PATTERNTWO}
                 description={'Найти три одинаковых в определенном порядке'} day={'friday'} bestLevel={bestLevel}
                 bestPoints={bestPoints[18].bestPoints}/>
            <Row number={19} name={'Сборка'} difficult={"3"} play={PATH.CARSBYMODELSTWO}
                 description={'Найти марку и модель автомобиля'} day={'additional'} bestLevel={bestLevel}
                 bestPoints={bestPoints[19].bestPoints}/>
            <Row number={20} name={'Пьяная масовка'} difficult={"4"} play={PATH.THREEMATCHESTWOROTATEONE}
                 description={'Найти три одинаковых'} day={'monday'} bestLevel={bestLevel}
                 bestPoints={bestPoints[20].bestPoints}/>
            <Row number={21} name={'Пьяная масовка'} difficult={"4"} play={PATH.THREEMATCHESTWOROTATETWO}
                 description={'Найти три одинаковых'} day={'wednesday'} bestLevel={bestLevel}
                 bestPoints={bestPoints[21].bestPoints}/>
            <Row number={22} name={'Пьяная масовка по документу'} difficult={"4"} play={PATH.CRAZYONE}
                 description={'Найти три одинаковых в определенном порядке'} day={'friday'} bestLevel={bestLevel}
                //FIX
                 bestPoints={bestPoints[21].bestPoints}/>

            {/*<Row number={11} name={'Tect'} difficult={"x"} play={PATH.TRIPLETSET} description={'Найти три'}/>*/}


        </section>
    );
};

