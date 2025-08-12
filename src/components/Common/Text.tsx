import React, { TextareaHTMLAttributes } from 'react'

const Text: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ title, ...props }) => {
  return (
    <>
      <label htmlFor={props.name ?? props.id} className='pb-1 font-semibold text-primary'>
        {title}
      </label>

      <textarea
        {...props}
        className='text-white bg-transparent border border-dark_border/60 rounded-md px-3 py-2 w-full focus:border-primary focus-visible:outline-0'
      />
    </>
  )
}

export default Text