import { dataSongsRaw } from './songs.dataRaw';
import slugify from 'slugify';
import { roundType } from './types';

export const dataSongs: roundType[] = dataSongsRaw.map(round => ({
    ...round,
    categories: round.categories.map(category => ({
        ...category,
        id: slugify(category.name, { lower: true, strict: true }),
        tracks: category.tracks.map(track => ({
            ...track,
            id: slugify(track.trackName, { lower: true, strict: true }),
        })),
    })),
}));


