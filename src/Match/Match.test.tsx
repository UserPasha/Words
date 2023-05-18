import React, {useState} from 'react';
import { render } from '@testing-library/react';
import { Match } from './Match';
import {filtronMix} from "./Levels";
import {PATH} from "../AppRoutes/AppRoutes";


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
                  defaultPoints={200}/>);
});
