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
import './index.css';
const UseEffect = () => {

    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [hour, setHour] = useState(0);

    const [isRunning, setisRunning] = useState(false);

    const handleStop = () => {
        setHour(0);
        setSec(0);
        setMin(0);

        setisRunning(false);
    }

    useEffect(() => {
        setTimeout(() => {
            if (isRunning) {
                if (sec >= 59) {
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
                }
            }
        }, 100)
    })



    return (


        <div className='bg-gray-200 md:py-40 py-20 h-screen w-screen'>
            <div className='mx-auto w-[50vw] h-[50vh] '>
                <div className='grid grid-cols-3 md:gap-0 gap-16 md:-ml-0 -ml-8'>
                    <div className='bg-yellow-500 md:w-[15vw] md:h-[30vh] w-[20vw] h-[20vh]  rounded-lg flex items-center justify-center text-6xl font-bold text-white shadow-lg'>
                        {hour}
                    </div>
                    <div  className='bg-yellow-500 md:w-[15vw] md:h-[30vh] w-[20vw] h-[20vh] rounded-lg flex items-center justify-center text-6xl font-bold text-white shadow-lg'>
                        {min}
                    </div>
                    <div  className='bg-yellow-500 md:w-[15vw] md:h-[30vh] w-[20vw] h-[20vh] rounded-lg flex items-center justify-center text-6xl font-bold text-white shadow-lg'>
                        {sec}
                    </div>
                </div>
                <div className='flex font-semibold md:text-xl text-lg'>
                    <div className='md:ml-14  -ml-5'>Hours</div>
                    <div className='md:ml-44  ml-14'>Mins</div>
                    <div className='md:ml-44   ml-14'>Sec</div>
                </div>
                <div className='md:grid grid-cols-3 flex flex-col justify-around mt-10 md:gap-20 gap-8 '>
                    <button className="pushable" onClick={() => setisRunning(true)}>
                        <span className="shadow"></span>
                        <span className="edge"></span>
                        <span className="front"> Start </span>
                    </button>
                    <button className="pushable" onClick={() => setisRunning(false)}>
                        <span className="shadow"></span>
                        <span className="edge"></span>
                        <span className="front"> Stop </span>
                    </button>
                    <button className="pushable" onClick={handleStop}>
                        <span className="shadow"></span>
                        <span className="edge"></span>
                        <span className="front"> Reset </span>
                    </button>
                </div>
            </div>
            {/* <h1>{hour}:{min}:{sec}</h1>
            <h1 onClick={() => setisRunning(true)}>Start</h1>
            <h1 onClick={() => setisRunning(false)}>Stop</h1>
            <h1 onClick={handleStop}>Reset</h1> */}
        </div>
    )
}

export default UseEffect





// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {

//     const [data,setData] = useState();

//     useEffect(()=>{
//         fetch('https://dummyjson.com/quotes')
//         .then(res=>res.json())
//         .then(data=>setData(data.quotes))
//         .catch((e)=>{
//             console.log(e);
//         })
//     },[])


//   return (
//     <div>
//       {data &&
//         data.map((items)=>(
//             <div>
//                 {items.id}
//                 {items.quote}
//             </div>
//         ))
//       }
//     </div>
//   )
// }

// export default UseEffect

