import React from 'react'

const App = () => {
  return (
    <div className='h-screen w-screen'>
      <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
        <a className='py-3 px-5 border rounded border-blue-200 text-blue-300' href="">add new products</a>
        <hr className='w-[50%] my-3 ' />
        <h1 className='text-2xl mb-3 w-[80%]'>Category Filter</h1>
        <ul className='w-[80%] '>
          <li className='bg-red-100 mb-3'><span className='w-[30px] h-[30px] bg-blue-800 rounded-full '></span>cat 1</li>
        
        </ul>
      </nav>
      
    </div>
  )
}

export default App
