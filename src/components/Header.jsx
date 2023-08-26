import React from "react";
import { useContext } from "react";
import { CoinApp } from "../App";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const { selectedCurrency, handleCurrencyChange } = useContext(CoinApp);
  return (
    <div className="header">
      <Link to="/">
        <div className="header-title">
          <h2>CoinView</h2>
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className="curr">
        <select value={selectedCurrency} onChange={handleCurrencyChange}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="jpy">JPY</option>
          <option value="ngn">NGN</option>
          <option value="inr">INR</option>
        </select>
      </div>
    </div>
  );
}
