// import React, { useState } from 'react'

// const UseState2 = () => {
//     const [count, setCount] = useState(0);

//     const handleDecrease = () =>{
//       if(count<=0){
//         return 0;
//       }else{
//         return setCount(count - 1);
//       }
//     }


//   return (
//     <div className='flex flex-col justify-center'>
//       <h1 className='text-center'>Counter is {count}</h1>
//       <div className='flex justify-center gap-4'>
//       <div><button onClick={handleDecrease}>Decreament</button></div>
//       <div><button onClick={() => setCount(count+1)}>Increament</button></div>
//       <button onClick={() => setCount(0)}>Reset</button>
//       </div>
//     </div>
//   )
// }

// export default UseState2




// import React, { useState } from 'react'

// const UseState2 = () => {

//   const [color,setColor] = useState("red-500");
//   return (

//     <div className={`h-screen w-screen bg-${color}`}  >

//     <button onClick={()=>setColor("yellow-100")} >Yellow</button>
//     <button onClick={()=>setColor("blue-200")} >Blue</button>
//     <button onClick={()=>setColor("green-300")} >Green</button>



//     </div>
//   )
// }

// export default UseState2



// import React, { useState } from 'react'

// function UseState2() {
//   const [open , setOpen] = useState();

//   const toggleHandler = () =>{
//     setOpen((prev)=>!prev)
//   }


//   return (
//     <div>
//       <button onClick={toggleHandler}  >Click me</button>


//       {
//         open && <div>Hi this is Shaquib</div>
//       }
//     </div>
//   )
// }

// export default UseState2




// import React, { useState } from 'react'

// const UseState2 = () => {

//   const [content , setContent] = useState("content1");


//   return (
//     <div className='bg-red-500 h-screen' >

//     <button onClick={()=>setContent("content1")} >Content 1</button>
//     <button onClick={()=>setContent("content2")} >Content 2</button>
//     <button onClick={()=>setContent("content3")} >Content 3</button>




//     {
//       content === "content1" && <div>Hi this is Shaquib</div>
//     }

//     {
//       content === "content2" && <div>Hi this is Akil</div>
//     }

//     {
//       content === "content3" && <div>Hi this is Rahul</div> 
//     }


//     </div>
//   )
// }

// export default UseState2

import React, { useState } from 'react'

const UseState2 = () => {
  const [open, setOpen] = useState();

  const toggleHandle = () =>{
    setOpen((prev) => !prev)
  }
  return (
    <div>
      <button onClick={toggleHandle}>Click Me</button>

      {

        open && <div>Hi I am Akil</div>

      }

    </div>
  )
}

export default UseState2




// import React, { useState } from 'react'
// import { CiLock } from "react-icons/ci";
// import { CiUnlock } from "react-icons/ci";


// const UseState2 = () => {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const SubmitHandler = (e) => {
//     e.preventDefault();

//     if (password === confirmPassword) {
//       console.log("Email :", email);
//       console.log("Password:", password);
//       console.log("ConfirmPassword:", confirmPassword);

//       setEmail("");
//       setPassword("");
//       setConfirmPassword("");
//     }
//     else {
//       console.error("Password is not same");
//     }


//   }


//   const [lock, setLock] = useState(true);

//   const lockHandler = () => {
//     setLock(!lock);
//   }


//   return (
//     <div className='flex flex-col justify-center items-center  h-screen'>

//       <form onSubmit={SubmitHandler} className='border p-10 border-slate-500' >
//         <div>
//           <label className='block' >Email ID</label>
//           <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='border border-slate-500 rounded-xl' />
//         </div>

//         <div className='relative' >
//           <label className='block' >Password</label>
//           <input type={`${lock ? "password" : "text"}`} value={password} onChange={(e) => setPassword(e.target.value)} className='border border-slate-500 rounded-xl' />

//           <div className='absolute top-7 right-2' >
//             {lock ? <CiLock onClick={lockHandler} /> : <CiUnlock onClick={lockHandler} />}
//           </div>
//         </div>

//         <div>
//           <label className='block' >Confirm Password</label>
//           <input type='text' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='border border-slate-500 rounded-xl' />
//         </div>





//         <button type='submit' className='bg-[#192b4c]  text-white  px-5  rounded-xl py-1 ml-12 mt-4' >Login</button>
//       </form>
//     </div>
//   )
// }

// export default UseState2

