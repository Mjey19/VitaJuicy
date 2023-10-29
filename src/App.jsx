import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Cart from "./components/Cart/Cart";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";

function App() {
  const CartBtn = useSelector((state) => state.CartSlice.cartOpen);
  return (
    <div className="wrapper">
      <Header />
      <main>
        {CartBtn ? <Cart /> : ""}
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
