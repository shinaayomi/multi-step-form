import React, { PropsWithChildren } from 'react'
import AppNavBar from './AppNavBar'

export default function PagesLayout({ children }: PropsWithChildren) {
  return (
    <div className='min-h-screen md:grid md:place-items-center'>
      <div className="max-w-screen-lg w-full grid md:grid-cols-3 md:bg-white md:p-5 md:rounded-3xl">
        <div className='md:col-span-1 md:min-h-[680px]'>
          <AppNavBar />
        </div>
        <div className='md:col-span-2 px-4 md:px-0'>
          <div className='h-full bg-white rounded-xl px-4 xl:px-20 md:px-10 md:py-10 py-5'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
