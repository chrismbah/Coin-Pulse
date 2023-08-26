import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Axios from "axios";
import Header from "./components/Header";
import CoinList from "./components/CoinList";
import CoinInfo from "./components/CoinInfo/CoinInfo";
import "./App.css";
import { createContext } from "react";

export const CoinApp = createContext();

export default function App() {
  const [coinList, setCoinList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchWord, setSearchWord] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const [currSymbol, setCurrSymbol] = useState("$");
  const [coinInfo, setCoinInfo] = useState([]);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
    getListOfCoins(selectedCurrency);
  };

  useEffect(() => {
    switch (selectedCurrency) {
      case "usd":
        setCurrSymbol("$");
        break;
      case "jpy":
        setCurrSymbol("¥");
        break;
      case "eur":
        setCurrSymbol("€");
        break;
      case "ngn":
        setCurrSymbol("₦");
        break;
      case "inr":
        setCurrSymbol("₹");
        break;
      default:
        setCurrSymbol("");
    }
  }, [selectedCurrency]);

  async function getListOfCoins(selectedCurrency) {
    try {
      const coins = await Axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedCurrency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
      );
      setCoinList(coins.data);
      setIsLoading(false);
      console.log(coins.data);
    } catch (error) {
      setError("Network Error: Please check your internet connection ");
      setIsLoading(false);
    }
  }

  return (
    <CoinApp.Provider
      value={{
        selectedCurrency,
        setSelectedCurrency,
        handleCurrencyChange,
        coinList,
        setCoinList,
        isLoading,
        setIsLoading,
        error,
        setError,
        searchWord,
        setSearchWord,
        getListOfCoins,
        currSymbol,
        setCurrSymbol,
        coinInfo,
        setCoinInfo,
      }}
    >
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<CoinList />} />
            <Route path="/info/:coinId" element={<CoinInfo />} />
          </Routes>
        </Router>
      </div>
    </CoinApp.Provider>
  );
}
