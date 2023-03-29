import { createEntityAdapter } from "@reduxjs/toolkit";
import { UserState } from "../../models/User";


export const initialState: UserState = createEntityAdapter.getInitialState({
  name: '',
  username: '',
  email: '',
  isLoggedIn: false,
  status: '',
})
