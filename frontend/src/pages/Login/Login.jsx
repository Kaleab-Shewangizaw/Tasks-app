import React from 'react'
import Navbar from '../../componenets/Navbar'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
    <Navbar/>
    <div className='flex items-center justify-center w-full py-80 bg-gray-500'>
      <div className=' py-10 bg-white rounded-lg shadow-md'>
        <form onSubmit={()=>{}} className='space-y-4'>
          <h4 >Login</h4>
          <input type="text" placeholder='name'/>
          <input type="email" placeholder='email' />
          <button type='submit'>Login</button>

          <Link to='/signup'>Don't have an account? Sign up</Link>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login