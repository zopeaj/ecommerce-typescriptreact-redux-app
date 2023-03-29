export interface IProductCreate {
  name: string;
  price: number;
  discount: number;
  category: string;
  size: number;
  manufacturer: string;
  created: string;
}

export interface IProductUpdate {
  name: string;
  price: number;
  discount: number;
  id: number;
  category: string;
  size: number;
  manufacturer: string;
  updatedAt: string;
};

export interface Product {
  name: string;
  price: number;
  discount: number;
  id: number;
  category: string;
  size: number;
  manufacturer: string;
  created: string;
  updatedAt: string;
};

export interface ProductState {
  name: string;
  price: number;
  discount: number;
  id: number;
  category: string;
  size: number;
  manufacturer: string;
  description: string;
};


export interface IProductsDataResponse {
  data: Product[]
}
