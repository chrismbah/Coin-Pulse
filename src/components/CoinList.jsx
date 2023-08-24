import React, { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./Coin";

export default function CoinList() {
  const [coinList, setCoinList] = useState([]);

  async function getListOfCoins() {
    const coins = await Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    );
    setCoinList(coins.data);
    console.log(coins.data);
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
        />
        <i class="bx bx-search"></i>
      </div>
      <div className="coin-list">
        <div className="coin-header">
          <div className="coin-no">#</div>
          <div className="details">
            <div className="price">Price</div>
            <div className="price-change">% 24Hr</div>
            <div className="market-cap">Market Cap</div>
            <div className="market-cap-change">%24 Hr</div>
            <div className="vol">Total Volume</div>
          </div>
        </div>
        {coinList.map((coin, index) => {
          return <Coin key={coin.id} coin={coin} id={index} />;
        })}
      </div>
    </>
  );
}
