import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About';
import Resume from './pages/Resume/Resume';


function App() {

  const [page, setPage] = useState();
  const [open, setOpen] = useState(false)

  const handlePage = (page) => {
    console.log(page)
    setPage(page)
  }

  const resetActiveColor = () => {
    for(var i=0; i<5; i++) {
      document.getElementById('menu').children[i].children[0].style.backgroundColor = 'transparent'
    }
  }

  const returnPage = () => {
    if(page === 'home') {
      resetActiveColor()
      document.getElementById('home').children[0].style.backgroundColor = '#f1f1f1'
      return (
        <Home></Home>
      )
    } else if (page === 'about') {
      resetActiveColor()
      document.getElementById('about').children[0].style.backgroundColor = '#f1f1f1'
      return (
        <About open={open} setOpen={setOpen}></About>
      )
    } else if (page === 'resume') {
      resetActiveColor()
      document.getElementById('resume').children[0].style.backgroundColor = '#f1f1f1'
      return (
        <Resume open={open} setOpen={setOpen}/>
      )
    } else if (page === 'resources') {
      resetActiveColor()
      document.getElementById('resources').children[0].style.backgroundColor = '#f1f1f1'
      // return (
      //   <Resources/>
      // )
    } else if (page === 'contact') {
      resetActiveColor()
      document.getElementById('contact').children[0].style.backgroundColor = '#f1f1f1'
    } else {
      return (
        <Home></Home>
      )
    }
  }

  return (
    <div id='base-container'>
      <Navbar page={page} position="fixed" handlePage={handlePage} open={open} setOpen={setOpen}/>
      {returnPage()}
    </div>
  );
}

export default App;
