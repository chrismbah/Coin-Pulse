import React, { useState } from "react";
import "./Coin.css";

export default function Coin({ coin, id }) {
  const [num, setNum] = useState(id + 1);
  const {
    name,
    symbol,
    image,
    current_price,
    market_cap,
    total_volume,
    price_change_percentage_24h,
    market_cap_change_percentage_24h,
  } = coin;
  return (
    <>
      <div className="coins">
        <div className="coin-info">
          <h4>{num}</h4>
          <div className="coin-image">
            <img src={image} alt={name} />
          </div>
          <div className="coin-name">
            <h1>{name}</h1>
          </div>
          <div className="coin-symbol">
            <span>{symbol}</span>
          </div>
        </div>
        <div className="coin-details">
          <div className="price">{current_price}</div>
          <div className="price-change">{price_change_percentage_24h}</div>
          <div className="market-cap">{market_cap}</div>
          <div className="market-cap-change">
            {market_cap_change_percentage_24h}
          </div>
          <div className="vol">{total_volume}</div>
        </div>
      </div>
    </>
  );
}
