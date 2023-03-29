import { createAsyncThunk } from "@reduxjs/toolkit";
import { addProduct, updateProduct, deleteProductById, getProductById } from "./api/productApi";
import { IProductCreate, IProductUpdate } from "../../models/Products";

export const actionAddProduct = createAsyncThunk("product/addProduct", async (data: IProductCreate) => {
  const response = await addProduct(data);
  return response;
});

export const actionUpdateProduct = createAsyncThunk("product/updateProduct", async (data: IProductUpdate) => {
  const response = await updateProduct(data);
  return response;
});

export const actionDeleteProductById = createAsyncThunk("product/deleteProduct", async (id: number, category: string) => {
  const response = await deleteProductById(id, category);
  return response;
});

export const actionGetProductById = createAsyncThunk("product/getProductById", async (id: number, category: string) => {
  const response = await getProductById(id, category);
  return response;
});



