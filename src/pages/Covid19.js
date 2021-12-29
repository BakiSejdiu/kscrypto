import React from 'react'
import {useState, useEffect} from 'react'
import '../styles/Covid19.css'

function Covid19() {

    const [countryData, setCountryData] = useState();


    async function fetchCountryData(){
        const response = await fetch(`https://corona.lmao.ninja/v2/countries`)
        const data = await response.json()

        setCountryData(data)
    }

    useEffect(() => {
        fetchCountryData()
    }, [])

    return (
        <>  
        <div className="covid-19">
            <div className="container">
            <div className='covid-19_title'>
                <h1>Covid-19 cases by country</h1>
            </div>
        <div className='covid-19_content'>
            {
            countryData &&
            countryData.map(country => 
                
                    <div className='covid_widget' key={country.country}>
                        <div className="covid_col1">
                            <h5>{country.country}</h5>
                            <img src={country.countryInfo.flag}/>
                            <p>All cases: <span>{country.cases}</span></p>
                            
                        </div>
                        
                        <div className="covid_col2">
                            <h5>Today cases:</h5>
                            <h2>{country.todayCases}</h2>
                            <p>Deaths: <span>{country.deaths}</span></p>
                        </div>
                    
                    </div>)}
                </div>
            </div>
        </div>
        </>
    )
}

export default Covid19
