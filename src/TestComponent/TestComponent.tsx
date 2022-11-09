import React, {useEffect, useState} from 'react';
import style from './TestComponent.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getImageThunk} from "../Store/lingvoReducer";
import {RootState} from "../Store/store";

type ImagesType = {
    title: string
    description: string
    url: string
}
export const TestComponent = () => {
    const dispatch = useDispatch<any>()
    const reduxImages = useSelector<RootState, ImagesType>(state=>state.lingvo)
    const [images, setImages] = useState<Array<ImagesType>>([])
    const req = () => {
        //dispatch(getTranslate('game', 1033, 1049))
        dispatch(getImageThunk("animals", 500))
        setImages([...images, reduxImages])
    }

    return (
        <div className={style.wrapper}>
            <div className={style.hide}
                 onClick={req}></div>
            {images.map((image, index) =>
                <div key={image.url+index} className={style.content}>
                    <h2>{image.title} </h2>
                    <h4 >{image.description}</h4>
                    <img  src={image.url}/>
                </div>
            )}
        </div>
    );
};

