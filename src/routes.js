import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Hello from "./components/Hello";
import About from "./pages/About";
import Login from "./components/Login";
import Home from "./pages/Home";
// import { isAuthenticated } from "./auth";

// const PrivateRoute = ({ element: Element, ...rest }) => {
//   console.log(...rest);
//   return isAuthenticated() ? (
//     <Route {...rest} element={Element} />
//   ) : (
//     <Navigate to="/login" />
//   );
// };

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/hello" element={<Hello />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
