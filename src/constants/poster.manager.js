import {POSTER_INFOS} from "./poster";

export function id2posterInfo(id) {
    return POSTER_INFOS.find(posterInfo => posterInfo.id === id);
}

export function posterInfosExceptId(id) {
    return POSTER_INFOS.filter(posterInfo => posterInfo.id !== id);
}