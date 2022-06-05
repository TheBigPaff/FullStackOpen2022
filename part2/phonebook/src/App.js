import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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