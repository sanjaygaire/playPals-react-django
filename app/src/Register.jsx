import React from 'react'

const Register = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold'>Register</h1>
      <form>
        <input type="text" placeholder="Username" className='border p-2 rounded' /><br />
        <input type="email" placeholder="Email" className='border p-2 rounded' /><br />
        <input type="password" placeholder="Password" className='border p-2 rounded' /><br />
        <button type="submit" className='bg-blue-600 text-white p-2 rounded'>Register</button>
      </form>
    </div>
  )
}

export default Register