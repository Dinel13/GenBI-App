import { LIKE_GENBI } from "../action/GenbiAction";

const initState = {
  liked: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case LIKE_GENBI:
      return { liked: action.liked };
  }
  return state;
};
 