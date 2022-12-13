import React, {ChangeEvent, useEffect, useState} from 'react';
import style from './TestComponent.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getImageThunk} from "../Store/lingvoReducer";
import {AppThunkDispatch, RootState} from "../Store/store";

type ImagesType = {
    title: string
    description: string
    url: string
}
export const TestComponent = () => {
    const dispatch = useDispatch<AppThunkDispatch>()
    const reduxImages = useSelector<RootState, ImagesType>(state => state.lingvo)

    const [images, setImages] = useState<Array<ImagesType>>([])
   // const [imagesQuantity, setImagesQuantity] = useState<number>(0)
    const [imagesSubject, setImagesSubject] = useState<string>('')
    const [imagesHeight, setImagesHeight] = useState<number>(500)
    // const onQuantityOnchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setImagesQuantity(+e.currentTarget.value)
    // }
    const onSubjectOnchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setImagesSubject(e.currentTarget.value)
    }
    const onHeightOnchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setImagesHeight(+e.currentTarget.value)
    }
    const req = () => {
        //dispatch(getTranslate('game', 1033, 1049))
        dispatch(getImageThunk(imagesSubject, imagesHeight))
        setImages([...images, reduxImages])
    }

    return (
        <div className={style.wrapper}>
            <div className={style.requestWrapper}>
                {/*<input type={'number'}*/}
                {/*       placeholder={'quantity'}*/}
                {/*       value={imagesQuantity}*/}
                {/*       onChange={onQuantityOnchangeHandler}/>*/}

                <input placeholder={'subject'}
                       value={imagesSubject}
                       onChange={onSubjectOnchangeHandler}/>

                <input type={'number'}
                       value={imagesHeight}
                       placeholder={'height of image'}
                       onChange={onHeightOnchangeHandler}/>

                <div className={style.requestButton}
                     onClick={req}>Request
                </div>
            </div>

            {images.map((image, index) =>
                <div key={image.url + index} className={style.content}>
                    <img src={image.url} alt={'request image'}/>
                    <h2>{image.title} </h2>
                    <h4>{image.description}</h4>

                </div>
            )}
        </div>
    );
};

