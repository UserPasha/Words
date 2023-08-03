import React, {useState} from 'react';
import {render} from '@testing-library/react';
import {Match} from './Match';
import {filtronMix} from "./Levels";
import {PATH} from "../AppRoutes/AppRoutes";
import {ICard} from "../hooks/useMatch";
import Elring from "../assets/images/match/elring.svg";
import TRW from "../assets/images/match/TRW.jpg";
import Brembo from "../assets/images/match/brembo.jpg";
import Gates from "../assets/images/match/Gates.png";


test('renders Match component', () => {
    const [bestLevel, setBestLevel] = useState<number>(
        () => {
            const storedValue = localStorage.getItem('bestLevel');
            return storedValue ? JSON.parse(storedValue) : 1;
        }
    )
    render(<Match cardsToPlay={filtronMix}
                  path={PATH.THREE}
                  duration={20}
                  rotate={false}
                  description={'Найти пару'}
                  bestLevel={bestLevel}
                  setBestLevel={setBestLevel}
                  levelNumber={3}
                  defaultPoints={200}
                  isPatrickMode={false}
                  patternCards={[]}
                  isPattern={false}/>
    );
});

