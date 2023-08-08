import React from 'react'

export default function Headings({ title, subtitle }: any) {
  return (
    <div className='mb-10'>
      <h3 className='text-marine-blue text-3xl font-ubuntu-bold mb-1'>{title}</h3>
      <p className='text-cool-gray'>{subtitle}</p>
    </div>
  )
}
