import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid';

function Form({setdata}) {

  // const {item,category,amount} = input

  const { register, handleSubmit,reset, formState: { errors } } = useForm()

  const onSubmit = (data) => {

   
    setdata((pre)=> [...pre,{...data, id: uuidv4()}])
     reset()
    // Optionally, you can call setdata(data) here if you need to handle the submitted data elsewhere.
  }

 

  return (
    <div className='bg-white w-full rounded shadow-lg'>
      <div className='bg-slate-200 p-3 rounded-tl rounded-tr font-semibold text-xl w-full'>
        <h1>Expenses Tracker</h1>
      </div>
      <section className='form p-3'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-rows-4 gap-5 w-full'>
            <div>
              <label htmlFor='item' className='capitalize'>
                Type Items
              </label>
              <input
                id='item'
                className='w-full p-1 rounded bg-slate-100'
                name='item'
                type="text"
         
                placeholder='Type items'
           
                {...register('item', { required: 'Item is required' })}
              />
              <p>{errors.item && errors.item.message}</p>
            </div>

            <div>
              <label htmlFor='category'>
                Enter Category
              </label>
              <select
                id='category'
          

                className='w-full p-1 rounded bg-slate-100'
                {...register('category', { required: 'Category is required' })}
              >
                <option value="" hidden>Select category</option>
                <option value="medicine">Medicine</option>
                <option value="grocery">Grocery</option>
                <option value="education">Education</option>
              </select>
              <p>{errors.category && errors.category.message}</p>
            </div>

            <div>
              <label htmlFor='amount' className='capitalize'>
                Enter Amount
              </label>
              <input
                id='amount'
                className='w-full p-1 rounded bg-slate-100'
                name='amount'
                
             
                type="number"
                placeholder='Type amount'
                {...register('amount', { required: 'Amount is required' })}
              />
              <p>{errors.amount && errors.amount.message}</p>
            </div>

            <div className='w-full flex items-center justify-center'>
              <button className='bg-slate-200 font-mono px-3 py-1 rounded' type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Form