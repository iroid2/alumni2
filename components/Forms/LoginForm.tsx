'use client'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextInput from '../global/Textinput'
import SubmitButton from '../global/SubmitButton'

export default function LoginForm() {
  const {register,handleSubmit,formState:{errors}}=useForm()
  const [loading,setLoading]=useState(false)
const [toggleIcon,setToggleIcon]=useState(false)

 
  return (
   <div className="grid md:grid-cols-2 w-full grid-cols-1 md:m-10 mx-2 px-2 my-20 md:w-[70%] md:mx-auto shadow-md overflow-hidden rounded-md">
     <div className="py-8    px-8  flex flex-col gap-2">
                    <h2 className='font-bold'>Login Your Account</h2>
                    <p>Welcome back, fill in the details to Login</p>
                    
<div className="providers grid grid-cols-2 gap-4">
  <div className='p-4 border-gray-200 border-[1px] text-center items-center justify-center gap-2 bg-white text-black flex'><Image src={'/images/nwa.png'} alt='' width={20} height={20}/> google</div>
  <div className='p-4 border-gray-200 border-[1px] text-center items-center justify-center gap-2 bg-white text-black flex'><Image src={'/images/fb.png'} alt='' width={20} height={20}/> Facebook</div>
 
</div>
                    <div className="">
            <form className=" "  >   
            <div className="grid gap-3 pt-3">
    <TextInput
      register={register}
      errors={errors}
      label="Email"
      name="email"
    />
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
        <SubmitButton  title='Login' className='w-full ' loadingTitle='' loading={loading}  />
        </div>
      </div>
      
    </form>
    <p className=" text-center text-sm text-gray-500">
      Not Registered?
      <Link href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Create Account</Link>
    </p>
    
  </div>
                </div>
                <div className="hidden md:block w-full">
           <Image src={'https://img.freepik.com/free-vector/app-development-concept-with-flat-deisng_23-2147852844.jpg?t=st=1724271792~exp=1724275392~hmac=112335d0eb4136e71d05274f049bf2490b5b5ed7eb82e7ae27c12beb3608afee&w=740'} alt='' className='w-full h-full' width={400} height={400}/>
        </div>
   </div>
  )
}
 
 

