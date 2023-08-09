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
            <Row number={8} name={'Пьяная Сборка'} difficult={"2"} play={PATH.CLASSICWITHROTATEONE}
                 description={'Найти пару'}
                 day={'monday'} bestLevel={bestLevel} bestPoints={bestPoints[8].bestPoints}/>
            <Row number={9} name={'Пьяная Сборка'} difficult={"2"} play={PATH.CLASSICWITHROTATETWO}
                 description={'Найти пару'}
                 day={'wednesday'} bestLevel={bestLevel} bestPoints={bestPoints[9].bestPoints}/>
            <Row number={10} name={'Polmostrow'} difficult={"1"} play={PATH.POLMOTHREE} description={'Найти пару'}
                 day={'friday'} bestLevel={bestLevel} bestPoints={bestPoints[10].bestPoints}/>
            <Row number={11} name={'Разборка'} difficult={"2"} play={PATH.CARSBYMODELSONE}
                 description={'Найти марку и модель автомобиля'}
                 day={'additional'} bestLevel={bestLevel} bestPoints={bestPoints[11].bestPoints}/>
            <Row number={12} name={'Пьяная Сборка'} difficult={"2"} play={PATH.CLASSICWITHROTATETHREE}
                 description={'Найти пару'}
                 day={'monday'} bestLevel={bestLevel} bestPoints={bestPoints[12].bestPoints}/>
            <Row number={13} name={'Сборка'} difficult={"2"} play={PATH.FIVE} description={'Найти пару'}
                 day={'wednesday'} bestLevel={bestLevel} bestPoints={bestPoints[13].bestPoints}/>
            <Row number={14} name={'Сборка по документу'} difficult={"1"} play={PATH.CLASSICPATTERNONE}
                 description={'Найти пару в определенном порядке'}
                 day={'friday'} bestLevel={bestLevel} bestPoints={bestPoints[14].bestPoints}/>
            <Row number={15} name={'Сборка'} difficult={"2"} play={PATH.HALFTWO} description={'Найти вторую половину'}
                 day={'additional'} bestLevel={bestLevel} bestPoints={bestPoints[15].bestPoints}/>
            <Row number={16} name={'Сборка по документу'} difficult={"1"} play={PATH.CLASSICPATTERNTWO}
                 description={'Найти пару в определенном порядке'}
                 day={'monday'} bestLevel={bestLevel} bestPoints={bestPoints[16].bestPoints}/>
            <Row number={17} name={'Сборка по документу'} difficult={"1"} play={PATH.CLASSICPATTERNTHREE}
                 description={'Найти пару в определенном порядке'}
                 day={'wednesday'} bestLevel={bestLevel} bestPoints={bestPoints[17].bestPoints}/>
            <Row number={18} name={'Сборка по документу'} difficult={"1"} play={PATH.CLASSICWITHROTATEFOUR}
                 description={'Найти пару в определенном порядке'}
                 day={'friday'} bestLevel={bestLevel} bestPoints={bestPoints[18].bestPoints}/>
            <Row number={19} name={'Разборка'} difficult={"2"} play={PATH.CARSBYMODELSTWO}
                 description={'Найти марку и модель автомобиля'}
                 day={'additional'} bestLevel={bestLevel} bestPoints={bestPoints[19].bestPoints}/>
            <Row number={20} name={'Патрик и старший смены'} difficult={"3"} play={PATH.PATRICKFIRST}
                 description={'Патрик перемешивает поле, старший помогает найти'} day={'monday'} bestLevel={bestLevel}
                 bestPoints={bestPoints[20].bestPoints}/>
            <Row number={21} name={'Патрик и старший смены'} difficult={"3"} play={PATH.PATRICKSECOND}
                 description={'Патрик перемешивает поле, старший помогает найти'} day={'wednesday'}
                 bestLevel={bestLevel}
                 bestPoints={bestPoints[21].bestPoints}/>
            <Row number={22} name={'Патрик и старший смены'} difficult={"3"} play={PATH.PATRICKTHIRD}
                 description={'Патрик перемешивает поле, старший помогает найти'} day={'friday'} bestLevel={bestLevel}
                 bestPoints={bestPoints[22].bestPoints}/>
            <Row number={23} name={'Сборка'} difficult={"2"} play={PATH.HALFTHREE} description={'Найти вторую половину'}
                 day={'additional'} bestLevel={bestLevel} bestPoints={bestPoints[23].bestPoints}/>
            <Row number={24} name={'Два документа'} difficult={"3"} play={PATH.REFLIPONE}
                 description={'Найти пару два раза'}
                 day={'monday'} bestLevel={bestLevel} bestPoints={bestPoints[24].bestPoints}/>
            <Row number={25} name={'Два документа'} difficult={"3"} play={PATH.REFLIPONE}
                 description={'Найти пару два раза'}
                 day={'wednesday'} bestLevel={bestLevel} bestPoints={bestPoints[25].bestPoints}/>
            <Row number={26} name={'Патрик и старший смены'} difficult={"3"} play={PATH.PATRICKFOUR}
                 description={'Патрик перемешивает поле, старший помогает найти'} day={'friday'} bestLevel={bestLevel}
                 bestPoints={bestPoints[26].bestPoints}/>
            <Row number={27} name={'Разборка'} difficult={"2"} play={PATH.CARSBYMODELSTHREE}
                 description={'Найти марку и модель автомобиля'}
                 day={'additional'} bestLevel={bestLevel} bestPoints={bestPoints[27].bestPoints}/>
            <Row number={28} name={'Два документа'} difficult={"3"} play={PATH.REFLIPTHREE}
                 description={'Найти пару два раза'}
                 day={'monday'} bestLevel={bestLevel} bestPoints={bestPoints[28].bestPoints}/>
            <Row number={29} name={'Два документа'} difficult={"3"} play={PATH.REFLIPFOUR}
                 description={'Найти пару два раза'}
                 day={'wednesday'} bestLevel={bestLevel} bestPoints={bestPoints[29].bestPoints}/>
            <Row number={30} name={'Polmostrow'} difficult={"3"} play={PATH.POLMOFOUR} description={'Найти пару'}
                 day={'friday'} bestLevel={bestLevel} bestPoints={bestPoints[30].bestPoints}/>
            <Row number={31} name={'Сборка'} difficult={"2"} play={PATH.HALFFOUR} description={'Найти вторую половину'}
                 day={'additional'} bestLevel={bestLevel} bestPoints={bestPoints[31].bestPoints}/>
            <Row number={32} name={'Пьяная Сборка по документу'} difficult={"1"} play={PATH.ROTATEPATTERNONE}
                 description={'Найти пару в определенном порядке'}
                 day={'monday'} bestLevel={bestLevel} bestPoints={bestPoints[32].bestPoints}/>
            <Row number={33} name={'Пьяная Сборка по документу'} difficult={"1"} play={PATH.ROTATEPATTERNTWO}
                 description={'Найти пару в определенном порядке'}
                 day={'wednesday'} bestLevel={bestLevel} bestPoints={bestPoints[33].bestPoints}/>
            <Row number={34} name={'Патрик и старший смены'} difficult={"3"} play={PATH.PATRICKROTATEONE}
                 description={'Патрик перемешивает поле, старший помогает найти'} day={'friday'} bestLevel={bestLevel}
                 bestPoints={bestPoints[34].bestPoints}/>
            <Row number={35} name={'Разборка'} difficult={"2"} play={PATH.CARSBYMODELSFOUR}
                 description={'Найти марку и модель автомобиля'}
                 day={'additional'} bestLevel={bestLevel} bestPoints={bestPoints[35].bestPoints}/>
            <Row number={36} name={'Патрик и старший смены'} difficult={"3"} play={PATH.PATRICKROTATETWO}
                 description={'Патрик перемешивает поле, старший помогает найти'} day={'friday'} bestLevel={bestLevel}
                 bestPoints={bestPoints[36].bestPoints}/>
                <Row number={13} name={'Сборка'} difficult={"2"} play={PATH.FIVE} description={'Найти пару'}
                     day={'wednesday'} bestLevel={bestLevel} bestPoints={bestPoints[13].bestPoints}/>

            {/*<Row number={8} name={'Сборка'} difficult={"2"} play={PATH.FIVE} description={'Найти пару'}*/}
            {/*     day={'monday'} bestLevel={bestLevel} bestPoints={bestPoints[8].bestPoints}/>*/}
            {/*<Row number={9} name={'Два документа'} difficult={"3"} play={PATH.REFLIPONE}*/}
            {/*     description={'Найти пару два раза'}*/}
            {/*     day={'wednesday'} bestLevel={bestLevel} bestPoints={bestPoints[9].bestPoints}/>*/}

            {/*<Row number={11} name={'Сборка'} difficult={"2"} play={PATH.HALFTWO} description={'Найти вторую половину'}*/}
            {/*     day={'additional'} bestLevel={bestLevel} bestPoints={bestPoints[11].bestPoints}/>*/}
            {/*<Row number={12} name={'Два документа'} difficult={"3"} play={PATH.REFLIPTWO}*/}
            {/*     description={'Найти пару два раза'}*/}
            {/*     day={'monday'} bestLevel={bestLevel} bestPoints={bestPoints[12].bestPoints}/>*/}

            {/*<Row number={13} name={'Сборка'} difficult={"2"} play={PATH.CIRCLE} description={'Крутящий момент'}*/}
            {/*     day={'wednesday'} bestLevel={bestLevel} bestPoints={bestPoints[13].bestPoints}/>*/}
            {/*<Row number={14} name={'Массовка'} difficult={"4"} play={PATH.TRIPLEMATCHONE}*/}
            {/*     description={'Найти три одинаковых'}*/}
            {/*     day={'friday'} bestLevel={bestLevel} bestPoints={bestPoints[14].bestPoints}/>*/}

            {/*<Row number={15} name={'Сборка'} difficult={"2"} play={PATH.CARSBYMODELSONE}*/}
            {/*     description={'Найти марку и модель автомобиля'} day={'additional'} bestLevel={bestLevel}*/}
            {/*     bestPoints={bestPoints[15].bestPoints}/>*/}
            {/*<Row number={16} name={'Массовка'} difficult={"3"} play={PATH.THREEMATCHESTWO}*/}
            {/*     description={'Найти три одинаковых'}*/}
            {/*     day={'monday'} bestLevel={bestLevel} bestPoints={bestPoints[16].bestPoints}/>*/}

            {/*<Row number={17} name={'Массовка по документу'} difficult={"4"} play={PATH.PATTERNONE}*/}
            {/*     description={'Найти три одинаковых в определенном порядке'} day={'wednesday'} bestLevel={bestLevel}*/}
            {/*     bestPoints={bestPoints[17].bestPoints}/>*/}
            {/*<Row number={18} name={'Массовка по документу'} difficult={"2"} play={PATH.PATTERNTWO}*/}
            {/*     description={'Найти три одинаковых в определенном порядке'} day={'friday'} bestLevel={bestLevel}*/}
            {/*     bestPoints={bestPoints[18].bestPoints}/>*/}
            {/*<Row number={19} name={'Сборка'} difficult={"3"} play={PATH.CARSBYMODELSTWO}*/}
            {/*     description={'Найти марку и модель автомобиля'} day={'additional'} bestLevel={bestLevel}*/}
            {/*     bestPoints={bestPoints[19].bestPoints}/>*/}
            {/*<Row number={20} name={'Пьяная масовка'} difficult={"4"} play={PATH.THREEMATCHESTWOROTATEONE}*/}
            {/*     description={'Найти три одинаковых'} day={'monday'} bestLevel={bestLevel}*/}
            {/*     bestPoints={bestPoints[20].bestPoints}/>*/}
            {/*<Row number={21} name={'Пьяная масовка'} difficult={"4"} play={PATH.THREEMATCHESTWOROTATETWO}*/}
            {/*     description={'Найти три одинаковых'} day={'wednesday'} bestLevel={bestLevel}*/}
            {/*     bestPoints={bestPoints[21].bestPoints}/>*/}
            {/*<Row number={22} name={'Пьяная масовка по документу'} difficult={"4"} play={PATH.CRAZYONE}*/}
            {/*     description={'Найти три одинаковых в определенном порядке'} day={'friday'} bestLevel={bestLevel}*/}
            {/*    //FIX*/}
            {/*     bestPoints={bestPoints[21].bestPoints}/>*/}

            {/*<Row number={11} name={'Tect'} difficult={"x"} play={PATH.TRIPLETSET} description={'Найти три'}/>*/}


        </section>
    );
};

