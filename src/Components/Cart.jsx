import React from 'react'
import { MdAddShoppingCart } from "react-icons/md";

const Cart = () => {
    const product = [{
        id: 1,
        src: "https://cdn.giftstoindia24x7.com/ASP_Img/IMG2000/GTI0241.jpg",
        cart: "Add to Cart",
        price: "$12.3",
        shop: < MdAddShoppingCart />,
        waffle:"waffle",
        name:"Waffle with Berries"
    }, {
        id: 2,
        src: "https://cdn.giftstoindia24x7.com/ASP_Img/IMG2000/GTI0241.jpg",
        cart: "Add to Cart",
        price: "$12.3",
        shop: < MdAddShoppingCart />,
        waffle:"waffle",
        name:"Waffle with Berries"
    }, {
        id: 3,
        src: "https://cdn.giftstoindia24x7.com/ASP_Img/IMG2000/GTI0241.jpg",
        cart: "Add to Cart",
        price: "$12.3",
        shop: < MdAddShoppingCart />,
        waffle:"waffle",
        name:"Waffle with Berries"
    }, {
        id: 4,
        src: "https://cdn.giftstoindia24x7.com/ASP_Img/IMG2000/GTI0241.jpg",
        cart: "Add to Cart",
        price: "$12.3",
        shop: < MdAddShoppingCart />,
        waffle:"waffle",
        name:"Waffle with Berries"
    }, {
        id: 5,
        src: "https://cdn.giftstoindia24x7.com/ASP_Img/IMG2000/GTI0241.jpg",
        cart: "Add to Cart",
        price: "$12.3",
        shop: < MdAddShoppingCart />,
        waffle:"waffle",
        name:"Waffle with Berries"
    }, {
        id: 6,
        src: "https://cdn.giftstoindia24x7.com/ASP_Img/IMG2000/GTI0241.jpg",
        cart: "Add to Cart",
        price: "$12.3",
        shop: < MdAddShoppingCart />,
        waffle:"waffle",
        name:"Waffle with Berries"
    }, {
        id: 7,
        src: "https://cdn.giftstoindia24x7.com/ASP_Img/IMG2000/GTI0241.jpg",
        cart: "Add to Cart",
        price: "$12.3",
        shop: < MdAddShoppingCart />,
        waffle:"waffle",
        name:"Waffle with Berries"
    }, {
        id: 8,
        src: "https://cdn.giftstoindia24x7.com/ASP_Img/IMG2000/GTI0241.jpg",
        cart: "Add to Cart",
        price: "$12.3",
        shop: < MdAddShoppingCart />,
        waffle:"waffle",
        name:"Waffle with Berries"
    }, {
        id: 9,
        src: "https://cdn.giftstoindia24x7.com/ASP_Img/IMG2000/GTI0241.jpg",
        cart: "Add to Cart",
        price: "$12.3",
        shop: < MdAddShoppingCart />,
        waffle:"waffle",
        name:"Waffle with Berries"
    }]
    return (
        <div>
            <div className='ml-32 font-semibold text-2xl mt-5'>Desserts</div>
            <div className=' w-[60%] gap-10 ml-32 mt-5 grid grid-cols-3' >
                {
                    product.map((items) =>
                        <div key={items.id}>
                            <div className='relative'>
                                <img className='h-60 w-full rounded-lg' src={items.src} />
                                <div className='flex absolute top-56 left-12 border rounded-full h-9 w-36  bg-white border-red-500'>
                                <span className='ml-4 mt-2 text-red-500'>{items.shop}</span>
                                    <span className='ml-2 text-semibold mt-1'>{items.cart}</span>
                                </div>
                                <div className='flex flex-col mt-5 gap-1'>
                                    <span className='text-gray-400 font-semibold text-sm'>{items.waffle}</span>
                                    <span className='text-red-950 font-semibold text-sm'>{items.name}</span>
                                    <span className='text-red-500 font-semibold text-sm'>{items.price}</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Cart
