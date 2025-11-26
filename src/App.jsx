import { useState } from 'react'                                                                                                                                                                                                                                                                                                                                        
import InputCard from './inputCard'




function App() {
const[showInput, setShowInput]=useState(false)
function addTaskBtn(){                                                                                                                                      
  setShowInput(true)
}

  return (
    <>                                                                                                                                                  
      <div className='flex items-center justify-center bg-black p-4'>
        <h2 className='font-bold text-white'>Todo App</h2>
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
    </>
  )
}                                                                                       

export default App
