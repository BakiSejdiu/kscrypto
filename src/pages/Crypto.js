import React from 'react'
import {useState, useEffect} from 'react'
import SearchCoin from '../components/SearchCoin'
import '../styles/Crypto.css'
function Crypto() {

    const [currency, setCurrency] = useState()
    const [loading, setLoading] = useState(true)

    async function fetchCurrency(){
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
        const data = await response.json()

        setCurrency(data)

        setLoading(false)
    }

    

    useEffect(() => {
        fetchCurrency()
    }, [])

    function search(query){

        const filtered_currency = currency.filter((coin) => 
        coin.name.toLowerCase().includes(query.toLowerCase()))
        
        setCurrency(filtered_currency)
    
}
    
    return (

        <>
        <div className="cryptocurrency">

        <div className='container'> 
        
            <div className='searchField'>
                <h1>Cryptocurrency Market</h1>
                <SearchCoin search ={search}/>
                </div>
            
        <div className="crypto">
            <div className='head'>
                <span className='title'>Nr</span>
                <span className='title'>Name</span>
                <span className='title'>Price</span>
                <span className='title'>24h %</span>
                <span className='title cap'>Market Cap</span>
                <span className='title supply'>Circulating supply</span>
            </div>
            <div className='load'>
                {loading && <p className='loading'></p>}
                </div> 
            {
                currency 
                &&
                currency.map(c => 
                        <div key={c.id} className='currency'>
                            
                            <span className='rank'>{c.market_cap_rank}</span>
                            <div className='name_currency'>
                                <img src={c.image} alt='coin'/>
                                <h4>{c.name}</h4>
                                <h4 className='symbol'>{c.symbol}</h4>
                            </div>
                            <h4>{(c.current_price).toFixed(2)} $</h4>
                            {/* <span>{(c.price_change_percentage_24h).toFixed(2)} %</span> */}
                            <span className={`coin_percent ${c.price_change_percentage_24h < 0 ? "red" : "green"}`}>
                            {Number(c.price_change_percentage_24h).toFixed(2)} %
                            </span>
                            <span className='market_cap'>{c.market_cap.toLocaleString()}</span>
                            <span className='circulating_supply'>{c.circulating_supply.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2})}</span>
                            
                        </div>)
                
            }
            
            
            </div>
            </div>
        </div>
        </>
    )
}

export default Crypto
