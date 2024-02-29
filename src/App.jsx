import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./pages/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Book from "./pages/book/Book.jsx";
import Terms from "./pages/terms/Terms.jsx";
import Crypto from "./pages/coin/Crypto.jsx";
import Services from "./pages/service/services.jsx";
import Login from "./pages/info/Login.jsx";
import SignUp from "./pages/info/SignUp.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Purchase from "./pages/purchase/Purchase.jsx";
import { auth } from "./pages/firebase/firebase.js";
import { onAuthStateChanged } from "firebase/auth";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [topCoins, setTopCoins] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [signedin, SetSignedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
      SetSignedIn(true);
    } else {
      console.log('Not Signed In');
    }
  });

  useEffect(() => {
    const apiKey = "CG-QnB4KjkznzXPHBQYHU3is4v7";
    const endpoint = "https://api.coingecko.com/api/v3/coins/markets";
    const params = {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: 50,
      page: 1,
    };

    fetch(endpoint + "?" + new URLSearchParams(params), {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTopCoins(data);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  const setArrowStyle = (arrow) => () => {
    document.querySelector(`.${arrow}`).style.left = "3px";
  };

  const resetArrowStyle = (arrow) => () => {
    document.querySelector(`.${arrow}`).style.left = "0px";
  };

  function toSection(section) {
    const sectionElement = document.querySelector(`.${section}`);
    sectionElement.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          element={
            <Layout
              toSection={toSection}
              setArrowStyle={setArrowStyle}
              resetArrowStyle={resetArrowStyle}
              signedin={signedin}
            />
          }
        >
          <Route
            path="/"
            element={
              <Home
                toSection={toSection}
                topCoins={topCoins}
                setArrowStyle={setArrowStyle}
                resetArrowStyle={resetArrowStyle}
              />
            }
          />
          <Route path="/demo" element={<Book />} />
          <Route path="/terms" element={<Terms />} />
          <Route
            path="/services"
            element={
              <Services
                setArrowStyle={setArrowStyle}
                resetArrowStyle={resetArrowStyle}
              />
            }
          />
          <Route
            path="/coin/:coinId"
            element={<Crypto topCoins={topCoins} />}
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {"private routes"}

        <Route path="/dashboard" element={<Dashboard  user={currentUser}/>} />
        <Route path="/purchase" element={<Purchase />} />
      </Routes>
    </Router>
  );
}

export default App;
