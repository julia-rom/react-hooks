// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting() {
  const [name, setName] = React.useState('')
  const [initials, setInitials] = React.useState('')

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleInitialsChange(event) {
    setInitials(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleNameChange} id="name" />
        <label htmlFor="initials">Initials: </label>
        <input onChange={handleInitialsChange} id="name" />
      </form>
      {name ? <strong>Hello {name} {initials}</strong> : 'Please type your name and initials'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
