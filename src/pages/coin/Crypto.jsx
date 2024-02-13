import React from "react";

function Crypto() {
  const coinId = useParams().id;
  const coinData = topCoins.find((coin) => coin.id === coinId);
  return (
    <>
      <section className="coin-page">
        <div className="container">
          <div className="coin-content">
            <div className="coin-content__img-side">
              <img
                src={
                  topCoins.length > 0
                    ? coinData.image
                    : "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628"
                }
                alt={topCoins.length > 0 ? coinData.name : "COIN NOT FOUND"}
                className="coin__image"
              />
              <h2>{topCoins.length > 0 ? coinData.name : "COIN NOT FOUND"}</h2>
              <p>
                Rank: #
                {topCoins.length > 0
                  ? coinData.market_cap_rank
                  : "COIN NOT FOUND"}
              </p>
            </div>
            <div className="coin-content__text-side">
              <div className="numb">
                <div className="coin-content__text-side__24h">
                  <span>24h Change:</span>
                  {topCoins.length > 0 ? (
                    <p
                      className={
                        coinData.price_change_24h > 0
                          ? "green-text"
                          : "red-text"
                      }
                    >
                      {coinData.price_change_percentage_24h >= 0 ? "+" : null}
                      {coinData.price_change_percentage_24h.toLocaleString()}
                    </p>
                  ) : (
                    <p>Not Found</p>
                  )}
                </div>
                <div className="coin-content__text-side__current">
                  <span>Price:</span>
                  <p>
                    $
                    {topCoins.length > 0
                      ? coinData.current_price.toLocaleString()
                      : "Not Found"}
                  </p>
                </div>
                <div className="coin-content__text-side__symbol">
                  <p>Symbol:</p>
                  <span>
                    {topCoins.length > 0
                      ? coinData.symbol.toUpperCase()
                      : "NOT"}
                  </span>
                </div>
              </div>
              <div className="description">
                <p>
                  {topCoins.length > 0
                    ? `${coinData.name} is a global, open-source platform for
                        decentralized applications. In other words, the vision is
                        to create a world computer that anyone can build
                        applications in a decentralized manner; while all states
                        and data are distributed and publicly accessible. $
                        ${coinData.name} supports smart contracts in which developers
                        can write code in order to program digital value. Examples
                        of decentralized apps (dapps) that are built on $
                        ${coinData.name} includes tokens, non-fungible tokens,
                        decentralized finance apps, lending protocol,
                        decentralized exchanges, and much more. On Ethereum, all
                        transactions and smart contract executions require a small
                        fee to be paid. This fee is called Gas. In technical
                        terms, Gas refers to the unit of measure on the amount of
                        computational effort required to execute an operation or a
                        smart contract. The more complex the execution operation
                        is, the more gas is required to fulfill that operation.
                        Gas fees are paid entirely in ${coinData.symbol}, which is the
                        native coin of the blockchain. The price of gas can
                        fluctuate from time to time depending on the network
                        demand.`
                    : `Cryptocurrency, sometimes called crypto-currency or crypto, is
                    any form of currency that exists digitally or virtually and
                    uses cryptography to secure transactions. Cryptocurrencies
                    don't have a central issuing or regulating authority, instead
                    using a decentralized system to record transactions and issue
                    new units.Cryptocurrency is a digital payment system that
                    doesn't rely on banks to verify transactions. It is a
                    peer-to-peer system that can enable anyone anywhere to send
                    and receive payments. Instead of being physical money carried
                    around and exchanged in the real world, cryptocurrency
                    payments exist purely as digital entries to an online database
                    describing specific transactions. When you transfer
                    cryptocurrency funds, the transactions are recorded in a
                    public ledger. Cryptocurrency is stored in digital wallets.
                    Cryptocurrency received its name because it uses encryption to
                    verify transactions. This means advanced coding is involved in
                    storing and transmitting cryptocurrency data between wallets
                    and to public ledgers. The aim of encryption is to provide
                    security and safety. The first cryptocurrency was Bitcoin,
                    which was founded in 2009 and remains the best known today.
                    Much of the interest in cryptocurrencies is to trade for
                    profit, with speculators at times driving prices skyward.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Crypto;
