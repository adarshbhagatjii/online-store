import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Create = () => {
    const navigate = useNavigate()

    const [title,  setTitle] = useState('');
    const [image,  setImage] = useState('');
    const [category,  setCategory] = useState('');
    const [price,  setPrice] = useState('');
    const [description,  setDescription] = useState('');

    const [products,  setProducts] = useContext(ProductContext);


    const addProductHandler =(e)=>{
        e.preventDefault();

        if(title.trim().length <5 || image.trim().length <5  || category.trim().length<5 || price.trim().length<1|| description.trim().length<5) {
            alert("Each and every  field is required ");

        }

        const product = {
            id: nanoid(),
            image, title,
        category,
            price,
            description
        }
        setProducts([...products ,  product]);
        localStorage.setItem("products",  JSON.stringify([...products, product]));

        toast.success('New Product Added');
        navigate('/')

       
    }

  return (
   <form onSubmit={addProductHandler} className=' flex flex-col items-center p-[5%] w-screen h-screen' action="">
    
    <h1 className='text-3xl w-1/2 mb-5 '>Add New Products</h1>

    <input type="url " placeholder='image url' className='text-2xl bg-zinc-200 rounded p-3 w-1/2 mb-3' onChange={(e)=> setImage(e.target.value)} value={image} />

    <input type="text " placeholder='title' className='text-2xl bg-zinc-200 rounded p-3 w-1/2 mb-3' onChange={(e)=> setTitle(e.target.value)} value={title} />

    <div className='w-1/2 flex justify-between'>

    <input type="url " placeholder='category' className='text-2xl bg-zinc-200 rounded p-3 w-[48%] mb-3' onChange={(e)=> setCategory(e.target.value)} value={category} />

<input type="number" placeholder='price' className='text-2xl bg-zinc-200 rounded p-3 w-[48%] mb-3' onChange={(e)=> setPrice(e.target.value)} value={price} />

    </div>
    <textarea type="text" placeholder='description' className='text-2xl bg-zinc-200 w-1/2 rounded p-3 mb-3 ' rows='10'
    onChange={(e)=> setDescription(e.target.value)} value={description}></textarea>
    <div>
    <button type='submit' className='py-3 px-5 border rounded border-blue-200 text-blue-300 '>add new products</button>
    </div>
    
   </form>
  )
}

export default Create
