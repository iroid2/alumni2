import Banner from '@/components/front/Banner'
import React, { ReactNode } from 'react'

export default function layout({children}:{children:ReactNode}) {
  return (
    <div>
        <Banner/>
        {children}</div>
  )
}
