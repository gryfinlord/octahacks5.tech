import React from "react";

function Prizes() {
	return (
		<div
			id="prizes"
			className="bg-[url(https://github.com/YAKSHIT-22/Cyber_Threat_Analysis_Website/blob/main/ezgif.com-gif-maker.gif?raw=true)] bg-no-repeat bg-cover bg-center  w-full"
		>
			<div className="backdrop-blur-md flex items-center justify-center flex-col">
		
					
						<div className="w-full  h-full flex flex-col justify-center items-center text-white bg-transparent cursor-pointer space-y-4 p-6 text-center">
				<h1 className="mt-8 text-4xl lg:text-5xl xl:text-6xl font-semibold text-transparent bg-gradient-to-r from-[#6c6aff] via-[#fbc7d4] to-[#ff658b] inline-block bg-clip-text text-center">
				Prizes
				</h1>
				<p className="text-[1.2rem] lg:text-[1.3rem] xl:text-[1.5rem] md:w-3/4 p-4 text-center font-regular">
				Just to incentivise your hard work and effort over those 36 hours
							we have prizes, cash rewards and more lined up for the top
							performers by our generous sponsors. Swags and goodies are for
							everyone but for the ones with the most creative and innovative
							projects we have more lined up!!
				</p>
			</div>
					
			 
			 <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full p-8 sm:p-12 md:p-16 gap-7 xs:h-[100vh]">
					<div className="w-full h-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 rounded-[4px]">
						<h2 className="text-xl md:text-2xl font-semibold p-[2%] text-center">Winner</h2>
						<h1 className="text-[1.8rem] font-semibold text-center">₹ 15,000*</h1>
						<p className="text-[.6rem] lg:text-[.8rem] text-center">
							+ Goodies worth upto
						</p>
						<p>₹ 1 Lakh</p>
					</div>
					<div className="w-full h-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px]">
						<h2 className="text-xl md:text-2xl font-semibold p-[2%] text-center">
							1st Runner Up
						</h2>
						<h1 className="text-[1.8rem] font-semibold text-center">₹ 10,000*</h1>
						<p className="text-[.6rem] lg:text-[.8rem] text-center">
							+ Goodies worth upto
						</p>
						<p>₹ 75 Thousand</p>
					</div>
					<div className="w-full h-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px]">
						<h2 className="text-xl md:text-2xl font-semibold p-[2%] text-center">2nd Runner Up</h2>
						<h1 className="text-[1.8rem] font-semibold text-center">₹ 5,000*</h1>
						<p className="text-[.6rem] lg:text-[.8rem] text-center">
							+ Goodies worth upto
						</p>
						<p>₹ 30 Thousand</p>
					</div>
					<div className="w-full h-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px] space-y-4">
						<h2 className="h-auto w-[60%] md:w-[45%] flex flex-col gap-1 justify-center items-center p-[1%]">
							<img alt="imageSponsors" src={require("../assets/Sponsors/tezos.svg").default} />
						</h2>
						<p className="text-[.7rem]  md:text-[.6rem] lg:text-[.8rem] text-center font-regular">
							₹ 20,000* for best Dapp built on Tezos.
						</p>
						<p className="text-[.7rem]  md:text-[.6rem]  lg:text-[.8rem] text-center font-regular">
							+ Continuity grant opportunity up to 5,000 USD for an outstanding
							project.
						</p>
					</div>
					<div className="h-full w-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px] space-y-4">
						<h2 className="h-auto w-[60%] md:w-[50%] flex flex-col gap-1 justify-center items-center p-[1%]">
							<img alt="imageSponsors" src={require("../assets/Sponsors/polygon.svg").default} />
						</h2>
						<p className="text-[.7rem]  md:text-[.6rem]  lg:text-[.8rem] text-center font-regular">
							₹ 20,000* for best Dapp built on Tezos.
						</p>
						<p className="text-[.7rem]  md:text-[.6rem]  lg:text-[.8rem] text-center font-regular">
							+ Continuity grant opportunity up to 5,000 USD for an outstanding
							project.
						</p>
					</div>
					<div className="h-full w-full flex flex-col justify-center items-center text-white bg-gray-800 p-2 cursor-pointer rounded-[4px] space-y-2">
						<h2 className="h-auto w-[60%] md:w-[50%] flex flex-col gap-1 justify-center items-center p-[1%]">
							<img alt="imageSponsors" src={require("../assets/Sponsors/celo.png")} />
						</h2>
						<p className="text-[.7rem]  md:text-[.6rem] lg:text-[.8rem] text-center font-regular">
							₹ 20,000* for best Dapp built on Tezos.
						</p>
						<p className="text-[.7rem] md:text-[.6rem] lg:text-[.8rem] text-center font-regular">
							+ Continuity grant opportunity up to 5,000 USD for an outstanding
							project.
						</p>
					</div>
				</div>
			
		    </div>
		</div>
	);
}
export default Prizes;
