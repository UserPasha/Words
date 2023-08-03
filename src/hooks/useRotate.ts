import {useEffect, useState} from "react";

export const UseRotate = () => {

    const [cardRotationAngle, setCardRotationAngle] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCardRotationAngle(cardRotationAngle + 1);
        }, 50);

        return () => clearInterval(intervalId);
    }, [cardRotationAngle]);

    const rotateStyle = {
        transform: `rotate(${cardRotationAngle}deg)`
    }
    return {rotateStyle}
}