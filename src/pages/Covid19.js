import React from 'react'
import {useState, useEffect} from 'react'
import '../styles/Covid19.css'

function Covid19() {

    const [countryData, setCountryData] = useState();
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('')

    async function fetchCountryData(){
        const response = await fetch(`https://disease.sh/v3/covid-19/countries`)
        const data = await response.json()

        setCountryData(data)
        setLoading(false);
    } 

    
    useEffect(() => {
        fetchCountryData()
    },[]);

    function handleItem(e){

        setSearch(e.target.value)
    }


    return (
        <>  
        <div className="covid-19">
            <div className="container">
            <div className='covid-19_title'>
                <h1>Covid-19 cases by country</h1>
                <input type="search" 
                    autoComplete='off'
                    onChange={handleItem}
                    placeholder='Search'/>
            </div>
            <div className='load'>
                {loading && <p className='loading'></p>}
                </div>
        <div className='covid-19_content'>
            
            {
            countryData &&
            countryData
            .filter((mycountry) =>
                {
                    if(search !=='')
                    {
                        return mycountry.country.toLowerCase().includes(search.toLocaleLowerCase())
                    } 
                        else {
                            return mycountry
                        }
                }
            )
            .map(country => 
                
                    <div className='covid_widget' key={country.country}>
                        <div className="covid_col1">
                            <h5>{country.country}</h5>
                            <img src={country.countryInfo.flag} alt='flag'/>
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
