import React from 'react'
import "./Error.scss"
import { error } from '../../utils/images'

const Error = () => {
  return (
    <div className='container py-5'>
      <div className='flex flex-center error'>
        <img src={error} alt="에러 사진" />
      </div>
    </div>
  )
}

export default Error