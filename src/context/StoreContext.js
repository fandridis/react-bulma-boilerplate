import React, { createContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { reducer, initialState } from './reducers';
import useActions from './actions';

const StoreContext = createContext(initialState);

const StoreProvider = ({ children }) => {
  // Set up reducer with useReducer and our defined reducer, initialState from reducers.js
  const [state, dispatch] = useReducer(reducer, initialState);
  // Create an object of all our actions, handling special cases where a simple dispatch is too primitive
  const actions = useActions(state, dispatch);

  // Log new state
  useEffect(() => {
    /* eslint-disable no-console */
    console.log({ newState: state });
    /* eslint-enable no-console */
  }, [state]);

  // Render state, dispatch and special case actions
  return (
    <StoreContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export { StoreContext, StoreProvider };
