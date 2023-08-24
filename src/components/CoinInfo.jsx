import React from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

export default function CoinInfo() {
  const { coin } = useParams();

  return <div>CoinInfo</div>;
}
