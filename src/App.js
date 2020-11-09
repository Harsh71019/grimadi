import React from "react";
import LoginPage from "./components/Login/login.component.jsx";
import RegisterPage from "./components/Register/register.component.jsx";
import Footer from "./components/Footer/footer.component.jsx";
import NavBar from "./components/Navbar/navbar.component";
import Landing from "./components/Landing/landing.component.jsx";
import TurfCard from "./components/TurfCard/turfcard.component.jsx";
import TurfScreen from "./components/TurfScreen/turfscreen.component.jsx"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
  const dummy = {
    harsh: "fgweufguwefgu",
  };
  return (
    <div>
      <Router>
        <Route exact path="/" component={Landing} dummy={dummy} />
        <section className="container-main center">
          <Switch>
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/turfs" component={TurfCard} />
            <Route exact path="/turfs/id" component={TurfScreen} />
          </Switch>
          <NavBar dummy = {dummy}/>
        </section>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
