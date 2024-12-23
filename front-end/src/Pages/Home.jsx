import React from 'react'
import Page1 from '../Components/Home/Page1'
import Page2 from '../Components/Home/Page2'


const Home = () => {
  return (
    
    <div>
      <Page1 />
      <div className='d-flex justify-content-center align-items-center my-4'>
        <h3>Latest Blogs</h3>
      </div>
      <Page2 />
    </div>
  )
}

export default Home
