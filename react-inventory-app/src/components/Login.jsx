import React from 'react'

const Login = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-300'>
      <div className='text-center  w-full'>
          <h1 className='text-4xl font-semibold mb-6'>Inventory System</h1>
          <div className="bg-white border border-black rounded-md flex flex-col space-y-4 px-4 w-2/5 mx-auto">
            <label className='text-left text-lg  mt-5 w-1/2 mx-auto'>Email</label>
            <input type="email" placeholder='Email' className='border-gray-400 border rounded-sm pl-4 w-1/2 mx-auto' />
            <label className='text-left text-lg mt-5 w-1/2 mx-auto'>Password</label>
            <input type="password" placeholder='password' className='border-gray-400 border rounded-sm pl-4 w-1/2 mx-auto' />
          <button className='bg-gray-300 hover:text-white border border-black rounded-md w-1/5 mx-auto'>Sign in</button>
          <div className='pb-5'>Doesn't has account yet? <button href="#" className='text-blue-500 hover:text-blue-700 hover:underline'>Register here</button></div>
          </div>
      </div>
    </div>
  )
}

export default Login