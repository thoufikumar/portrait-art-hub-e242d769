
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArtListing from "./pages/ArtListing";
import OrderForm from "./pages/OrderForm";
import AboutContact from "./pages/AboutContact";
import Layout from "./components/Layout";
import "./styles/App.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="art-listing" element={<ArtListing />} />
        <Route path="order-form" element={<OrderForm />} />
        <Route path="about" element={<AboutContact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
