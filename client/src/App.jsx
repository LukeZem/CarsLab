import { useState } from 'react'
import './App.css'
import ShowAllCars from './pages/showAllCars'
import NewCar from './pages/NewCar';

function App() {
  
  const [cars, setCars] = useState([]);

  return (
    <div>
      <ShowAllCars cars={cars} setCars={setCars} />
      <NewCar setCars={setCars} />
    </div>
  )
}

export default App
