import React from 'react'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import Writeblogs from './Pages/Writeblogs';
import BlogsPage from './Components/Blogs-page/BlogsPage';



const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route  path='/writeBlogs' element={<Writeblogs title={"Write"}/>} />
          <Route path='/blogsPage/:id' element={<BlogsPage/>}/>
          <Route path='/updateBlog/:id' element={<Writeblogs title={"Update"}/>}/>
          
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
