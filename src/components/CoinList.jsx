import React, { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./Coin";

export default function CoinList() {
  const [coinList, setCoinList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchWord, setSearchWord] = useState("");

  const filteredCoinList = coinList.filter((coins) =>
    coins.name.toLowerCase().includes(searchWord.toLowerCase())
  );

  async function getListOfCoins() {
    try {
      const coins = await Axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      );
      setCoinList(coins.data);
      setIsLoading(false);
      console.log(coins.data);
    } catch (error) {
      setError("Network Error ");
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getListOfCoins();
  }, []);

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
          <div className="details">
            <div className="det price">Price ($)</div>
            <div className="det price-change">% 24Hr</div>
            <div className="det market-cap">Market Cap ($)</div>
            <div className="det market-cap-change">%24 Hr</div>
            <div className="det vol">Total Volume ($)</div>
          </div>
        </div>
        <div>
          {isLoading ? (
            <div class="spinner"></div>
          ) : (
            <>
              {error ? (
                <div>Error:{error}</div>
              ) : (
                <>
                  {filteredCoinList.map((coin, index) => {
                    return (
                      <Coin
                        key={coin.id}
                        coin={coin}
                        id={index}
                        filteredList={filteredCoinList}
                      />
                    );
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
