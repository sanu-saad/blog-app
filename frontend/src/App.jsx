import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashbord from "./pages/user/Dashbord";
import PrivateRoute from "./components/Routes/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashbord" element={<PrivateRoute />}>
          <Route path="" element={<Dashbord />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
