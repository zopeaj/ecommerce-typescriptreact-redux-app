import { createEntityAdapter } from "@reduxjs/toolkit"
import { ProductState } from "../../models/Products";


export const initialState: ProductState = createEntityAdapter.getInitialState({
  name: '',
  price: 0.0,
  discount: 0.0,
  id: 0,
  category: '',
  size: 0.0,
  manufacturer: '',
  description: '',
});
