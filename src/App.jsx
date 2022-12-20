import "./App.scss";
import Navbar from './components/Navbar/Navbar'
import React from "react";
import Home from "./components/Home";
import { CartProvider } from "./context/CartContext";

const App = () => {
  /* Envolvemos la home con el provider del context */
  return (
    <CartProvider>
      <Navbar/>
      <Home />
    </CartProvider>
  );
};

export default App;
