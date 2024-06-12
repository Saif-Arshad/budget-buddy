import React from 'react'

function page({params}:any) {
    const {id} = params
    console.log("🚀 ~ page ~ id:", id)
  return (
    <div className='pt-36'>
      hey {id}
    </div>
  )
}

export default page