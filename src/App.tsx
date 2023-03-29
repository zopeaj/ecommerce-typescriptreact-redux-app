import React from 'react';
import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import { Main } from "../src/views/main/Main";
import { ProfilePage, ProfileUpdate, ProfileSettings } from "../src/views/main/user";
import { ProductDetailPage, ProductUpdatePage } from "../src/views/main/product";
import { AdminLoginPage } from "../src/views/admin/AdminLoginPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="user">
        <Route path=":userId" element={<ProfilePage />} />
        <Route path=":userId/update" element={<ProfileUpdate />} />
        <Route path=":userId/settings" element={<ProfileSettings/>} />
      </Route>
      <Route path="product">
        <Route path=":productId/:category/detail" element={<ProductDetailPage />} />
        <Route path=":productId/:category/update" element={<ProductUpdatePage />} />
      </Route>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin/login" element={<AdminLoginPage />} />
    </Routes>
  );
}

export default App;
