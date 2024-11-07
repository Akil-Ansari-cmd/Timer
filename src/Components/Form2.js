import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form2() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  })
const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData(() => ({
      ...data,
      [name]: value,
    }))


  }

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data" , data);
    alert("Your form has been submitted successfully");
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/form");
    // localStorage.setItem("last", data.lastname);
    // localStorage.setItem("email", data.email);
    // localStorage.setItem("few", data.few);
    // localStorage.clear();
   }

   const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
   }

  return (
    <div className='w-[100vw] py-[5vh] h-[100vh] bg-purple-400'>
      <form onSubmit={handleSubmit} className='rounded-xl h-[90vh] m-auto w-[70vw] bg-black'>
        <div className='text-white font-bold pt-3 text-4xl text-center'>Create an Account</div>
        <div className='grid grid-cols-2'>
          <div className='pt-[10%] grid'>
            <label className='ml-12 text-white'>First Name:</label>
            <input type="text" name='firstname' onChange={handleChange} value={data.firstname} className='rounded-2xl border border-black mt-2 ml-10 h-9 w-72' />
          </div>
          <div className='pt-[10%] grid'>
            <label className='mr-auto text-white'>Last Name:</label>
            <input type="text" name='lastname' value={data.lastname} onChange={handleChange} className='rounded-2xl border border-black mt-2  h-9 w-72' />
          </div>
        </div>
        <div className=' grid  pt-10 mx-12 '>
          <h3 className='mr-auto text-white'>Email:</h3>
          <input type="email" name='email' value={data.email} onChange={handleChange} className='rounded-2xl h-10 mt-4' />
        </div>
        <div className=' grid  pt-10 mx-12'>
          <h3 className='mr-auto text-white'>Password</h3>
          <input type="password" name='password' value={data.password} onChange={handleChange} className='rounded-2xl h-16 mt-2' />
        </div>
        <div className='flex justify-center'>
        <div className='!text-white !mt-8 rounded-2xl h-[6%] !font-semibold '>Already have a account?</div>
        <button type='submit' className='!text-white !w-[14%] !mt-8 rounded-2xl h-[6%] !font-semibold' >LogIn</button>
        {/* <button type='submit' onClick={handleLogout} className='!text-white !w-[14%] !mt-8 rounded-2xl h-[6%] !font-semibold bg-red-500 !text-center'>Logout</button> */}
        </div>
      </form>
    </div>
  )
}
export default Form2
