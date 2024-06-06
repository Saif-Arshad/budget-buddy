import React from 'react'

function page(slug:any) {
    console.log(slug)
    return (
    <div>
      hey this is {slug.params.id}
    </div>
  )
}

export default page
