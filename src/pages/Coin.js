import React from 'react'
import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../styles/Coin.css'


import '../styles/Crypto.css'
function Coin() {



    const [coin, setCoin] = useState()
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    const navigator = useNavigate()

    async function fetchCoin(){
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
        const data = await response.json()

        data.id === undefined ? navigator('/404'):setCoin(data)
        

        setLoading(false)
    }

    

    useEffect(() => {
        fetchCoin()
    },[])
return (

        <>
        <div className="coin">

        <div className='container'> 
            
        <div className="coin-content">
            <div className='load'>
                {loading && <p className='loading'></p>}
            </div> 
            {
                coin 
                &&
                (   <><button onClick={() => navigator('/crypto')}><i className="fas fa-chevron-circle-left"></i></button>
                        <div key={coin.id} className='coin-view'>
                            
                            
                            <div className='name_coin'>
                                
                                <div className="coin-header">
                                <img src={coin.image.small} alt='coin'/>
                                <h1>{coin.name}</h1>
                                {/* <h4 className='symbol_coin'>{coin.symbol}</h4> */}
                                <h2>${coin.market_data.current_price.usd.toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2})}</h2>
                                </div>
                                <div className="coin-text">
                                
                                <p>{coin.description.en.substring(0, 900) + '...'} 
                                <a href={coin.links.homepage[0]}  target='_blank' rel="noopener noreferrer">Read more</a></p>
                                
                                </div>
                            </div>
                            
                        </div>
                        </>)
                
            }
            
            
            </div>
            </div>
        </div>
        </>
    )
}

export default Coin
