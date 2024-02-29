import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers/reducer'

export const store = configureStore({
  reducer: {
    reducer: reducers,
  },
});