import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLogin') === 'true'; // Hàm kiểm tra trạng thái đăng nhập của người dùng
  if (isLoggedIn) {
    return children;
  }

  return <Navigate
    to="/login"
  // Lưu đường dẫn hiện tại vào state của đối tượng location
  />;

};

export default PrivateRoute