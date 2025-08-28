import React from 'react'

function VerifyOtp() {
  return (
    <>

    <form>
      <input type="text" placeholder="Enter OTP" className='border p-2 rounded' /><br />
      <button type="submit" className='bg-blue-600 text-white p-2 rounded'>Verify</button>
    </form>
  </>
  )
}

export default VerifyOtp