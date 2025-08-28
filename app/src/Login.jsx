import React from 'react'

function Login() {
  return (
    <>
    <div>
      Login
      <form>
        <input type="email" placeholder="Email"  className='border p-2 rounded' /><br />
        <input type="password" placeholder="Password" className='border p-2 rounded' /><br />
        <button type="submit" className='bg-blue-600 text-white p-2 rounded'>Login</button>
      </form>
    </div>
    </>
  )
}

export default Login