import {ICard} from "../hooks/useMatch";

export const shuffleArray = (array: ICard[]): ICard[] => {
    if (array) {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    } else {
        return [];
    }
};
