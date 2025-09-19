import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ Footer import
import PrivateRoute from "./Routes/PrivateRoute";
import RedirectIfAuthenticated from "./Routes/RedirectIfAuthenticated";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import ApiDetails from "./pages/ApiDetails";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {/* Conditional Navbar */}
      {!hideLayout && <Navbar />}
     <div className="app-wrapper">
      <Routes>
        {/* Public Routes */}
        <Route element={<RedirectIfAuthenticated />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/api/:id" element={<ApiDetails />} />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>

      {/* Conditional Footer */}
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
