export interface IUserUpdate {
  name: string;
  email: string;
  age: number;
  lastname: string;
  firstname: string;
}

export interface IUserCreate {
  name: string;
  email: string;
  age: number;
  lastname: string;
  firstname: string;
}

export interface UserState {
  name: string;
  username: string;
  email: string;
  isLoggedIn: boolean;
  status: string;
}

export interface IUserLogin {
  username: string;
  password: string;
}

export interface IUserLogout {
  username: string;
}

export interface IUserCreateResponse {
  isLoggedIn: boolean,
  username: string;
  name: string;
  email: string;
  status: number;
}

export interface IAdminLogin {
  username: string;
  password: string;
}

export interface IAdminLogout {
  username: string;
}
