import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LogInPage from "./pages/LogInPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import CarouselBG from "./components/CarouselBG";

const App = () => {
  return (
    <Router>
      <Header></Header>
      <CarouselBG />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomePage} exact />
          <Route path="/register" component={RegisterPage} exact />
          <Route path="/profile" component={ProfilePage} exact />
          <Route path="/login" component={LogInPage} exact />
          <Route path="/product/:id" component={ProductPage} exact />
          <Route path="/cart/:id?" component={CartPage} exact />
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
};

export default App;
