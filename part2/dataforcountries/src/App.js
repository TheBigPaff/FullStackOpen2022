import {useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries';

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  
  let countriesToShow = []
  if(filter){
    countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
  }
  
  return (
    <div>
      find countries <Filter onChange={event => setFilter(event.target.value)} value={filter}/>
      {countriesToShow.length <= 10 ? <Countries countries={countriesToShow}/> : <p>Too many matches, specify another filter</p>}
    </div>
  );
}

export default App;
