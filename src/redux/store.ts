import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './products';
import cartReducer from './cart';

export const store = configureStore({
  reducer: {
    productsList: productsReducer,
    cart: cartReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch