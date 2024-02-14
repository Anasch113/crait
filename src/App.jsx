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

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [topCoins, setTopCoins] = useState([]);

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
        console.error("Error fetching data:", error);
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
      </Routes>
    </Router>
  );
}

export default App;
