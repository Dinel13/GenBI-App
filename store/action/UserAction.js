export const CREATE_ACCOUNT = "CREATE_ACCOUNT";
export const LOGOUT = "LOGOUT";

export const createAccount = ( name) => {
  return async (dispatch, getState) => {

    const response = await fetch(
      `https://genbi-c8ae4.firebaseio.com/user.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
        }),
      }
    );
    const resData = await response.json();
    console.log(resData);
    dispatch({
      type: CREATE_ACCOUNT,
      id: resData.id,
      title: resData.name,
      imageUri: "",
      address: "",
      jabatan: "",
      komsat: "",
    });
  };
};

