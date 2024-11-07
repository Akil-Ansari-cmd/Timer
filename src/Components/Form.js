// import React, { useState } from 'react'
// import { CiLock } from "react-icons/ci";
// import { CiUnlock } from "react-icons/ci";
// const Form = () => {
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [confirmPassword, setConfirmPassword] = useState("")
//     const [open, setOpen] = useState(false);

//     const toggleHandle = () => {

//         setOpen( !open);
//     }


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if(password===confirmPassword){
//         console.log("Email is", email);
//         console.log("Password is:", password);
//         console.log("ConfirmPassword is:", confirmPassword);
//         setEmail("");
//         setPassword("");
//         setConfirmPassword("");
//         }

//         else{
//             console.error("Both password must be same");
//         }
//     }
//     const [lock,setLock] = useState(true);
//   const lockHandler = ()=>{
//     setLock(!lock);





//   }

//   const [confirmLock,setConfirmLock] = useState(true);
//   const lockHandle = ()=>{
//     setConfirmLock(!confirmLock);
//   }

//     return (
//         <div className='h-screen py-24 w-screen bg-blue-100'>
//         <button onClick={toggleHandle}>Click</button>
//            {
//             open &&  <form
//                 onSubmit={handleSubmit}
//                 className='h-[60vh] mx-auto w-[30vw] bg-white rounded-md'>
//                 <div className=''>
//                     <input  type="text" placeholder='Email address or phone number'
//                      value={email} onChange={(e)=>setEmail(e.target.value)}
//                     className='w-80 rounded-lg mt-10 border border-black mx-5 p-3 placeholder:font-semibold'
//                         />
//                 </div>
//                 <div className='relative'>
//                     <input className='w-80 rounded-lg mt-5 border border-black mx-5 p-3 placeholder:font-semibold'
//                         value={password} onChange={(e) => setPassword(e.target.value)}
//                         type={`${lock?"password":"text"}`} placeholder='Password' />
//                         <div className='absolute top-10 right-14'>
//                             {lock ? <CiLock onClick={lockHandler}/> : <CiUnlock onClick={lockHandler}/>}
//                         </div>
//                 </div>
//                 <div className='relative'>
//                     <input className='w-80 rounded-lg mt-5 border border-black mx-5 p-3 placeholder:font-semibold'
//                         value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
//                         type={`${confirmLock?"password":"text"}`} placeholder='Confirm Password' />
//                         <div className='absolute top-10 right-14'>
//                             {confirmLock?<CiLock onClick={lockHandle}/> : <CiUnlock onClick={lockHandle}/>}
//                         </div>
//                 </div>
//                 <button type='submit' className='bg-blue-500 w-80 text-white  h-12 font-semibold text-xl  rounded-xl py-1 mx-5 mt-4' >Login</button>
//                 <div className=' text-blue-500 text-center w-80 mx-5 h-14 pt-3 font-semibold text-sm rounded-lg'>Forgotten password?</div>
//             </form>
//            }
//         </div>
//     )
// }

// export default Form




import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Form = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }


  const SubmitHandler = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse( localStorage.getItem("user"));
    if(formData.email === loggeduser.email && formData.password === loggeduser.password){
      navigate("/");
    }
    else{
      // alert("Wrong Password");
    }
  }


  return (
    <div  >
      <form className='flex flex-col' onSubmit={SubmitHandler} >
        <label>Email</label>
        <input type='text' className='border border-black' id='email' value={formData.email} onChange={changeHandler} />

        <label>Password</label>
        <input type='password' className='border border-black' id='password' value={formData.password} onChange={changeHandler} />


        <button type='submit' >Submit</button>
      </form>
    </div>
  )
}

export default Form

