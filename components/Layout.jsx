import React from 'react'

function Layout({children}) {
  return (
    <div className='mx-5 lg:mx-32'>
        {children}
    </div>
  )
}

export default Layout