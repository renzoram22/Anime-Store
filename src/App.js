import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Stores from "./pages/Stores";
import ProductDetails from "./pages/ProductDetails";
import Category from "./pages/Category";
export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Stores" component={Stores} />
        <Route path="/Category/:idCategory" component={Category} />
        <Route path="/ProductDetails/:id" component={ProductDetails} />
      </Switch>
    </Router>
  );
}
