import { IProductsDataResponse, IProductUpdate, IProductCreate } from "../../../models/Products";
import { apiUrl } from "../../../apiUrl";

export const addProduct = (data: IProductCreate) => {
  return fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      ContentType: "application/json",
    },
  });
}

export const updateProduct = (data: IProductUpdate) => {
  return fetch(apiUrl, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      ContentType: "application/json",
    },
  });
}

export const deleteProductById = (id: number, category: string) => {
  return fetch(apiUrl + `${category}` + `${id}`, {
    method: "DELETE",
    headers: {
      ContentType: "application/json",
    }
  });
}

export const getProductById = (id: number, category: string) => {
  return fetch(apiUrl + `${category}` + `${id}`, {
    method: "GET",
    headers: {
      ContentType: "application/json",
    }
  });
}

