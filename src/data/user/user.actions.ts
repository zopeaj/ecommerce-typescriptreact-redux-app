import { IUserCreate, IUserUpdate, IUserLogin, IUserLogout, IAdminLogin, IAdminLogout } from "../../models/User";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, updateUser, loginUser, logoutUser, adminLogin, adminLogout } from "./api/userApi";

export const actionRegisterUser = createAsyncThunk("user/registration", async (data: IUserCreate) => {
  const response = await registerUser(data);
  return response;
})

export const actionUpdateUser = createAsyncThunk("user/update", async (data: IUserUpdate) => {
  const response = await updateUser(data);
  return response;
});

export const actionLoginUser = createAsyncThunk("user/login", async(data: IUserLogin) => {
  const response = await loginUser(data);
  return response
});

export const actionLogoutUser = createAsyncThunk("user/logout", async(data: IUserLogout) => {
  const response = await logoutUser(data);
  return response;
});

export const actionAdminLogin = createAsyncThunk("admin/login", async(data: IAdminLogin) => {
  const response = await adminLogin(data);
  return response;
});

export const actionAdminLogout = createAsyncThunk("admin/logout", async(data: IAdminLogout) => {
  const response = await adminLogout(data);
  return response;
});
