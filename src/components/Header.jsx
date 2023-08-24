import React from "react";
import { useContext } from "react";
import { CoinApp } from "../App";
import logo from "../assets/logo.svg";

export default function Header() {
  const { selectedCurrency, handleCurrencyChange } = useContext(CoinApp);
  return (
    <div className="header">
      <div className="header-title">
        <h2>CoinView</h2>
        <img src={logo} alt="logo" />
      </div>

      <div className="curr">
        <select value={selectedCurrency} onChange={handleCurrencyChange}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="yen">YEN</option>
        </select>
      </div>
    </div>
  );
}
