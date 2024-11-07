import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {

    const[sec, setSec] = useState(0);
    const[min, setMin] = useState(0);
    const[hour, setHour] = useState(0);


    useEffect(() => {
        setTimeout(() => {
            if(sec>=59){
               if(min>=59){
                setHour(hour+1);
                setMin(0);
               }else{
                setMin(min+1);
                setSec(0);
               }
            }
            else{setSec(sec+1);
            }
        },10)
    })
  return (
    <div>
      {hour}:{min}:{sec}
    </div>
  )
}

export default UseEffect2
