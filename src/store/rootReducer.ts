import { combineReducers } from '@reduxjs/toolkit';

// Placeholder reducer for future feature slices
const appReducer = (state = { initialized: true }, _action: unknown) => {
  return state;
};

export const rootReducer = combineReducers({
  app: appReducer,
});
