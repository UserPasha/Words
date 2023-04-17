import React, {FC} from 'react';
import style from './BackArrow.module.css'
import backArrowIcon from "../../Assets/images/arrowBack.svg";
import {Link} from "react-router-dom";

interface IBackArrow{
    path: string
}
export const BackArrow:FC<IBackArrow> = ({path}) => {
    return (
        <>
            <Link to={path}><img src={backArrowIcon}
                                className={style.backArrow}
                                alt='back'/></Link>
        </>
    );
};

