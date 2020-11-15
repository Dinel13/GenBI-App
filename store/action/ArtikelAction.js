export const LIKE_ARTIKEL = 'LIKE_ARTIKEL'

export const likeArtikel = (likedNow) => {
    return {type : LIKE_ARTIKEL, liked : !likedNow}
}