import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Cards} from "../Cards/Cards";
import {CurrentCard} from "../CurrentCard/CurrentCard";
import {Home} from "../Home/Home";
import {Search} from "../Search/Search";
import {TestComponent} from "../TestComponent/TestComponent";
import {Game} from "../Game/Game";
import {Match} from "../Match/Match";
import {
    filtronMix,
    firstLevel,
    fourthLevel, halfFirstLevel, patternFirstLevelCards, polmoFirstLevel,
    secondLevel,
    thirdLevel,
    tripleFirstLevel,
    tripleSecondLevel
} from "../Match/Levels";
import {GameBoard} from "../Match/Gameboard";
import {TripleMatch} from "../TripleMatch/TripleMatch";
import {TripleMatchCopy} from "../TripleMatch/TripleMatchCopy";


export const PATH = {
    HOME: '/',
    CARDS: '/cards',
    WORD: '/word',
    SEARCH: '/search',
    TEST: '/secret',
    GAME: '/game',
    MATCH: '/match',
    FILTRON: '/filtron',
    ONE: '/one',
    TWO: '/two',
    THREE: '/three',
    FOUR: '/four',
    HALFONE: '/halfOne',
    TRIPLEMATCHONE: '/tripleMatchOne',
    THREEMATCHESTWO: '/threeMatchesTwo',
    THREEMATCHESTWOROTATEONE: '/threeMatchesTwoRotateOne',
    THREEMATCHESTWOROTATETWO: '/threeMatchesTwoRotateTwo',
    POLMOONE: '/polmoOne',
    PATTERNONE: '/patternOne',

    TRIPLETSET: '/tripletest'
}
const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={PATH.HOME} element={<Home/>}/>
                <Route path={PATH.CARDS} element={<Cards/>}/>
                <Route path={PATH.WORD} element={<CurrentCard/>}/>
                <Route path={PATH.SEARCH} element={<Search/>}/>
                <Route path={PATH.TEST} element={<TestComponent/>}/>
                <Route path={PATH.GAME} element={<Game/>}/>

                <Route path={PATH.MATCH} element={<GameBoard/>}/>

                <Route path={PATH.FILTRON} element={<Match cardsToPlay={filtronMix} path={PATH.ONE} duration={20} rotate={false} description={'Найти пару'}/>}/>
                <Route path={PATH.ONE} element={<Match cardsToPlay={firstLevel} path={PATH.TWO} duration={30} rotate={false} description={'Найти пару'} />}/>
                <Route path={PATH.TWO} element={<Match cardsToPlay={secondLevel} path={PATH.THREE} duration={45} rotate={false} description={'Найти пару'}/>}/>
                <Route path={PATH.THREE} element={<Match cardsToPlay={thirdLevel} path={PATH.FOUR} duration={50} rotate={false} description={'Найти пару'}/>}/>
                <Route path={PATH.FOUR} element={<Match cardsToPlay={fourthLevel} path={PATH.HALFONE} duration={60} rotate={false} description={'Найти пару'}/>}/>
                <Route path={PATH.HALFONE} element={<Match cardsToPlay={halfFirstLevel} duration={30} path={PATH.POLMOONE} rotate={false} description={'Найти вторую половину'}/> }/>
                <Route path={PATH.POLMOONE} element={<Match cardsToPlay={polmoFirstLevel} duration={45} path={PATH.TRIPLEMATCHONE} rotate={false} description={'Найти пару'}/> }/>

                <Route path={PATH.TRIPLEMATCHONE} element={<TripleMatch cardsToPlay={tripleFirstLevel} duration={60} path={PATH.THREEMATCHESTWO} rotate={false} description={'Масовка'}/> }/>
// send level name, number + rewrite modal
                {/*<Route path={PATH.MATCH} element={<Circle width={400} height={400} holeRadius={20} drumRadius={180}/> }/>*/}
                <Route path={PATH.THREEMATCHESTWO} element={<TripleMatch cardsToPlay={tripleSecondLevel} duration={120} path={PATH.PATTERNONE} rotate={false} description={'Масовка'}/> }/>
                <Route path={PATH.PATTERNONE} element={<TripleMatchCopy cardsToPlay={patternFirstLevelCards} duration={60} path={PATH.THREEMATCHESTWOROTATEONE} rotate={false} description={'Массовка по документу'}/> }/>

                <Route path={PATH.THREEMATCHESTWOROTATEONE} element={<TripleMatch cardsToPlay={tripleFirstLevel} duration={50} path={PATH.THREEMATCHESTWOROTATETWO} rotate={true} description={'Пьяная масовка'}/> }/>
                <Route path={PATH.THREEMATCHESTWOROTATETWO} element={<TripleMatch cardsToPlay={tripleSecondLevel} duration={150} path={'/match'} rotate={true} description={'Пьяная масовка'}/> }/>

            </Routes>
            
        </>
    );
};

export default AppRoutes;