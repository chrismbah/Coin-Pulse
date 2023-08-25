import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Coin.css";
import { CoinApp } from "../App";

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
  const { currSymbol } = useContext(CoinApp);
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
              <span>
                {currSymbol} {current_price.toLocaleString()}
              </span>
            </div>
            <div
              className={`det price-change ${
                price_change_percentage_24h < 0 ? "red" : "green"
              }`}
            >
              {price_change_percentage_24h}{" "}
              <i
                class={`ri-arrow-right-${
                  price_change_percentage_24h > 0 ? "up" : "down"
                }-line`}
              ></i>{" "}
            </div>
            <div className="det market-cap">
              {" "}
              {currSymbol} {market_cap.toLocaleString()}
            </div>
            <div
              className={`det market-cap-change ${
                market_cap_change_percentage_24h < 0 ? "red" : "green"
              }`}
            >
              {market_cap_change_percentage_24h}{" "}
              <i
                class={`ri-arrow-right-${
                  market_cap_change_percentage_24h > 0 ? "up" : "down"
                }-line`}
              ></i>{" "}
            </div>
            <div className="vol">
              {" "}
              {currSymbol} {total_volume.toLocaleString()}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
