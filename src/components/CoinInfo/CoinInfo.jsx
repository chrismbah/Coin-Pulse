import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CoinApp } from "../../App";
import "./CoinInfo.css";

export default function CoinInfo() {
  const { coinId } = useParams();
  const { coinInfo, setCoinInfo, selectedCurrency, currSymbol } =
    useContext(CoinApp);
  const [infoLoading, setInfoLoading] = useState(true);
  const [infoError, setInfoError] = useState(null);

  async function getCoinInfo(coinID) {
    try {
      const info = await Axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinID}`
      );
      setCoinInfo(info.data);
      setInfoLoading(false);
    } catch (err) {
      console.log(err);
      setInfoError(
        "Error 404: Page not found. Don't worry, errors happen to the best of us."
      );
      setInfoLoading(false);
    }
  }

  useEffect(() => {
    getCoinInfo(coinId);
    console.log(coinInfo);
  }, []);
  const { name, symbol, market_cap_rank } = coinInfo;

  return (
    <>
      {infoLoading ? (
        <div class="spinner"></div> //*Loading animation while data fetches
      ) : (
        <>
          {infoError ? (
            <div className="error">{infoError}</div>
          ) : (
            <div className="info-body">
              <div className="info-name">
                <h3>{name}</h3>
              </div>
              <div className="info-details">
                <div className="info-1">
                  <div className="info-img">
                    <img src={coinInfo?.image?.small} alt={coinInfo.name} />
                  </div>
                  <h3>{name}</h3>
                  <div className="symbol">{symbol}</div>
                </div>
                <div className="info-price">
                  <h2>
                    {currSymbol}
                    {coinInfo.market_data?.current_price[selectedCurrency] //*Convert int data to string
                      .toLocaleString()}
                  </h2>
                  <span
                    className={`${
                      coinInfo.market_data?.price_change_percentage_1h_in_currency[
                        selectedCurrency
                      ].toFixed(2) > 0
                        ? "green" //*Price shows green when >0 indicating an increase
                        : "red" //!Price shows red when < 0 indicating decrese
                    }`}
                  >
                    {coinInfo.market_data?.price_change_percentage_1h_in_currency[ //*Rounds data to 2 decimal places
                      selectedCurrency
                    ]
                      .toFixed(3)}
                    %
                    <i
                      className={`ri-arrow-${
                        coinInfo.market_data
                          ?.price_change_percentage_1h_in_currency?.[
                          selectedCurrency
                        ] > 0
                          ? "up" //*Arrow icon goes up when price increase
                          : "down" //!Arrow icon goes down when price decrease
                      }-line`}
                    ></i>
                  </span>
                </div>
                <div className="rank">
                  Rank: #<span>{market_cap_rank}</span>
                </div>
              </div>
              <div className="info-history-1">
                <div className="history-1">
                  <div className="period">1hr</div>
                  <div
                    className={`val ${
                      coinInfo.market_data
                        ?.price_change_percentage_1h_in_currency[
                        selectedCurrency
                      ] > 0
                        ? "green"
                        : "red"
                    }`}
                  >
                    {coinInfo.market_data?.price_change_percentage_1h_in_currency[
                      selectedCurrency
                    ].toFixed(3)}
                    %
                    <i
                      className={`ri-arrow-${
                        coinInfo.market_data
                          ?.market_cap_change_percentage_1h_in_currency?.[
                          selectedCurrency
                        ] > 0
                          ? "up"
                          : "down"
                      }-line`}
                    ></i>
                  </div>
                </div>
                <div className="history-1">
                  <div className="period">24hr</div>
                  <div
                    className={`val ${
                      coinInfo.market_data
                        ?.price_change_percentage_24h_in_currency[
                        selectedCurrency
                      ] > 0
                        ? "green"
                        : "red"
                    }`}
                  >
                    {coinInfo.market_data?.price_change_percentage_24h_in_currency[
                      selectedCurrency
                    ].toFixed(3)}
                    %
                    <i
                      className={`ri-arrow-${
                        coinInfo.market_data
                          ?.price_change_percentage_24h_in_currency?.[
                          selectedCurrency
                        ] > 0
                          ? "up"
                          : "down"
                      }-line`}
                    ></i>
                  </div>
                </div>
                <div className="history-1">
                  <div className="period">7d</div>
                  <div
                    className={`val ${
                      coinInfo.market_data
                        ?.price_change_percentage_7d_in_currency[
                        selectedCurrency
                      ] > 0
                        ? "green"
                        : "red"
                    }`}
                  >
                    {coinInfo.market_data?.price_change_percentage_7d_in_currency[
                      selectedCurrency
                    ].toFixed(3)}
                    %
                    <i
                      className={`ri-arrow-${
                        coinInfo.market_data
                          ?.price_change_percentage_7d_in_currency?.[
                          selectedCurrency
                        ] > 0
                          ? "up"
                          : "down"
                      }-line`}
                    ></i>
                  </div>
                </div>
                <div className="history-1">
                  <div className="period">14d</div>
                  <div
                    className={`val ${
                      coinInfo.market_data
                        ?.price_change_percentage_14d_in_currency[
                        selectedCurrency
                      ] > 0
                        ? "green"
                        : "red"
                    }`}
                  >
                    {coinInfo.market_data?.price_change_percentage_14d_in_currency[
                      selectedCurrency
                    ].toFixed(3)}
                    %
                    <i
                      className={`ri-arrow-${
                        coinInfo.market_data
                          ?.price_change_percentage_14d_in_currency?.[
                          selectedCurrency
                        ] > 0
                          ? "up"
                          : "down"
                      }-line`}
                    ></i>
                  </div>
                </div>
                <div className="history-1">
                  <div className="period">30d</div>
                  <div
                    className={`val ${
                      coinInfo.market_data
                        ?.price_change_percentage_30d_in_currency[
                        selectedCurrency
                      ] > 0
                        ? "green"
                        : "red"
                    }`}
                  >
                    {coinInfo.market_data?.price_change_percentage_30d_in_currency[
                      selectedCurrency
                    ].toFixed(3)}
                    %
                    <i
                      className={`ri-arrow-${
                        coinInfo.market_data
                          ?.price_change_percentage_30d_in_currency?.[
                          selectedCurrency
                        ] > 0
                          ? "up"
                          : "down"
                      }-line`}
                    ></i>
                  </div>
                </div>
                <div className="history-1">
                  <div className="period">1yr</div>
                  <div
                    className={`val ${
                      coinInfo.market_data
                        ?.price_change_percentage_1y_in_currency[
                        selectedCurrency
                      ] > 0
                        ? "green"
                        : "red"
                    }`}
                  >
                    {coinInfo.market_data?.price_change_percentage_1y_in_currency[
                      selectedCurrency
                    ].toFixed(3)}
                    %
                    <i
                      className={`ri-arrow-${
                        coinInfo.market_data
                          ?.price_change_percentage_1y_in_currency?.[
                          selectedCurrency
                        ] > 0
                          ? "up"
                          : "down"
                      }-line`}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="info-history-2">
                <div className="history-2">
                  <div className="period-2">High 24hr ({currSymbol})</div>
                  <div className="val-2">
                    {currSymbol}
                    {coinInfo.market_data?.high_24h[selectedCurrency].toFixed(
                      3
                    )}
                  </div>
                </div>
                <div className="history-2">
                  <div className="period-2">Low 24hr ({currSymbol})</div>
                  <div className="val-2">
                    {currSymbol}
                    {coinInfo.market_data?.low_24h[selectedCurrency].toFixed(3)}
                  </div>
                </div>
                <div className="history-2">
                  <div className="period-2">Market Cap({currSymbol})</div>
                  <div className="val-2">
                    {currSymbol}
                    {coinInfo.market_data?.market_cap[
                      selectedCurrency
                    ].toLocaleString()}
                  </div>
                </div>
                <div className="history-2">
                  <div className="period-2"> Market cap change 24hr</div>
                  <div
                    className={`val-2 ${
                      coinInfo.market_data
                        ?.market_cap_change_percentage_24h_in_currency[
                        selectedCurrency
                      ] > 0
                        ? "green"
                        : "red"
                    }`}
                  >
                    {coinInfo.market_data?.market_cap_change_percentage_24h_in_currency[
                      selectedCurrency
                    ].toFixed(3)}
                    %
                    <i
                      className={`ri-arrow-${
                        coinInfo.market_data
                          ?.market_cap_change_percentage_1h_in_currency?.[
                          selectedCurrency
                        ] > 0
                          ? "up"
                          : "down"
                      }-line`}
                    ></i>
                  </div>
                </div>
                <div className="history-2">
                  <div className="period-2">Total Volume</div>
                  <div className="val-2">
                    {currSymbol}
                    {coinInfo.market_data?.total_volume[
                      selectedCurrency
                    ].toLocaleString()}
                  </div>
                </div>
                <div className="history-2">
                  <div className="period-2">Circulating Supply</div>
                  <div className="val-2">
                    {coinInfo.market_data?.circulating_supply.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
