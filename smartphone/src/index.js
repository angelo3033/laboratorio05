import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('0')

  const handleChangeNewName = ({target}) => {
    setNewName(target.value)
  }

  const handleChangeNewNumber = ({target}) => {
    setNewNumber(target.value)
  }

  function noRepeat(persons, name){
    const found = persons.find(person => person.name == name)
    if (found) {
      return true
    }
    return false
  }

  const handleClick = (e) => {
    e.preventDefault()
    if(noRepeat(persons, newName)){
      window.alert(`${newName}, is already added to phonebook`);
    } else {
      setPersons([...persons, {name: newName, number: newNumber}])
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleClick}>
        <div>
          name: <input value={newName} onChange={handleChangeNewName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleChangeNewNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => {
        return(
          <h4 key={person.name}>{person.name}, {person.number}</h4>
        )
      })}
    </div>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
