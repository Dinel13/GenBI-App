import {
  LIKE_ARTIKEL,
  BOOKMARK_ARTIKEL,
  UNBOOKMARK_ARTIKEL,
  UNLIKE_ARTIKEL,
} from "../action/ArtikelAction";

const initState = {
  liked: [],
  bookmark: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case LIKE_ARTIKEL:
      const newLike = {
        id: action.artikelId,
        liked: true,
      };
      return {
        ...state,
        liked: state.liked.concat(newLike),
        bookmark: state.bookmark,
      };

    case UNLIKE_ARTIKEL:
      return {
        ...state,
        liked: state.liked.filter((artikel) => artikel.id !== action.artikelId),
        bookmark: state.bookmark,
      };

    case BOOKMARK_ARTIKEL:
      const newBookmark = {
        id: action.artikelId,
        bookmark: true,
      };

      return {
        ...state,
        liked: state.liked,
        bookmark: state.bookmark.concat(newBookmark),
      };

    case UNBOOKMARK_ARTIKEL:
      const indexBookmark = state.bookmark.findIndex(
        (bm) => bm.id === action.artikelId
      );
      return {
        ...state,
        liked: state.liked,
        bookmark: state.bookmark.filter((artikel) => artikel.id !== action.artikelId)
      };
    default:
      return state;
  }
  return state;
};
