import {useSelector} from "react-redux";
import {RootState} from "../Store/store";
import {CategoryType} from "../Match/BonusMachine/bomusMachine.data";
import {useState} from "react";


export const useBonus = () => {
    const machineData = useSelector<RootState, CategoryType[]>(state => state.machine)
    const calculateBonus = (): number[] =>{

        let secondsBonus = 0;
        let multiplyBonus = 1;
        machineData.forEach((category) => {
            const { bonusType } = category.active;
            if (bonusType === "seconds") {
                secondsBonus += category.active.bonus;
            } else if (bonusType === "multiply") {
                multiplyBonus *= category.active.bonus;
            }
        });
        return [secondsBonus, multiplyBonus];
    }
    const calculatingBonus = calculateBonus()
    const secondsBonus = calculatingBonus[0]
    const multiplyBonus = calculatingBonus[1]


    return {secondsBonus, multiplyBonus}
}
