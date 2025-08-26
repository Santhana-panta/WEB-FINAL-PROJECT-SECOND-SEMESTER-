import { configureStore } from '@reduxjs/toolkit';
import cart from './features/cartSlice.js';

export const store = configureStore({
  reducer: { cart },
});