import { userReducer } from "./user.slice";
import { UserState } from "../../models/User";
import { describe, it, expect } from "@jest/globals";

describe('user reducer', () => {
  const initialState: UserState = {
    name: '',
    username: '',
    isLoggedIn: false,
    email: '',
    status: ''
  };
  it('should handle initial state', () => {
    expect(userReducer(undefined, {
      type: 'unknown'
    })).toEqual({
      name: '',
      username: '',
      isLoggedIn: false,
      email: '',
      status: ''
    });
  });

  it('should handle user logged in', () => {
    const actual = userReducer(initialState,);
    expect(actual.isLoggedIn).toEqual(true);
  })
})
