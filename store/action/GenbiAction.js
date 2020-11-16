export const LIKE_GENBI = 'LIKE_GENBI'

export const likeGenbi = (likedNow) => {
    return {type : LIKE_GENBI, liked : !likedNow}
}