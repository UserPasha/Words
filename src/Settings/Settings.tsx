import React, {ChangeEvent, useState} from 'react';
import style from './Settings.module.css'
import Mtex from "../assets/images/match/MTex.jpg";
import Metelli from "../assets/images/match/metelli.png";
import Lynx from "../assets/images/match/lynxAuto.png";
import Mann from "../assets/images/match/mann_filter.jpg";
import AsMetall from "../assets/images/match/asmetal.png";
import BluePrint from "../assets/images/match/Blue_Print.jpg";
import {changeColorScheme} from "../Store/colorSchemeReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../Store/store";
import {BackArrow} from "../Common/Components/BackArrow/BackArrow";
import {ImagesData} from "../Profile/images.data";
import {ImageComponent} from "../Profile/ImageComponenet";
import okIcon from "../assets/images/match/ok.svg";
import cancelIcon from "../assets/images/match/cancel.svg";
import editIcon from "../assets/images/match/edit.svg";
import {saveNewName} from "../Store/PlayerNameReducer";
import {saveNewAvatar} from "../Store/PlayerAvatarReducer";

export const Settings = () => {
    const dispatch = useDispatch<AppDispatch>();

    const playerName = useSelector<RootState, string>(state => state.playerName.name)
    const playerAvatar = useSelector<RootState, string>(state => state.playerAvatar.avatar)
    const colorScheme = useSelector<RootState, string>(state => state.colorScheme.scheme)

    const [isEditName, setIsEditName] = useState<boolean>(false)
    const [newName, setNewName] = useState<string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewName(e.currentTarget.value)
    }
    const saveNameToRedux = (name: string) => {
        dispatch(saveNewName(newName))
        setIsEditName(false)
    }
    const cancelChangingName = () => {
        setNewName('')
        setIsEditName(false)
    }

    const [isEditAvatar, setIsEditAvatar] = useState<boolean>(false)
    const [newAvatar, setNewAvatar] = useState<string>('')
    const [selectedImage, setSelectedImage] = useState<string>('')

    const saveTemporaryAvatar = (image: string) => {
        setNewAvatar(image)
        setSelectedImage(image);
    };

    const saveAvatarToRedux = () => {
        dispatch(saveNewAvatar(newAvatar))

        setIsEditAvatar(false)
    }

    const schemes = [
        {name: 'default', label: 'Motex', image: Mtex},
        {name: 'metelli', label: 'Metelli', image: Metelli},
        {name: 'lynx', label: 'Lynx', image: Lynx},
        {name: 'mann', label: 'Mann', image: Mann},
        {name: 'asMetall', label: 'As Metall', image: AsMetall},
        {name: 'bluePrint', label: 'Blue Print', image: BluePrint}
    ];
    const handleSchemeChange = (newScheme: string) => {
        dispatch(changeColorScheme(newScheme));
    };
    return (
        <div className={`${style.wrapper} ${style[colorScheme]}`}>
            <h2>НАСТРОЙКИ</h2>
            <BackArrow path={'../profile'}/>
            {/*<div className={`${style.infoContainer} ${style[colorScheme]}`}>*/}
                <h3>АВАТАР</h3>
                {isEditAvatar
                    ?
                    <div className={`${style.avatarsWrapper} ${style[colorScheme]}`}>
                        {ImagesData.map(image => <ImageComponent key={image.image}
                                                                 image={image.image}
                                                                 onClick={() => saveTemporaryAvatar(image.image)}
                                                                 isSelected={selectedImage === image.image}

                        />)}
                        <div className={style.buttons}>
                            <img src={okIcon} alt={'ok'}
                                 onClick={saveAvatarToRedux}/>
                            <img src={cancelIcon} alt={'cancel'}
                                 onClick={() => setIsEditAvatar(false)}/>
                        </div>

                    </div>
                    :
                    <div className={`${style.avatarContainer} ${style[colorScheme]}`}>
                        <img src={playerAvatar} alt={'avatar'}/>
                        <div className={style.pencil}>
                            <img src={editIcon}
                                 alt={'edit name'}
                                 onClick={() => setIsEditAvatar(true)}/>
                        </div>
                    </div>
                }

                <h3>ИМЯ</h3>
                <div className={`${style.nameContainer} ${style[colorScheme]}`}>

                    {isEditName
                        ?
                        <div className={style.edit}>
                            <input value={newName}
                                   onChange={onChangeHandler}
                                   placeholder={'Введите имя...'}
                            />
                            <img src={okIcon} alt={'ok'}
                                 onClick={() => saveNameToRedux(newName)}/>
                            <img src={cancelIcon} alt={'cancel'}
                                 onClick={cancelChangingName}/>
                        </div>
                        :
                        <div className={style.edit}>
                            <div className={style.name}>{playerName}</div>
                            <div className={style.pencil}>
                                <img src={editIcon}
                                     alt={'edit name'}
                                     onClick={() => setIsEditName(true)}/>
                            </div>
                        </div>}


                </div>
            {/*</div>*/}
            <div className={style.changeScheme}>
                <h3>СТИЛИ</h3>
                <div className={style.buttons}>
                    {schemes.map((scheme) => (
                        <div className={style.switcher}
                             style={{backgroundImage: `url(${scheme.image})`}}
                             key={scheme.name}
                             onClick={() => handleSchemeChange(scheme.name)}
                        >
                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
};

