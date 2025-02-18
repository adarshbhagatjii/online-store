import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
// import axios from '../utils/Axios';
import Loading from './Loading';
import { ProductContext } from '../utils/Context';

const Details = () => {
  const navigate = useNavigate();
  const [products,  setProducts] = useContext(ProductContext);
  const [product,  setProduct] = useState(null);

  const  { id } = useParams();


  // const getSingleProducts  = async () => {
  //   try {
  //       const {data} = await axios(`/products/${id}`);
  //      setProduct(data);
        
  //   } catch (error) {
  //       console.log(error);
  //   }
  //  };
  //  useEffect(()=>{
  //   getSingleProducts();
  //  },[]);

  useEffect(()=>{
     if(!product){
      setProduct(products.filter((p)=> p.id == id)[0]);
     }
     },[]);
    const  ProsuctdelteHandler = (id) =>{
      const filteredproducts = products.filter((p)=>p.id !==id );
      setProducts(filteredproducts);
      localStorage.setItem('products',  JSON.stringify(filteredproducts));
      navigate("/")
      
    }


  return (product ?
    <div className=' w-[70%] flex justify-between items-center h-full m-auto p-[10%]  '>
      <img className='w-[40%]  h-[80%]  object-contain ' src={`${product.image}`} alt="" />
      <div className="content  w-[50%] ">
        <h1 className='text-4xl'>{product.title}</h1>
        <h2 className='text-zinc-400 my-3 '>{product.category}</h2>
        <h3 className='text-red-400 mb-3 '>{product.price}</h3>
        <p className='mb-[5%]'>{product.description} </p>
        <Link to={`/edit/${product.id}`} className=' mr-5 py-3 px-5 border rounded border-red-200 text-red-300'>Edit</Link>
        <button onClick={() => ProsuctdelteHandler(product.id)} className='py-3 px-5 border rounded border-red-200 text-red-300'>Delete</button>
      </div>
      
    
    </div>  : (<Loading />)

  )
}

export default Details
