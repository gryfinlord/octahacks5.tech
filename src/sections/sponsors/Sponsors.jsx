import React from 'react'
import './style.css';
function Sponsors() {
  return (
    <>
   
 <section className="bg-gradient-to-r from-[#0b0025] via-[#1d0027] to-[#250026] sponsors flex flex-col items-center justify-center p-2 md:h-screen" id="sponsors">
      <div class="flex flex-col gap-4 m-2 p-2">
        <h1 className="sponsor-title text-5xl lg:text-6xl xl:text-7xl text-center">
          Our <span className="awesome text-transparent bg-gradient-to-r from-[#6c6aff] via-[#fbc7d4] to-[#ff658b] inline-block bg-clip-text">Awesome</span> Sponsors
        </h1>
        <p className="sponsors_description">
          While all our participants make our event lively. It is our very
          amazing <span className="about_high">sponsors</span> that
          <span className="about_high">make it possible.</span>
        </p>
        </div>
        <div className="flex flex-col gap-4 m-6 p-2 w-9/12">
        <div className="sponsors-alpha">
          <h2 className="alpha-title">Platinum Sponsors</h2>
          <div className="alpha-images flex items-center justify-center gap-2 p-1">
            <a href="https://devfolio.co" target="blank">
              <img alt="sponsors" className="w-32 sm:w-36 h-auto inline" src={require("../../assets/Sponsors/devfolio.svg").default}  />
            </a>
            <a href="https://polygon.technology/" target="blank">
              <img alt="sponsors" className="w-32 sm:w-36 h-auto inline"src={require("../../assets/Sponsors/polygon.svg").default}  />
            </a>
          </div>
        </div>
        <div className="sponsors-gold">
          <h2 className="gold-title">Gold Sponsors</h2>
          <div className="gold-images flex items-center justify-center gap-2 p-1">
            <a href="https://filecoin.io" target="blank">
              <img alt="sponsors" className="w-32 sm:w-36 h-auto inline" src={require("../../assets/Sponsors/Filecoin.png")}  />
            </a>
            <a href="https://tezos.com" target="blank">
              <img alt="sponsors" className="w-32 sm:w-36 h-auto inline" src={require("../../assets/Sponsors/tezos.svg").default}  />
            </a>
            <a href="https://celo.org" target="blank">
              <img alt="sponsors" className="w-32 sm:w-36 h-auto inline" src={require("../../assets/Sponsors/celo.png")}/>
            </a>
            <a href="https://www.axure.com/" target="blank">
              <img alt="sponsors" className="w-32 sm:w-36 h-auto inline" src={require("../../assets/Sponsors/axure.png")} />
            </a>
          </div>
        </div>
        <div className="sponsors-beta">
          <h2 className="beta-title">Premium Sponsors</h2>
          <div className="beta-images flex items-center justify-center gap-2 p-1">
            <a href="#!" target="black">
              <img alt="sponsors" className="w-32 sm:w-36 h-auto inline" src={require("../../assets/Sponsors/solanaLogo.png")} />
            </a>
            <a href="#!" target="blank">
              <img alt="sponsors" className="w-32 sm:w-36 h-auto inline" src={require("../../assets/Sponsors/airmeet.png")}  />
            </a>
            <a href="#!" target="blank">
              <img alt="sponsors" className="w-32 sm:w-36 h-auto inline" src={require("../../assets/Sponsors/sashido.png")} />
            </a>
            
          </div>
        </div>
        </div>
        {/* <div class="sponsors-gold">
          <h2 class="gold-title">Bronze Sponsors</h2>
          <div class="gold-images">
            <a href="https://www.interviewcake.com/" target="black">
              <img alt="sponsors"
                src="assets/Sponsors/present/cake_logo_white.svg"
                style="width: fit-content"
              />
            </a>
            </a>
          </div>
        </div> */}
      </section>



    </>
  )
}

export default Sponsors