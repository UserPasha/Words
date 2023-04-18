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
    fourthLevel, halfFirstLevel,
    secondLevel,
    thirdLevel,
    tripleFirstLevel,
    tripleSecondLevel
} from "../Match/Levels";
import {GameBoard} from "../Match/Gameboard";
import {TripleMatch} from "../TripleMatch/TripleMatch";


export const PATH = {
    HOME: '/',
    CARDS: '/cards',
    WORD: '/word',
    SEARCH: '/search',
    TEST: '/secret',
    GAME: '/game',
    MATCH: '/match',
    ONE: '/one',
    TWO: '/two',
    THREE: '/three',
    FOUR: '/four',
    FILTRON: '/filtron',
    THREEMATCHESTWO: '/threeMatchesTwo'
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
                {/*<Route path={PATH.ONE} element={<Match cardsToPlay={firstLevel}/>}/>*/}
                {/*<Route path={PATH.TWO} element={<Match cardsToPlay={secondLevel}/>}/>*/}
                {/*<Route path={PATH.THREE} element={<Match cardsToPlay={thirdLevel}/>}/>*/}
                {/*<Route path={PATH.FOUR} element={<Match cardsToPlay={fourthLevel}/>}/>*/}
                {/*<Route path={PATH.FILTRON} element={<Match cardsToPlay={filtronMix}/>}/>*/}
                <Route path={PATH.MATCH} element={<GameBoard/>}/>
                {/*<Route path={PATH.MATCH} element={<TripleMatch cardsToPlay={tripleFirstLevel} duration={130} path={PATH.THREEMATCHESTWO}/> }/>*/}
                {/*<Route path={PATH.MATCH} element={<Match cardsToPlay={halfFirstLevel} duration={30} path={PATH.THREEMATCHESTWO}/> }/>*/}
                {/*<Route path={PATH.MATCH} element={<Circle width={400} height={400} holeRadius={20} drumRadius={180}/> }/>*/}
                <Route path={PATH.THREEMATCHESTWO} element={<TripleMatch cardsToPlay={tripleSecondLevel} duration={120} path={'/'}/> }/>
            </Routes>
            
        </>
    );
};

export default AppRoutes;