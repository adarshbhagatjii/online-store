import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../utils/Context';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Edit = () => {
    const [products, setProducts] = useContext(ProductContext);


    const navigate = useNavigate()
    const { id } = useParams();
    const [product, setProduct] = useState({
        title: '',
        price: '',
        image: '',
        description: '',
        category: '',


    });
    const changeHandler = (e) => {

        // console.log(e.target.name, e.target.value)

        setProduct({ ...product, [e.target.name]: e.target.value })

    }



    useEffect(() => {
        setProduct(products.filter((p) => p.id == id)[0]);

    }, [id]);
   


    const addProductHandler = (e) => {
        e.preventDefault();

        if (product.image.trim().length < 5 || product.title.trim().length < 5 || product.category.trim().length < 5 || product.price.trim().length < 1 || product.description.trim().length < 5) {
            alert("Each and every  field is required ");

        }

        const pi =products.findIndex((p) => p.id == id);
        const copydata =  [...products];
        copydata[pi] = {...products[pi], ...product};

       
        setProducts(copydata);
        localStorage.setItem("products", JSON.stringify(copydata));


        toast.success('Product Edited Succesfully');
        navigate(-1)
    }
    

    return (
        <form onSubmit={addProductHandler} className=' flex flex-col items-center p-[5%] w-screen h-screen' action="">

            <h1 className='text-3xl w-1/2 mb-5 '>Edit Product</h1>

            <input type="url " placeholder='image url' className='text-2xl bg-zinc-200 rounded p-3 w-1/2 mb-3' name='image' onChange={changeHandler} value={product && product.image} />

            <input type="text " placeholder='title' className='text-2xl bg-zinc-200 rounded p-3 w-1/2 mb-3' name='title' onChange={changeHandler} value={product && product.title} />

            <div className='w-1/2 flex justify-between'>

                <input type="url " placeholder='category' className='text-2xl bg-zinc-200 rounded p-3 w-[48%] mb-3' name='category' onChange={changeHandler} value={product && product.category} />


                <input type="number" placeholder='price' className='text-2xl bg-zinc-200 rounded p-3 w-[48%] mb-3' name='price' onChange={changeHandler} value={product && product.price} />


            </div>
            <textarea type="text" placeholder='description' className='text-2xl bg-zinc-200 w-1/2 rounded p-3 mb-3 ' rows='10'
                name='description'
                onChange={changeHandler} value={product && product.description}></textarea>
            <div>
                <button type='submit' className='py-3 px-5 border rounded border-blue-200 text-blue-300 '>Edit products</button>
            </div>

        </form>
    )
}

export default Edit
