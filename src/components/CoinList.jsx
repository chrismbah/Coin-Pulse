import React, { useEffect } from "react";
import Coin from "./Coin/Coin";
import { useContext } from "react";
import { CoinApp } from "../App";

export default function CoinList() {
  const {
    selectedCurrency,
    coinList,
    isLoading,
    error,
    searchWord,
    setSearchWord,
    getListOfCoins,
    currSymbol,
  } = useContext(CoinApp);

  const filteredCoinList = coinList.filter((coins) =>
    coins.name.toLowerCase().includes(searchWord.toLowerCase())
  );

  useEffect(() => {
    getListOfCoins(selectedCurrency);
  }, [selectedCurrency]); //* Still up for future change to '[]'

  return (
    <>
      <div className="title">
        <h2>Crypto Prices by Market Cap</h2>
      </div>
      <div className="search">
        <input
          type="text"
          className="search-bar"
          name="search"
          placeholder="Search Crypto Coin..."
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <i class="bx bx-search"></i>
      </div>
      <div className="coin-list">
        <div className="coin-header">
          <div className="coin-no">#</div>

          <div className="det price">Price ({currSymbol})</div>
          <div className="det price-change">% 24Hr</div>
          <div className="det market-cap">Market Cap ({currSymbol})</div>
          <div className="det market-cap-change">% 24 Hr</div>
          <div className="det vol">Total Volume ({currSymbol})</div>
        </div>
        <div>
          {isLoading ? (
            <div class="spinner"></div>
          ) : (
            <>
              {error ? (
                <div className="error">{error}</div>
              ) : (
                <>
                  {filteredCoinList.map((coin, index) => {
                    return <Coin key={coin.id} coin={coin} no={index} />;
                  })}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
