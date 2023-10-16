'use client'
import React from 'react'

const ButtonClinet = () => {
  return (
    <div className='btn btn-primary '>
        <button onClick={()=> console.log('Clicked the damn button man') }> CLICK ME</button>
    </div>
  )
}

export default ButtonClinet