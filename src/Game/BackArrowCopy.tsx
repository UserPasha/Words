import React, {FC} from 'react';
import backArrowIcon from "../Common/Assets/images/arrowBack.svg";
import {Link} from "react-router-dom";
import style from './BlackArrowCopy.module.css'

interface IBackArrow{
    path: string
}
export const BackArrowCopy:FC<IBackArrow> = ({path}) => {
    return (
        <>
            <Link to={path}><img src={backArrowIcon}
                                 className={style.backArrow}
                                 alt='back'/></Link>
        </>
    );
};

