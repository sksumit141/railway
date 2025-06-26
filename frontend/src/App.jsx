import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MasterLogin from "./pages/MasterLogin.jsx";
import ShopLogin from "./pages/ShopLogin.jsx";
import Header from "./components/Header.jsx";
import Subheader from "./components/Subheader.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Subheader />
        <div className="pt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<MasterLogin />} />
            <Route path="/shop" element={<ShopLogin />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
