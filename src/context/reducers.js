const initialState = {
  isAuth: false,
};

const types = {
  LOGIN_USER: 'LOGIN_USER',
  LOGOUT_USER: 'LOGOUT_USER',
};

const reducer = (state = initialState, action) => {
  /* eslint-disable no-console */
  console.log({ oldState: state, type: action.type, payload: action.payload });
  /* eslint-enable no-console */

  switch (action.type) {
    case types.LOGIN_USER:
      return {
        ...state,
        isAuth: true,
      };
    case types.LOGOUT_USER:
      return {
        ...state,
        isAuth: false,
      };
    // case types.REMOVE_FROM_TECH_LIST:
    //   return {
    //     ...state,
    //     techList: state.techList.filter(tech => tech !== action.payload),
    //   };
    default:
      throw new Error('Unexpected action');
  }
};
export { initialState, types, reducer };
