import React from 'react'

const Singlebirthday = ({id,name,age,image}) => {
  return (
    <>
      <div className="flex items-center justify-between my-4 shadow-lg rounded-md p-4">
<div className="flex items-center gap-3">
    <img className='[clip-path:circle()] object-cover h-[50px] w-[50px]' src={image} alt="user-image" />

   <div className="flex flex-col items-start">
   <h4 className='font-semibold'>{name}</h4>
   <p className='text-gray-400'>{age} Years</p>
   </div>
</div>


<button class=" cursor-pointer px-6 p-2 text-white font-semibold rounded-lg bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-500 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105">
    Remove
  </button>

      </div>
    </>
  )
}

export default Singlebirthday
