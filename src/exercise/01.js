// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import React from 'react'

function Greeting({initialName}) {
  const [name, setName] = React.useState(initialName)

  function handleChange(event) {
    event.preventDefault()
    const {value: username} = event.target
    setName(username)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Luigi" />
}

export default App
