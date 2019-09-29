import { types } from './reducers';

function useActions(state, dispatch) {
  function login() {
    if (state.isAut) {
      // console.log('already logged in');
    } else {
      dispatch({ type: types.LOGIN_USER, payload: true });
    }
  }

  return {
    login,
  };

  // function addTechIfNotInList(newTech) {
  //   const techIndex = state.techList.indexOf(newTech);
  //   if (techIndex !== -1) {
  //     console.log('already exists');
  //   } else {
  //     dispatch({ type: types.ADD_TO_TECH_LIST, payload: newTech });
  //   }
  // }

  // return {
  //   addTechIfNotInList,
  // };
}

export default useActions;
