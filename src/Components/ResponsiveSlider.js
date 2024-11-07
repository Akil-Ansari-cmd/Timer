import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red",right:"10px",zIndex:100 }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green",left:"10px",zIndex:100 }}
        onClick={onClick}
      />
    );
  }

function Responsive({product}) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="slider-container mx-10">
      <Slider {...settings} className="" >
      {
          product.map((items) =>
            <div key={items.id} className=' p-5 h-80 flex border mr-12 pl-10 mx-10 '>
              <img className='rounded-lg w-60 h-36 ' src={items.src}
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
      </Slider>
    </div>
  );
}

export default Responsive;
