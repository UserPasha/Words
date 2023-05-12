import {PATH} from "../AppRoutes/AppRoutes";
import {Match} from "./Match";
import {firstLevel, polmoFirstLevel, secondLevel} from "./Levels";
import {Route, Routes} from "react-router-dom";

const levels = [
    {
        path: PATH.ONE,
        component: Match,
        cardsToPlay: firstLevel,
        duration: 30,
        nextPath: PATH.TWO,
        rotate: false,
        description: 'Найти пару',
        levelNumber: 0,
        defaultPoints: 100,
    },
    {
        path: PATH.TWO,
        component: Match,
        cardsToPlay: secondLevel,
        duration: 40,
        nextPath: PATH.POLMOONE,
        rotate: false,
        description: 'Найти пару',
        levelNumber: 1,
        defaultPoints: 120,
    },
    {
        path: PATH.POLMOONE,
        component: Match,
        cardsToPlay: polmoFirstLevel,
        duration: 45,
        nextPath: PATH.FILTRON,
        rotate: false,
        description: 'Найти пару',
        levelNumber: 2,
        defaultPoints: 150,
    },






    // {
    //     path: PATH.CIRCLE,
    //     component: Circle,
    //     cardsToPlay: circleLevel,
    //     duration: 110,
    //     nextPath: PATH.TRIPLEMATCHONE,
    //     rotate: false,
    //     description: 'Крутящий момент',
    //     levelNumber: 13,
    //     defaultPoints: 200,
    // },
    // Add other levels here with their respective properties
];

const generateRoutes = () => {
//     return levels.map((level, index) => (
//         <Route
//             key={index}
//     path={level.path}
//     element={
//         <level.component
//     cardsToPlay={level.cardsToPlay}
//     duration={level.duration}
//     path={level.nextPath}
//     rotate={level.rotate}
//     description={level.description}
//     bestLevel={bestLevel}
//     setBestLevel={setBestLevel}
//     levelNumber={level.levelNumber}
//     defaultPoints={level.defaultPoints}
//     />
// }
//     />
// ));
};

// Inside your JSX component

//return <>{generateRoutes()}</>;