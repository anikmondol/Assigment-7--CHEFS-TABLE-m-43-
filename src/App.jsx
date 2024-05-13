

import { useEffect, useState } from "react";
import './App.css'
import Banner from './components/Banner/Banner'
import LeftSide from './components/LeftSide/LeftSide'
import Navbar from './components/Navbar/Navbar'
import RightSide from './components/RightSide/RightSide'
import TextCenter from './components/TextCenter/TextCenter'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







function App() {
  const [numberCount, setNumberCount] = useState([]);
  const [currently, setCurrently] = useState([])
  const [carts, setCarts] = useState([]);
  const notify = () => toast.warning("This product already added!");

  const handleAddToCar = (id, cart) => {
    const isRecipeInArray = numberCount.some(item => item.recipe_id === cart.recipe_id);

    if (isRecipeInArray) {
      notify()
      //  alert('It already added')
    } else {
      setNumberCount([...numberCount, cart]);
    }
  }



  const handleCurrently = (cart) => {
    // setCurrently([...currently, cart]);
    const isCurrentlyArray = currently.some(element => element.recipe_id === cart.recipe_id);
    if (isCurrentlyArray) {

      alert('It already added')
    } else {
      setCurrently([...currently, cart]);
    }
  }


  useEffect(() => {
    fetch('recipe.json')
      .then(res => res.json())
      .then(data => setCarts(data))
  }, [])


  return (
    <div className='container mx-auto px-2'>

      <Navbar></Navbar>
      <Banner></Banner>
      <TextCenter></TextCenter>
      <div className='flex flex-col lg:flex-row justify-between mb-10 gap-5'>
        <LeftSide carts={carts} handleAddToCar={handleAddToCar}></LeftSide>
        <RightSide numberCount={numberCount} handleCurrently={handleCurrently} currently={currently}></RightSide>

        <ToastContainer />
      </div>
    </div>
  )
}

export default App
