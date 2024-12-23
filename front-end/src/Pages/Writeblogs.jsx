import React from 'react'
import WriteAndUpdate from '../Components/WriteBlogs/WriteAndUpdate'


const Writeblogs = ({title}) => {
  return (
    <div>
      <WriteAndUpdate titleName={title}/>
    </div>
  )
}

export default Writeblogs
