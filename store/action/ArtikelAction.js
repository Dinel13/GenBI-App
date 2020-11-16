export const LIKE_ARTIKEL = 'LIKE_ARTIKEL'
export const UNLIKE_ARTIKEL = 'UNLIKE_ARTIKEL'
export const BOOKMARK_ARTIKEL = 'BOOKMARK_ARTIKEL'
export const UNBOOKMARK_ARTIKEL = 'UNBOOKMARK_ARTIKEL'

export const likeArtikel = (artikelId ) => {
return {type : LIKE_ARTIKEL, artikelId : artikelId }
}

export const unLikeArtikel = artikelId => {
    return {type : UNLIKE_ARTIKEL, artikelId : artikelId }
}

export const bookmarkArtike = artikelId => {
    return {type:BOOKMARK_ARTIKEL, artikelId : artikelId }
}

export const unBookmarkArtike = artikelId => {
return {type:UNBOOKMARK_ARTIKEL, artikelId : artikelId }
}