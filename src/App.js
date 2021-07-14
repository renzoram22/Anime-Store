import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components
import Navbar from "./components/Navbar";
import ItemListContainer from './components/Container/ItemListContainer'
import Contact from "./pages/Contact";
import Stores from "./pages/Stores";
import ProductDetails from "./pages/ProductDetails";
import Category from "./pages/Category";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>

    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Stores" component={Stores} />
        <Route path="/Category/:idCategory" component={Category} />
        <Route path="/ProductDetails/:id" component={ProductDetails} />
      </Switch>
    </Router>
    </CartProvider>
  );
}
