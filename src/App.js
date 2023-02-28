import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Coin from './Coin';

function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState(' ')
  
  useEffect(() => {
    {/*axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')*/}
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=ARS&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then((res) => {
       setCoins(res.data)
       console.log(res.data)
    }).catch((error) => console.log(error))
  }, [])

  const filteredCoins = coins.filter(e => {
    if(search === ' ') return coins
    else { 
      return e.name.toLowerCase().includes(search)
    }
  })

  function handleSortCurrentPrice(){
    const sortedCoins = [...coins].sort((a,b) => {
      if(a.current_price > b.current_price ){
        return -1
      } else {
        return 1
      }
    })
    setCoins(sortedCoins)
  }

  function handleSortPriceChange(){
    const sortedCoins = [...coins].sort((a,b) => {
      if(a.price_change_percentage_24h > b.price_change_percentage_24h){
        return -1
      } else {
        return 1 
      }
    })
    setCoins(sortedCoins)
  }

  function handleSortMktCap(){
    const sortedCoins = [...coins].sort((a,b) => {
      if(a.market_cap > b.market_cap) {
        return -1
      } else {
        return 1
      }
    })
    setCoins(sortedCoins)
  }

  function handlerChange(e){
    setSearch(e.target.value.toLowerCase())
  }

  return (
    <div className="coin-app">
      <h1 className='h1-title'>CRYPTOWATCHER</h1>
      <form className='form-search'>
        <input 
          placeholder='Buscar crypto'
          name='search'
          onChange={handlerChange}
          className='input-search'
        />
      </form>
      <div className="order-btn-list">
        <button className='order-btn' onClick={handleSortCurrentPrice}>Ordenar Precio</button>
        <button className='order-btn' onClick={handleSortPriceChange}>Ordenar Variacion</button>
        <button className='order-btn' onClick={handleSortMktCap}>Ordenar Capitalización</button>
      </div>  
      {filteredCoins.map((coin) => {
        return(
          <Coin 
          key={coin.id} 
          name={coin.name} 
          image={coin.image} 
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          price={coin.current_price}
          pricechange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default App;
