import {PATH} from "../AppRoutes/Path";
import {Match} from "./Match";
import {firstLevel, polmoFirstLevel, secondLevel} from "./Levels";
import {Route, Routes} from "react-router-dom";




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


// Inside your JSX component

//return <>{generateRoutes()}</>;