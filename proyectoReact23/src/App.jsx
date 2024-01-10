import Header from "./components/navBar/navBar";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import PrdouctsPage from "./pages/ProductsPage/ProductsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ScrollTop from "./components/ScrollTop/ScrollTop";

const App = () => {
  return (
    <Router>
      <Header />
      <ScrollTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<PrdouctsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/product/detail/:id" element={<DetailPage />} />
        <Route path="/category/:Categoryid" element={<CategoryPage />} />
        
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
