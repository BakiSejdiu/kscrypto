import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


import '../styles/Crypto.css'
function Crypto() {

    const [currency, setCurrency] = useState()
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')




    async function fetchCurrency(){
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
        const data = await response.json()

        setCurrency(data)

        setLoading(false)
    }

    

    useEffect(() => {
        fetchCurrency()
    }, [])

    function handleItem(e){
        setSearch(e.target.value)
    }
    

    return(

        <>
        <div className="cryptocurrency">

        <div className='container'> 
        
            <div className='searchField'>
                <h1>Cryptocurrency Market</h1>
                <input type="search" 
                    autoComplete='off'
                    onChange={handleItem}
                    placeholder='Search'/>
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
                currency
                .filter((coin) =>
                {
                    if(search !=='')
                    {
                        return coin.name.toLowerCase().includes(search.toLocaleLowerCase())
                    } 
                        else {
                            return coin
                        }
                }
            )
                .map(c => 
                    <Link to={`${c.id}`} key={c.id}>
                        <div  className='currency'>
                            
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
                            
                            
                        </div>
                        </Link>
                        )
            }
            </div>
            </div>
        </div>
        </>
    )
}

export default Crypto
