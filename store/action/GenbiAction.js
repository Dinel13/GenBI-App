export const LIKE_GENBI = "LIKE_GENBI";
export const UPDATE_LIKE_GENBI = "UPDATE_LIKE_GENBI";

export const likeGenbi = (id, isLike) => {
  return { type: LIKE_GENBI, id: id, like: isLike };
};

export const updateLikeGenbi = (id, isLike) => {
  return { type: UPDATE_LIKE_GENBI, id: id, like: isLike };
};
