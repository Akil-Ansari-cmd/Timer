// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {


//     const [count,setCount] =useState(0);

//     useEffect(()=>{
//         alert("Renderng happen");

//         return()=>{
//             alert("rendering Exit");
//         }
//     },[count])



//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count+1)} >Increment</button>
//     </div>
//   )
// }

// export default UseEffect




import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [hour, setHour] = useState(0);

    const [isRunning, setisRunning] = useState(false);

    const handleStop = () =>{
        setHour(0);
        setSec(0);
        setMin(0);

        setisRunning(false);
    }

    useEffect(() => {
        setTimeout(() => {
           if(isRunning){ if (sec >= 59) {
                if (min >= 59) {
                    setHour(hour + 1);
                    setMin(0);
                }
                else {
                    setMin(min + 1);
                    setSec(0);
                }
                
            } else {
                setSec(sec + 1)
            }}
        }, 100)
    })



    return (


        <div>
            <h1>{hour}:{min}:{sec}</h1>
            <h1 onClick={() => setisRunning(true)}>Start</h1>
            <h1 onClick={() => setisRunning(false)}>Stop</h1>
            <h1 onClick={handleStop}>Reset</h1>
        </div>
    )
}

export default UseEffect
