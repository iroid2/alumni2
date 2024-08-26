import RegisterForm from '@/components/Forms/RegisterForm'
import React from 'react'

export default function page() {
  
  const Admin="admin"
  return (
    <div className='pt-20'  suppressHydrationWarning={true}>
        <RegisterForm role={Admin}/>
    </div>
  )
}
