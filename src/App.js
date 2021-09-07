
import React, { useState, useEffect } from 'react';
import Cards from './components/Cards';
import Select from './components/Select';
import getDog from './helpers/getDog';

const initialDog ={
  image: "",
  breed: {
    id:"",
    name: ""
  }
}

function App() {
  const [dog, setDog] = useState(initialDog);

  useEffect(() => {
    updateDog();
  }, [])

  const updateDog = () => {
    getDog()
      .then((newDog) => {
        setDog(newDog);
      })
  }
  return (
    <div className="app">
      <Select />
      <Cards dog={dog} />
    </div>
  );
}

export default App;
