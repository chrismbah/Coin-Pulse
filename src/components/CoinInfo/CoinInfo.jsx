import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CoinApp } from "../../App";
import "./CoinInfo.css";

export default function CoinInfo() {
  const { coinId } = useParams();
  const { coinInfo, setCoinInfo, selectedCurrency } = useContext(CoinApp);
  const [infoLoading, setInfoLoading] = useState(true);

  async function getCoinInfo(coinID) {
    try {
      const info = await Axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinID}`
      );
      setCoinInfo(info.data);
      setInfoLoading(false);
    } catch (err) {
      console.log(err);
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
        <div class="spinner"></div>
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
              <div className="symbol">{symbol}</div>
              <h2>{name}</h2>
            </div>
            <div className="info-price">
              <h2>
                $
                {coinInfo.market_data?.current_price[
                  selectedCurrency
                ].toLocaleString()}
              </h2>
            </div>
            <div className="rank">{market_cap_rank}</div>
          </div>
          <div>
            ${coinInfo.market_data?.high_24h[selectedCurrency]}High 24hr
          </div>
          <div>${coinInfo.market_data?.low_24h[selectedCurrency]} Low 24h</div>
          <div>
            %
            {
              coinInfo.market_data?.price_change_percentage_1h_in_currency[
                selectedCurrency
              ]
            }{" "}
            1hr Price change
          </div>
          <div>
            %
            {
              coinInfo.market_data?.price_change_percentage_24h_in_currency[
                selectedCurrency
              ]
            }{" "}
            24hr Price Change
          </div>
          <div>
            %
            {
              coinInfo.market_data?.price_change_percentage_7d_in_currency[
                selectedCurrency
              ]
            }{" "}
            7d Price change
          </div>
          <div>
            %
            {
              coinInfo.market_data?.price_change_percentage_14d_in_currency[
                selectedCurrency
              ]
            }{" "}
            14d Price change
          </div>
          <div>
            %
            {
              coinInfo.market_data?.price_change_percentage_30d_in_currency[
                selectedCurrency
              ]
            }{" "}
            30d Price change
          </div>
          <div>
            ${coinInfo.market_data?.market_cap[selectedCurrency]} Market Cap
          </div>
          <div>
            %
            {
              coinInfo.market_data?.market_cap_change_24h_in_currency[
                selectedCurrency
              ]
            }{" "}
            Market cap change 24hr
          </div>
          <div>
            ${coinInfo.market_data?.total_volume[selectedCurrency]} Total Volume
          </div>
        </div>
      )}
    </>
  );
}
