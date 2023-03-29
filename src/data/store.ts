import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { productReducer } from "../data/product/product.slice";
import { userReducer } from "../data/user/user.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

