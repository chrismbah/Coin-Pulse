import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Coin.css";

export default function Coin({ coin, id, filteredList }) {
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
      <Link to={`/info/${name.toLowerCase()}`}>
        <div className="coins">
          <div className="coin-info">
            <h4>{num}</h4>
            <div className="coin-img">
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
            <div className="det price">
              <span>${current_price}</span>
            </div>
            <div className="det price-change">
              {price_change_percentage_24h}
            </div>
            <div className="det market-cap">${market_cap}</div>
            <div className="det market-cap-change">
              {market_cap_change_percentage_24h}
            </div>
            <div className="vol">${total_volume}</div>
          </div>
        </div>
      </Link>
    </>
  );
}
