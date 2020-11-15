import { LIKE_ARTIKEL } from "../action/ArtikelAction";

const initState = {
  liked: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case LIKE_ARTIKEL:
      return { liked: action.liked };
  }
  return state;
};
 