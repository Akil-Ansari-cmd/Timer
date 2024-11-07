import React from 'react'

const Card = ({ product }) => {
  return (
    <div className='h-[100vh] py-24 w-[100vw]'>
      <div className='flex mx-auto h-[50vh] w-[80vw] gap-16'>
        {
          product.map((items) =>
            <div key={items.id} className='border-x-2 border-b-2 p-5 h-80 shadow-lg'>
              <img className='rounded-lg w-60 h-36' src={items.src}
              />
              <div className='flex flex-col pt-2'>
                <span className='font-semibold'>{items.name}</span>
                <span className='font-normal text-green-700 text-sm'>{items.description}</span>
                <span className='font-normal text-green-700 text-sm'>{items.stock}</span>
              </div>
              <div className='flex gap-3'>
                <span className='text-slate-500 line-through'>{items.discount}</span>
                <span>{items.price}</span>
                <span className='font-normal text-green-700 text-sm'>{items.percent}</span>
              </div>
              <div className='flex pt-3'>
                <div className='border w-12 text-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 h-10 pt-1 text-white'>{items.fav}</div>
                <div className='ml-7 w-40 border text-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 pt-1 text-white'>{items.cart}</div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Card
