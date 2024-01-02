import React from 'react';
import { star } from '../assets/icons';

const Product = ({imgUrl, name, price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgUrl} className='w-[280px] h-[280px]'/>
      <div className='flex justify-start mt-8 gap-2.5'><img src={star} width={24} height={24}/><p className='font-montserrat text-slate-gray text-xl'>(4.5)</p></div>
      <p className='font-palanquin font-semibold leading-normal text-2xl mt-2'>{name}</p>
      <p className='mt-2 text-2xl font-semibold leading-normal  text-coral-red'>{price}</p>
    </div>
  )
}

export default Product
