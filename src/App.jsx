import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CoinList from "./components/CoinList";
import "./App.css";
import { createContext } from "react";

export const CoinApp = createContext();

export default function App() {
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <CoinApp.Provider
      value={{ selectedCurrency, setSelectedCurrency, handleCurrencyChange }}
    >
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<CoinList />} />
          </Routes>
        </Router>
      </div>
    </CoinApp.Provider>
  );
}
