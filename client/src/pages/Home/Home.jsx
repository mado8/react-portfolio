import './Home.css';

function Home() {

   const scrollDown = () => {

   }

  return (
      <div id='home-container'>
         <div id="home-div">
            <div id='image-div'></div>
               <div id='home-text'>
                  <div>
                     <p id='name-text' >HELLO MY NAME IS</p>
                     <h1 id='name'>Madeline Donley</h1>
                     <h3 id='occupation' >Full Stack Engineer</h3>
                  </div>
                  <div id='home-contact'>
                     <div><div id='mail-div'></div><p>mads.donley@gmail.com</p></div>
                     <div><div id='number-div'></div><p>(720)614-1655</p></div>
                  </div>
               </div>
         </div>
         <div id='scroll-div-container'>
            <div className='scroll-div' onClick={scrollDown()}>
               <div id='left-arrow-home'></div>
               <div id='right-arrow-home'></div>
            </div>
         </div>
         <div id='projects-div'>

         </div>
      </div>
  );
}

export default Home;