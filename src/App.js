
// import First from './First';
// import logo from './logo.svg';
// // import './App.css';

// function App() {
// const product =[{
//   id:1,
//   src:"https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_16_AaonoR2_k259KMh.jpg",
//   name:"Iphone 11 pro Max",
//   price:"40,000"

// },{
//   id:2,
//   src:"https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_16_AaonoR2_k259KMh.jpg",
//   name:"Samsung S12",
//   price:"12000"
// },{
//   id:3,
//   src:"https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_16_AaonoR2_k259KMh.jpg",
//   name:"Samsung S12",
//   price:"12000"
// },{
//   id:4,
//   src:"https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_16_AaonoR2_k259KMh.jpg",
//   name:"Samsung S12",
//   price:"12000"
// }];

//    product.map((items)=>{
//     console.log(items);
//    })
    
//   return (
//     <div className=' flex gap-2 ' >
//       {
//         [1,2,3,4].map((items)=>
//         <div key={items.id} className='border border-black rounded-lg '  >
//           <img 
//             src="https://crazzyhub.s3.amazonaws.com/media/product_variant/New_Project_16_AaonoR2_k259KMh.jpg"
//             alt={items.name}
//             className='h-28 w-28 m-2'
//           />

//           <div className='flex flex-col text-center'>
//           <span>uhxx</span>
//           <span  className='truncate w-28' >hxkkqxvsjhxhqxiyqvxyivixqfiqfxiqsgxqfv</span> 
//           </div>
//         </div>)
//       }

//       {/* <Responsive/> */}
//     </div>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
    
//   );
// }

// export default App;



import React from 'react'
import Card from './Components/Card'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import UseStateUse from './Components/UseStateUse';
import Responsive from './Components/ResponsiveSlider';
import UseState2 from './Components/UseState2';
import Form from './Components/Form';
import Flipkartheader from './Components/Flipkartheader';
import Header1 from './Components/Header1';
import Practice from './Components/Practice';
import Form2 from './Components/Form2';
import Home from './Components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
const App = () => {
  const product = [{
    id: 1,
    name: "Vitamin C Skin Brightener",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7p-OdD0AHObfKAExVYhvNuw18daqC5n-Yxw&s",
    description: "SKIN PRODUCT",
    stock:"IN-STOCK",
    price: "$1.0" ,
    discount:"$30,000",
    percent:"(99.97%)",
    fav:<FavoriteBorderIcon/>,
    cart:"Add To Cart"
  },
  {
    id: 2,
    name: "Vitamin C Skin Brightener",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7p-OdD0AHObfKAExVYhvNuw18daqC5n-Yxw&s",
    description: "SKIN PRODUCT",
    stock:"IN-STOCK",
    price: "$1.0" ,
    discount:"$30,000",
    percent:"(99.97%)",
    fav:<FavoriteBorderIcon />,
    cart:"Add To Cart"
  },
  {
    id: 3,
    name: "Vitamin C Skin Brightener",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7p-OdD0AHObfKAExVYhvNuw18daqC5n-Yxw&s",
    description: "SKIN PRODUCT",
    stock:"IN-STOCK",
    price: "$1.0" ,
    discount:"$30,000",
    percent:"(99.97%)",
    fav:<FavoriteBorderIcon/>,
    cart:"Add To Cart"
  },
  {
  id: 4,
  name: "Vitamin C Skin Brightener",
  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7p-OdD0AHObfKAExVYhvNuw18daqC5n-Yxw&s",
  description: "SKIN PRODUCT",
  stock:"IN-STOCK",
  price: "$1.0" ,
  discount:"$30,000",
  percent:"(99.97%)",
  fav:<FavoriteBorderIcon/>,
  cart:"Add To Cart"
},  {
  id: 5,
  name: "Vitamin C Skin Brightener",
  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7p-OdD0AHObfKAExVYhvNuw18daqC5n-Yxw&s",
  description: "SKIN PRODUCT",
  stock:"IN-STOCK",
  price: "$1.0" ,
  discount:"$30,000",
  percent:"(99.97%)",
  fav:<FavoriteBorderIcon/>,
  cart:"Add To Cart"
},  {
  id: 6,
  name: "Vitamin C Skin Brightener",
  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7p-OdD0AHObfKAExVYhvNuw18daqC5n-Yxw&s",
  description: "SKIN PRODUCT",
  stock:"IN-STOCK",
  price: "$1.0" ,
  discount:"$30,000",
  percent:"(99.97%)",
  fav:<FavoriteBorderIcon/>,
  cart:"Add To Cart"
}]
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/form2' element={<Form2/>}/>
          {/* <Route path='/form2' element={<Form2/>}/> */}
          <Route path='/' element={<Home/>}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
      </BrowserRouter>

    </>
    // <div>
    // {/* <Card product={product}/> */}
    // {/* <UseStateUse/> */}
    // {/* <Responsive product={product} /> */}
    // {/* <UseState2/> */}
    // <Form2/>
    // {/* <Practice/> */}
    // {/* <Flipkartheader/> */}
    // {/* <Header1/> */}
    // </div>
  )
}

export default App
