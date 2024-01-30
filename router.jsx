import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./src/app";
import About from "./src/pages/Home/About";
import Pencarian from "./src/pages/Search/Pencarian";
import DetailProduct from "./src/pages/DetailProduct/DetailProduct";
import Home from "./src/pages/Home/Home";
import TambahKeranjang from "./src/pages/Cart/TambahKeranjang";
import Payment from "./src/pages/Cart/Payment";
import History from "./src/pages/History/History";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/menu' element={<Home />} />
      <Route path="/pencarian" element={<Pencarian />} />
      <Route path="/about" element={<About />} />
      <Route path="/tambahkeranjang" element={<TambahKeranjang />} />
      <Route path='/payment' element={<Payment/>} />
      <Route path='/pencarian' element={<Pencarian />} />
      <Route path='/detailproduct' element={<DetailProduct />} />
      <Route path='/history' element={<History/>} />
      <Route path="*" element={<App />} />
    </Routes>
  );
};

export default AppRouter;
