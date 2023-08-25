import React, { useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CoinApp } from "../App";

export default function CoinInfo() {
  const { coinId } = useParams();
  const { coinInfo, setCoinInfo } = useContext(CoinApp);

  async function getCoinInfo(coinID) {
    try {
      const info = await Axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinID}`
      );
      setCoinInfo(info.data);
      console.log(coinInfo);
      console.log(coinId);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCoinInfo(coinId);
  }, [coinId]);

  return (
    <>
      Coin Information of {coinId}
      <div>{coinInfo.name}</div>
      <div>{coinInfo.symbol}</div>
    </>
  );
}
