import {useState} from 'react'
import Country from "./Country"
import React from "react"

const Countries = ({countries}) => {
    const [countryToShow, setCountryToShow] = useState()

    if(countryToShow){
        return (
            <Country country={countryToShow}/>
        )
    }
    else if(countries.length == 1){
        return (
            <Country country={countries[0]}/>
        )
    }
    else{
        return countries.map(country =>{
            return(<div key={country.name.official}>
                        {country.name.common} <button onClick={() => setCountryToShow(country)}>show</button>
                    </div>
                )
        })
    }
}

export default Countries