import React from "react";
import "./Coin.css";

const Coin = ({ image, name, price, pricechange, marketcap }) => {
  return (
    <div className="coinContainer">
      <div className={pricechange > 0 ? "coinRowGreen" : "coinRowRed"}>
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
        </div>
        <div className="coinData">
          <p className="coinPrice">ARS$: {price.toLocaleString()}</p>
          {pricechange < 0 ? (
            <p className="coinPercent red">{pricechange.toFixed(2)}% &#9660;</p>
          ) : (
            <p className="coinPercent green">
              {pricechange.toFixed(2)}% &#9650;
            </p>
          )}
          <p className="coinMarketcap">ARS$: {marketcap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
