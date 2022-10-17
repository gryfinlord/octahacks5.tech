import React from 'react';
import AnimatedCursor from 'react-animated-cursor';
import Judges from './sections/Judges';
import About from './sections/About'
import Landing from './sections/Landing/Landing';
import Mentors from './sections/Mentors';
import Prizes from './sections/Prizes';
import Footer from './sections/Footer';
import Sponsers from './sections/Sponsers';
import Tracks from './sections/Track/Track';
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return true;
  }
  if (
    e.ctrlKey &&
    e.shiftKey &&
    (e.keyCode == "I".charCodeAt(0) || e.keyCode == "i".charCodeAt(0))
  ) {
    return false;
  }
  if (
    e.ctrlKey &&
    e.shiftKey &&
    (e.keyCode == "C".charCodeAt(0) || e.keyCode == "c".charCodeAt(0))
  ) {
    return false;
  }
  if (
    e.ctrlKey &&
    e.shiftKey &&
    (e.keyCode == "J".charCodeAt(0) || e.keyCode == "j".charCodeAt(0))
  ) {
    return false;
  }
  if (
    e.ctrlKey &&
    (e.keyCode == "U".charCodeAt(0) || e.keyCode == "u".charCodeAt(0))
  ) {
    return false;
  }
  if (
    e.ctrlKey &&
    (e.keyCode == "S".charCodeAt(0) || e.keyCode == "s".charCodeAt(0))
  ) {
    return false;
  }
};
function App() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    // <div className='debug-screens font-azonix bg-slate-900 w-full h-full min-h-screen bg-cover bg-center text-gray-100'>
    <div className='font-azonix bg-[url(https://github.com/ikaushiksharma/WhatsApp_Ui/blob/master/backVideo.gif?raw=true)] bg-no-repeat bg-contain w-full h-full min-h-screen text-gray-100'>
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color='256, 256, 256'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
        ]}
      />
      <div className='fixed w-full h-fit z-20 bg-gradient-to-b from-black'>
       
        <nav className="relative px-4 py-4 flex justify-between items-center">
          <div className="flex items-center justify-center w-28 h-full ml-2">
        <a className="text-3xl font-bold leading-none" href="#">
          <img src='https://github.com/ikaushiksharma/WhatsApp_Ui/blob/master/logo.png?raw=true'
                 class="w-56 h-12" alt="gdsc"/>
        </a>
        </div>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-mainColor p-3" onClick={() => setNavbarOpen(!navbarOpen)}>
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
       <div className="hidden absolute top-1/2 left-72 transform -translate-y-1/2 -translate-x-1/3 lg:flex lg:mr-6 xl:mr-12 lg:items-center lg:w-auto lg:space-x-10">
        <ul
          className="lg:flex lg:mx-2 lg:my-2 lg:items-center lg:w-auto lg:space-x-10"
        >
          <li>
            <a className="text-lg text-white hover:text-mainColor" href="#home">Home</a>
          </li>
  
          <li>
            <a className="text-lg text-white hover:text-mainColor" href="#about">About</a>
          </li>
  
          <li>
            <a className="text-lg text-white hover:text-mainColor" href="#footer">Contact</a>
          </li>
  
         
        </ul>
        </div>
        <div className="hidden lg:flex items-center justify-center">
        <a
          className="hidden lg:inline-block lg:ml-auto text-sm font-bold  transition duration-200"
          href="#"
          >
            <img src='https://octahacks4.tech/assets/media/GDSClogo.png' className="w-52 h-12" alt="gdsc"/>
        </a>
        </div>
      </nav>
      <div className={
              "navbar-menu relative z-50 lg:hidden" +
              (navbarOpen ? " flex" : " hidden")
            }>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav
          className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-black border-r overflow-y-auto"
        >
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
             <img src='https://github.com/ikaushiksharma/WhatsApp_Ui/blob/master/logo.png?raw=true'
               alt="gdsc" className="w-auto h-12"/>
            </a>
            <button className="navbar-close" onClick={() => setNavbarOpen(!navbarOpen)}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
                  href="#"
                  >Home</a
                >
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
                  href="#home"
                  >Overview</a
                >
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
                  href="#tracks"
                  >Tracks</a
                >
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
                  href="#prizes"
                  >Prizes</a
                >
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
                  href="#sponsers"
                  >Sponsors</a
                >
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
                  href="#judges"
                  >Judges</a
                >
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
                  href="#mentors"
                  >Mentor</a
                >
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
                  href="#about"
                  >Our Team</a
                >
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-xl  text-white hover:bg-blue-300 hover:text-blue-600 rounded"
                  href="#footer"
                  >Contact</a
                >
              </li>
            </ul>
          </div>
          
        </nav>
      </div>
      </div>
      <div className='hidden fixed w-[15%] h-full min-h-screen z-[18] bg-gradient-to-r from-black lg:flex justify-center items-center'>
      <div className='hidden flex-row justify-between gap-6 items-center p-4 relative top-[2.5rem] text-lg text-white lg:flex rotate-[270deg]' >
            <a href="#sponsors"><div className='text-light '> Sponsors</div></a>
            <a href="#mentors"><div className='text-light '> Mentor </div></a>
            <a href="#judges"><div className='text-light '> Judges </div></a>
            <a href="#prizes"><div className='text-light '> Prizes </div></a>
            <a href="#tracks"><div className='text-light '> Tracks </div></a>        
        </div>
      </div>
      <div className='h-full lg:ml-[15%]'>
        <Landing />
        <About />
        <Tracks />
        <Prizes />
        <Judges />
        <Mentors />
        <Sponsers/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
