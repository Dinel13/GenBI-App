import { CREATE_ACCOUNT, LOGOUT, SET_DID_TRY_AL } from "../action/AuthAction";

const initialState = {
  id: "",
  title: "",
  imageUri: "",
  address: "",
  jabatan: "",
  komsat: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return {
        id: action.id,
        title: action.title,
        imageUri: action.imageUri,
        address: action.address,
        jabatan: action.jabatan,
        komsat: action.komsat,
      };
    case SET_DID_TRY_AL:
      return {
        ...state,
        didTryAutoLogin: true,
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
