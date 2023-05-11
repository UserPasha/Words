import React, {Dispatch, FC, SetStateAction, useEffect, useRef, useState} from 'react';
import style from './ModalMenu.module.css'
import startButton from '../../Common/Assets/images/start.png'
import {Link} from "react-router-dom";

interface IModalMenu {
    isShown: boolean
    setIsShown: Dispatch<SetStateAction<boolean>>
    name: string
    description: string
    path: string
    bestPoints: number
}

export const ModalMenu: FC<IModalMenu> = ({isShown, setIsShown, name, description, path, bestPoints}) => {


    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsShown(false)
            }
        };

        if (isShown) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isShown]);

    return (
        <>
            {isShown && <div className={style.wrapper} ref={modalRef}>
                <div className={style.modal}>
                        <div className={style.info}>
                            <div className={style.name}>
                                {name}
                            </div>
                            <div className={style.description}>
                                {description}
                            </div>
                            <div className={style.bestScore}>
                                Лучший результат: {bestPoints} единиц
                            </div>

                        </div>
                    <button className={style.play}>
                        <Link to={path}>
                        <img src={startButton} alt={"start game"}/>
                        </Link>
                    </button>


                </div>
            </div>}

        </>
    );
};

