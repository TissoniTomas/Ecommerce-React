import Header from "./components/Header/Header";
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
import CartPage from "./pages/CartPage/CartPage";
import ShopPage from "./pages/ShopPage/ShopPage";

import { ModeProvider } from "./context/modeContext";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

import { db } from "./firebase/firebaseConfig";

const App = () => {
  return (
    <ShoppingCartProvider>
      <ModeProvider>
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
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<ShopPage/>}/>
          </Routes>

          <Footer />
        </Router>
      </ModeProvider>
    </ShoppingCartProvider>
  );
};

export default App;

/**LIGHT MODE
 *
 * Titulos : gray-900
 * Textos: gray-600
 * Bg Botones: cyan-700
 * Texto botones : white font-medium
 * Hover Iconos : bg-gray-100
 * Sections : bg-gray-50
 *
 * DARK MODE
 *
 * BG: bg-gray-900
 * Titulos : white
 * Textos: gray-400
 * Bg Botones: cyan-700
 * Texto botones : white font-medium
 * Hover Iconos : bg-gray-700
 * Sections : bg-gray-800
 */
