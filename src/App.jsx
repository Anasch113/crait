import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./pages/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Dashboard from "./pages/Creation/Dashboard.jsx";
import Smaller from "./pages/Smaller/Smaller.jsx";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {

  PhantomWalletAdapter,

} from "@solana/wallet-adapter-wallets";
import { UserAuthContextProvider } from "./context/UserAuthContext.jsx";
import toast, { Toaster } from 'react-hot-toast';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (e) => setMatches(e.matches);

    mediaQueryList.addListener(listener);
    return () => mediaQueryList.removeListener(listener);
  }, [query]);

  return matches;
};

function App() {
  const setArrowStyle = (arrow) => () => {
    const element = document.querySelector(`.${arrow}`);
    if (element) element.style.left = "3px";
  };

  const resetArrowStyle = (arrow) => () => {
    const element = document.querySelector(`.${arrow}`);
    if (element) element.style.left = "0px";
  };

  const isSmallScreen = useMediaQuery("(max-width: 1000px)");

  return (
    <UserAuthContextProvider>
      <WalletProvider wallets={[new PhantomWalletAdapter()]} autoConnect>
        <WalletModalProvider>
          <Router>
            <ScrollToTop />
            <Routes>
              <Route
                path="/"
                element={
                  <Layout
                    setArrowStyle={setArrowStyle}
                    resetArrowStyle={resetArrowStyle}
                  />
                }
              >
                <Route
                  index
                  element={
                    <Home
                      setArrowStyle={setArrowStyle}
                      resetArrowStyle={resetArrowStyle}
                    />
                  }
                />
              </Route>
              <Route
                path="/dashboard"
                element={isSmallScreen ? <Smaller /> : <Dashboard />}
              />
            </Routes>
          </Router>
        </WalletModalProvider>
      </WalletProvider>
      <div> <Toaster /></div>
    </UserAuthContextProvider>
  );
}

export default App;
