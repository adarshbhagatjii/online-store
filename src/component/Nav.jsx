import React from 'react'

const Nav = () => {
  return (
    
      <nav className='w-[15%] h-full bg-zinc-200 flex flex-col items-center pt-5'>
        <a className='py-3 px-5 border rounded border-blue-200 text-blue-300' href="/create">add new products</a>
        <hr className='w-[80%] my-3 ' />
        <h1 className='text-2xl mb-3 w-[80%]'>Category Filter</h1>
        <ul className=' w-[80%] '>
          <li className=' flex items-center  mb-3'>
            <span className='w-[15px] mr-2 h-[15px] bg-zinc-50  rounded-full '>
            </span> {''}cat 1</li>
          <li className=' flex items-center  mb-3'>
            <span className='w-[15px] mr-2 h-[15px] bg-red-50  rounded-full '>
            </span> {''}cat 1</li>
          <li className=' flex items-center  mb-3'>
            <span className='w-[15px] mr-2 h-[15px] bg-blue-50  rounded-full '>
            </span> {''}cat 1</li>

        </ul>
      </nav>
    
  )
}

export default Nav
