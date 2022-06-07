import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, []) // second paramenter of useEffect "[]" means only run this once on the first rendering of the component

  const addName = (event) => {
    event.preventDefault()

    if(!newName || !newNumber){
      alert("Input fields can't be empty")
      return;
    }

    if(persons.find(el => el.name === newName.trim())){
      alert(`${newName} is already added to the phonebook`)
    }
    else{
      setPersons(persons.concat({name: newName, number: newNumber, id:persons.length + 1}))
      setNewName("")
      setNewNumber("")
    }
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  return (
    <div>
      <h2>Phonebook</h2>
        <Filter onChange={event => setFilter(event.target.value)} value={filter}/>
      <h2>Add a new</h2>
        <PersonForm addName={addName} setName={setNewName} setNumber={setNewNumber} name={newName} number={newNumber}/>
      <h2>Numbers</h2>
        <Persons persons={personsToShow}/>
    </div>
  )
}

export default App