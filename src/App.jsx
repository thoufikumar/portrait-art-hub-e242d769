
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ArtListing from "./pages/ArtListing";
import OrderForm from "./pages/OrderForm";
import AboutContact from "./pages/AboutContact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<ArtListing />} />
          <Route path="order" element={<OrderForm />} />
          <Route path="about" element={<AboutContact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
