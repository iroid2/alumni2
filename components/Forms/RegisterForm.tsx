'use client'
import React, { useState } from 'react'
import TextInput from '../global/Textinput'
import { useForm } from 'react-hook-form'
import SubmitButton from '../global/SubmitButton'
import Image from 'next/image'
import Link from 'next/link'

// export type RegisterProps={

// }
export default function RegisterForm() {
  const {register,handleSubmit,formState:{errors}}=useForm()
  const [loading,setLoading]=useState(false)

  async function onSubmit(data:any) {
    console.log(data)
  }
  return (
    <div>
      <div className="grid grid-cols-2 m-10 w-[70%] mx-auto shadow-md overflow-hidden rounded-md">
     <div className="py-8  w-full  px-8  flex flex-col gap-2">
                    <h2 className='font-bold'>Login Your Account</h2>
                    <p>Welcome back, fill in the details to Login</p>
                    
                    <div className='p-4 border-gray-200 border-[1px] text-center items-center justify-center gap-2 bg-white text-black flex'><Image src={'/images/nwa.png'} alt='' width={20} height={20}/> google</div>
                    <div className="">
            <form className=" " onSubmit={handleSubmit(onSubmit)}  >   
            <div className="grid gap-3 pt-3">
              <div className="grid grid-cols-2 gap-4">
              <TextInput
      register={register}
      errors={errors}
      label="Email"
      name="email"
    />
      <TextInput
      register={register}
      errors={errors}
      label="Email"
      name="email"
    />
              </div>
              <div className="grid grid-cols-2 gap-4">
              <TextInput
      register={register}
      errors={errors}
      label="Email"
      name="email"
    />
      <TextInput
      register={register}
      errors={errors}
      label="Email"
      name="email"
    />
              </div>
  
  </div>
  <div className="grid gap-3 pt-3">
    <TextInput
      register={register}
      errors={errors}
      label="Password"
      name="password"
    />
  </div>
       

      <div>
       
        <div className="py-3">
        <SubmitButton  title='Create Account' className='w-full ' loadingTitle='' loading={loading}  />
        </div>
      </div>
      
    </form>
    <p className=" text-center text-sm text-gray-500">
      Already Registered?
      <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login </Link>
    </p>
    
  </div>
                </div>
                <div className="">
           <Image src={'https://img.freepik.com/free-vector/app-development-concept-with-flat-deisng_23-2147852844.jpg?t=st=1724271792~exp=1724275392~hmac=112335d0eb4136e71d05274f049bf2490b5b5ed7eb82e7ae27c12beb3608afee&w=740'} alt='' className='w-full h-full' width={400} height={400}/>
        </div>
   </div>
    </div>
  )
}
