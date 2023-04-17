import React, {FC, useState} from 'react';
import style from './Modal.module.css'
import closeIcon from "../Common/Assets/images/close.svg";

interface IModal {
    closeModal: (value: boolean) => void
    attempts: number
}

export const Modal: FC<IModal> = ({closeModal, attempts}) => {
    const createEndingOfWord = (attempts: number) =>{
        if(attempts > 4 && attempts < 20 ){
            return `Поздравляем! Вы нашли все пары за ${attempts} попыток`
        }
        else if(attempts % 10 === 1){
            return `Поздравляем! Вы нашли все пары за ${attempts} попытку`
        }
        else if (attempts % 10 > 1 && attempts % 10 < 5){
            return `Поздравляем! Вы нашли все пары за ${attempts} попытки`
        }
        else return `Поздравляем! Вы нашли все пары за ${attempts} попыток`
    }

    return (
        <div className={style.wrapper}>
            <div className={style.modal}>
                <div className={style.closeModal}>
                    <img src={closeIcon}
                         alt='close'
                         onClick={() => closeModal(false)}/>
                </div>
                <div>{createEndingOfWord(attempts)}</div>
            </div>
        </div>
    );
};

