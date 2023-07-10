import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Questions from "./pages/Questions/Questions";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Basket from "./pages/Basket/Basket";
import Profile from "./pages/Profile/Profile";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Error from "./pages/Error/Error";
import Token from "./pages/Token/Token";
import FindProducts from "./pages/FindProducts/FindProducts";
// import { commerce } from "./commerce";
const App = () => {
  // const isLogin = commerce.customer.isLoggedIn();

  return (
    <div>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:slug" element={<Products />} />
          <Route path="/questions" element={<Questions />} />
          <Route
            path="/login"
            element={<Login />}
            // Component={isLogin ? Profile : Login}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search-results/:query" element={<FindProducts />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/details/:id" element={<ProductDetail />} />
          <Route path="/error" element={<Error />} />
          <Route path="/create-token/:token" element={<Token />} />
          <Route path="/user-profile/:tab" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;