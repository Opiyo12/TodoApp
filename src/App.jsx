import { useState } from 'react'                                                                                                                                                                                                                                                                                                                                        
import InputCard from './inputCard'
import { MdDarkMode, MdLightMode } from 'react-icons/md';




function App() {
const[showInput, setShowInput]=useState(false)
const[isDarkMode, setIsDarkMode]=useState(false);
function addTaskBtn(){                                                                                                                                      
  setShowInput(true)
}

  return (
    <div className={isDarkMode ? 'bg-gray-800 min-h-screen' : 'bg-white min-h-screen'}>                                                                                                                                               
      <div className='flex items-center justify-center bg-black p-4'>
        <h2 className='font-bold text-white'>Todo App</h2>
        <button 
        className='ml-4 p-2 rounded-full hover:bg-gray-700 transition-colors'
        onClick={() => setIsDarkMode(!isDarkMode)}>
        
            {isDarkMode ? 
            <MdDarkMode size={24} className="text-white"/> : 
            <MdLightMode size={24} className="text-yellow-400"/>
          }
        </button>
      </div>
      <div className=' flex py-5 items-center justify-center'>
        <button onClick={addTaskBtn}
        className='font-bold  rounded full 
        text-blue-500 border border-gray-200 px-4 hover:border-gray-300'>+Add</button>
        </div>
       {
        showInput &&(
          <InputCard/> 
        )
       }                                                                                                          
    </div>   
  )
}                                                                                       

export default App
