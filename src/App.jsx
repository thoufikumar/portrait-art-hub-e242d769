
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ArtListing from "./pages/ArtListing";
import OrderForm from "./pages/OrderForm";
import AboutContact from "./pages/AboutContact";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="gallery" element={<ArtListing />} />
            <Route path="order" element={<OrderForm />} />
            <Route path="about" element={<AboutContact />} />
            <Route path="login" element={<div>Login Page</div>} />
            <Route path="signup" element={<div>Signup Page</div>} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
