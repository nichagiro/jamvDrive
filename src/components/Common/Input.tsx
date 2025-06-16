import React, { InputHTMLAttributes } from 'react'

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ title, ...props }) => {
  return (
    <>
      <label htmlFor={props.name ?? props.id} className='pb-1 font-semibold'>
        {title}
      </label>

      <input
        {...props}
        className='text-white bg-transparent border border-dark_border/60 rounded-md px-3 py-3.5 w-full focus:border-primary focus-visible:outline-0'
      />
    </>
  )
}

export default Input