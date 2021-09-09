// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 accept `animal` and `onAnimalChange` props to this component
function FavoriteAnimal({animal, onAnimalChange}) {
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={onAnimalChange}
      />
    </div>
  )
}

// 🐨 uncomment this
function Display({ animal }) {
  return <div>{`your favorite animal is: ${animal}!`}</div>
}

function App() {
  // 🐨 add a useState for the animal
  const [animal, setAnimal] = React.useState('')
  return (
    <form>
      <FavoriteAnimal animal={animal} onAnimalChange={event => setAnimal(event.target.value)}/>
      <Display animal={animal}/>
    </form>
  )
}

export default App
