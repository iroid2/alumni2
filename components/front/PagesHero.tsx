import React from 'react'

export default function PagesHero({title}:{title:string}) {
  return (
    <div className="flex w-full h-[200px] items-center text-yellow-50 bgImg justify-center  ">
        <h1 className='font-bold  text-3xl f'>{title}</h1>
      </div>
  )
}
