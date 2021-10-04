import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Footer from "./components/Footer";

import LandingPage from "./pages/LandingPage";
import Clinics from "./pages/Clinics";
import Register from "./pages/Register";
import Address from "./pages/Address";
import Checkout from "./pages/Checkout";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import theme from "./styles/theme";
import AOS from "aos";

import "aos/dist/aos.css";

function App() {
  AOS.init({
    once: true,
    delay: 75,
    duration: 800,
    easing: "ease-in-out",
  });

  return (
    <main className="main_app">
      <ThemeProvider theme={theme}>
        <Router>
          <Header />

          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/clinics">
              <Clinics />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/address">
              <Address />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
          </Switch>
          <Footer />
          <Toaster position="top-right" reverseOrder={false} />
        </Router>

        <GlobalStyles />
      </ThemeProvider>
    </main>
  );
}

export default App;

/**
import Button from "@material-ui/core/Button";
 *
 *      <Button variant="contained" color="primary">
        CLICK AQUI
      </Button>
 */
