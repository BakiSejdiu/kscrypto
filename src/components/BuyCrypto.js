import React from "react"
import { useState } from "react"
import '../styles/BuyCrypto.css'

function BuyCrypto(){
    const [price, setPrice] = useState({ usdt: 0.30, cryptoks: 1 })

    function updateUsdt(e) {
        const input = e.target.value
        const cryptoks = (+input  / 0.30).toFixed(2)

        setPrice({
            usdt: input,
            cryptoks: cryptoks
        })
    }

    function updateCryptoKs(e) {
        const input = e.target.value
        const cels = (+input  * 0.30).toFixed(2)

        setPrice({
            usdt: cels,
            cryptoks: input
        })
    }

    function handleResult(e){
        e.preventDefault();

        let usd = e.target.dollar.value;
        let ks = e.target.crypto.value
        
        if ((usd == 0 && ks == 0) || (usd <0 && ks<0))
            {
                alert(`
                You must enter amount 
                --------------------
                USDT : ${usd} $
                CryptoKs: ${ks} tokens
                `)
            }
            else {
                alert(`
                Thank you !
                You got: ${ks} CryptoKs !
                -------------------------
                Transaction:
                USDT : ${usd} $
                CryptoKs: ${ks} tokens
            `)
            }
        
            e.target.reset();

    }
    return(

        <>
            <div className="buy" id="buytokens">
                <div className="container">
                    <form onSubmit={handleResult}>
                        <div className="buy-title">
                            <h1>Token Sale</h1>
                            <p>
                            ICO CryptoKs token will be released on the basis of Ethereum and Bitocin platform. It’s compatibility of the token with third-party services wallets, exchanges etc, & provides easy-to-use integration.</p>
                        </div>
                            <div className="buy-content">
                                <div className="buy-col">
                                    <h2>Usdt</h2>
                                    
                                    <input type="number" 
                                    name="dollar"
                                    value={price.usdt}
                                    onChange={updateUsdt}/>
                                </div>

                                <div className="buy-col">
                                    <h2>CryptoKs</h2>
                                    <input type="number" 
                                    name="crypto"
                                    value={price.cryptoks} 
                                    onChange={updateCryptoKs}/>
                                </div>
                                <div className="buy-buton">
                                <button className="buy-now">Buy now</button>
                                
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </>
        )
}
export default BuyCrypto
