import { useState } from "react";
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {

  const coffees = useLoaderData();
  const [allCoffee,setAllCoffee] = useState(coffees);
 
  return (
    <div className='m-20'>
      
      <h1 className='text-6xl text-center text-purple-600 my-20'>Hot Hotest cold coffee : {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
      {
        allCoffee.map(coffee=> <CoffeeCard
        key={coffee._id}
        coffee={coffee}
        allCoffee={allCoffee}
        setAllCoffee={setAllCoffee}
        ></CoffeeCard> )
      }
      </div>

      
      
    </div>
  )
}

export default App
