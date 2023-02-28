import React from 'react'
import './Coin.css'

const Coin = ({image, name, price, volume, pricechange, marketcap}) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    {/*<p className="coin-symbol"></p>*/}
                </div>
                <div className="coin-data">
                    <p className="coin-price">ARS$: {price}</p>
                    {/* <p className="coin-volume">Rs.{volume.toLocaleString()}</p>*/}
                    {pricechange < 0 ? (
                        <p className="coin-percent red">{pricechange.toFixed(2)}% &#9660;</p>
                    ):(
                        <p className="coin-percent green">{pricechange.toFixed(2)}% &#9650;</p>
                    )
                }
                <p className="coin-marketcap">
                    Cap. Mercado ARS$: {marketcap.toLocaleString()}
                </p>
                </div>
            </div>
            
        </div>
    )
}

export default Coin
