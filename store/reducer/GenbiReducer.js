import { LIKE_GENBI, UPDATE_LIKE_GENBI } from "../action/GenbiAction";

const initState = {
  genbis: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case LIKE_GENBI:
      const newGenbi = { id: action.id, like: true };
      return {
        ...state,
        genbis: state.genbis.concat(newGenbi),
      };

    case UPDATE_LIKE_GENBI:
      const indexGenbi = state.genbis.findIndex(
        (genbi) => genbi.id === action.id
      );

      let updateGenbi;
      //orang sudah pernah di like
      if (state.genbis[indexGenbi].like) {
        updateGenbi = {
          id: action.id,
          like: false,
        };
      } else {
        updateGenbi = {
          id: action.id,
          like: true,
        };
      }
      const updateStateGenbis = [...state.genbis];
      updateStateGenbis[indexGenbi] = updateGenbi;
      return { ...state, genbis: updateStateGenbis };
  }
  return state;
};
