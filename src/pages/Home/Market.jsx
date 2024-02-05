import React, { useState, useEffect } from "react";
import "./styles/Market.css";
import { Link } from "react-router-dom";
import { Oval } from "react-loader-spinner";

function Market({ topCoins, setArrowStyle, resetArrowStyle }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [itemsPerPage, setItemsPerPage] = useState(25);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setItemsPerPage(window.innerWidth <= 400 ? 10 : 25);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalPages = Math.ceil(topCoins?.length / itemsPerPage);

  const handleButtonClick = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages ? 1 : prevPage + 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, topCoins?.length || 0);

  return (
    <section id="market" className="market-section">
      <div className="market-content">
        <div className="market-content__coin-list">
          <div className="market-content__coin-list__top">
            <p>Coin</p>
            <p className="slider-coin__price__title">Price</p>
            <p className="slider-coin__last24">24h Change</p>
            <p className="slider-coin__cap">Market Cap</p>
          </div>
          <div className="market-content__coin-list__row">
            {topCoins?.length > 0 ? (
              topCoins.slice(startIndex, endIndex).map((coin) => (
                <div
                  className="coin-row"
                  key={coin.id}
                >
                  <span>
                    <img src={coin.image} alt={coin.name} />{" "}
                    <div className="coin__name">
                      {coin.name} <span>{coin.symbol.toUpperCase()}</span>
                    </div>
                  </span>
                  <p className="slider-coinprice">{`$${coin.current_price.toLocaleString()}`}</p>
                  <p
                    className={` ${
                      coin.price_change_percentage_24h <= 0
                        ? "red-text"
                        : "green-text"
                    } slider-coin__last24 `}
                  >
                    {coin.price_change_percentage_24h >= 0 ? "+" : null}
                    {coin.price_change_percentage_24h.toLocaleString()}%
                  </p>
                  <p className="slider-coin__cap">
                    ${coin.market_cap.toLocaleString()}
                  </p>
                </div>
              ))
            ) : (
              <div className="market-content__failed">
                <p>Loading All Supported Crypto</p>
                <Oval
                  height={80}
                  width={50}
                  color="#4E14AE"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#4E14AE"
                  strokeWidth={4}
                  strokeWidthSecondary={4}
                />
              </div>
            )}
          </div>
          {topCoins?.length > 0 && windowWidth > 500 && (
            <button
              className="market__next"
              onMouseOver={setArrowStyle("market__arrow")}
              onMouseOut={resetArrowStyle("market__arrow")}
              onClick={handleButtonClick}
            >
              {currentPage === totalPages ? "Previous Page" : "Next Page"}{" "}
              <span className="market__arrow">
                {currentPage === totalPages ? "←" : "→"}
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Market;
