import React from 'react'

const GPTSearchBar = () => {
  return (
    <div className='mx-auto pt-[10%] w-1/2'>
        <form className='p-5 grid grid-cols-12 bg-black bg-opacity-70'>
            <input type='text' className='col-span-9 m-3 px-4 py-3 rounded-lg outline-none' placeholder='What would you like to watch today?' />
            <button className='col-span-3 bg-red-500 m-3 px-4 py-3 text-white text-xl font-bold rounded-lg'>Search</button>
        </form>
    </div>
  )
}

export default GPTSearchBar