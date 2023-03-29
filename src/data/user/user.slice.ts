import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./user.state";
import { RootState } from "../store";
import { IUserCreate, IUserCreateResponse } from "../../models/User";
import { actionRegisterUser, actionUpdateUser, actionLoginUser,
actionLogoutUser } from "./user.actions";

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
  extraReducers: (builder:any) => {
    builder
      .addCase(actionRegisterUser.pending, (state: RootState) => {
        state.status = 'loading';
      })
      .addCase(actionRegisterUser.fulfilled, (state: RootState, action: PayloadAction<IUserCreateResponse>) => {
        state.status = 'idle';
        const { data  } = action.payload;
      })
      .addCase(actionRegisterUser.rejected, (state: RootState) => {
        state.status = 'failed';
      });
  },
});

export const {  } = userSlice.actions;
export const { userReducer } = userSlice.reducer;
