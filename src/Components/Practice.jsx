import React, { useState } from 'react'

const Practice = () => {
  const [open, setOpen] = useState("open");

  const handleOpen = () =>{
    setOpen(!open)
  } 

  return (
    <div className='flex justify-between w-80 ml-32'>
    
     <button onClick={handleOpen}> Flipkart 
     {

      open && <div>This is Flipkart</div>
     }
     
     </button>


     <button onClick={handleOpen}> Grocery 
     
{
       !open && <div >This is Grocery</div>
     
}    
     </button>
    </div>
  )
}

export default Practice
