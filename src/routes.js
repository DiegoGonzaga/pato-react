import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hello from "./components/Hello";
import About from "./pages/About";
import Login from "./components/Login/Form";
import Home from "./pages/Home";

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
