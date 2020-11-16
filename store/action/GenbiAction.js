export const LIKE_GENBI = "LIKE_GENBI";
export const UPDATE_LIKE_GENBI = "UPDATE_LIKE_GENBI";

export const likeGenbi = (id, isLike) => {
  console.log("ff");
  return { type: LIKE_GENBI, id: id, like: isLike };
};

export const updateLikeGenbi = (id, isLike) => {
  console.log("update");
  return { type: UPDATE_LIKE_GENBI, id: id, like: isLike };
};
