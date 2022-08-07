import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import PurchaseForm from "./components/PurchaseForm/PurchaseForm";
import Purchase from "./components/Purchase/Purchase";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./Context/CartContext";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenido a ImperKart"}/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Bienvenido a ImperKart"}/>} />
          <Route path="/detalle/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/form" element={<PurchaseForm/>} />
          <Route path="/purchase" element={<Purchase/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
