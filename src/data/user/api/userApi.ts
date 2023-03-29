import { IUserCreate, IUserLogin, IUserLogout, IUserUpdate, IAdminLogin, IAdminLogout } from "../../../models/User";
import { apiUrl } from "../../../"

export const registerUser = (data: IUserCreate) => {
  return fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      ContentType: "application/json",
    }
  });
}

export const loginUser = (data: IUserLogin) => {
  return fetch(apiUrl, {
    method: "GET",
    body: JSON.stringify(data),
    headers: {
      ContentType: "application/json",
    }
  })
}

export const logoutUser = (data: IUserLogout) => {
  return fetch(apiUrl, {
    method: "GET",
    body: JSON.stringify(data),
    headers: {
      ContentType: "application/json",
    }
  })
}

export const updateUser = (data: IUserUpdate) => {
  return fetch(apiUrl, {
    method: "GET",
    body: JSON.stringify(data),
    headers: {
      ContentType: "application/json",
    }
  });
}

export const adminLogin = (data: IAdminLogin) => {
  var params = new URLSearchParams();
  params.append("username", data.username);
  params.append("password", data.password);
  return fetch(apiUrl, {
    method: "GET",
    body: params,
  });
}

export const adminLogout = (data: IAdminLogout) => {
  var params = new URLSearchParams();
  params.append("username", data.username);
  return fetch(apiUrl, {
    method: "POST",
    body: params,
  });
}
