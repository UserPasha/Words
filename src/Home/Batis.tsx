

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../Store/store";
import {addInfo, removeInfo, removeItem, sortByName} from "../Store/BatisReducer";
import { setTitle, clearTitle } from "../Store/BatisTitleReducer";
import style from "./Batis.module.css";

export type ListItem = {
    name: string;
    size: string;
    quantity: string;
};


export const SmartListComponent = () => {
    const dispatch = useDispatch<AppDispatch>()

    const batisItems = useSelector((state: RootState) => state.batis);
    const title = useSelector((state: RootState) => state.batisTitle);


    const [isListVisible, setIsListVisible] = useState(false);
    const [selectedText, setSelectedText] = useState("");
    const [selectedNumber, setSelectedNumber] = useState("");
    const [quantity, setQuantity] = useState("");
    const [items, setItems] = useState<ListItem[]>([]);
    const [showConfirm, setShowConfirm] = useState(false);
    const [showItemDelete, setShowItemDelete] = useState<boolean>(false);
    const textOptions = ["Свеча Белая", "Свеча Натуральная", "Сибирская", "Таиланд"];
    const numberOptions = [0.5, 0.7, 1, 1.2, 1.5, 1.8, "2.0", 2.2, 2.5, "3.0"];

    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [titleInput, setTitleInput] = useState("");



    useEffect(() => {
        if (batisItems.length > 0) {
            setItems(batisItems);
            setIsListVisible(true);
        }
    }, [batisItems]);


    const handleAddList = (): void => {
        setIsListVisible(true);
    };

    const handleAddItem = (): void => {
        if (selectedText && selectedNumber && quantity) {
            const newItem: ListItem = {
                name: selectedText,
                size: selectedNumber,
                quantity,
            };

            setItems((prev) => [...prev, newItem]);
            dispatch(addInfo(selectedText, selectedNumber, quantity));

            setSelectedText("");
            setSelectedNumber("");
            setQuantity("");
        }
    };

    const handleConfirmDelete = (): void => {
        setItems([]);
        setIsListVisible(false);
        setShowConfirm(false);

        dispatch(removeInfo())
    };

    const handleDeleteItem = (index: number): void => {
        // Удаляем из локального списка
        setItems((prev) => prev.filter((_, i) => i !== index));

        // Удаляем из Redux
        dispatch(removeItem(index));
    };

    return (
        <div className={style.smartlistContainer}>


            {/* Салатовая кнопка */}
            <button className={style.addSectionBtn} onClick={handleAddList}>
                +
            </button>



            {isListVisible && (
                <div className={style.mainSection}>
                    <div className={style.inputRow}>
                        <select
                            value={selectedText}
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                                setSelectedText(e.target.value)
                            }
                        >
                            <option value="">Ёлка</option>
                            {textOptions.map((t) => (
                                <option key={t} value={t}>
                                    {t}
                                </option>
                            ))}
                        </select>

                        <select
                            value={selectedNumber}
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                                setSelectedNumber(e.target.value)
                            }
                        >
                            <option value="">Размер</option>
                            {numberOptions.map((n) => (
                                <option key={n} value={String(n)}>
                                    {n}
                                </option>
                            ))}
                        </select>

                        <input
                            type="number"
                            placeholder="Количество"
                            value={quantity}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setQuantity(e.target.value)
                            }
                        />

                        <button className={style.greenBtn} onClick={handleAddItem}>
                            Добавить
                        </button>
                    </div>


                    {/* Заголовок */}
                    <div className={style.titleBlock}>
                        {!isEditingTitle ? (
                            <div className={style.titleRow}>

                                {/* Левая кнопка — редактировать */}
                                <button
                                    className={style.iconBtn}
                                    onClick={() => {
                                        setTitleInput(title);
                                        setIsEditingTitle(true);
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                                    </svg>
                                </button>

                                {/* Центр — название */}
                                <h2 className={style.titleText}>{title || "Клиент"}</h2>

                                {/* Правая кнопка — удалить */}
                                {title ? (
                                    <button
                                        className={style.iconBtn}
                                        onClick={() => dispatch(clearTitle())}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="3 6 5 6 21 6" />
                                            <path d="M19 6l-1 14H6L5 6" />
                                            <path d="M10 11v6" />
                                            <path d="M14 11v6" />
                                            <path d="M9 6V4h6v2" />
                                        </svg>
                                    </button>
                                ) : (
                                    <div style={{ width: 20 }}></div>  // чтобы центр не съезжал
                                )}
                            </div>
                        ) : (
                            <>
                                <input
                                    value={titleInput}
                                    onChange={(e) => setTitleInput(e.target.value)}
                                    placeholder="Введите название"
                                />
                                <button onClick={() => { dispatch(setTitle(titleInput)); setIsEditingTitle(false); }}>✔️</button>
                                <button onClick={() => setIsEditingTitle(false)}>✖️</button>
                            </>
                        )}
                    </div>



                    <div className={style.listBlock}>
                        {items.length === 0 ? (
                            <p className={style.empty}>Список пуст</p>
                        ) : (
                            items.map((item, i) => (
                                <div className={style.listItem} key={i}>
                                    <span>{item.name}</span>
                                    <span>{item.size}</span>
                                    <span>{item.quantity}</span>
                                    {showItemDelete && (
                                        <button
                                            className={style.deleteItemBtn}
                                            onClick={() => handleDeleteItem(i)}
                                        >
                                            Удалить
                                        </button>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                    {/* Список
                    <div className={style.listBlock}>
                        {items.length === 0 ? (
                            <p className={style.empty}>Список пуст</p>
                        ) : (
                            items.map((item, i) => (
                                <div className={style.listItem} key={i}>
                                    <span>{item.name}</span>
                                    <span>{item.size}</span>
                                    <span>{item.quantity}</span>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Красная кнопка */}
                    <div className={style.deleteWrapper}>
                        <div className={style.bottomControls}>
                            <label className={style.toggleSwitch}>
                                <input
                                    type="checkbox"
                                    checked={showItemDelete}
                                    onChange={(e) => setShowItemDelete(e.target.checked)}
                                />
                                <span className={style.slider}></span>
                                <span className={style.toggleText}>Режим удаления элементов</span>
                            </label>

                            <button
                                className={style.sortBtn}
                                onClick={() => dispatch(sortByName())}
                            >
                                Сортировать по имени
                            </button>

                            <button
                                className={style.redBtn}
                                onClick={() => setShowConfirm(true)}
                            >
                                ×
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Модальное окно */}
            {showConfirm && (
                <div className={style.modalOverlay}>
                    <div className={style.modal}>
                        <h3>Удалить все элементы?</h3>
                        <div className={style.modalButtons}>
                            <button
                                className={style.cancelBtn}
                                onClick={() => setShowConfirm(false)}
                            >
                                Отмена
                            </button>
                            <button className={style.confirmBtn} onClick={handleConfirmDelete}>
                                Удалить
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
