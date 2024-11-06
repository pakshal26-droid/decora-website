import React from 'react'

function Navbar(props) {
  return (
    <div className='flex py-3 items-center justify-between text-black '>
          <h1 className='font-semibold'>{props.link1}</h1>
          <h1 className='font-semibold'>{props.link2}</h1>
        </div>
  )
}

export default Navbar