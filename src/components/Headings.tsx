import React from 'react'

export default function Headings({ title, subtitle }: any) {
  return (
    <div>
      <h3 className='text-marine-blue text-3xl font-ubuntu-bold'>{title}</h3>
      <p className='text-cool-gray'>{subtitle}</p>
    </div>
  )
}
