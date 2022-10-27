import React from "react";
import "./style.css";
function Sponsors() {
	return (
		<>
			<div className="snap-start">
				<section
					className="sponsors sm:h-[100vh] flex flex-col items-center justify-center"
					id="sponsors"
				>
					<h1 className="sponsor-title text-5xl lg:text-6xl xl:text-7xl text-center">
						Our <span className="awesome">Awesome</span> Sponsors
					</h1>
					<p className="sponsors_description">
						While all our participants make our event lively. It is our very
						amazing <span className="about_high">sponsors</span> that
						<span className="about_high">make it possible.</span>
					</p>
					<div className="sponsors-alpha">
						<h2 className="alpha-title">Platinum Sponsors</h2>
						<div className="alpha-images flex items-center justify-center">
							<a href="https://devfolio.co" target="blank">
								<img
									src={require("../../assets/Sponsors/devfolio.svg").default}
									style={{ width: "230px" }}
								/>
							</a>
							<a href="https://polygon.technology/" target="blank">
								<img
									src={require("../../assets/Sponsors/polygon.svg").default}
									style={{ width: "230px" }}
								/>
							</a>
						</div>
					</div>
					<div className="sponsors-gold">
						<h2 className="gold-title">Gold Sponsors</h2>
						<div className="gold-images flex items-center justify-center">
							<a href="https://filecoin.io" target="blank">
								<img
									src={require("../../assets/Sponsors/Filecoin.png")}
									style={{ width: "190px", height: "80px" }}
								/>
							</a>
							<a href="https://tezos.com" target="blank">
								<img
									src={require("../../assets/Sponsors/tezos.svg").default}
									alt=""
									style={{ width: "190px" }}
								/>
							</a>
							<a href="https://celo.org" target="blank">
								<img
									src={require("../../assets/Sponsors/celo.png")}
									style={{ width: "150px", height: "auto", marginTop: "10px" }}
								/>
							</a>
							<a href="https://www.axure.com/" target="blank">
								<img
									src={require("../../assets/Sponsors/axure.png")}
									style={{ width: "150px", height: "auto" }}
								/>
							</a>
						</div>
					</div>
					<div className="sponsors-beta">
						<h2 className="beta-title">Premium Sponsors</h2>
						<div className="beta-images flex items-center justify-center">
							<a href="#" target="black">
								<img
									src={require("../../assets/Sponsors/solanaLogo.png")}
									style={{ width: "fit-content" }}
								/>
							</a>
							<a href="#" target="blank">
								<img
									src={require("../../assets/Sponsors/airmeet.png")}
									alt=""
									style={{ width: "130px", height: "auto", marginTop: "10px" }}
								/>
							</a>
							<a href="#" target="blank">
								<img
									src={require("../../assets/Sponsors/sashido.png")}
									alt=""
									style={{ width: "150px", height: "auto", marginTop: "-5px" }}
								/>
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
				</section>
			</div>
		</>
	);
}

export default Sponsors;
