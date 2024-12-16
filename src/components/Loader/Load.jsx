import React from 'react'

function Load() {
  return (
    <div className='flex w-screen items-center justify-center h-screen '>
      <div>
        <div className='flex w-[20vw] justify-between items-center animate-spin'>
            <div className="cercle w-[50px] h-[50px] rounded-full shadow-purple-500 shadow-xl  bg-purple-500 animate-bounce"></div>
            {/* <div className="cercle w-[50px] h-[50px] rounded-full bg-green-500 animate-bounce"></div> */}
            <div className="cercle w-[50px] h-[50px] rounded-full bg-yellow-500 animate-bounce shadow-yellow-500 drop-shadow-xl"></div>
        </div>
        {/* <h3 className='text-center animate-pulse'>Loading ...</h3> */}
      </div>
    </div>
  )
}

export default Load