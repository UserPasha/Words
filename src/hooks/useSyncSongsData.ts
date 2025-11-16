import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/store";
import { resetGame } from "../Store/songsReducer";
import { dataSongs } from "../Game/songs.data";

export const useSyncSongsData = () => {
    const dispatch = useDispatch();
    const roundsFromRedux = useSelector((state: RootState) => state.songs);

    useEffect(() => {
        const reduxCount = roundsFromRedux.length;
        const fileCount = dataSongs.length;

        // Если количество раундов изменилось → что-то обновилось
        if (reduxCount !== fileCount) {
            console.warn(
                `[Songs Sync] Обнаружено изменение данных: Redux=${reduxCount}, File=${fileCount}. Сбрасываю прогресс...`
            );

            // Удаляем сохранённый стейт
            localStorage.removeItem("persist:root");
            localStorage.removeItem("songs");

            // Сбрасываем Redux state
            dispatch(resetGame());
        }
    }, []);
};
