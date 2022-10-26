import React from 'react'
import './style.css';
function Sponsors() {
  return (
    <>
    <div className='snap-start'>
 <section className="sponsors" id="sponsors">
        <h1 className="sponsor-title">
          Our <span className="awesome">Awesome</span> Sponsors
        </h1>
        <p className="sponsors_description">
          While all our participants make our event lively. It is our very
          amazing <span className="about_high">sponsors</span> that
          <span className="about_high">make it possible.</span>
        </p>
        <div className="sponsors-alpha">
          <h2 className="alpha-title">Platinum Sponsors</h2>
          <div className="alpha-images">
            <a href="https://devfolio.co" target="blank">
              <img src="../assets/Sponsors/present/devfolio.svg" style={{width: '230px'}} />
            </a>
            <a href="https://polygon.technology/" target="blank">
              <img src="assets/Sponsors/present/polygon.svg" style={{width: '230px'}} />
            </a>
          </div>
        </div>
        <div className="sponsors-gold">
          <h2 className="gold-title">Gold Sponsors</h2>
          <div className="gold-images">
            <a href="https://filecoin.io" target="blank">
              <img src="assets/Sponsors/present/filecoin.svg" style={{width: '190px'}} />
            </a>
            <a href="https://tezos.com" target="blank">
              <img src="assets/Sponsors/present/tezos.svg" alt="" style={{width: '190px'}} />
            </a>
            <a href="https://celo.org" target="blank">
              <img src="assets/Sponsors/present/celo.png" style={{width: '150px', height: 'auto', marginTop: '10px'}} />
            </a>
            <a href="https://www.axure.com/" target="blank">
              <img src="assets/Sponsors/present/axure.png" style={{width: '150px', height: 'auto'}} />
            </a>
          </div>
        </div>
        <div className="sponsors-beta">
          <h2 className="beta-title">Premium Sponsors</h2>
          <div className="beta-images">
            <a href="https://www.interviewcake.com/" target="black">
              <img src="assets/Sponsors/present/cake_logo_white.svg" style={{width: 'fit-content'}} />
            </a>
            <a href="https://taskade.com/" target="blank">
              <img src="assets/Sponsors/present/taskade-circle-icon.png" style={{width: '60px', height: 'auto', marginTop: '0px'}} />
            </a>
            <a href="www.wolfram.com/" target="blank">
              <img src="assets/Sponsors/present/wolfram.svg" alt="" style={{width: '130px', height: 'auto', marginTop: '10px'}} />
            </a>
            <a href target="blank">
              <img src="assets/Sponsors/present/clerky.png" alt="" style={{width: '150px', height: 'auto', marginTop: '-5px'}} />
            </a>
            <a href="https://1password.com/tour/" target="blank">
              <img src="assets/Sponsors/present/1pass.svg" alt="" style={{width: '70px', height: 'auto', marginTop: '0px'}} />
            </a>
          </div>
        </div>
        {/* <div class="sponsors-gold">
          <h2 class="gold-title">Bronze Sponsors</h2>
          <div class="gold-images">
            <a href="https://www.interviewcake.com/" target="black">
              <img
                src="assets/Sponsors/present/cake_logo_white.svg"
                style="width: fit-content"
              />
            </a>
            </a>
          </div>
        </div> */}
        <div className="wrap">
          <div className="sponsors-gamma">
            <h2 className="gamma-title">Gamma Sponsors</h2>
            <div className="gamma-images">
              {/* <img src="assets/Sponsors/upgrad.svg" /> */}
              <a href="https://www.towais.com/" target="blank">
                <img src="assets/Sponsors/present/towais.png" alt="" style={{width: '160px', height: 'auto'}} />
              </a>
              <a href="http://rosenfeldmedia.com/" target="blank">
                <img src="assets/Sponsors/present/RM-Logo_logotype.png" alt="" style={{width: '160px', height: 'auto'}} />
              </a>
              <a href>
                <img src="assets/Sponsors/jetbrains.png" alt="" style={{width: '80px', height: 'auto'}} />
              </a>
              <a href="https://www.bubble.io/" target="blank">
                <img src="assets/Sponsors/present/Bubble logo.svg" style={{width: '110px', height: 'auto'}} />
              </a>
            </div>
          </div>
          <div className="sponsors-delta">
            <h2 className="delta-title">Delta Sponsors</h2>
            <div className="delta-images">
              <a href="https://www.linode.com/" target="blank">
                <img src="assets/Sponsors/past/Linode-Logo-Black.svg" style={{width: '110px', height: 'auto'}} />
              </a>
              <a href="https://www.sketch.com/try/" target="blank">
                <img src="assets/Sponsors/present/Sketch-Logo-Dark.png" style={{width: '150px', height: 'auto', marginTop: '8px'}} />
              </a>
              <a href="https://balsamiq.cloud/">
                <img src="assets/Sponsors/past/balsamiq.svg" style={{width: '150px', height: 'auto', marginTop: '17px'}} />
              </a>
              <a href="https://www.stickeryou.com/" target="blank">
                <img src="assets/Sponsors/present/sylogo.webp" style={{width: '110px', height: 'auto'}} />
              </a>
            </div>
          </div>
        </div>
        <div className="wrap">
          <div className="authentication">
            <h2 className="authentication-title">Branding Partner</h2>
            <a href="https://streamyard.com/" target="blank">
              <img src="assets/Sponsors/past/streamyard.svg" style={{width: '200px', height: 'auto'}} className="partner" />
            </a>
            <br />
            <a href="https://givemycertificate.com/" target="blank">
              <img src="assets/Sponsors/present/GMC LogoS.png" style={{padding: '0 10px', width: '80px', height: 'auto'}} className="partner" />
            </a>
          </div>
          <div className="community">
            <h2 className="community-title">Community Partners</h2>
            {/* <img src="assets/Sponsors/fold-logo.svg" class="partner" /> */}
            <img src="assets/Sponsors/community/ieicuiet_logo.png" className="partner" />
            <img src="assets/Sponsors/community/GDSC Logo chapter amity-mumbai.svg" className="partner" style={{width: '200px'}} />
            <img src="assets/Sponsors/community/GDSC Logo chapter srcasw.svg" className="partner" style={{width: '200px'}} />
            <img src="assets/Sponsors/community/GDSC Logo chapter AITAR.svg" className="partner" style={{width: '200px'}} />
          </div>
        </div>
      </section>


      {/* past sponsor---------------------------------------------------------------------------------- */}

      <section className="sponsors" id="sponsors">
        <h1 className="sponsor-title">
          Our <span className="awesome">Past</span> Sponsors
        </h1>
        <p className="sponsors_description">
          The <span className="about_high">sponsors</span> who
          <span className="about_high">made it possible</span> last year.
        </p>
        <div className="sponsors-alpha">
          <h2 className="alpha-title">Alpha Sponsors</h2>
          <div className="alpha-images">
            <img src="assets/Sponsors/past/techlogo.svg" />
            <img src="assets/Sponsors/past/airmeet.svg" className="airmeet" />
            <img src="assets/Sponsors/past/devfolio.svg" />
          </div>
        </div>
        <div className="sponsors-beta">
          <h2 className="beta-title">Beta Sponsors</h2>
          <div className="beta-images">
            <img src="assets/Sponsors/past/streamyard.svg" />
            <img src="assets/Sponsors/past/balsamiq.svg" />
            <img src="assets/Sponsors/past/bugsee.svg" />
            <a href="https://taskade.com/signup" target="blank">
              <img src="assets/Sponsors/present/taskade-circle-icon.png" style={{width: '50px'}} />
            </a>
          </div>
        </div>
        {/* <div class="sponsors-gold">
          <h2 class="gold-title">Gold Sponsors</h2>
          <div class="gold-images">
            <a href="https://www.interviewcake.com/" target="black">
              <img
                src="assets/Sponsors/past/present/cake_logo_white.svg"
                style="width: fit-content"
              />
            </a>
            <img src="assets/Sponsors/past/balsamiq.svg" />
            <img src="assets/Sponsors/past/devfolio.svg" />
            <img src="assets/Sponsors/past/bugsee.svg" />
            <a href="https://taskade.com/signup" target="blank">
              <img
                src="assets/Sponsors/past/taskade-circle-icon.png"
                style="width: fit-content"
              />
            </a>
          </div>
        </div> */}
        <div className="wrap">
          <div className="sponsors-gamma">
            <h2 className="gamma-title">Gamma Sponsors</h2>
            <div className="gamma-images">
              <img src="assets/Sponsors/past/codingNinjas.svg" />
              {/* <img src="assets/Sponsors/past/devfolio.svg" /> */}
              <img src="assets/Sponsors/past/Linode-Logo-Black.svg" />
              <img src="assets/Sponsors/past/gatsby.svg" />
            </div>
          </div>
          <div className="sponsors-delta">
            <h2 className="delta-title">Delta Sponsors</h2>
            <div className="delta-images">
              <img src="assets/Sponsors/past/todoist.svg" />
              <img src="assets/Sponsors/past/topcoder.svg" />
              <img src="assets/Sponsors/past/portis.svg" />
            </div>
          </div>
        </div>
        <div className="wrap">
          <div className="authentication">
            <h2 className="authentication-title">Authentication Partner</h2>
            <img src="assets/Sponsors/past/fold-logo.svg" className="partner" />
          </div>
          <div className="community">
            <h2 className="community-title">Community Partner</h2>
            <img src="assets/Sponsors/past/hyperDart.svg" className="partner" />
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Sponsors