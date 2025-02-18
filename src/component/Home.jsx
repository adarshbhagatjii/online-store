import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'
import axios from '../utils/Axios'

const Home = () => {
  const [products]= useContext(ProductContext);
  const {search} = useLocation();

  const category = decodeURIComponent( search.split('=')[1]);
  const [filteredproducts,  setFilteredproducts] = useState(null);



// const getproductcategory = async()=>{
//   try{
//     const {data}= await axios.get(`/products/category/${category}`)
//     setFilteredproducts(data)
    
//   } catch{
//     console.log('error');
//   }
// }

useEffect(()=>{

  if(!filteredproducts || category =="undefined") setFilteredproducts(products);
  if(category!="undefined"){
    // getproductcategory();
    setFilteredproducts(products.filter(p =>  p.category === category))


  } 
},[category, products])



  return (products)? (
    <>
    <Nav />
    <div className=' w-[85%] p-10 flex flex-wrap overflow-x-hidden overflow-y-auto'>

    {filteredproducts && filteredproducts.map((p,i)=>(
      <Link key={p.id} to={`/details/${p.id}`} className="mr-3 mb-3 card p-3 border shadow-md rounded w-[18%] h-[30vh] flex flex-col justify-center items-center">
          <div
            className=' hover:scale-110 mb-3 w-a h-[80%] bg-contain bg-center '
            style={{ backgroundImage: `url(${p.image})` }}>
          </div>
          <h1 className='text-sm font-semibold hover:text-blue-600'>{p.title}</h1>
        </Link>))}

        
      </div>
    </>
    
  ):(
    <Loading />
  )
  
}

export default Home;
