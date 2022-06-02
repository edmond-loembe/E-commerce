import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";
import Introduction from "./components/Introduction/introduction";
import Separation from "./components/Separation/separation";
import Cards from "./components/Cards/cards";
import Separation2 from "./components/Separation2/separation2";
import Partenaire from "./components/Partenaire/partenaire";
import Produits from "./components/Produits/produits";
import Univers from "./components/Univers/univers"
import Contact from "./components/Contact/contact";
import Carousel from "./components/Carousel/carousel";
import Carousel2 from "./components/Carousel2/carousel2";
import Carousel3 from "./components/Carousel3/carousel3";
import Nouveaute from "./components/Nouveaute/nouveaute";
import Panier from "./components/Panier/panier";
import Paypal from "./components/Paypal/paypal";
import ReactDOM from 'react-dom';
import Particles from 'react-particles-js';
import './styles.css';

const params = {
  particles: {
    number: {
      value: 250
    },
    size: {
      value: 4
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      }
    }
  }
};



function App() {

  return (

    <div>
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
            <Particles className="particles" params={params} />
          </Route>
          <Route path="/register">
            <Register />
            <Particles className="particles" params={params} />
          </Route>
          <Route path="/produits">
            <Produits />
            <Carousel2 />
            <Footer />
          </Route>
          <Route path="/Univers">
            <Navbar />
            <Carousel />
            <Univers />
            <Footer />
          </Route>
          <Route path="/Contact">
            <Navbar />
            <Carousel3 />
            <Contact />
            <Footer />
          </Route>
          <Route path="/Nouveaute">
            <Navbar />
            <Nouveaute />
            <Cards />
            <Footer />
          </Route>
          <Route path="/Panier">
            <Navbar />
            <Carousel2 />
            <Paypal />
            <Panier />
            <Footer />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
            <Introduction />
            <Separation />
            <Cards />
            <Separation2 />
            <Partenaire />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
export default App;