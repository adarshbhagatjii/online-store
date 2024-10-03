import React, { useContext } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'

const Home = () => {
  const [products]= useContext(ProductContext);
  console.log(products);
  return (products)? (
    <>
    <Nav />
    <div className=' w-[85%] p-10 flex flex-wrap overflow-x-hidden overflow-y-auto'>
        <Link to="/details/1" className="mr-3 mb-3 card p-3 border shadow-md rounded w-[18%] h-[30vh] flex flex-col justify-center items-center">
          <div
            className=' hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-center bg-no-repeat '
            style={{ backgroundImage: `url("https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg")` }}>
          </div>
          <h1 className='text-sm font-semibold hover:text-blue-600'>Lorem ipsum dolor sit  amet.</h1>
        </Link>
      </div>
    </>
    
  ):(
    <Loading />
  )
  
}

export default Home;
