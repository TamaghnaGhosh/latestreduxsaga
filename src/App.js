import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import LoginPage from "./components/payment/Login/LoginPage";
// import Cardcomponent from "./components/payment/Cardcomponent";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishList" element={<Wishlist />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
