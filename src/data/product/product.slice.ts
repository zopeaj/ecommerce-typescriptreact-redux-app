import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./product.state";
import { actionAddProduct, actionUpdateProduct, actionDeleteProductById, actionGetProductById } from "./product.actions";

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducer: {},
  extraReducer: (builder: any) => {
    builder.addCase(actionAddProduct.pending, (state) => {
      state.status
    })
  }
});


export const { } = productSlice.actions;
export const { productReducer } = productSlice.reducer;

