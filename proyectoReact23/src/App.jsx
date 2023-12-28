
import Header from "./components/navBar/navBar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/HomePage/HomePage";
import PrdouctsPage from "./pages/ProductsPage/ProductsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutPage from "./pages/AboutPage/AboutPage"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import DetailPage from "./pages/DetailPage/DetailPage";


const App = () => {
 
  return (
    <Router>
      <Header />

      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<PrdouctsPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/product/detail/:id" element = {<DetailPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
