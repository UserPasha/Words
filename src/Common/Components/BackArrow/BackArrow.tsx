import React from 'react';
import style from './BackArrow.module.css'
import backArrowIcon from "../../Assets/images/arrowBack.svg";
import {Link} from "react-router-dom";
export const BackArrow = () => {
    return (
        <>
            <Link to={"/"}><img src={backArrowIcon}
                                className={style.backArrow}
                                alt='back'/></Link>
        </>
    );
};

